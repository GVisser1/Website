import Image from "next/image";
import profileImg from "../../../public/images/profile.webp";
import { MAIL_TO } from "../../constants";
import type { JSX } from "react";
import { TextLink } from "../../components/button";
import { getAge } from "../../utils/dateUtil";
import Icon from "../../components/icon";

const age = getAge();

const HomePage = (): JSX.Element => (
  <>
    <div className="flex h-160 flex-col-reverse items-center justify-end gap-x-20 gap-y-8 lg:my-auto lg:h-180 lg:flex-row lg:items-center lg:justify-center">
      <header className="flex flex-col gap-y-6 text-center lg:gap-y-6 lg:text-left">
        <h1 className="text-4xl font-bold text-zinc-700 xs:text-5xl lg:text-6xl dark:text-zinc-200">
          <span className="text-blue-500">QA Engineer</span>, consistency advocate, and a{" "}
          <span className="text-blue-500">nerd</span>
        </h1>
        <p className="text-zinc-700 sm:text-lg dark:text-zinc-400">
          Hey, I'm Glenn — a {age}-year-old QA Engineer from the Netherlands who’s all about clean, consistent, and
          reliable software. Outside of work, I’m into music, movies, games, and improving my programming skills.
        </p>
        <div className="flex justify-center gap-x-2 lg:justify-start">
          <TextLink label="About me" variant="primary" href="/about" size="lg" />
          <TextLink label="Get in touch" variant="light" href={MAIL_TO} size="lg" />
        </div>
      </header>
      <ProfileImage />
    </div>
  </>
);

export default HomePage;

const ProfileImage = (): JSX.Element => (
  <div className="relative isolate shrink-0">
    <Icon name="Computer" stroke="sm" className="absolute right-0 bottom-0 z-1 size-16 stroke-zinc-900 text-zinc-200" />
    <div className="absolute right-2 bottom-6 h-7 w-12 bg-blue-200" />
    <Icon name="CodeBracket" stroke="md" className="absolute right-5 bottom-6.5 size-6 stroke-zinc-900" />

    <Image src={profileImg} alt="Photo of Glenn" className="size-48 rounded-full object-cover" />
  </div>
);
