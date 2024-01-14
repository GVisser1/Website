import Image from "next/image";
import { getAge } from "../../utils/numberUtil";
import { Icon } from "../Icon";
import { Section } from "../Section";
import { SocialIcons } from "../SocialIcons";
import { Text } from "../Text";
import { Title } from "../Title";

export const Hero = () => (
  <Section id="intro" className="justify-between gap-20 text-justify lg:flex-row lg:items-center">
    <div className="space-y-6">
      <div className="space-y-2">
        <Title color="dark" as="h1">
          <p className="text-2xl font-medium text-blue-500">Hi, my name is</p>
          Glenn Visser
        </Title>
      </div>
      <Text color="medium">
        Welcome to my website! I am a {getAge(new Date(2000, 3, 21))}-year-old Dutch QA Engineer. When I&apos;m not busy
        programming, you can find me playing video games, watching movies, or listening to music. Chances are, I am
        listening to music right now.
      </Text>
      <SocialIcons />
    </div>
    <div className="relative mx-auto mt-12 shrink-0 rotate-3 lg:mt-4">
      <Image
        height={0}
        width={0}
        sizes="100vw"
        src="/images/profile-2.webp"
        className="h-80 w-full rounded-xl object-cover md:h-96"
        alt="Glenn large profile"
      />
      <Icon
        overrideSize
        className="absolute -bottom-12 -right-8 h-32 w-32 stroke-black stroke-[0.5] text-blue-500 md:-left-12"
        name="MusicalNoteIcon"
      />
    </div>
  </Section>
);
