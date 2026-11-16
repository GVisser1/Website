import { createFileRoute } from "@tanstack/react-router";
import type { JSX } from "react";
import TextButton from "@/components/button/textButton";
import Image from "@/components/image";
import Page from "@/components/page";
import { MAIN_PAGES } from "@/constants";
import { getAge } from "@/utils/dateUtil";

const PAGE = MAIN_PAGES.home;

const HomePage = (): JSX.Element => (
  <Page className="my-auto">
    <header className="grid items-center gap-x-16 gap-y-10 laptop:grid-cols-[minmax(0,1fr)_auto]">
      <div className="order-2 mx-auto flex max-w-2xl flex-col items-center gap-y-6 text-center laptop:order-1 laptop:mx-0 laptop:items-start laptop:text-left">
        <h1 className="font-heading text-title text-primary tablet:text-display">
          Hi, my name is <span className="whitespace-nowrap text-light">Glenn Visser</span>
        </h1>
        <p className="max-w-prose text-lead text-secondary">
          I am a {getAge()}-year-old QA Engineer living in Maassluis, the Netherlands. I am into music, movies, games,
          and programming.
        </p>
        <div className="flex flex-wrap justify-center gap-2 laptop:justify-start">
          <TextButton type="link" label="About me" variant="primary" href="/about" size="large" />
          <TextButton type="email" label="Get in touch" variant="light" size="large" />
        </div>
      </div>
      <div className="order-1 mx-auto rounded-full border-2 border-light p-2 laptop:order-2">
        <Image
          priority
          src="/images/profile.webp"
          width={640}
          height={640}
          alt="Photo of Glenn"
          className="aspect-square size-48 rounded-full object-cover tablet:size-60 laptop:size-80"
        />
      </div>
    </header>
  </Page>
);

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [{ title: PAGE.meta.title }, { name: "description", content: PAGE.meta.description }],
  }),
});
