import { FC } from "react";
import { IconType } from "../components/Icon";
import ImageList from "../components/ImageList";
import Page from "../components/Page";
import SocialIcons from "../components/SocialIcons";
import Text from "../components/Text";
import { Title } from "../components/Title";
import { useTranslation } from "react-i18next";
import PersonalInfo from "../components/PersonalInfo";

const HomePage: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative flex h-screen">
      <Page>
        <div className="overflow-y-auto">
          <section
            id="Intro"
            className="mx-auto flex max-w-screen-3xl flex-col items-center justify-center space-y-2 bg-[url('/images/personal/GlennMain.jpg')] bg-cover bg-top px-5 py-10 text-center md:px-8"
          >
            <Title
              as="h1"
              size="4xl"
              color="white"
              className="rounded-lg bg-black/30 p-2"
            >
              {t("HOME_GREETING")}
            </Title>
            <div className="w-64 pt-96 md:w-72">
              <Text
                color="all-white"
                className="rounded-lg bg-black/30 p-2 md:text-base"
              >
                {t("HOME_BIO")}
              </Text>
            </div>
            <PersonalInfo />
            <SocialIcons />
          </section>
          <section id="About" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
            <Title icon={IconType.USER_CIRCLE} className="py-5">
              {t("ABOUT")}
            </Title>
            <div className="space-y-4 pb-8 pl-2">
              <Text size="md">{t("ABOUT_CONTENT_1")}</Text>
              <Text size="md">{t("ABOUT_CONTENT_2")}</Text>
              <Text size="md">{t("ABOUT_CONTENT_3")}</Text>
            </div>
          </section>
          <section
            id="Music"
            className="bg-gray-100 dark:border-y-2 dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="mx-auto max-w-5xl px-5 py-10 md:px-8">
              <div className="py-2 pl-2">
                <Title icon={IconType.MUSIC_NOTE} className="pb-2">
                  {t("FAVORITE_ALBUMS")}
                </Title>
                <ImageList listType="MUSIC" />
              </div>
            </div>
          </section>
          <section id="Work" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
            <Title icon={IconType.BRIEFCASE} className="py-5">
              {t("WORK_EXPERIENCE")}
            </Title>
            <img
              src="images/experience/MoreApp.png"
              className="w-22 h-12 px-2 dark:brightness-150"
            />
            <div className="space-y-1 py-2 pb-8 pl-2">
              <Text size="lg">{`Sept. 2021 - ${t("PRESENT")}`}</Text>
              <Text>{t("DEVELOPMENT_INTERN")}</Text>
              <Text>{"MoreApp, Rotterdam"}</Text>
              <Text href="https://moreapp.dev">{t("VISIT_WEBSITE")}</Text>
            </div>
          </section>
          <section
            id="Education"
            className="bg-gray-100 dark:border-y-2 dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="mx-auto max-w-5xl px-5 py-10 md:px-8">
              <Title icon={IconType.LIBRARY} className="py-5">
                {t("EDUCATION")}
              </Title>
              <img src="images/experience/HR.png" className="w-22 h-16 px-2" />
              <div className="space-y-1 py-2 pb-8 pl-2">
                <Text size="lg">{`Sept. 2019 - ${t("PRESENT")}`}</Text>
                <Text>{t("COMPUTER_SCIENCE")}</Text>
                <Text>{`${t("HOGESCHOOL_ROTTERDAM")}, Rotterdam`}</Text>
                <Text href="https://www.hogeschoolrotterdam.nl/">
                  {t("VISIT_WEBSITE")}
                </Text>
              </div>
              <img
                src="images/experience/Lentiz.png"
                className="h-12 w-40 px-2"
              />
              <div className="space-y-1 py-2 pl-2">
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
          <section id="Skills" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
            <div className="space-y-2 py-2 pl-2">
              <Title icon={IconType.SPARKLES} className="py-5">
                {t("SKILLS")}
              </Title>
              <Title as="h3" size="lg">
                {t("LANGUAGES")}
              </Title>
              <ImageList listType="LANGUAGES" />
              <Title as="h3" size="lg">
                {t("OTHER")}
              </Title>
              <ImageList listType="MISC" />
            </div>
          </section>
          <section
            id="Movies"
            className="bg-gray-100 dark:border-y-2 dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="mx-auto max-w-5xl px-5 py-10 md:px-8">
              <div className="py-2 pl-2">
                <Title icon={IconType.FILM} className="pb-2">
                  {t("FAVORITE_MOVIES")}
                </Title>
                <ImageList listType="MOVIES" />
              </div>
            </div>
          </section>
          <section id="Games" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
            <div className="py-2 pl-2">
              <Title icon={IconType.PUZZLE} className="pb-2">
                {t("FAVORITE_GAMES")}
              </Title>
              <ImageList listType="GAMES" />
            </div>
          </section>
        </div>
      </Page>
    </section>
  );
};

export default HomePage;
