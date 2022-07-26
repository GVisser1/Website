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
        className="mx-auto max-w-5xl flex-none px-5 py-10 md:flex md:justify-evenly md:px-8"
      >
        <div className="flex w-full flex-col items-center pt-4 pb-16 md:pb-0 md:pt-16">
          <img
            src="/images/personal/GlennProfile2.jpg"
            className="h-56 w-56 rounded-full object-cover shadow-2xl sm:h-72 sm:w-72"
          />
          <Title className="py-4" as="h2" size="xl">
            {t("CONTACT_ME")}
          </Title>
          <Text
            icon={IconType.MAIL}
            iconType="solid"
            iconPosition="left"
            href="mailto:gvisser.business@gmail.com"
          >
            {"gvisser.business@gmail.com"}
          </Text>
          <SocialIcons className="pt-6" />
        </div>
      </section>
    </Page>
  );
};

export default ContactPage;
