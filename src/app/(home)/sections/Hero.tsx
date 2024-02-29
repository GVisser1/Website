import Image from "next/image";
import { getAge } from "../../../utils/numberUtil";
import Icon from "../../../components/Icon";
import Section from "../../../components/Section";
import SocialIcons from "../../../components/SocialIcons";
import Text from "../../../components/Text";
import Title from "../../../components/Title";

export const Hero = (): JSX.Element => (
  <Section id="intro" className="justify-between gap-20 lg:flex-row lg:items-center">
    <div className="space-y-6">
      <div className="space-y-2">
        <Title color="dark" as="h1">
          <span className="block text-2xl font-medium text-blue-500">Hi, my name is</span> Glenn Visser
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
        priority
        height={0}
        width={0}
        sizes="100vw"
        src="/images/profile.webp"
        className="h-80 w-full rounded-xl object-cover md:h-96"
        alt="Glenn Visser"
      />
      <Icon
        overrideSize
        className="absolute -bottom-12 -right-8 h-32 w-32 stroke-black stroke-[0.5] text-blue-500 md:-left-12"
        name="MusicalNoteIcon"
      />
    </div>
  </Section>
);
