import { useTranslation } from "react-i18next";
import { Text } from "../components/Text";
import { Timeline } from "../components/Timeline";
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
        <picture>
          <source srcSet="/images/rdam-m.webp" media="(min-width: 640px)" />
          <img
            src="/images/rdam.webp"
            className="h-[620px] w-full object-cover xl:h-[800px]"
            alt="Rotterdam"
          />
        </picture>
        <div className="absolute inset-0 mx-auto flex max-w-screen-2xl flex-col items-center justify-between text-center">
          <div className="absolute top-0 mx-auto flex flex-col items-center justify-center space-y-4 pt-10 lg:left-16 2xl:left-8">
            <Title
              as="h1"
              size="5xl"
              color="all-dark"
              className="underline sm:text-6xl lg:text-7xl"
            >
              {t("HOME_TITLE")}
            </Title>
            <Title size="3xl" color="all-dark">
              {t("HOME_SUBTITLE", { age: getAge(new Date(2000, 3, 21)) })}
            </Title>
            <img
              src="/images/GlennProfile2.webp"
              className="h-60 w-60 rounded-full object-cover shadow-lg shadow-current md:h-64 md:w-64"
              alt="Glenn large profile"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative mx-auto max-w-screen-md space-y-8 px-5 pb-36 pt-4 md:px-8"
      >
        <Title size="5xl" className="text-center underline decoration-blue-400 underline-offset-4">
          {t("ABOUT_ME")}
        </Title>
        <Text className="mx-5" size="md">
          {t("ABOUT_CONTENT")}
        </Text>
      </section>

      <section id="photos" className="overflow-hidden pb-36 pt-4">
        <div className="flex justify-center gap-x-5 py-4 scrollbar-none sm:gap-x-8">
          <div className="aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 shadow-md shadow-black dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
            <img
              src="/images/5.webp"
              alt="Movies and Games"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 shadow-md shadow-black dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
            <img
              src="/images/2.webp"
              alt="Beach"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 shadow-md shadow-black dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
            <img
              src="/images/4.webp"
              alt="Nature"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 shadow-md shadow-black dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
            <img
              src="/images/3.webp"
              alt="Mallorca"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 shadow-md shadow-black dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
            <img
              src="/images/6.webp"
              alt="Vinyl"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="timeline"
        className="relative mx-auto max-w-screen-lg space-y-8 px-5 pb-36 pt-4 md:px-8"
      >
        <Title size="5xl" className="text-center underline decoration-blue-400 underline-offset-4">
          {t("TIMELINE")}
        </Title>
        <Timeline items={getTimeLineItems} />
      </section>

      <section id="contact" className="mx-auto max-w-2xl space-y-8 px-5 pb-20 pt-4 md:px-8">
        <Title size="5xl" className="text-center underline decoration-blue-400 underline-offset-4">
          {t("CONTACT")}
        </Title>
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
