import { createFileRoute } from "@tanstack/react-router";
import Divider from "@/components/divider";
import Header from "@/components/header";
import Page from "@/components/page";
import FontSwitcher from "@/components/select/fontSwitcher";
import ThemeSwitcher from "@/components/select/themeSwitcher";
import { MAIN_PAGES } from "@/constants";

const PAGE = MAIN_PAGES.settings;

const SettingsPage = () => (
  <Page>
    <Header title={PAGE.name} description={PAGE.description} />

    <section className="grid phone-ls:grid-cols-2 items-start gap-x-8 gap-y-6">
      <div>
        <h2 className="mb-1 text-header-base text-primary dark:text-primary-dark">Theme</h2>
        <p className="text-secondary text-sm-regular dark:text-secondary-dark">
          This will change the appearance of the site
        </p>
      </div>
      <ThemeSwitcher />
    </section>

    <Divider className="my-10" soft />

    <section className="grid phone-ls:grid-cols-2 items-start gap-x-8 gap-y-6">
      <div>
        <h2 className="mb-1 text-header-base text-primary dark:text-primary-dark">Font Family</h2>
        <p className="text-secondary text-sm-regular dark:text-secondary-dark">
          This will change the font across the site
        </p>
      </div>
      <FontSwitcher />
    </section>
  </Page>
);

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
  head: () => ({
    meta: [{ title: PAGE.meta.title }, { name: "description", content: PAGE.meta.description }],
  }),
});
