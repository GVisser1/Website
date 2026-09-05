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
    <Page className="my-auto">
      <header className="tablet-ls:mt-32 tablet-ls:mb-56 laptop:max-w-7xl tablet-ls:max-w-4xl laptop:grid-cols-2 mx-auto mt-8 grid max-w-xl items-center justify-center gap-x-18 gap-y-8">
        <div className="laptop:order-1 laptop:gap-y-6 laptop:text-left order-2 flex flex-col gap-y-6 text-center">
          <h1 className={headerClasses}>
            Hi, my name is <span className="text-light dark:text-light-dark">Glenn Visser</span>
          </h1>
          <p className="text-lg-regular text-secondary dark:text-secondary-dark">
            I am a {getAge()}-year-old QA Engineer living in Maassluis, the Netherlands. I am into music, movies, games,
            and programming.
          </p>
          <div className="laptop:justify-start flex justify-center gap-x-2">
            <TextButton type="link" label="About me" variant="primary" href="/about" size="large" />
            <TextButton type="link" label="Get in touch" variant="light" href={MAIL_TO} size="large" />
          </div>
        </div>
        <Image
          priority
          src="/images/profile.webp"
          alt="Photo of Glenn"
          className="laptop:order-2 laptop:size-120 order-1 mx-auto aspect-square size-72 rounded-full object-cover"
        />
      </header>
    </Page>
  );
};

export const Route = createFileRoute("/")({
  component: HomePage,
});
