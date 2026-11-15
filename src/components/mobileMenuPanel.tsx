import { Link } from "@tanstack/react-router";
import { type JSX, type RefObject, useEffect, useState } from "react";
import { MAIL_TO, PAGES } from "@/constants";
import Icon from "./icon";
import SidePanel from "./sidePanel";
import ThemeSwitcher from "./themeSwitcher";

type MobileMenuPanelProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  finalFocus: RefObject<HTMLElement | null>;
  isActive: (href: string) => boolean;
};

const linkClasses =
  "flex h-11 items-center gap-x-3 rounded-sm border btn-tertiary border-transparent px-3 text-body font-semibold focus-visible:focus-ring";

const MobileMenuPanel = (props: MobileMenuPanelProps): JSX.Element => {
  // Mount closed and open on the next frame, so the drawer plays its enter transition (and can close normally)
  // even on the first open, when this component only mounts after the click
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return (): void => cancelAnimationFrame(frame);
  }, []);

  return (
    <SidePanel
      title="Menu"
      open={mounted && props.open}
      onOpenChange={props.onOpenChange}
      finalFocus={props.finalFocus}
    >
      <nav aria-label="Pages" className="flex flex-col gap-y-1">
        {PAGES.map((page) => (
          <Link
            key={page.href}
            to={page.href}
            className={linkClasses}
            data-active={props.isActive(page.href)}
            onClick={() => props.onOpenChange(false)}
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
        <h2 className="px-2 text-body font-semibold text-primary">Theme</h2>
        <ThemeSwitcher />
      </section>
    </SidePanel>
  );
};

export default MobileMenuPanel;
