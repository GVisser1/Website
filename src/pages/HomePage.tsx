import { FC } from "react";
import { IconType } from "../components/Icon";
import ImageList from "../components/ImageList";
import Page from "../components/Page";
import SocialIcons from "../components/SocialIcons";
import Text from "../components/Text";
import { Title } from "../components/Title";
import PersonalInfo from "../components/PersonalInfo";

const HomePage: FC = () => {
  return (
    <section className="relative flex h-screen">
      <Page>
        <div className="overflow-y-auto">
          <section
            id="Intro"
            className="max-w-screen-3xl mx-auto px-5 md:px-8 py-10 space-y-2 flex flex-col justify-center items-center text-center bg-main bg-top bg-cover"
          >
            <Title
              as="h1"
              size="4xl"
              color="white"
              className="rounded-lg bg-black/30 p-2"
            >
              HOME_GREETING
            </Title>
            <div className="pt-96">
              <Text className="w-80 rounded-lg bg-black/30 p-2 md:text-base">
                HOME_BIO
              </Text>
            </div>
            <PersonalInfo />
            <SocialIcons />
          </section>
          <section id="About" className="max-w-5xl mx-auto px-5 py-10 md:px-8">
            <Title icon={IconType.USER_CIRCLE} className="py-5">
              ABOUT
            </Title>
            <div className="pb-8 pl-2 space-y-4">
              <Text size="md">ABOUT_CONTENT_1</Text>
              <Text size="md">ABOUT_CONTENT_2</Text>
              <Text size="md">ABOUT_CONTENT_3</Text>
            </div>
          </section>
          <section id="Music" className="bg-gray-100">
            <div className="max-w-5xl mx-auto px-5 py-10 md:px-8">
              <div className="py-2 pl-2">
                <Title icon={IconType.MUSIC_NOTE} className="pb-2">
                  FAVORITE_ALBUMS
                </Title>
                <ImageList listType="MUSIC" />
              </div>
            </div>
          </section>
          <section id="Work" className="max-w-5xl mx-auto px-5 py-10 md:px-8">
            <Title icon={IconType.BRIEFCASE} className="py-5">
              WORK_EXPERIENCE
            </Title>
            <img src="Assets/Images/MoreApp.png" className="px-2 w-22 h-12" />
            <div className="py-2 pb-8 pl-2 space-y-1">
              <Text size="lg">Sept. 2021 - PRESENT</Text>
              <Text>DEVELOPMENT_INTERN</Text>
              <Text>MoreApp, Rotterdam</Text>
              <Text href="https://moreapp.dev">VISIT_WEBSITE</Text>
            </div>
          </section>
          <section id="Education" className="bg-gray-100">
            <div className="max-w-5xl mx-auto px-5 py-10 md:px-8">
              <Title icon={IconType.LIBRARY} className="py-5">
                EDUCATION
              </Title>
              <img src="Assets/Images/HR.png" className="px-2 w-22 h-16" />
              <div className="py-2 pb-8 pl-2 space-y-1">
                <Text size="lg">Sept. 2019 - PRESENT</Text>
                <Text>COMPUTER_SCIENCE</Text>
                <Text>HOGESCHOOL_ROTTERDAM, Rotterdam</Text>
                <Text href="https://www.hogeschoolrotterdam.nl/">
                  VISIT_WEBSITE
                </Text>
              </div>
              <img src="Assets/Images/Lentiz.png" className="px-2 w-40 h-12" />
              <div className="py-2 pl-2 space-y-1">
                <Text size="lg">Sept. 2012 - JULY 2019</Text>
                <Text icon={IconType.ACADEMIC_CAP} iconPosition="right">
                  VWO - GRADUATED
                </Text>
                <Text>{"Lentiz Reviuslyceum, Maassluis"}</Text>
                <Text href="https://www.lentiz.nl/reviuslyceum/">
                  VISIT_WEBSITE
                </Text>
              </div>
            </div>
          </section>
          <section id="Skills" className="max-w-5xl mx-auto px-5 py-10 md:px-8">
            <div className="py-2 pl-2 space-y-2">
              <Title icon={IconType.SPARKLES} className="py-5">
                SKILLS
              </Title>
              <Title as="h3" size="lg">
                LANGUAGES
              </Title>
              <ImageList listType="LANGUAGES" />
              <Title as="h3" size="lg">
                OTHER
              </Title>
              <ImageList listType="MISC" />
            </div>
          </section>
          <section id="Movies" className="bg-gray-100">
            <div className="max-w-5xl mx-auto px-5 py-10 md:px-8">
              <div className="py-2 pl-2">
                <Title icon={IconType.FILM} className="pb-2">
                  FAVORITE_MOVIES
                </Title>
                <ImageList listType="MOVIES" />
              </div>
            </div>
          </section>
          <section id="Games" className="max-w-5xl mx-auto px-5 py-10 md:px-8">
            <div className="py-2 pl-2">
              <Title icon={IconType.PUZZLE} className="pb-2">
                FAVORITE_GAMES
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
