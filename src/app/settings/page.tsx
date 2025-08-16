import type { Metadata } from "next/types";
import type { JSX } from "react";
import Header from "../../components/header";
import ThemeSwitcher from "../../components/select/themeSwitcher";
import Divider from "../../components/divider";
import FontSwitcher from "../../components/select/fontSwitcher";
import Page from "../../components/page";

export const metadata: Metadata = {
  title: "Settings",
  description: "Personalize your experience by adjusting the settings to your liking",
};

const SettingsPage = (): JSX.Element => (
  <Page>
    <Header title="Settings" description="Personalize your experience by adjusting the settings to your liking" />

    <section className="grid items-start gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <h2 className="text-header-base mb-1 text-primary dark:text-primary-dark">Theme</h2>
        <p className="text-sm-regular text-secondary dark:text-secondary-dark">
          This will change the appearance of the site
        </p>
      </div>
      <ThemeSwitcher />
    </section>

    <Divider className="my-10" soft />

    <section className="grid items-start gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <h2 className="text-header-base mb-1 text-primary dark:text-primary-dark">Font Family</h2>
        <p className="text-sm-regular text-secondary dark:text-secondary-dark">
          This will change the font across the site
        </p>
      </div>
      <FontSwitcher />
    </section>
  </Page>
);

export default SettingsPage;
