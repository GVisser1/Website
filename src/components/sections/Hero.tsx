import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { getAge } from "../../utils/numberUtil";
import { Section } from "../Section";
import { Text } from "../Text";
import { Title } from "../Title";

export const Hero = () => {
  const { t } = useTranslation();

  const classes = clsx(
    "h-[600px] pt-12 items-center text-center transition-all",
    "bg-gray-700/60 dark:bg-gray-800/70 bg-cover bg-center bg-no-repeat bg-blend-hue dark:bg-blend-saturation",
    "bg-[url('/images/rdam.webp')] sm:bg-[url('/images/rdam-m.webp')]",
  );

  return (
    <Section id="intro" className={classes}>
      <Title color="all-white" as="h1">
        {t("HOME_TITLE")}
      </Title>
      <Text color="all-white" size="2xl">
        {t("HOME_SUBTITLE", { age: getAge(new Date(2000, 3, 21)) })}
      </Text>
      <img
        src="/images/profile-2.webp"
        className="h-60 w-60 rounded-full shadow-lg shadow-current md:h-64 md:w-64"
        alt="Glenn large profile"
      />
    </Section>
  );
};
