import { Link } from "@tanstack/react-router";
import { type JSX, useState } from "react";
import { MAIL_TO, PAGES } from "@/constants";
import IconButton from "./button/iconButton";
import Icon from "./icon";
import SidePanel from "./sidePanel";
import ThemeSwitcher from "./themeSwitcher";

type MobileMenuProps = {
  isActive: (href: string) => boolean;
};

const linkClasses =
  "flex h-11 items-center gap-x-3 rounded-sm border btn-tertiary border-transparent px-3 text-base-semibold focus-visible:focus-ring";

const MobileMenu = (props: MobileMenuProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <SidePanel
      title="Menu"
      open={open}
      onOpenChange={setOpen}
      trigger={(triggerProps) => (
        <IconButton
          type="button"
          variant="tertiary"
          ariaLabel="Open menu"
          icon="OpenMenu"
          tooltip={{ title: "Menu", position: "bottom" }}
          htmlProps={triggerProps}
        />
      )}
    >
      <nav aria-label="Pages" className="flex flex-col gap-y-1">
        {PAGES.map((page) => (
          <Link
            key={page.href}
            to={page.href}
            className={linkClasses}
            data-active={props.isActive(page.href)}
            onClick={() => setOpen(false)}
          >
            <Icon name={page.icon} className="size-5" />
            {page.name}
          </Link>
        ))}
        <a href={MAIL_TO} className={linkClasses}>
          <Icon name="At" className="size-5" />
          Contact
        </a>
      </nav>

      <section className="mt-6 flex flex-col gap-y-2 border-t border-secondary px-1 pt-4">
        <h2 className="px-2 text-header-base text-primary">Theme</h2>
        <ThemeSwitcher />
      </section>
    </SidePanel>
  );
};

export default MobileMenu;
