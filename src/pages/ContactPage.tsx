import { FC } from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import { IconType } from "../components/Icon";
import Page from "../components/Page";
import SocialIcons from "../components/SocialIcons";
import Text from "../components/Text";
import { Title } from "../components/Title";

const ContactPage: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative flex h-full">
      <Page>
        <div className="overflow-y-auto">
          <section
            id="Contact"
            className="max-w-5xl mx-auto px-5 md:px-8 py-10 flex-none md:flex md:justify-evenly"
          >
            <div className="w-full flex flex-col items-center pt-4 pb-16 md:pb-0 md:pt-20">
              <img
                src="images/personal/GlennProfile.jpeg"
                className="w-56 h-56 sm:w-72 sm:h-72 object-fit rounded-full shadow-2xl"
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
              <SocialIcons />
            </div>
            <div className="w-full space-y-5 md:py-10">
              <Title size="xl" className="w-full" as="h3">
                {t("MESSAGE_ME")}
              </Title>
              <ContactForm />
            </div>
          </section>
        </div>
      </Page>
    </section>
  );
};

export default ContactPage;
