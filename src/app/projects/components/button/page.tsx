import { IconAndTextButton, IconButton, TextButton } from "@/components/button";
import Header from "@/components/header";
import { CombinationGrid } from "../../../../stories/propCombinationUtil";
import { Divider } from "@/components/divider";

const variants = ["default", "ghost", "primary"] as const;

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
      columns="3"
      properties={[
        { name: "disabled", values: [false, true] },
        { name: "variant", values: [...variants] },
      ]}
      defaultProps={{ icon: "Info", label: "Button content" }}
    />

    <Divider className="my-12" soft />

    <h2 className="mb-4 font-semibold text-zinc-700 dark:text-zinc-200">Text</h2>
    <CombinationGrid
      Component={TextButton}
      columns="3"
      properties={[
        { name: "disabled", values: [false, true] },
        { name: "variant", values: [...variants] },
      ]}
      defaultProps={{ label: "Button content" }}
    />

    <Divider className="my-12" soft />

    <h2 className="mb-4 font-semibold text-zinc-700 dark:text-zinc-200">Icon</h2>
    <CombinationGrid
      Component={IconButton}
      columns="3"
      properties={[
        { name: "disabled", values: [false, true] },
        { name: "variant", values: [...variants] },
      ]}
      defaultProps={{ icon: "Info", "aria-label": "Icon button", title: "Icon button" }}
    />
  </>
);

export default ButtonComponentPage;
