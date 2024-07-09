"use client";

import * as Headless from "@headlessui/react";
import type { PropsWithChildren } from "react";
import { useState } from "react";
import { Navbar, NavbarItem } from "@/components/navBar";
import { Sidebar } from "@/components/sidebar";

const OpenMenuIcon = (): JSX.Element => (
  <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" />
  </svg>
);

const CloseMenuIcon = (): JSX.Element => (
  <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
  </svg>
);

const MobileSidebar = ({
  open,
  close,
  children,
}: PropsWithChildren<{ open: boolean; close: () => void }>): JSX.Element => (
  <Headless.Transition show={open}>
    <Headless.Dialog onClose={close} aria-label="Navigation" className="lg:hidden">
      <Headless.TransitionChild
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/30" />
      </Headless.TransitionChild>
      <Headless.TransitionChild
        enter="ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Headless.DialogPanel className="fixed inset-y-0 w-full max-w-80 p-2 transition">
          <div className="flex h-full flex-col rounded-lg bg-white shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
            <div className="-mb-3 px-4 pt-3">
              <Headless.CloseButton as={NavbarItem} aria-label="Close navigation">
                <CloseMenuIcon />
              </Headless.CloseButton>
            </div>
            {children}
          </div>
        </Headless.DialogPanel>
      </Headless.TransitionChild>
    </Headless.Dialog>
  </Headless.Transition>
);

export const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="relative isolate flex min-h-svh w-full bg-white dark:bg-zinc-900 max-lg:flex-col lg:bg-zinc-100 dark:lg:bg-zinc-950">
      <div className="fixed inset-y-0 left-0 w-64 max-lg:hidden">
        <Sidebar />
      </div>

      <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
        <Sidebar />
      </MobileSidebar>

      <header className="sticky top-0 z-10 flex items-center bg-white px-4 dark:bg-zinc-900 lg:hidden dark:lg:bg-zinc-950">
        <div className="py-2.5">
          <NavbarItem onClick={() => setShowSidebar(true)} aria-label="Open navigation">
            <OpenMenuIcon />
          </NavbarItem>
        </div>
        <div className="min-w-0 flex-1 ">
          <Navbar />
        </div>
      </header>

      <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pl-64 lg:pr-2 lg:pt-2">
        <div className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
          <div className="mx-auto h-full max-w-4xl">{children}</div>
        </div>
      </main>
    </div>
  );
};
