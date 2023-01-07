import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Text } from "../components/Text";
import { Timeline } from "../components/Timeline";
import TimeLineData from "../data/TimelineData";
import { Title } from "../components/Title";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { About } from "../components/About";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Contact />

      <section
        id="movies"
        className="mx-auto flex max-w-screen-lg items-center justify-center gap-x-8 pb-20"
      >
        <div className="group relative aspect-[7/10] flex-none overflow-hidden rounded-xl shadow-lg">
          <img
            className="h-full w-full transition duration-300 group-hover:scale-105"
            src="/images/c-mon-c-mon.jpeg"
            alt="C'mon C'mon"
          />
          <div className="absolute inset-0 h-full w-full bg-gray-900/75 opacity-0 transition duration-300 group-hover:opacity-100 ">
            <Text
              size="xl"
              weight="semibold"
              className="flex h-full items-center justify-center"
              color="all-white"
            >
              C'mon C'mon
            </Text>
          </div>
        </div>
        {/* <img
        className="rounded-xl border"
        src="/images/eternal-sunshine.jpeg"
        alt="Eternal sunshine of the spotless mind"
      />
      <img className="rounded-xl border" src="/images/paddington-2.jpeg" alt="Paddington 2" />
      <img
        className="rounded-xl border"
        src="/images/blade-runner-2049.jpeg"
        alt="Blade Runner 2049"
      /> */}
      </section>
    </>
  );
};

export default HomePage;
