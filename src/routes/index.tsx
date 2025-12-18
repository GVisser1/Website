import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import type { JSX } from "react";
import { useReadLocalStorage } from "usehooks-ts";
import TextButton from "@/components/button/textButton";
import Image from "@/components/image";
import Page from "@/components/page";
import { MAIL_TO, MAIN_PAGES } from "@/constants";
import { getAge } from "@/utils/dateUtil";

const PAGE = MAIN_PAGES.home;

const HomePage = (): JSX.Element => {
  const isSidebarCollapsed = useReadLocalStorage<boolean>("isSidebarCollapsed");

  const headerClasses = clsx(
    "text-primary dark:text-primary-dark text-header-4xl transition-all",
    isSidebarCollapsed ? "laptop:text-header-6xl" : "laptop:text-header-5xl",
  );

  return (
    <Page className="my-auto">
      <header className="mx-auto mt-8 tablet-ls:mt-32 tablet-ls:mb-56 grid laptop:max-w-7xl max-w-xl tablet-ls:max-w-4xl laptop:grid-cols-2 items-center justify-center gap-x-18 gap-y-8">
        <div className="laptop:order-1 order-2 flex flex-col gap-y-6 laptop:gap-y-6 laptop:text-left text-center">
          <h1 className={headerClasses}>
            Hi, my name is <span className="text-light dark:text-light-dark">Glenn Visser</span>
          </h1>
          <p className="text-lg-regular text-secondary dark:text-secondary-dark">
            I am a {getAge()}-year-old QA Engineer living in Maassluis, the Netherlands. I am into
            music, movies, games, and programming.
          </p>
          <div className="flex laptop:justify-start justify-center gap-x-2">
            <TextButton type="link" label="About me" variant="primary" href="/about" size="large" />
            <TextButton
              type="link"
              label="Get in touch"
              variant="light"
              href={MAIL_TO}
              size="large"
            />
          </div>
        </div>
        <Image
          priority
          src="/images/profile.webp"
          alt="Photo of Glenn"
          className="laptop:order-2 order-1 mx-auto aspect-square laptop:size-120 size-72 rounded-full object-cover"
        />
      </header>
    </Page>
  );
};

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [{ title: PAGE.meta.title }, { name: "description", content: PAGE.meta.description }],
  }),
});
