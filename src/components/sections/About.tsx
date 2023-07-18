import { useTranslation } from "react-i18next";
import { Section } from "../Section";
import { Text } from "../Text";

export const About = () => {
  const { t } = useTranslation();

  const images = [
    { src: "/images/beach.webp", alt: "Beach" },
    { src: "/images/nature.webp", alt: "Nature" },
    { src: "/images/mallorca.webp", alt: "Mallorca" },
  ];

  return (
    <Section size="md" id="about" title={t("ABOUT_ME")}>
      <Text className="text-justify" size="lg">
        {t("ABOUT_CONTENT")}
      </Text>
      <div className="scrollbar flex gap-x-8 overflow-x-auto p-4">
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
      </div>
    </Section>
  );
};
