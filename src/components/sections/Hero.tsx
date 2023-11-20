import { useTranslation } from "react-i18next";
import { getAge } from "../../utils/numberUtil";
import { Icon } from "../Icon";
import { Section } from "../Section";
import { SocialIcons } from "../SocialIcons";
import { Text } from "../Text";
import { Title } from "../Title";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="intro"
      className="justify-between pt-20 text-justify md:flex-row md:items-center md:gap-x-20"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Title color="dark" as="h1">
            <p className="text-2xl font-medium text-blue-500">{t("HOME_TITLE")}</p>
            Glenn Visser
          </Title>
          {/* <p className="text-xl font-medium text-gray-500 dark:text-gray-400">
            {t("HOME_SUBTITLE", { age: getAge(new Date(2000, 3, 21)) })}
          </p> */}
        </div>
        <Text color="medium">{t("HOME_INTRO", { age: getAge(new Date(2000, 3, 21)) })}</Text>
        <SocialIcons />
      </div>
      <div className="relative mt-4 max-w-xs shrink-0 rotate-3 lg:max-w-sm">
        <img
          src="/images/profile-2.webp"
          className="h-full w-full rounded-xl object-cover"
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
};
