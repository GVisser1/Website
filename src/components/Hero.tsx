import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getAge } from "../utils/numberUtil";

export const Hero = () => {
  const { t } = useTranslation();

  return (
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
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-gray-700 underline sm:text-6xl lg:text-7xl"
          >
            {t("HOME_TITLE")}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-gray-700"
          >
            {t("HOME_SUBTITLE", { age: getAge(new Date(2000, 3, 21)) })}
          </motion.h2>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            src="/images/GlennProfile2.webp"
            className="h-60 w-60 rounded-full object-cover shadow-lg shadow-current md:h-64 md:w-64"
            alt="Glenn large profile"
          />
        </div>
      </div>
    </section>
  );
};
