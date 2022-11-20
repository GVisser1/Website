import Text from "../components/Text";
import { useTranslation } from "react-i18next";
import Timeline from "../components/Timeline";
import TimeLineData from "../data/TimelineData";
import { getAge } from "../utils/numberUtil";
import { Title } from "../components/Title";
import { Contact } from "../components/Contact";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { getTimeLineItems } = TimeLineData();

  return (
    <>
      <section id="intro" className="relative pb-36">
        <img
          src="/images/rdam.webp"
          className="h-[620px] w-full object-cover xl:h-[800px]"
          alt="Rotterdam"
        />
        <div className="absolute inset-0 mx-auto flex max-w-screen-2xl flex-col items-center justify-between text-center">
          <div className="absolute top-0 mx-auto flex flex-col items-center justify-center space-y-4 pt-10 lg:left-16 2xl:left-8">
            <Title as="h1" size="7xl" color="all-white" className="underline lg:text-gray-700">
              {t("HOME_TITLE")}
            </Title>
            <Title size="3xl" color="all-white" className="lg:text-gray-700">
              {t("HOME_SUBTITLE", { age: getAge(new Date(2000, 3, 21)) })}
            </Title>
            <img
              src="/images/GlennProfile2.webp"
              className="h-60 w-60 rounded-full object-cover shadow-lg shadow-current md:h-64 md:w-64"
              alt="Glenn profile picture large"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative mx-auto max-w-screen-md space-y-8 px-5 pb-36 pt-4 md:px-8"
      >
        <Title size="4xl" className="text-center ">
          {t("ABOUT")}
        </Title>
        <Text className="mx-5" size="md">
          {t("ABOUT_CONTENT")}
        </Text>
      </section>

      <section
        id="timeline"
        className="relative mx-auto max-w-screen-xl space-y-8 px-5 pb-36 pt-4 md:px-8"
      >
        <Title size="4xl" className="text-center">
          {t("TIMELINE")}
        </Title>
        <div className="flex justify-center">
          <Timeline className="max-w-screen-lg" items={getTimeLineItems} />
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-2xl justify-center px-5 pb-20 pt-4 md:px-8">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
