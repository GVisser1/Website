import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Text } from "./Text";
import { Title } from "./Title";

export const About = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      id="about"
      className="relative mx-auto max-w-screen-md space-y-8 px-5 pb-36 pt-4 md:px-8"
    >
      <Title size="5xl" className="text-center underline decoration-blue-400 underline-offset-4">
        {t("ABOUT_ME")}
      </Title>
      <Text className="mx-5" size="md">
        {t("ABOUT_CONTENT")}
      </Text>

      <div className="flex justify-center gap-x-5 overflow-hidden py-4 scrollbar-none sm:gap-x-8">
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
    </motion.section>
  );
};
