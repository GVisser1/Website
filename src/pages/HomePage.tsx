import { FC } from "react";
import { IconType } from "../components/Icon";
import Cards from "../components/Cards";
import Page from "../components/Page";
import SocialIcons from "../components/SocialIcons";
import Text from "../components/Text";
import { Title } from "../components/Title";
import { useTranslation } from "react-i18next";
import PersonalInfo from "../components/PersonalInfo";
import Timeline from "../components/Timeline";
import { getAlbums, getGames, getMovies } from "../data/Media";
import { getProgrammingLanguages } from "../data/Languages";
import TimeLineData from "../data/TimelineData";

const HomePage: FC = () => {
  const { t } = useTranslation();
  const { getTimeLineItems } = TimeLineData();

  return (
    <Page>
      <section id="Intro" className="relative hidden">
        <div className="flex w-full items-center justify-center">
          <img
            src="/images/personal/GlennMain.jpeg"
            className="h-[45rem] w-full object-cover object-center lg:h-[52rem] lg:object-top 2xl:h-[55rem]"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-between text-center">
          <div className="pt-10">
            <Title as="h1" size="4xl" color="white" className="rounded-lg bg-black/40 p-2">
              {t("HOME_GREETING")}
            </Title>
          </div>
          <div className="w-64 space-y-2 pb-10 md:w-72">
            <Text color="all-white" className="rounded-lg bg-black/40 p-2 md:text-base">
              {t("HOME_BIO")}
            </Text>
            <PersonalInfo />
            <SocialIcons className="py-2" />
          </div>
        </div>
      </section>

      <section
        id="About"
        className="relative mx-auto flex max-w-screen-2xl justify-evenly py-36 px-5 md:px-8"
      >
        <div className="z-10 flex">
          <Title icon={IconType.USER_CIRCLE} size="2xl" className="mb-3">
            {t("ABOUT")}
          </Title>
          <div className="space-y-4">
            <Text size="md">{t("ABOUT_CONTENT_1")}</Text>
            <Text size="md">{t("ABOUT_CONTENT_2")}</Text>
            <Text size="md">{t("ABOUT_CONTENT_3")}</Text>
          </div>
        </div>
      </section>

      <section
        id="Timeline"
        className="relative mx-auto flex w-full max-w-screen-2xl items-center justify-center py-36 px-5 md:px-8"
      >
        <div className="z-10 flex w-full flex-col items-center justify-center gap-8">
          <Title size="2xl">{t("TIMELINE")}</Title>
          <Timeline className="max-w-screen-lg" items={getTimeLineItems} />
        </div>
        {/* <div className="absolute hidden translate-x-48 rounded-full bg-emerald-100 p-40 mix-blend-multiply blur-xl dark:bg-emerald-400 dark:mix-blend-overlay md:flex" />
        <div className="absolute hidden rounded-full bg-red-100 p-40 mix-blend-multiply blur-xl dark:bg-red-400 dark:mix-blend-overlay md:flex" />
        <div className="absolute hidden -translate-x-48 rounded-full bg-blue-100 p-40 mix-blend-multiply blur-xl dark:bg-yellow-400 dark:mix-blend-overlay md:flex" /> */}
      </section>

      <section id="Music" className="mx-auto max-w-screen-2xl py-36 px-5 md:px-8">
        <Title icon={IconType.MUSIC_NOTE} size="2xl" className="mb-3">
          {t("FAVORITE_ALBUMS")}
        </Title>
        <Cards data={getAlbums} type="MUSIC" />
      </section>

      <section id="Skills" className="mx-auto max-w-screen-2xl px-5 py-36 md:px-8">
        <Title size="2xl" icon={IconType.SPARKLES}>
          {t("SKILLS")}
        </Title>
        <Title className="my-5" as="h3" size="lg">
          {t("LANGUAGES")}
        </Title>
        <Cards data={getProgrammingLanguages} type="LANGUAGES" />
      </section>

      <section id="Movies" className="mx-auto max-w-screen-2xl px-5 py-36 md:px-8">
        <Title size="2xl" icon={IconType.FILM} className="mb-3">
          {t("FAVORITE_MOVIES")}
        </Title>
        <Cards data={getMovies} type="MOVIES" />
      </section>

      <section id="Games" className="mx-auto max-w-screen-2xl px-5 py-36 md:px-8">
        <Title size="2xl" icon={IconType.PUZZLE} className="mb-3">
          {t("FAVORITE_GAMES")}
        </Title>
        <Cards data={getGames} type="GAMES" />
      </section>
    </Page>
  );
};

export default HomePage;
