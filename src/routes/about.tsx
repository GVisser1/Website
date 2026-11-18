import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import type { JSX } from "react";
import Image from "@/components/image";
import { MAIN_PAGES } from "@/constants";
import { BlogContent, BlogFooter, BlogHeader, BlogParagraph, BlogSection } from "../components/blog";
import InlineLink from "../components/inlineLink";
import Page from "../components/page";

const PAGE = MAIN_PAGES.about;

const INTRODUCTION_PHOTOS = [
  { name: "FJM", width: 975, height: 1359 },
  { name: "paddington", width: 975, height: 1307 },
  { name: "beach", width: 1128, height: 1485 },
];
const SMALL_PHOTO_WIDTH = 480;
// How wide each photo is shown: a third of the page from tablet up (at most 384px), and half the page on phones
const INTRODUCTION_PHOTO_SIZES = "(min-width: 1280px) 384px, (min-width: 768px) 30vw, calc(50vw - 32px)";

// Three in a row from tablet up. On phones a collage instead: the first photo fills the left column and the other two
// stack on the right, so the photos stay a decent size without scrolling sideways
const IntroductionPhotos = (): JSX.Element => (
  <div className="col-span-full mt-5 grid h-80 grid-cols-2 grid-rows-2 gap-4 tablet:h-auto tablet:grid-cols-3 tablet:grid-rows-none">
    {INTRODUCTION_PHOTOS.map((photo, index) => (
      <Image
        key={photo.name}
        src={`/images/${photo.name}.webp`}
        srcSet={`/images/${photo.name}-${SMALL_PHOTO_WIDTH}.webp ${SMALL_PHOTO_WIDTH}w, /images/${photo.name}.webp ${photo.width}w`}
        sizes={INTRODUCTION_PHOTO_SIZES}
        width={photo.width}
        height={photo.height}
        alt=""
        priority={true}
        className={clsx(
          "size-full rounded-lg object-cover tablet:aspect-square",
          index === 0 && "row-span-2 tablet:row-span-1",
        )}
      />
    ))}
  </div>
);

const AboutPage = (): JSX.Element => (
  <Page>
    <section id="introduction" className="my-10 grid grid-cols-4 items-center gap-x-10 gap-y-2">
      <h1 className="col-span-full font-heading text-title text-primary">{PAGE.name}</h1>
      <p className="col-span-full text-body text-secondary tablet:col-span-3">
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
          designs. This mostly comes down to building random side-projects, such as this website.
        </BlogParagraph>
      </BlogSection>

      <BlogSection
        id="music"
        image={{ src: "/images/fleetFoxes.webp", alt: "Fleet Foxes concert", width: 931, height: 1241 }}
      >
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

      <BlogSection
        id="movies"
        image={{ src: "/images/the-holdovers.webp", alt: "The Holdovers", width: 1200, height: 650 }}
      >
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

      <BlogSection
        id="gaming"
        image={{ src: "/images/persona5.webp", alt: "Persona 5 Royal", width: 1014, height: 640 }}
      >
        <BlogHeader>Gaming</BlogHeader>
        <BlogParagraph>
          I have been gaming ever since I got my Gameboy at age 7. This naturally transitioned into playing GTA: San
          Andreas at a way too early of an age.
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
