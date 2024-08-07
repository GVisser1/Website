import Header from "@/components/header";
import ThemeSwitcher from "@/components/themeSwitcher";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Settings",
  description: "Personalize your experience by adjusting the settings to your liking",
};

const SettingsPage = (): JSX.Element => (
  <>
    <Header title="Settings" description="Personalize your experience by adjusting the settings to your liking" />

    <section className="grid items-start gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <h2 className="mb-1 font-semibold text-zinc-700 dark:text-white">Theme</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">This will change the appearance of the site</p>
      </div>
      <ThemeSwitcher />
    </section>
  </>
);

export default SettingsPage;
