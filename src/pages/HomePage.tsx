import { FC } from "react";
import { IconType } from "../components/Icon";
import ImageList from "../components/ImageList";
import Page from "../components/Page";
import SocialIcons from "../components/SocialIcons";
import Text from "../components/Text";
import { Title } from "../components/Title";
import { useTranslation } from "react-i18next";
import PersonalInfo from "../components/PersonalInfo";
import useDate from "../hooks/useDate";

const HomePage: FC = () => {
  const { t } = useTranslation();
  const { getTotalMonths } = useDate();

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
            <Title
              as="h1"
              size="4xl"
              color="white"
              className="rounded-lg bg-black/40 p-2"
            >
              {t("HOME_GREETING")}
            </Title>
          </div>
          <div className="w-64 space-y-2 pb-10 md:w-72">
            <Text
              color="all-white"
              className="rounded-lg bg-black/40 p-2 md:text-base"
            >
              {t("HOME_BIO")}
            </Text>
            <PersonalInfo />
            <SocialIcons className="py-2" />
          </div>
        </div>
      </section>

      <section
        id="About"
        className="mx-auto max-w-screen-xl px-5 py-10 md:px-8"
      >
        <Title icon={IconType.USER_CIRCLE} className="py-5">
          {t("ABOUT")}
        </Title>
        <div className="space-y-4 pb-8">
          <Text size="md">{t("ABOUT_CONTENT_1")}</Text>
          <Text size="md">{t("ABOUT_CONTENT_2")}</Text>
          <Text size="md">{t("ABOUT_CONTENT_3")}</Text>
        </div>
      </section>

      <section
        id="Music"
        className="bg-gray-100 dark:border-y-2 dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-screen-xl px-5 py-10 md:px-8">
          <Title icon={IconType.MUSIC_NOTE} className="pb-2">
            {t("FAVORITE_ALBUMS")}
          </Title>
          <ImageList listType="MUSIC" />
        </div>
      </section>

      <section id="Work" className="mx-auto max-w-screen-xl px-5 py-10 md:px-8">
        <Title icon={IconType.BRIEFCASE} className="py-5">
          {t("WORK_EXPERIENCE")}
        </Title>
        <img
          src="/images/experience/MoreApp.webp"
          className="w-22 h-12 px-2 dark:brightness-150"
        />
        <div className="space-y-1 py-2 px-2">
          <Text size="lg" weight="semibold">
            MoreApp
          </Text>
          <Text weight="semibold">
            {getTotalMonths(new Date(2021, 8, 13), new Date())}
          </Text>
          <Text>{`Rotterdam, ${t("SOUTH_HOLLAND")}, ${t("NETHERLANDS")}`}</Text>
          <div className="w-9/10 border-t-2 border-gray-200 dark:border-gray-700 sm:w-72" />
          <div className="space-y-1 pl-3">
            <Text size="lg" weight="semibold">
              Software Engineer
            </Text>
            <Text weight="semibold">Part-time</Text>
            <Text>
              {`Feb 2022 - ${t("PRESENT")} ?? ${getTotalMonths(
                new Date(2022, 1, 21),
                new Date()
              )}`}
            </Text>
            <div className="w-48 border-t-2 border-gray-200 dark:border-gray-700" />
          </div>
          <div className="space-y-1 pl-3">
            <Text size="lg" weight="semibold">
              {t("DEVELOPMENT_INTERN")}
            </Text>
            <Text weight="semibold">{t("INTERNSHIP")}</Text>
            <Text>
              {`Sep 2021 - Feb 2022 ?? ${getTotalMonths(
                new Date(2021, 8, 13),
                new Date(2022, 1, 11)
              )}`}
            </Text>
            <div className="w-48 border-b-2 border-gray-200 dark:border-gray-700" />
          </div>
        </div>
        <Text href="https://moreapp.dev">{t("VISIT_WEBSITE")}</Text>
      </section>

      <section
        id="Education"
        className="bg-gray-100 dark:border-y-2 dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-screen-xl px-5 py-10 md:px-8">
          <Title icon={IconType.LIBRARY} className="py-5">
            {t("EDUCATION")}
          </Title>
          <img src="/images/experience/HR.webp" className="w-22 h-16 px-2" />
          <div className="space-y-1 py-2 px-2 pb-8">
            <Text size="lg">{`Sept. 2019 - ${t("PRESENT")}`}</Text>
            <Text>{t("COMPUTER_SCIENCE")}</Text>
            <Text>{`${t("HOGESCHOOL_ROTTERDAM")}, Rotterdam`}</Text>
            <Text href="https://www.hogeschoolrotterdam.nl/">
              {t("VISIT_WEBSITE")}
            </Text>
          </div>
          <img
            src="/images/experience/Lentiz.webp"
            className="h-12 w-40 px-2"
          />
          <div className="space-y-1 py-2 px-2">
            <Text size="lg">{`Sept. 2012 - ${t("JULY")} 2019`}</Text>
            <Text icon={IconType.ACADEMIC_CAP} iconPosition="right">
              {`${t("VWO")} - ${t("GRADUATED")}`}
            </Text>
            <Text>{"Lentiz Reviuslyceum, Maassluis"}</Text>
            <Text href="https://www.lentiz.nl/reviuslyceum/">
              {t("VISIT_WEBSITE")}
            </Text>
          </div>
        </div>
      </section>

      <section
        id="Skills"
        className="mx-auto max-w-screen-xl px-5 py-10 md:px-8"
      >
        <Title icon={IconType.SPARKLES} className="py-5">
          {t("SKILLS")}
        </Title>
        <Title as="h3" size="lg">
          {t("LANGUAGES")}
        </Title>
        <ImageList listType="LANGUAGES" />
        <Title className="pt-5" as="h3" size="lg">
          {t("OTHER")}
        </Title>
        <ImageList listType="MISC" />
      </section>

      <section
        id="Movies"
        className="bg-gray-100 dark:border-y-2 dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-screen-xl px-5 py-10 md:px-8">
          <Title icon={IconType.FILM} className="pb-2">
            {t("FAVORITE_MOVIES")}
          </Title>
          <ImageList listType="MOVIES" />
        </div>
      </section>

      <section
        id="Games"
        className="mx-auto max-w-screen-xl px-5 py-10 md:px-8"
      >
        <Title icon={IconType.PUZZLE} className="pb-2">
          {t("FAVORITE_GAMES")}
        </Title>
        <ImageList listType="GAMES" />
      </section>
    </Page>
  );
};

export default HomePage;
