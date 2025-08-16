import Image from "next/image";
import paddingtonImg from "../../../public/images/paddington.jpg";
import beachImg from "../../../public/images/beach2.jpg";
import graduatedImg from "../../../public/images/graduated.jpg";
import { MAIL_TO } from "../../constants";
import { type JSX } from "react";
import { getAge } from "../../utils/dateUtil";
import type { Metadata } from "next";
import Page from "../../components/page";
import TextButton from "../../components/button/textButton";

export const metadata: Metadata = {
  title: "Glenn Visser",
  description: "QA Engineer, consistency advocate, and a nerd",
};

const HomePage = (): JSX.Element => (
  <Page fullWidth className="flex size-full flex-col">
    <div className="relative max-h-140">
      <h1 className="absolute bottom-0 w-full bg-sunken-secondary-dark/90 p-4 text-header-xl text-balance break-words text-primary xs:text-header-3xl sm:right-0 sm:p-10 xl:w-2/3 xl:text-header-4xl dark:text-primary-dark">
        <span className="text-light dark:text-light-dark">QA Engineer</span>, consistency advocate, and a{" "}
        <span className="text-light dark:text-light-dark">nerd</span>
      </h1>
      <div className="grid grid-cols-3">
        <Image
          src={beachImg}
          alt="Photo of Glenn"
          className="col-span-2 size-full max-h-140 object-cover object-top sm:rounded-tl-sm"
        />
        <Image
          src={paddingtonImg}
          alt="Photo of Paddington"
          className="size-full max-h-140 object-cover sm:rounded-tr-sm"
        />
      </div>
    </div>

    <div className="grid h-full grid-cols-5">
      <Image src={graduatedImg} alt="Photo of Glenn" className="size-full max-h-160 object-cover sm:rounded-bl-sm" />
      <div className="relative col-span-3 flex flex-col items-center justify-center">
        <p className="w-full p-4 text-center text-base-medium text-balance text-primary sm:text-lg-medium dark:text-primary-dark">
          Hey, I'm Glenn — a {getAge()}-year-old QA Engineer from the Netherlands who’s all about clean, consistent, and
          reliable software. Outside of work, I’m into music, movies, games, and improving my programming skills.
        </p>
        <div className="flex justify-center gap-x-2 lg:justify-start">
          <TextButton type="link" label="About me" variant="primary" href="/about" size="large" />
          <TextButton type="link" label="Get in touch" variant="light" href={MAIL_TO} size="large" />
        </div>
      </div>
      <Image
        src={paddingtonImg}
        alt="Photo of Paddington"
        className="size-full max-h-160 object-cover sm:rounded-tr-sm"
      />
    </div>
  </Page>
);

export default HomePage;
