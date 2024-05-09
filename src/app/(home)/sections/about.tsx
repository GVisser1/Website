import Image from "next/image";
import Section from "../../../components/section";

const images = [
  { src: "/images/beach.webp", alt: "Beach" },
  { src: "/images/nature.webp", alt: "Nature" },
  { src: "/images/fleet-foxes-2022.webp", alt: "Fleet Foxes Concert" },
];

const About = (): JSX.Element => (
  <Section id="about" className="flex flex-wrap items-center justify-center gap-8 px-4">
    {images.map((image) => (
      <div key={image.alt} className="w-72 overflow-hidden rounded-xl odd:-rotate-2 even:rotate-2 sm:rounded-2xl">
        <Image
          height={0}
          width={0}
          sizes="100vw"
          src={image.src}
          alt={image.alt}
          priority
          className="h-72 w-full object-cover"
        />
      </div>
    ))}
  </Section>
);

export default About;
