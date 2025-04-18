"use client";

import React, { useEffect, useRef, useState, type ChangeEvent, type KeyboardEvent, type JSX } from "react";
import Icon from "../icon";
import clsx from "clsx";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import Option from "./option";
import OptionGroup from "./optionGroup";
import { EmptyState } from "./emptyState";
import ds from "./dataSource.json";
import SearchInput from "../search";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select/select";
import { upperFirst } from "lodash-es";
import { IconButton } from "../button";
import { normalizeString } from "../../utils/textUtil";
import type { IconType } from "../../utils/iconUtil";
import { OptionIcon } from "../../utils/iconUtil";

const dataSource = ds as DataSource;
const FILTERS = ["fields", "groups", "users", "variables"] as const;
type Filter = (typeof FILTERS)[number];

type DataSourceItem = { label: string; pill?: string; type: IconType };
type DataSource = {
  fields: DataSourceItem[];
  groups: DataSourceItem[];
  subforms: { title: string; fields: DataSourceItem[] }[];
  users: DataSourceItem[];
  variables: DataSourceItem[];
};

const PlaceholderMenu = (): JSX.Element => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof dataSource>({
    fields: dataSource.fields,
    groups: dataSource.groups,
    subforms: dataSource.subforms,
    users: [],
    variables: [],
  });
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [selectedOption, setSelectedOption] = useState<DataSourceItem | null>(null);
  const [filter, setFilter] = useState<Filter>("fields");
  const [openPopover, setOpenPopover] = useState(false);

  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (selectedIndex >= 0 && optionRefs.current[selectedIndex]) {
      optionRefs.current[selectedIndex]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedIndex]);

  const filterResults = (query: string, newFilter = filter): void => {
    const normalizedQuery = normalizeString(query);

    if (newFilter === "fields") {
      const filteredFields = dataSource.fields.filter((field) =>
        normalizeString(field.label).includes(normalizedQuery),
      );

      const filteredSubforms = dataSource.subforms
        .map((subform) => ({
          ...subform,
          fields: subform.fields.filter((field) => normalizeString(field.label).includes(normalizedQuery)),
        }))
        .filter((subform) => subform.fields.length > 0);

      setSearchResults({ fields: filteredFields, groups: [], subforms: filteredSubforms, users: [], variables: [] });
    } else if (newFilter === "users") {
      const filteredUsers = dataSource.users.filter((user) => normalizeString(user.label).includes(normalizedQuery));
      setSearchResults({ fields: [], groups: [], subforms: [], users: filteredUsers, variables: [] });
    } else if (newFilter === "variables") {
      const filteredVariables = dataSource.variables.filter((variable) =>
        normalizeString(variable.label).includes(normalizedQuery),
      );
      setSearchResults({ fields: [], groups: [], subforms: [], users: [], variables: filteredVariables });
    } else if (newFilter === "groups") {
      const filteredGroups = dataSource.groups.filter((group) =>
        normalizeString(group.label).includes(normalizedQuery),
      );
      setSearchResults({ fields: [], groups: filteredGroups, subforms: [], users: [], variables: [] });
    }
  };

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setQuery(value);
    filterResults(value);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    const totalOptions = getTotalOptions(filter, searchResults);

    if (totalOptions === 0) {
      return;
    }

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      setSelectedIndex((prev) => (prev === totalOptions - 1 ? 0 : prev + 1));
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      setSelectedIndex((prev) => (prev === 0 ? totalOptions - 1 : prev - 1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      const selected =
        filter === "fields"
          ? [...searchResults.fields, ...searchResults.subforms.flatMap((sf) => sf.fields)][selectedIndex]
          : filter === "users"
            ? searchResults.users[selectedIndex]
            : filter === "variables"
              ? searchResults.variables[selectedIndex]
              : searchResults.groups[selectedIndex];

      if (selected) {
        setSelectedOption(selected);
        setOpenPopover(false);
      }
    }
  };

  const handleFilterChange = (value: "fields" | "users"): void => {
    setFilter(value);
    setSelectedIndex(-1);
    filterResults(query, value);
  };

  const fieldOptions = (): JSX.Element[] =>
    searchResults.fields.map((field, index) => (
      <Option
        key={`field-${index}`}
        ref={(el) => {
          optionRefs.current[index] = el;
        }}
        selected={selectedIndex === index}
        type={field.type}
        label={field.label}
        pill={field.pill}
        onClick={() => {
          setSelectedOption(field);
          setOpenPopover(false);
        }}
      />
    ));

  const groupOptions = (): JSX.Element[] =>
    searchResults.groups.map((group, index) => (
      <Option
        key={`group-${index}`}
        ref={(el) => {
          optionRefs.current[index] = el;
        }}
        selected={selectedIndex === index}
        type={group.type}
        label={group.label}
        pill={group.pill}
        onClick={() => {
          setSelectedOption(group);
          setOpenPopover(false);
        }}
      />
    ));

  const subformOptions = (): JSX.Element[] =>
    searchResults.subforms.map((subform, subformIndex) => {
      const subformBaseIndex =
        searchResults.fields.length +
        searchResults.subforms.slice(0, subformIndex).reduce((acc, sub) => acc + sub.fields.length, 0);

      return (
        <OptionGroup key={subform.title} title={subform.title}>
          {subform.fields.map((field, fieldIndex) => {
            const currentIndex = subformBaseIndex + fieldIndex;
            return (
              <Option
                key={`subform-${subform.title}-${fieldIndex}`}
                ref={(el) => {
                  optionRefs.current[currentIndex] = el;
                }}
                type={field.type}
                selected={selectedIndex === currentIndex}
                label={field.label}
                pill={field.pill}
                onClick={() => {
                  setSelectedOption(field);
                  setOpenPopover(false);
                }}
              />
            );
          })}
        </OptionGroup>
      );
    });

  const userOptions = (): JSX.Element[] =>
    searchResults.users.map((user, index) => (
      <Option
        key={`user-${index}`}
        ref={(el) => {
          optionRefs.current[index] = el;
        }}
        type={user.type}
        selected={selectedIndex === index}
        label={user.label}
        pill={user.pill}
        onClick={() => {
          setSelectedOption(user);
          setOpenPopover(false);
        }}
      />
    ));

  const variableOptions = (): JSX.Element[] =>
    searchResults.variables.map((variable, index) => (
      <Option
        key={`variable-${index}`}
        ref={(el) => {
          optionRefs.current[index] = el;
        }}
        type={variable.type}
        selected={selectedIndex === index}
        label={variable.label}
        onClick={() => {
          setSelectedOption(variable);
          setOpenPopover(false);
        }}
      />
    ));

  const showEmptyState = getTotalOptions(filter, searchResults) === 0;

  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <div className="relative w-80">
        <PopoverTrigger className="w-full rounded-sm focus-visible:outline">
          <div className="flex h-10 w-full items-center justify-between rounded-sm border border-zinc-200 dark:border-zinc-700">
            <div className="flex min-w-0 items-center gap-x-1 pl-2">
              {selectedOption && <OptionIcon type={selectedOption.type} />}
              <p
                className={clsx(
                  selectedOption
                    ? "truncate pr-10 font-medium text-zinc-700 dark:text-zinc-200"
                    : "text-zinc-500 dark:text-zinc-400",
                )}
              >
                {selectedOption?.label ?? "Select a placeholder"}
              </p>
            </div>
            {!selectedOption && (
              <div className="p-2.5">
                <Icon name="ChevronDown" className="size-4 text-zinc-500 dark:text-zinc-400" />
              </div>
            )}
          </div>
        </PopoverTrigger>
        {selectedOption && (
          <IconButton
            variant="default"
            aria-label="Clear selected option"
            tooltip={{ title: "Clear selected option" }}
            icon="X"
            className="absolute top-[2px] right-[3px]"
            onClick={(e) => {
              e.preventDefault();
              setSelectedOption(null);
            }}
          />
        )}
      </div>
      <PopoverContent
        aria-label="Select a placeholder"
        align="start"
        className="z-10 mt-1 flex flex-col bg-white shadow-lg dark:bg-zinc-900"
      >
        <div className="relative w-[480px] overflow-hidden rounded-sm border border-zinc-200 pb-1 dark:border-zinc-700">
          <div className="grid grid-cols-3 gap-x-2 px-3 pt-3 pb-2">
            <SearchInput
              aria-controls="listbox"
              aria-expanded="true"
              role="combobox"
              placeholder="Search"
              className="col-span-2"
              onChange={handleQueryChange}
              onKeyDown={handleKeyDown}
              value={query}
            />
            <Select value={filter} onValueChange={handleFilterChange}>
              <SelectTrigger aria-label="Select filter" className="w-40">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent className="z-20">
                {FILTERS.map((value) => (
                  <SelectItem key={value} value={value}>
                    {upperFirst(value)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div id="listbox" role="listbox" className="h-[360px] overflow-y-auto px-1">
            {showEmptyState && (
              <EmptyState
                title="Empty state title"
                description="This is placeholder text for an empty state and this content is variable"
              />
            )}
            {filter === "fields" && (
              <>
                {fieldOptions()}
                {subformOptions()}
              </>
            )}
            {filter === "groups" && groupOptions()}
            {filter === "users" && userOptions()}
            {filter === "variables" && variableOptions()}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PlaceholderMenu;

const getTotalOptions = (filter: Filter, data: typeof dataSource): number => {
  switch (filter) {
    case "fields":
      return data.fields.length + data.subforms.reduce((acc, subform) => acc + subform.fields.length, 0);
    case "groups":
      return data.groups.length;
    case "users":
      return data.users.length;
    case "variables":
      return data.variables.length;
    default:
      return 0;
  }
};
