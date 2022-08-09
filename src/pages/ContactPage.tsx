import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IconType } from "../components/Icon";
import Page from "../components/Page";
import SocialIcons from "../components/SocialIcons";
import Text from "../components/Text";
import { Title } from "../components/Title";

const ContactPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <section id="Contact" className="relative mx-auto flex max-w-5xl justify-evenly">
        <div className="z-10 my-16 flex w-full flex-col items-center">
          <img
            src="/images/personal/GlennProfile2.jpg"
            className="h-60 w-60 rounded-full object-cover shadow-md shadow-current md:h-72 md:w-72"
          />
          <Title className="py-4" as="h2" size="lg">
            {t("CONTACT_ME")}
          </Title>
          <Text
            className="font-semibold"
            icon={IconType.MAIL}
            iconType="solid"
            iconPosition="left"
            href="mailto:gvisser.business@gmail.com"
          >
            {"gvisser.business@gmail.com"}
          </Text>
          <SocialIcons className="pt-6" />
        </div>
        <div className="absolute h-56 w-56 translate-y-48 -translate-x-36 rounded-full bg-emerald-200/70 blur-3xl dark:bg-blue-400/50" />
        <div className="absolute h-56 w-56 translate-x-48 -translate-y-8 rounded-full bg-blue-300/70 blur-3xl dark:bg-purple-400/70" />
      </section>
    </Page>
  );
};

export default ContactPage;
