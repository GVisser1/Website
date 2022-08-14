import { FC } from "react";
import { IconType } from "../components/Icon";
import Text from "../components/Text";
import { Title } from "../components/Title";
import { useTranslation } from "react-i18next";
import Timeline from "../components/Timeline";
import { getProgrammingLanguages } from "../data/Languages";
import TimeLineData from "../data/TimelineData";
import { Card } from "../components/Card";
import { getAge } from "../utils/numberUtil";

const HomePage: FC = () => {
  const { t } = useTranslation();
  const { getTimeLineItems } = TimeLineData();

  return (
    <>
      <section id="Intro" className="relative">
        <img src="/images/rdam.webp" className="h-[620px] w-full object-cover xl:h-[800px]" />
        <div className="absolute inset-0 mx-auto flex max-w-screen-2xl flex-col items-center justify-between text-center">
          <div className="absolute top-0 mx-auto flex flex-col items-center justify-center space-y-4 pt-10 lg:left-16 2xl:left-8">
            <Title as="h1" size="7xl" color="all-dark" className="underline">
              {t("HOME_TITLE")}
            </Title>
            <Title size="3xl" color="all-dark">
              {t("HOME_SUBTITLE", { age: getAge(new Date(2000, 3, 21)) })}
            </Title>
            <img
              src="/images/personal/GlennProfile2.jpg"
              className="h-60 w-60 rounded-full object-cover shadow-lg shadow-current saturate-150 md:h-64 md:w-64"
            />
          </div>
          <Text
            color="light"
            size="xs"
            className="absolute bottom-0 right-0 opacity-25 xl:opacity-50"
          >
            'Rotterdam' by Bart Ros on Unsplash
          </Text>
          <div className="w-64 space-y-2 pb-10 md:w-72"></div>
        </div>
      </section>

      <section id="About" className="relative mx-auto max-w-screen-xl space-y-5 px-5 py-36 md:px-8">
        <Title size="4xl" className="pb-2 text-center underline">
          {t("ABOUT")}
        </Title>
        <Text className="mx-5" size="md">
          {t("ABOUT_CONTENT")}
        </Text>
      </section>

      <section
        id="Timeline"
        className="relative mx-auto max-w-screen-xl space-y-5 py-36 px-5 md:px-8"
      >
        <Title size="4xl" className="pb-2 text-center underline">
          {t("TIMELINE")}
        </Title>
        <div className="flex justify-center">
          <Timeline className="max-w-screen-lg" items={getTimeLineItems} />
        </div>
      </section>

      <section id="Skills" className="relative mx-auto max-w-screen-xl px-5 py-36 md:px-8">
        <Title size="2xl" icon={IconType.GLOBE} className="mb-3">
          {t("LANGUAGES")}
        </Title>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {getProgrammingLanguages.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              image={<img className={"aspect-square w-full p-6"} src={item.src} />}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
