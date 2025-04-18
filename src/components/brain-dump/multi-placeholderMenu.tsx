"use client";

import { useEffect, useMemo, useRef, useState, useCallback, type JSX } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import Icon from "../icon";
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import Option from "./option";
import OptionGroup from "./optionGroup";
import { EmptyState } from "./emptyState";
import { isEmpty, noop, uniqueId, upperFirst } from "lodash-es";
import ds from "./dataSource.json";
import PillButton from "./optionPill";
import Pill from "../pill";
import SearchInput from "../search";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select/select";
import { IconButton } from "../button";
import type { IconType } from "../../utils/iconUtil";
import { normalizeString } from "../../utils/textUtil";

const dataSource = ds as DataSource;
const FILTERS = ["fields", "groups", "users", "variables"] as const;
type Filter = (typeof FILTERS)[number];

type DataSourceItem = { id: string; label: string; pill?: string; type: IconType };
type DataSource = {
  fields: DataSourceItem[];
  groups: DataSourceItem[];
  subforms: { title: string; fields: DataSourceItem[] }[];
  users: DataSourceItem[];
  variables: DataSourceItem[];
};

const MultiPlaceholderMenu = (): JSX.Element => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [selectedOptions, setSelectedOptions] = useState<DataSourceItem[]>([]);
  const [filter, setFilter] = useState<Filter>("fields");

  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const selectedOption = optionRefs.current[selectedIndex];
    selectedOption?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [selectedIndex]);

  const filteredResults = useMemo(() => {
    const normalizedQuery = normalizeString(query);

    const filterItems = (items: DataSourceItem[]): DataSourceItem[] =>
      items.filter((item) => normalizeString(item.label).includes(normalizedQuery));

    const filteredSubforms = dataSource.subforms
      .filter((subform) => subform.fields.some((field) => normalizeString(field.label).includes(normalizedQuery)))
      .map((subform) => ({
        ...subform,
        fields: filterItems(subform.fields),
      }));

    const filteredResults: Partial<DataSource> = {
      fields: filterItems(dataSource.fields),
      subforms: filteredSubforms,
      groups: filterItems(dataSource.groups),
      users: filterItems(dataSource.users),
      variables: filterItems(dataSource.variables),
    };

    return filteredResults;
  }, [query]);

  const handleQueryChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
    setSelectedIndex(-1);
  }, []);

  const handleFilterChange = useCallback((value: Filter): void => {
    setFilter(value);
    setSelectedIndex(-1);
  }, []);

  const removeOption = useCallback(
    (option: DataSourceItem): void => setSelectedOptions(selectedOptions.filter((o) => o.id !== option.id)),
    [selectedOptions],
  );

  const handleOptionClick = useCallback(
    (option: DataSourceItem): void => {
      if (selectedOptions.includes(option)) {
        removeOption(option);
        return;
      }
      setSelectedOptions((prev) => [...prev, option]);
    },
    [selectedOptions, removeOption],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>): void => {
      const totalOptions = getTotalOptions(filter, filteredResults);

      if (totalOptions === 0) {
        return;
      }

      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
          setSelectedIndex((prev) => (prev + 1) % totalOptions);
          break;
        case "ArrowUp":
        case "ArrowLeft":
          setSelectedIndex((prev) => (prev - 1 + totalOptions) % totalOptions);
          break;
        case "Enter":
          if (selectedIndex >= 0) {
            const selected = getSelectedOption(filter, filteredResults, selectedIndex);
            if (selected) {
              handleOptionClick(selected);
            }
          }
          break;
      }
    },
    [filter, filteredResults, selectedIndex, handleOptionClick],
  );

  const handleCreateOption = useCallback((): void => {
    setSelectedOptions((prev) => [...prev, { id: uniqueId(), label: query, type: "custom" }]);
    setFilter("fields");
    setQuery("");
    inputRef.current?.focus();
  }, [query, setQuery, setSelectedOptions, inputRef]);

  const showEmptyState = getTotalOptions(filter, filteredResults) === 0;

  const renderOptions = useCallback(
    (items: DataSourceItem[] | undefined, title: string, baseIndex = 0): JSX.Element | null => {
      if (isEmpty(items)) {
        return null;
      }

      const options = items?.map((item, index) => (
        <Option
          key={item.id}
          ref={(el) => {
            optionRefs.current[baseIndex + index] = el;
          }}
          type={item.type}
          checked={selectedOptions.includes(item)}
          selected={selectedIndex === baseIndex + index}
          label={item.label}
          pill={item.pill}
          onClick={() => handleOptionClick(item)}
        />
      ));

      return (
        <OptionGroup key={uniqueId()} title={title}>
          {options}
        </OptionGroup>
      );
    },
    [selectedOptions, selectedIndex, handleOptionClick],
  );

  const renderFilteredOptions = useCallback(() => {
    const subformOptions = filteredResults.subforms?.map((subform, subformIndex) => {
      const subformBaseIndex =
        (filteredResults.fields?.length ?? 0) +
        (filteredResults.subforms?.slice(0, subformIndex).reduce((acc, sub) => acc + sub.fields.length, 0) ?? 0);

      return renderOptions(subform.fields, subform.title, subformBaseIndex);
    });

    const optionMap: Record<Filter, JSX.Element | null> = {
      fields: (
        <>
          {renderOptions(filteredResults.fields, "Fields")}
          {subformOptions}
        </>
      ),
      groups: renderOptions(filteredResults.groups, "Groups"),
      users: renderOptions(filteredResults.users, "Users"),
      variables: renderOptions(filteredResults.variables, "Variables"),
    };

    return optionMap[filter];
  }, [filter, filteredResults, renderOptions]);

  return (
    <Popover
      onOpenChange={() => {
        setSelectedIndex(-1);
        setFilter("fields");
        setQuery("");
      }}
    >
      <div className="w-80">
        <PopoverAnchor className="relative w-full rounded-sm">
          <div className="flex w-full grow items-center justify-between rounded-sm border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-900">
            <div className="flex max-h-80 w-full flex-wrap items-center gap-1 overflow-y-auto p-2 pr-10">
              {selectedOptions.map((option) => (
                <PillButton
                  key={option.id}
                  ariaLabel={`Remove ${option.label}`}
                  label={option.label}
                  iconType={option.type}
                  onClick={() => removeOption(option)}
                  className="z-1"
                />
              ))}
              <PopoverTrigger className="group my-auto flex h-6 min-w-0 grow items-center rounded-sm outline-hidden">
                <span
                  aria-hidden
                  className="w-full truncate py-2 text-left text-zinc-500 select-none dark:text-zinc-400"
                >
                  Add placeholders
                </span>
                <div className="absolute top-0 right-0 inline-flex justify-end">
                  <IconButton
                    aria-label="Select placeholders"
                    variant="default"
                    tooltip={{ title: "Select placeholders" }}
                    icon="Plus"
                    className="translate-x-[-3px] translate-y-[3px] group-focus-visible:outline"
                    onClick={noop}
                  />
                </div>
              </PopoverTrigger>
            </div>
          </div>
        </PopoverAnchor>
      </div>

      <PopoverContent
        aria-label="Select a placeholder"
        align="start"
        className="mt-1 flex flex-col bg-white shadow-lg dark:bg-zinc-900"
      >
        <div className="relative w-[480px] overflow-hidden rounded-sm border border-zinc-200 pb-1 dark:border-zinc-700">
          <div className="grid grid-cols-3 gap-x-2 px-3 pt-3 pb-2">
            <SearchInput
              ref={inputRef}
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

          <div className="flex h-[360px] flex-col justify-between">
            <div id="listbox" role="listbox" className="mx-1 overflow-y-auto">
              {showEmptyState && (
                <EmptyState
                  title={`No ${filter} found`}
                  description="Do you want to create a new option from your search query?"
                />
              )}
              {renderFilteredOptions()}
            </div>
            {query.length > 0 && <CreateOptionButton onClick={handleCreateOption} value={query} />}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MultiPlaceholderMenu;

const getTotalOptions = (filter: Filter, data: Partial<DataSource>): number => {
  const counts: Record<Filter, number> = {
    fields: (data.fields?.length ?? 0) + (data.subforms?.reduce((acc, subform) => acc + subform.fields.length, 0) ?? 0),
    groups: data.groups?.length ?? 0,
    users: data.users?.length ?? 0,
    variables: data.variables?.length ?? 0,
  };

  return counts[filter];
};

const getSelectedOption = (
  filter: Filter,
  filteredResults: Partial<DataSource>,
  selectedIndex: number,
): DataSourceItem | undefined => {
  const selectionMap: Record<Filter, DataSourceItem | undefined> = {
    fields: [...(filteredResults.fields ?? []), ...(filteredResults.subforms?.flatMap((sf) => sf.fields) ?? [])][
      selectedIndex
    ],
    users: filteredResults.users?.[selectedIndex],
    variables: filteredResults.variables?.[selectedIndex],
    groups: filteredResults.groups?.[selectedIndex],
  };
  return selectionMap[filter];
};

const CreateOptionButton = ({ onClick, value }: { onClick: () => void; value: string }): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    className="mx-1 mt-1 flex items-center justify-center gap-x-1 rounded-sm bg-zinc-50 px-3 py-1.5 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 active:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:active:bg-zinc-600"
  >
    <Icon name="Plus" />
    Create <Pill label={value} icon="Star" colour="gray" />
  </button>
);
