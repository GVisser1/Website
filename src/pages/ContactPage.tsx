import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IconType } from "../components/Icon";
import SocialIcons from "../components/SocialIcons";
import Text from "../components/Text";
import { Title } from "../components/Title";

const ContactPage: FC = () => {
  const { t } = useTranslation();
  return (
    <section id="Contact" className="relative my-24 flex px-5 md:px-8">
      <div className="z-10 flex flex-col items-center overflow-hidden">
        <img
          src="/images/personal/GlennProfile2.jpg"
          className="h-60 w-60 rounded-full object-cover shadow-md shadow-current md:h-72 md:w-72"
        />
        <Title className="my-4" as="h2" size="lg">
          {t("CONTACT_ME")}
        </Title>
        <Text
          className="font-semibold"
          icon={IconType.MAIL}
          iconType="solid"
          color="medium"
          iconPosition="left"
          href="mailto:gvisser.business@gmail.com"
        >
          {"gvisser.business@gmail.com"}
        </Text>
        <SocialIcons className="mt-6" />
      </div>
      <div className="absolute h-36 w-36 translate-x-32 -translate-y-8 rounded-full bg-blue-300/70 blur-2xl dark:bg-purple-400/70 dark:blur-3xl md:h-56 md:w-56" />
      <div className="absolute h-56 w-56 translate-y-28 -translate-x-8 rounded-full bg-emerald-200/70 blur-2xl dark:bg-blue-400/50 dark:blur-3xl" />
    </section>
  );
};

export default ContactPage;
