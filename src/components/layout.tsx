"use client";

import type { PropsWithChildren } from "react";
import { useState } from "react";
import { Navbar, NavbarItem } from "@/components/navBar";
import { Sidebar } from "@/components/sidebar";
import { CloseButton, Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import Icon from "./icon";

const MobileSidebar = ({
  open,
  close,
  children,
}: PropsWithChildren<{ open: boolean; close: () => void }>): JSX.Element => (
  <Transition show={open}>
    <Dialog onClose={close} aria-label="Navigation" className="lg:hidden">
      <TransitionChild
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/30" />
      </TransitionChild>
      <TransitionChild
        enter="ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <DialogPanel className="fixed inset-y-0 w-full max-w-80 p-2 transition">
          <div className="flex h-full flex-col rounded-lg bg-white shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
            <div className="-mb-3 px-4 pt-3">
              <CloseButton as={NavbarItem} aria-label="Close navigation">
                <Icon name="CloseMenuIcon" />
              </CloseButton>
            </div>
            {children}
          </div>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </Transition>
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
            <Icon name="OpenMenuIcon" />
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
