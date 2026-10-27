import { createFileRoute } from "@tanstack/react-router";
import type { JSX } from "react";
import { useMediaQuery } from "usehooks-ts";
import Image from "@/components/image";
import { MAIN_PAGES, PROJECT_PAGES } from "@/constants";
import { BlogContent, BlogFooter, BlogHeader, BlogParagraph, BlogSection } from "../components/blog";
import InlineLink from "../components/inlineLink";
import Page from "../components/page";

const PAGE = MAIN_PAGES.about;

// Below the tablet breakpoint the photos scroll horizontally, so the strip needs to be reachable by keyboard
const MOBILE_QUERY = "(max-width: 767.98px)";

const IntroductionPhotos = (): JSX.Element => {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const scrollableRegionProps = isMobile ? { tabIndex: 0, role: "region", "aria-label": "Photos" } : {};

  return (
    <div
      {...scrollableRegionProps}
      className="col-span-full -mx-6 mt-5 no-scrollbar flex snap-x snap-mandatory scroll-px-6 gap-x-4 overflow-x-auto px-6 focus-visible:focus-ring tablet:mx-0 tablet:grid tablet:grid-cols-3 tablet:overflow-visible tablet:px-0"
    >
      <Image
        src="/images/FJM.webp"
        alt=""
        priority={true}
        className="h-80 w-1/2 shrink-0 snap-start rounded-lg object-cover tablet:aspect-square tablet:size-full"
      />
      <Image
        src="/images/paddington.webp"
        alt=""
        priority={true}
        className="h-80 w-1/2 shrink-0 snap-start rounded-lg object-cover tablet:aspect-square tablet:size-full"
      />
      <Image
        src="/images/beach.webp"
        alt=""
        priority={true}
        className="h-80 w-1/2 shrink-0 snap-start rounded-lg object-cover tablet:aspect-square tablet:size-full"
      />
    </div>
  );
};

const AboutPage = (): JSX.Element => (
  <Page>
    <section id="introduction" className="my-10 grid grid-cols-4 items-center gap-x-10 gap-y-2">
      <h1 className="col-span-full text-header-4xl text-primary">{PAGE.name}</h1>
      <p className="col-span-full text-base-regular text-secondary tablet:col-span-3">
        You seem to want to know more about me. Well, I am a QA Engineer and a huge nerd. I spend my work days ensuring
        the quality of software, and in my free time, I love listening to music, watching movies, playing games, and
        coding.
      </p>
      <IntroductionPhotos />
    </section>

    <BlogContent>
      <BlogSection id="professional-life">
        <BlogHeader>Professional Life</BlogHeader>
        <BlogParagraph>
          In my professional life, I am a Quality Assurance Engineer. At{" "}
          <InlineLink href="https://moreapp.com">MoreApp</InlineLink>, I am responsible for ensuring quality of the
          software, maintaining testing processes, and writing automated tests using{" "}
          <InlineLink href="https://playwright.dev">Playwright</InlineLink>. I love working closely with developers, UX
          designers, and the Product Owner to ensure our projects meets the requirements and expectations of our users.
        </BlogParagraph>
        <BlogParagraph>
          Programming is not only a key part of my job, but a hobby as well. I enjoy solving problems and front-ending
          designs. This mostly comes down to building random side-projects, such as the{" "}
          <InlineLink href={PROJECT_PAGES.pokemon.href}>Pokémon page</InlineLink> on this site.
        </BlogParagraph>
      </BlogSection>

      <BlogSection id="music" image={{ src: "/images/fleetFoxes.webp", alt: "Fleet Foxes concert", align: "right" }}>
        <BlogHeader>Music</BlogHeader>
        <BlogParagraph>
          Music is probably my biggest hobby. It is never quiet in my house; there is always music playing. I am
          currently listening to a lot of Nine Inch Nails, Viagra Boys, Clipse, and Bob Dylan.
        </BlogParagraph>
        <BlogParagraph>
          Attending concerts is also a big passion of mine. I go to dozens of concerts each year, and while it is not
          great for my wallet, it is absolutely worth it.
        </BlogParagraph>
        <BlogParagraph>
          You can check out my <InlineLink href="https://open.spotify.com/user/iglenn2345">Spotify</InlineLink> and{" "}
          <InlineLink href="https://last.fm/user/instaglenn">LastFM</InlineLink> if you are curious about my music
          taste.
        </BlogParagraph>
      </BlogSection>

      <BlogSection id="movies" image={{ src: "/images/the-holdovers.webp", alt: "The Holdovers", align: "left" }}>
        <BlogHeader>Movies</BlogHeader>
        <BlogParagraph>
          Another expensive hobby of mine is watching movies. I have a growing Blu-ray collection and go to the cinema
          almost every week.
        </BlogParagraph>
        <BlogParagraph>
          It is impossible to pick a favourite movie; there are too many movies that have changed my life in one way or
          another. A few recent favourites, however, are The Holdovers, One Battle After Another, and Sing Sing.
        </BlogParagraph>
        <BlogParagraph>
          You can find my movie ratings and occasional reviews on{" "}
          <InlineLink href="https://letterboxd.com/gvisser/">Letterboxd</InlineLink>.
        </BlogParagraph>
      </BlogSection>

      <BlogSection id="gaming" image={{ src: "/images/persona5.webp", alt: "Persona 5 Royal", align: "right" }}>
        <BlogHeader>Gaming</BlogHeader>
        <BlogParagraph>
          I have been gaming ever since I got my Gameboy at age 7. The first game I remember loving was Pokémon
          LeafGreen, which might explain why I now know the names of around 800 Pokémon by hard. This naturally
          transitioned into playing GTA: San Andreas at a way too early of an age.
        </BlogParagraph>
        <BlogParagraph>
          These days I game more than ever. A few of my favourite games include: Persona 5 Royal, Bloodborne, Yakuza 0,
          The Witcher 3, and Resident Evil 4.
        </BlogParagraph>
      </BlogSection>
    </BlogContent>

    <BlogFooter id="contact">
      <BlogParagraph>
        Feel free to reach out if you want to chat about music, movies, gaming, programming, or anything else that
        sparks your interest. You can find me on{" "}
        <InlineLink href="https://instagram.com/instaglenn_">Instagram</InlineLink>, and{" "}
        <InlineLink href="https://linkedin.com/in/g-visser">LinkedIn</InlineLink>.
      </BlogParagraph>
    </BlogFooter>
  </Page>
);

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: PAGE.meta.title }, { name: "description", content: PAGE.meta.description }],
  }),
});
