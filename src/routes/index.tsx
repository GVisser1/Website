import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import type { JSX } from "react";
import { useReadLocalStorage } from "usehooks-ts";
import TextButton from "@/components/button/textButton";
import Image from "@/components/image";
import Page from "@/components/page";
import { MAIL_TO } from "@/constants";
import { getAge } from "@/utils/dateUtil";

const HomePage = (): JSX.Element => {
  const isSidebarCollapsed = useReadLocalStorage<boolean>("isSidebarCollapsed");

  const headerClasses = clsx(
    "text-primary dark:text-primary-dark text-header-4xl transition-all",
    isSidebarCollapsed ? "laptop:text-header-6xl" : "laptop:text-header-5xl",
  );

  return (
    <Page className="my-auto max-w-xl tablet-ls:max-w-4xl">
      <div className="grid laptop:grid-cols-2 items-center justify-center gap-x-18 gap-y-8">
        <header className="laptop:order-1 order-2 flex flex-col gap-y-6 laptop:gap-y-6 laptop:text-left text-center">
          <h1 className={headerClasses}>
            Hi, my name is <span className="text-light dark:text-light-dark">Glenn Visser</span>
          </h1>
          <p className="tablet:text-lg text-lg-medium text-secondary dark:text-secondary-dark">
            I am a {getAge()}-year-old QA Engineer from the Netherlands who’s all about clean,
            consistent, and reliable software. Outside of work, I’m into music, movies, games, and
            improving my programming skills.
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
        </header>
        <Image
          priority
          src="/images/profile.webp"
          alt="Photo of Glenn"
          className="laptop:order-2 order-1 mx-auto aspect-square laptop:size-120 size-72 rounded-full object-cover"
        />
      </div>
    </Page>
  );
};

export const Route = createFileRoute("/")({
  component: HomePage,
});
