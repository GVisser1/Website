import Header from "@/components/header";
import Link from "next/link";

import type { JSX } from "react";

const Components = (): JSX.Element => (
  <>
    <Header
      title="Component Overview"
      description="Aliquip velit anim commodo esse cupidatat Lorem aute deserunt et qui officia culpa qui sit dolor."
    />

    <ul className="grid gap-3 xs:grid-cols-2 md:grid-cols-3">
      <li>
        <Link
          href="components/button"
          className="block h-72 w-full rounded-sm border border-zinc-200 p-2 dark:border-zinc-700"
        >
          <img alt="" src="https://placehold.co/600x400" className="h-52 w-full rounded-sm object-cover" />
          <h3 className="mt-2 font-medium text-zinc-700 dark:text-zinc-200">Button</h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Description</p>
        </Link>
      </li>
      <li>
        <a href="#" className="block h-72 w-full rounded-sm border border-zinc-200 p-2 dark:border-zinc-700">
          <img alt="" src="https://placehold.co/600x400" className="h-52 w-full rounded-sm object-cover" />
          <h3 className="mt-2 font-medium text-zinc-700 dark:text-zinc-200">Icon</h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Description</p>{" "}
        </a>
      </li>
      <li>
        <a href="#" className="block h-72 w-full rounded-sm border border-zinc-200 p-2 dark:border-zinc-700">
          <img alt="" src="https://placehold.co/600x400" className="h-52 w-full rounded-sm object-cover" />
          <h3 className="mt-2 font-medium text-zinc-700 dark:text-zinc-200">Link</h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Description</p>{" "}
        </a>
      </li>
      <li>
        <a href="#" className="block h-72 w-full rounded-sm border border-zinc-200 p-2 dark:border-zinc-700">
          <img alt="" src="https://placehold.co/600x400" className="h-52 w-full rounded-sm object-cover" />
          <h3 className="mt-2 font-medium text-zinc-700 dark:text-zinc-200">Pill</h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Description</p>{" "}
        </a>
      </li>
      <li>
        <a href="#" className="block h-72 w-full rounded-sm border border-zinc-200 p-2 dark:border-zinc-700">
          <img alt="" src="https://placehold.co/600x400" className="h-52 w-full rounded-sm object-cover" />
          <h3 className="mt-2 font-medium text-zinc-700 dark:text-zinc-200">Search</h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Description</p>
        </a>
      </li>
    </ul>
  </>
);

export default Components;
