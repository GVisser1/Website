import Image from "next/image";
import Icon from "../../../components/icon";
import Section from "../../../components/section";
import SocialIcons from "../../../components/socialIcons";
import Text from "../../../components/text";
import Title from "../../../components/title";
import { getAge } from "@/utils/dateUtil";

const Hero = (): JSX.Element => (
  <Section id="intro" className="flex flex-col justify-between gap-20 lg:flex-row lg:items-center">
    <div className="space-y-6">
      <div className="space-y-2">
        <Title color="dark" as="h1">
          <span className="block text-2xl font-medium text-blue-500">Hi, my name is</span> Glenn Visser
        </Title>
      </div>
      <Text color="medium">
        Welcome to my website! I am a {getAge()}-year-old Dutch QA Engineer. When I&apos;m not busy programming, you can
        find me playing video games, watching movies, or listening to music. Chances are, I am listening to music right
        now.
      </Text>
      <SocialIcons />
    </div>
    <div className="relative mx-auto mt-12 shrink-0 rotate-3 lg:mt-4">
      <Image
        priority
        height={0}
        width={0}
        sizes="100vw"
        src="/images/profile.webp"
        className="h-80 w-full rounded-xl object-cover dark:border dark:border-zinc-800 md:h-96"
        alt="Glenn Visser"
      />
      <Icon
        overrideSize
        className="absolute -bottom-12 -right-8 size-32 stroke-black stroke-[0.5] text-blue-500 lg:-left-12"
        name="MusicalNoteIcon"
      />
    </div>
  </Section>
);

export default Hero;
