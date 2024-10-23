import { getAge } from "@/utils/dateUtil";
import Image from "next/image";
import profileImg from "@/images/profile.webp";
import Icon from "@/components/icon";

const HomePage = (): JSX.Element => (
  <div className="h-full justify-between gap-4 md:grid md:grid-cols-2 md:items-center md:gap-14 xl:gap-20">
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-semibold text-zinc-700 dark:text-white sm:text-5xl">
          <span className="block text-2xl font-semibold text-blue-600">Hi, my name is</span> Glenn Visser
        </h1>
      </header>
      <p className="text-lg text-zinc-700 dark:text-zinc-400">
        I am a {getAge()}-year-old Dutch QA Engineer with a big passion for consistency. I am also a huge nerd when it
        comes to music, movies, and video games.
      </p>
    </div>
    <div className="relative mx-auto mt-12 shrink-0 md:mt-4">
      <Image
        priority
        src={profileImg}
        className="h-96 w-full rounded-xl object-cover dark:border dark:border-zinc-800 md:h-80 xl:h-96"
        alt="Glenn Visser"
      />
      <Icon
        overrideSize
        className="absolute -bottom-8 -right-4 size-28 stroke-zinc-950 stroke-[0.5] text-blue-600 md:-left-12 md:size-28 xl:size-32"
        name="MusicalNoteIcon"
      />
    </div>
  </div>
);

export default HomePage;
