"use client";

import { CombinationGrid } from "../../../../utils/propCombinationUtil";
import { noop } from "lodash-es";
import type { JSX } from "react";
import Header from "../../../../components/header";
import { IconAndTextButton, IconButton, TextButton } from "../../../../components/button";
import Divider from "../../../../components/divider";

const variants = ["default", "ghost", "primary", "light"] as const;
const sizes = ["lg", "md"] as const;

const ButtonComponentPage = (): JSX.Element => (
  <>
    <Header
      title="Button"
      description="A complete overview of all button components with different sizes and variants."
      topLink={{ label: "Back to overview", href: "./" }}
    />

    <h2 className="mb-4 font-semibold text-zinc-700 dark:text-zinc-200">Icon and text</h2>
    <CombinationGrid
      Component={IconAndTextButton}
      columns="4"
      properties={[
        { name: "size", values: [...sizes] },
        { name: "disabled", values: [false, true] },
        { name: "variant", values: [...variants] },
      ]}
      defaultProps={{ icon: "Info", label: "Button content", onClick: noop }}
    />

    <Divider className="my-12" soft />

    <h2 className="mb-4 font-semibold text-zinc-700 dark:text-zinc-200">Text</h2>
    <CombinationGrid
      Component={TextButton}
      columns="4"
      properties={[
        { name: "size", values: [...sizes] },
        { name: "disabled", values: [false, true] },
        { name: "variant", values: [...variants] },
      ]}
      defaultProps={{ label: "Button content", onClick: noop }}
    />

    <Divider className="my-12" soft />

    <h2 className="mb-4 font-semibold text-zinc-700 dark:text-zinc-200">Icon</h2>
    <CombinationGrid
      Component={IconButton}
      columns="4"
      properties={[
        { name: "size", values: [...sizes] },
        { name: "disabled", values: [false, true] },
        { name: "variant", values: [...variants] },
      ]}
      defaultProps={{ icon: "Info", "aria-label": "Icon button", onClick: noop }}
    />
  </>
);

export default ButtonComponentPage;
