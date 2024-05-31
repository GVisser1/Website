import Image from "next/image";
import Icon from "@/components/icon";
import Section from "@/components/section";
import SocialIcons from "@/components/socialIcons";
import Text from "@/components/text";
import Title from "@/components/title";
import { getAge } from "@/utils/dateUtil";
import profileImg from "@/images/profile.webp";

const Hero = (): JSX.Element => (
  <Section id="intro" className="flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-14 xl:gap-20">
    <div className="space-y-6">
      <div className="space-y-2">
        <Title color="dark" as="h1">
          <span className="block text-2xl font-medium text-blue-600">Hi, my name is</span> Glenn Visser
        </Title>
      </div>
      <Text color="medium" size="lg">
        I am a {getAge()}-year-old Dutch QA Engineer with a big passion for consistency. I am also a huge nerd when it
        comes to music, movies, and video games.
      </Text>
      <SocialIcons />
    </div>
    <div className="relative mx-auto mt-12 shrink-0 lg:mt-4">
      <Image
        priority
        src={profileImg}
        className="h-96 w-full rounded-xl object-cover dark:border dark:border-zinc-800 md:h-80 xl:h-96"
        alt="Glenn Visser"
      />
      <Icon
        overrideSize
        className="absolute -bottom-12 -right-8 size-32 stroke-black stroke-[0.5] text-blue-600 md:-left-12 md:size-28 xl:size-32"
        name="MusicalNoteIcon"
      />
    </div>
  </Section>
);

export default Hero;
