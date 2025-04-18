import type { Metadata } from "next/types";
import type { JSX } from "react";
import Header from "../../components/header";
import ThemeSwitcher from "../../components/select/themeSwitcher";
import Divider from "../../components/divider";
import FontSwitcher from "../../components/select/fontSwitcher";

export const metadata: Metadata = {
  title: "Settings",
  description: "Personalize your experience by adjusting the settings to your liking",
};

const SettingsPage = (): JSX.Element => (
  <>
    <Header title="Settings" description="Personalize your experience by adjusting the settings to your liking" />

    <section className="grid items-start gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <h2 className="mb-1 font-semibold text-zinc-700 dark:text-zinc-200">Theme</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">This will change the appearance of the site</p>
      </div>
      <ThemeSwitcher />
    </section>

    <Divider className="my-10" soft />

    <section className="grid items-start gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <h2 className="mb-1 font-semibold text-zinc-700 dark:text-zinc-200">Font Family</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">This will change the font across the site</p>
      </div>
      <FontSwitcher />
    </section>
  </>
);

export default SettingsPage;
