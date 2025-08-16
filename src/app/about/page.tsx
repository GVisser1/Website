import Image from "next/image";
import beach from "../../../public/images/beach.webp";
import persona5 from "../../../public/images/persona5.webp";
import fleetFoxes from "../../../public/images/fleetFoxes.webp";
import type { Metadata } from "next/types";
import type { JSX } from "react";
import Header from "../../components/header";
import InlineLink from "../../components/inlineLink";
import Divider from "../../components/divider";
import Page from "../../components/page";
import { BlogContent, BlogParagraph, BlogSection, BlogHeader } from "../../components/blog";

export const metadata: Metadata = {
  title: "About me",
  description: "Learn more about me and my interests, hobbies, and professional life",
};

const AboutPage = (): JSX.Element => (
  <Page>
    <Header title="About me" description="Learn more about me and my interests" />

    <BlogContent>
      <BlogSection id="introduction">
        <Image src={beach} alt="Me at the beach" priority className="max-h-96 w-full rounded-lg object-cover" />
        <BlogParagraph>
          Hi! I'm a QA Engineer and a huge nerd. I spend my work days ensuring the quality of software, and in my free
          time, I love listening to music, watching films, playing games, and coding. Here’s a bit about what I enjoy:
        </BlogParagraph>
      </BlogSection>

      <BlogSection id="music">
        <BlogHeader>Music</BlogHeader>
        <BlogParagraph>
          The one thing I do everyday is listening to music and exploring different genres and artists. Collecting vinyl
          records and attending concerts are some of my favourite pastimes. If you're curious about my musical tastes,
          check out my playlists and listening history on{" "}
          <InlineLink href="https://open.spotify.com/user/iglenn2345">Spotify</InlineLink> and{" "}
          <InlineLink href="https://last.fm/user/instaglenn">LastFM</InlineLink>.
        </BlogParagraph>
        <BlogParagraph>
          Going to concerts is a passion of mine. Every year, I try to attend as many as possible, and while it's not
          great for my wallet, it's absolutely worth it. I've been fortunate enough to see some of my favourite artists
          live, such as Fleet Foxes, The National, and Kendrick Lamar.
        </BlogParagraph>
        <Image src={fleetFoxes} alt="Fleet Foxes" className="max-h-96 w-full rounded-lg object-cover" />
      </BlogSection>

      <BlogSection id="movies-and-shows">
        <BlogHeader>Movies and Shows</BlogHeader>
        <BlogParagraph>
          I love watching movies and TV shows, and I have a growing collection of Blu-rays. From timeless classics to
          the latest blockbusters, I enjoy exploring different genres and directors. I am always up for a good horror
          movie, so if you have any recommendations, feel free to share them with me. You can find my movie ratings and
          reviews on <InlineLink href="https://letterboxd.com/gvisser/">Letterboxd</InlineLink>.
        </BlogParagraph>
        <BlogParagraph>
          Some of my all-time favourite films include masterpieces like <i>Paddington 2</i>, <i>The Holdovers</i>, and{" "}
          <i>Succession</i>.
        </BlogParagraph>
        <BlogParagraph>
          I also love going to the movies, often multiple times a month. Experiencing a film on the big screen is a
          special experience that I always look forward to. But when the theatre is filled with people who can't stop
          talking or using their phones, I'd rather watch the movie at home. Luckily, this doesn't happen that often.
        </BlogParagraph>
      </BlogSection>

      <BlogSection id="gaming">
        <BlogHeader>Gaming</BlogHeader>
        <BlogParagraph>
          Gaming is a big part of my life. I play a wide variety of games, from 3D platformers and open-world games to
          RPGs and first-person shooters. My favourite games are those with an engaging story or gameplay.
        </BlogParagraph>
        <BlogParagraph>
          A few of my favourite games are <i>Persona 5 Royal</i>, <i>Bloodborne</i>, <i>Super Mario Galaxy</i>,{" "}
          <i>The Witcher 3</i>, and <i>Resident Evil 4</i>.
        </BlogParagraph>
        <Image src={persona5} alt="Persona 5" className="max-h-80 w-full rounded-lg object-cover object-top" />
      </BlogSection>

      <BlogSection id="professional-life">
        <BlogHeader>Professional Life</BlogHeader>
        <BlogParagraph>
          In my professional life, I'm a dedicated QA Engineer. At{" "}
          <InlineLink href="https://moreapp.com">MoreApp</InlineLink>. I am responsible for ensuring quality of the
          software, maintaining testing processes, and writing requirements. I love working closely with developers, UX
          designers, and the Product Owner to ensure our projects meets the requirements and expectations of our users.
          Being part of a team that values collaboration and innovation is something I truly appreciate.
        </BlogParagraph>
        <BlogParagraph>
          Programming is not only a key part of my job, but a hobby as well. I enjoy solving problems, front-ending
          designs with <InlineLink href="https://tailwindcss.com">TailwindCSS</InlineLink>, or writing automated tests
          using <InlineLink href="https://playwright.dev">Playwright</InlineLink>.
        </BlogParagraph>
      </BlogSection>

      <Divider />

      <footer id="contact">
        <BlogParagraph>
          Feel free to reach out if you want to chat about music, movies, gaming, programming, or anything else that
          sparks your interest. You can find me on{" "}
          <InlineLink href="https://instagram.com/instaglenn_">Instagram</InlineLink>, and{" "}
          <InlineLink href="https://linkedin.com/in/g-visser">LinkedIn</InlineLink>.
        </BlogParagraph>
      </footer>
    </BlogContent>
  </Page>
);

export default AboutPage;
