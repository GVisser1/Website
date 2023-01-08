import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Text } from "./Text";
import { Title } from "./Title";

export const About = () => {
  const { t } = useTranslation();

  const images = [
    { src: "/images/beach.webp", alt: "Beach" },
    { src: "/images/nature.webp", alt: "Nature" },
    { src: "/images/mallorca.webp", alt: "Mallorca" },
  ];

  return (
    <section id="about" className="mx-auto max-w-screen-lg space-y-16 px-5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <Title size="5xl" className="text-center underline decoration-blue-400 underline-offset-4">
          {t("ABOUT_ME")}
        </Title>
        <Text className="text-center" size="lg">
          {t("ABOUT_CONTENT")}
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="scrollbar flex gap-x-8 overflow-x-auto p-4"
      >
        {images.map((image) => (
          <div
            key={image.alt}
            className="aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 shadow-md shadow-black odd:-rotate-2 even:rotate-2 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};
