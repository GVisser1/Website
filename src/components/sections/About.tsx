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
    <Section id="about" title={{ text: t("ABOUT_ME") }} altBackground>
      <Text color="medium" className="text-justify" size="lg">
        {t("ABOUT_CONTENT")}
      </Text>
      <div className="scrollbar flex gap-x-8 overflow-x-auto p-4">
        {images.map((image) => (
          <div
            key={image.alt}
            className="w-44 overflow-hidden rounded-xl odd:-rotate-2 even:rotate-2 sm:w-72 sm:rounded-2xl"
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
