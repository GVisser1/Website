import { useTranslation } from "react-i18next";
import { IconType } from "../components/Icon";
import SocialIcons from "../components/SocialIcons";
import Text from "../components/Text";
import { Title } from "../components/Title";

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="Contact" className="my-24 flex justify-center px-5 md:px-8">
      <div className="z-10 flex flex-col items-center overflow-hidden">
        <img
          src="/images/personal/GlennProfile1.jpg"
          className="h-60 w-60 rounded-full object-cover shadow-md shadow-current saturate-150 md:h-72 md:w-72"
          alt="Glenn profile picture large 2"
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
    </section>
  );
};

export default ContactPage;
