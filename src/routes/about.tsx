import { createFileRoute } from "@tanstack/react-router";
import type { JSX } from "react";
import {
  BlogContent,
  BlogFooter,
  BlogHeader,
  BlogParagraph,
  BlogSection,
} from "../components/blog";
import Header from "../components/header";
import InlineLink from "../components/inlineLink";
import Page from "../components/page";

// export const metadata: Metadata = {
//   title: "About me",
//   description: "Learn more about me and my interests, hobbies, and professional life",
// };

const AboutPage = (): JSX.Element => (
  <Page>
    <Header
      title="About me"
      description="Learn more about me and my love for games, music, and movies"
    />

    <BlogContent>
      <BlogSection
        id="introduction"
        image={{ src: "/images/beach.webp", alt: "", align: "right", priority: true }}
      >
        <BlogHeader>Hi there!</BlogHeader>
        <BlogParagraph>
          You seem to want to know more about me. Well, I am a QA Engineer and a huge nerd. I spend
          my work days ensuring the quality of software, and in my free time, I love listening to
          music, watching movies, playing games, and coding.
        </BlogParagraph>
      </BlogSection>

      <BlogSection
        id="music"
        image={{ src: "/images/fleetFoxes.webp", alt: "Fleet Foxes concert", align: "left" }}
      >
        <BlogHeader>Music</BlogHeader>
        <BlogParagraph>
          Music is probably my biggest hobby. It is never quiet in my house; there is always music
          playing. I am currently listening to a lot of Nine Inch Nails, Viagra Boys, Clipse, and
          Bob Dylan.
        </BlogParagraph>
        <BlogParagraph>
          Attending concerts is also a big passion of mine. I go to dozens of concerts each year,
          and while it is not great for my wallet, it is absolutely worth it.
        </BlogParagraph>
        <BlogParagraph>
          You can check out my{" "}
          <InlineLink href="https://open.spotify.com/user/iglenn2345">Spotify</InlineLink> and{" "}
          <InlineLink href="https://last.fm/user/instaglenn">LastFM</InlineLink> if you are curious
          about my music taste.
        </BlogParagraph>
      </BlogSection>

      <BlogSection
        id="movies"
        image={{ src: "/images/the-holdovers.webp", alt: "The Holdovers", align: "right" }}
      >
        <BlogHeader>Movies</BlogHeader>
        <BlogParagraph>
          Another expensive hobby of mine is watching movies. I have a growing Blu-ray collection
          and go to the cinema almost every week.
        </BlogParagraph>
        <BlogParagraph>
          It is impossible to pick a favourite movie; there are too many movies that have changed my
          life in one way or another. A few recent favourites, however, are The Holdovers, One
          Battle After Another, and Sing Sing.
        </BlogParagraph>
        <BlogParagraph>
          You can find my movie ratings and occasional reviews on{" "}
          <InlineLink href="https://letterboxd.com/gvisser/">Letterboxd</InlineLink>.
        </BlogParagraph>
      </BlogSection>

      <BlogSection
        id="gaming"
        image={{ src: "/images/persona5.webp", alt: "Persona 5 Royal", align: "left" }}
      >
        <BlogHeader>Gaming</BlogHeader>
        <BlogParagraph>
          I have been gaming ever since I got my Gameboy at age 7. The first game I remember loving
          was Pokémon LeafGreen, which might explain why I now know the names of around 800 Pokémon
          by hard. This naturally transitioned into playing GTA: San Andreas at a way too early of
          an age.
        </BlogParagraph>
        <BlogParagraph>
          These days I game more than ever. A few of my favourite games include: Persona 5 Royal,
          Bloodborne, Yakuza 0, The Witcher 3, and Resident Evil 4.
        </BlogParagraph>
      </BlogSection>

      <BlogSection id="professional-life">
        <BlogHeader>Professional Life</BlogHeader>
        <BlogParagraph>
          In my professional life, I am a Quality Assurance Engineer. At{" "}
          <InlineLink href="https://moreapp.com">MoreApp</InlineLink>. I am responsible for ensuring
          quality of the software, maintaining testing processes, and writing automated tests using{" "}
          <InlineLink href="https://playwright.dev">Playwright</InlineLink>. I love working closely
          with developers, UX designers, and the Product Owner to ensure our projects meets the
          requirements and expectations of our users.
        </BlogParagraph>
        <BlogParagraph>
          Programming is not only a key part of my job, but a hobby as well. I enjoy solving
          problems and front-ending designs with{" "}
          <InlineLink href="https://tailwindcss.com">TailwindCSS</InlineLink>. This mostly comes
          down to building random side-projects, such as the{" "}
          <InlineLink href="/projects/pokemon">Pokémon page</InlineLink> on this site.
        </BlogParagraph>
      </BlogSection>
    </BlogContent>
    <BlogFooter id="contact">
      <BlogParagraph>
        Feel free to reach out if you want to chat about music, movies, gaming, programming, or
        anything else that sparks your interest. You can find me on{" "}
        <InlineLink href="https://instagram.com/instaglenn_">Instagram</InlineLink>, and{" "}
        <InlineLink href="https://linkedin.com/in/g-visser">LinkedIn</InlineLink>.
      </BlogParagraph>
    </BlogFooter>
  </Page>
);

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
