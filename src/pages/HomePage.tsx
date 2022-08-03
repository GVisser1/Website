import { FC } from "react";
import { Icon, IconType } from "../components/Icon";
import ImageList from "../components/ImageList";
import Page from "../components/Page";
import SocialIcons from "../components/SocialIcons";
import Text from "../components/Text";
import { Title } from "../components/Title";
import { useTranslation } from "react-i18next";
import PersonalInfo from "../components/PersonalInfo";
import useDate from "../hooks/useDate";
import { WorkList } from "../components/WorkList";
import Timeline from "../components/Timeline";
import useData from "../hooks/useData";

const HomePage: FC = () => {
  const { t } = useTranslation();
  const { getTotalMonths, getTimeFrame } = useDate();
  const { getMusic, getLanguages, getTools, getMovies, getGames } = useData();

  return (
    <Page>
      <section id="Intro" className="relative">
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
        className="relative mx-auto flex max-w-screen-xl justify-evenly overflow-hidden px-5 py-10 md:px-8"
      >
        <div className="z-10">
          <Title icon={IconType.USER_CIRCLE} className="mb-3">
            {t("ABOUT")}
          </Title>
          <div className="space-y-4 pb-8">
            <Text size="md">{t("ABOUT_CONTENT_1")}</Text>
            <Text size="md">{t("ABOUT_CONTENT_2")}</Text>
            <Text size="md">{t("ABOUT_CONTENT_3")}</Text>
          </div>
        </div>
        <div className="absolute h-48 w-48 translate-y-48 -translate-x-36 rounded-full bg-emerald-100 blur-3xl dark:bg-blue-400/50 md:-translate-x-48" />
        <div className="absolute h-48 w-48 translate-x-48 -translate-y-16 rounded-full bg-blue-100 blur-3xl dark:bg-purple-400/50" />
      </section>

      <section
        id="Music"
        className="bg-gray-100 dark:border-y-2 dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-screen-xl px-5 py-10 md:px-8">
          <Title icon={IconType.MUSIC_NOTE} className="mb-3">
            {t("FAVORITE_ALBUMS")}
          </Title>
          <ImageList data={getMusic} listType="MUSIC" />
        </div>
      </section>

      <section
        id="Work"
        className="relative mx-auto flex max-w-screen-xl justify-evenly overflow-hidden px-5 py-10 md:px-8"
      >
        <div className="z-10 w-full">
          <Title icon={IconType.BRIEFCASE} className="mb-3">
            {t("WORK_EXPERIENCE")}
          </Title>
          <WorkList
            className="pl-2"
            company={{
              address: `Rotterdam, ${t("SOUTH_HOLLAND")}, ${t("NETHERLANDS")}`,
              name: "MoreApp",
              positions: [
                {
                  timeFrame: getTimeFrame(new Date(2022, 1, 21)),
                  title: "Software Engineer",
                  subTitle: "Part-Time",
                  description: getTotalMonths(new Date(2022, 1, 21)),
                },
                {
                  timeFrame: getTimeFrame(new Date(2021, 8, 13), new Date(2022, 1, 11)),
                  title: t("DEVELOPMENT_INTERN"),
                  subTitle: t("INTERNSHIP"),
                  description: getTotalMonths(new Date(2021, 8, 13), new Date(2022, 1, 11)),
                },
              ],
              startDate: new Date(2021, 8, 13),
              website: "https://moreapp.dev",
              logo: "/images/experience/MoreApp.webp",
            }}
          />
        </div>
      </section>

      <section
        id="Education"
        className="bg-gray-100 dark:border-y-2 dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="relative mx-auto flex max-w-screen-xl justify-evenly overflow-hidden px-5 py-10 md:px-8">
          <div className="z-10 w-full">
            <Title icon={IconType.LIBRARY} className="mb-3">
              {t("EDUCATION")}
            </Title>
            <div className="space-y-1 py-2 px-2 pb-8">
              <Timeline
                items={[
                  {
                    img: <img src="/images/experience/HR.webp" className="w-22 mb-2 h-16" />,
                    timeFrame: getTimeFrame(new Date(2019, 8, 1)),
                    title: t("COMPUTER_SCIENCE"),
                    subTitle: `${t("HOGESCHOOL_ROTTERDAM")}, Rotterdam`,
                    href: "https://www.hogeschoolrotterdam.nl/",
                  },
                  {
                    img: <img src="/images/experience/Lentiz.webp" className="mb-2 h-12 w-36" />,
                    timeFrame: getTimeFrame(new Date(2012, 8, 1), new Date(2019, 6, 1)),
                    title: `${t("VWO")} - ${t("GRADUATED")}`,
                    titleIcon: IconType.ACADEMIC_CAP,
                    subTitle: "Lentiz Reviuslyceum, Maassluis",
                    href: "https://www.lentiz.nl/reviuslyceum/",
                  },
                ]}
              />
            </div>
          </div>
          <div className="absolute h-56 w-56 translate-y-48 -translate-x-36 rounded-full bg-emerald-100 blur-3xl dark:bg-emerald-400/40" />
        </div>
      </section>

      <section id="Skills" className="mx-auto max-w-screen-xl px-5 py-10 md:px-8">
        <Title icon={IconType.SPARKLES}>{t("SKILLS")}</Title>
        <Title className="my-5" as="h3" size="lg">
          {t("LANGUAGES")}
        </Title>
        <ImageList data={getLanguages} listType="LANGUAGES" />
        <Title className="mb-5 mt-10" as="h3" size="lg">
          {t("OTHER")}
        </Title>
        <ImageList data={getTools} listType="TOOLS" />
      </section>

      <section
        id="Movies"
        className="bg-gray-100 dark:border-y-2 dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-screen-xl px-5 py-10 md:px-8">
          <Title icon={IconType.FILM} className="mb-3">
            {t("FAVORITE_MOVIES")}
          </Title>
          <ImageList data={getMovies} listType="MOVIES" />
        </div>
      </section>

      <section id="Games" className="mx-auto max-w-screen-xl px-5 py-10 md:px-8">
        <Title icon={IconType.PUZZLE} className="mb-3">
          {t("FAVORITE_GAMES")}
        </Title>
        <ImageList data={getGames} listType="GAMES" />
      </section>
    </Page>
  );
};

export default HomePage;
