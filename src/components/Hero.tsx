import classNames from "classnames";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { getAge } from "../utils/numberUtil";

export const Hero = () => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const classes = classNames(
    "h-[600px] pt-12 flex flex-col items-center gap-y-4 text-center transition-all",
    "bg-gray-700/60 dark:bg-gray-800/70 bg-cover bg-center bg-no-repeat bg-blend-hue dark:bg-blend-saturation",
    "bg-[url('/images/rdam.webp')] sm:bg-[url('/images/rdam-m.webp')]"
  );

  return (
    <motion.section
      id="intro"
      variants={container}
      initial="hidden"
      animate="show"
      className={classes}
    >
      <motion.h1
        variants={item}
        className="text-5xl font-bold text-white underline sm:text-6xl lg:text-7xl"
      >
        {t("HOME_TITLE")}
      </motion.h1>
      <motion.h2 variants={item} className="text-2xl font-semibold text-white sm:text-3xl">
        {t("HOME_SUBTITLE", { age: getAge(new Date(2000, 3, 21)) })}
      </motion.h2>
      <motion.img
        variants={item}
        src="/images/profile-2.webp"
        className="h-60 w-60 rounded-full shadow-lg shadow-current md:h-64 md:w-64"
        alt="Glenn large profile"
      />
    </motion.section>
  );
};
