import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { ComponentProps, JSX } from "react";
import Dialog from "./dialog";
import FontSwitcher from "./select/fontSwitcher";
import ThemeSwitcher from "./select/themeSwitcher";

export const settingsDialogHandle = BaseDialog.createHandle<unknown>();

type SettingsDialogTriggerProps = {
  render: ComponentProps<typeof BaseDialog.Trigger>["render"];
};

export const SettingsDialogTrigger = (props: SettingsDialogTriggerProps): JSX.Element => (
  <BaseDialog.Trigger handle={settingsDialogHandle} render={props.render} />
);

const SettingsDialog = (): JSX.Element => (
  <Dialog title="Settings" handle={settingsDialogHandle} className="flex flex-col gap-y-6">
    <section className="flex flex-col gap-y-3">
      <div>
        <h2 className="mb-1 text-header-base text-primary">Theme</h2>
        <p className="text-sm-regular text-secondary">This will change the appearance of the site</p>
      </div>
      <ThemeSwitcher />
    </section>
    <section className="flex flex-col gap-y-3">
      <div>
        <h2 className="mb-1 text-header-base text-primary">Font Family</h2>
        <p className="text-sm-regular text-secondary">This will change the font across the site</p>
      </div>
      <FontSwitcher />
    </section>
  </Dialog>
);

export default SettingsDialog;
