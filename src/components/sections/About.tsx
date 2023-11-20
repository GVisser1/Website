import { Section } from "../Section";

export const About = () => {
  const images = [
    { src: "/images/beach.webp", alt: "Beach" },
    { src: "/images/nature.webp", alt: "Nature" },
    { src: "/images/fleet-foxes-2022.webp", alt: "Mallorca" },
  ];

  return (
    <Section id="about" altBackground>
      <div className="flex flex-wrap items-center justify-center gap-8 p-4">
        {images.map((image) => (
          <div
            key={image.alt}
            className="w-72 overflow-hidden rounded-xl odd:-rotate-2 even:rotate-2 sm:rounded-2xl"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-72 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
