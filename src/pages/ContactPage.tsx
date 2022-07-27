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
      <section
        id="Contact"
        className="relative mx-auto flex h-full max-w-5xl justify-evenly overflow-hidden px-5 py-10 md:px-8"
      >
        <div className="z-10 my-16 flex w-full flex-col items-center">
          <img
            src="/images/personal/GlennProfile2.jpg"
            className="h-60 w-60 rounded-full object-cover shadow-md shadow-current md:h-72 md:w-72"
          />
          <Title className="py-4" as="h2" size="xl">
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
        <div className="absolute m-auto box-content h-[300px] w-[300px] translate-y-52 -translate-x-44 rotate-12 rounded-[30%80%/60%40%] bg-amber-200 shadow-lg shadow-amber-400 blur-sm dark:bg-red-500/75 dark:shadow-red-900" />
        <div className="absolute m-auto h-[250px] w-[250px] translate-x-56 -translate-y-12 rotate-45 rounded-[75%20%/20%50%] bg-blue-400 shadow-lg shadow-blue-600 blur-sm dark:bg-green-400 dark:shadow-green-900" />
      </section>
    </Page>
  );
};

export default ContactPage;
