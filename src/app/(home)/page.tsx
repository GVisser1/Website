import { getAge } from "@/utils/dateUtil";
import Image from "next/image";
import profileImg from "@/images/profile.webp";
import { TextLink } from "@/components/button";
import { MAIL_TO } from "../../constants";

const age = getAge();

const HomePage = (): JSX.Element => (
  <div>
    <div className="flex h-[640px] flex-col-reverse items-center justify-end gap-x-20 gap-y-8 lg:my-auto lg:h-[720px] lg:flex-row lg:items-center lg:justify-center">
      <header className="flex max-w-xl flex-col gap-y-6 text-center lg:gap-y-6 lg:text-left">
        <h1 className="text-4xl font-bold text-zinc-700 dark:text-zinc-200 sm:text-5xl">
          <span className="text-blue-500">QA Engineer</span>, consistency advocate, and a{" "}
          <span className="text-blue-500">nerd</span>
        </h1>
        <p className="text-zinc-700 dark:text-zinc-400 sm:text-lg">
          Hey, I'm Glenn — a {age}-year-old QA Engineer from the Netherlands who’s all about clean, consistent, and
          reliable software. Outside of work, I’m into music, movies, games, and improving my programming skills.
        </p>
        <div className="flex justify-center gap-x-2 lg:justify-start">
          <TextLink label="About me" variant="primary" href="/about" size="lg" />
          <TextLink label="Get in touch" variant="light" href={MAIL_TO} size="lg" />
        </div>
      </header>
      <Image src={profileImg} alt="Photo of Glenn" className="size-48 rounded-full object-cover" />
    </div>
  </div>
);

export default HomePage;
