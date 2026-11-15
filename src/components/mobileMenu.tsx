import { type JSX, lazy, Suspense, useRef, useState } from "react";
import IconButton from "./button/iconButton";
import type PanelComponent from "./mobileMenuPanel";

type MobileMenuProps = {
  isActive: (href: string) => boolean;
};

// The panel pulls in the drawer, so it's only downloaded once someone actually reaches for the menu
const loadPanel = (): Promise<{ default: typeof PanelComponent }> => import("./mobileMenuPanel");
const MobileMenuPanel = lazy(loadPanel);

const MobileMenu = (props: MobileMenuProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [requested, setRequested] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        type="button"
        variant="tertiary"
        ariaLabel="Open menu"
        icon="OpenMenu"
        tooltip={{ title: "Menu", position: "bottom" }}
        htmlProps={{
          ref: triggerRef,
          "aria-haspopup": "dialog",
          "aria-expanded": open,
          onPointerEnter: () => void loadPanel(),
          onPointerDown: () => void loadPanel(),
          onFocus: () => void loadPanel(),
        }}
        onClick={() => {
          setRequested(true);
          setOpen(true);
        }}
      />
      {requested && (
        <Suspense fallback={null}>
          <MobileMenuPanel open={open} onOpenChange={setOpen} finalFocus={triggerRef} isActive={props.isActive} />
        </Suspense>
      )}
    </>
  );
};

export default MobileMenu;
