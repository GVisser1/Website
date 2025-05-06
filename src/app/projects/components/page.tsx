import type { JSX } from "react";
import Link from "next/link";
import Header from "../../../components/header";

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
          className="block h-72 w-full rounded-sm border border-primary p-2 dark:border-primary-dark"
        >
          <img alt="" src="https://placehold.co/600x400" className="h-52 w-full rounded-sm object-cover" />
          <h3 className="mt-2 font-medium text-primary dark:text-primary">Button</h3>
          <p className="mt-1 text-sm text-secondary dark:text-secondary-dark">Description</p>
        </Link>
      </li>
      <li>
        <a href="#" className="block h-72 w-full rounded-sm border border-primary p-2 dark:border-primary-dark">
          <img alt="" src="https://placehold.co/600x400" className="h-52 w-full rounded-sm object-cover" />
          <h3 className="mt-2 font-medium text-primary dark:text-primary">Icon</h3>
          <p className="mt-1 text-sm text-secondary dark:text-secondary-dark">Description</p>{" "}
        </a>
      </li>
      <li>
        <a href="#" className="block h-72 w-full rounded-sm border border-primary p-2 dark:border-primary-dark">
          <img alt="" src="https://placehold.co/600x400" className="h-52 w-full rounded-sm object-cover" />
          <h3 className="mt-2 font-medium text-primary dark:text-primary">Link</h3>
          <p className="mt-1 text-sm text-secondary dark:text-secondary-dark">Description</p>{" "}
        </a>
      </li>
      <li>
        <a href="#" className="block h-72 w-full rounded-sm border border-primary p-2 dark:border-primary-dark">
          <img alt="" src="https://placehold.co/600x400" className="h-52 w-full rounded-sm object-cover" />
          <h3 className="mt-2 font-medium text-primary dark:text-primary">Pill</h3>
          <p className="mt-1 text-sm text-secondary dark:text-secondary-dark">Description</p>{" "}
        </a>
      </li>
      <li>
        <a href="#" className="block h-72 w-full rounded-sm border border-primary p-2 dark:border-primary-dark">
          <img alt="" src="https://placehold.co/600x400" className="h-52 w-full rounded-sm object-cover" />
          <h3 className="mt-2 font-medium text-primary dark:text-primary">Search</h3>
          <p className="mt-1 text-sm text-secondary dark:text-secondary-dark">Description</p>
        </a>
      </li>
    </ul>
  </>
);

export default Components;
