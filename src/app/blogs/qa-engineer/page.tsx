import type { JSX } from "react";
import Header from "../../../components/header";
import Image from "../../../components/image";
import InlineLink from "../../../components/inlineLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My first 2 years as a Quality Assurance Engineer",
  description: "How I shaped the QA role from the ground up at a growing tech company",
};

const QAEngineerBlogPage = (): JSX.Element => (
  <>
    <Header
      title="My first 2 years as a Quality Assurance Engineer"
      description="How I shaped the QA role from the ground up at a growing tech company"
      topLink={{ href: "/blogs", label: "Back to blogs" }}
    />

    <div className="prose dark:prose-invert">
      <p>
        During my graduation internship, I discovered a passion for finding and reporting bugs. After graduating, I was
        offered a position as a QA Engineer at <InlineLink href="https://moreapp.com/">MoreApp</InlineLink>, an
        opportunity I gladly accepted. I had no idea what to expect, but I was excited to start my career in a field
        that genuinely intrigued me.
      </p>
      <p>
        Over the past two years, I’ve learned a lot about Quality Assurance and how it fits into the software
        development process. I’ve also had the chance to work with some incredible people and help define what QA means
        at MoreApp.
      </p>

      <h2>Building QA from Scratch</h2>
      <p>
        Becoming MoreApp’s first QA Engineer meant facing the unique challenge of building an entire branch from the
        ground up. There were no established QA processes, no test cases, and no predecessor to guide me. While this
        might have seemed intimidating, it quickly became an invaluable opportunity. I was able to shape the role in my
        own way by implementing quality assurance into every stage of the product lifecycle, including design,
        development, planning, and release.
      </p>

      <h2>What My Day-to-Day Looks Like</h2>
      <p>
        No two days in QA look the same. Some days I’m writing end-to-end tests in{" "}
        <InlineLink href="https://playwright.dev/">Playwright</InlineLink>; other days I’m manually testing new
        features, bug fixes, and improvements. I collaborate closely with developers, product owners, and designers to
        ensure we’re not just building things right, but building the right things.
      </p>
      <p>
        My role also involves writing requirements, reviewing designs in{" "}
        <InlineLink href="https://www.figma.com/">Figma</InlineLink>, and making sure our applications are accessible to
        everyone. I work with the content team to ensure translations are clear, accurate, and user-friendly.
      </p>
      <p>
        QA at MoreApp is a deeply collaborative effort. I’m involved in every stage of the development process—from
        early planning and design reviews to testing, code reviews, and retrospectives. Rather than enforcing quality
        from the outside, I work alongside the team to build great software together. Quality is a shared
        responsibility, and part of my role is encouraging that mindset across the organization.
      </p>
      <p>
        Occasionally, I dive into development work as well. Whether it’s fixing bugs, building small features, or
        improving the accessibility, I truly enjoy coding alongside my QA responsibilities. Staying hands-on with
        development not only deepens my understanding of the product but also helps me scratch my itch for building
        things.
      </p>
      <figure className="flex flex-col items-center">
        <Image
          src="/images/playwright-example.webp"
          alt="Screenshot showing a Playwright test running"
          className="mx-auto w-full max-w-[83%] rounded shadow"
        />
        <figcaption className="mt-2 text-center text-sm text-secondary dark:text-secondary-dark">
          Running an end-to-end test using Playwright
        </figcaption>
      </figure>

      <h2>Tools of the Trade</h2>
      <p>Here are some of the key tools I use in my role as a QA Engineer:</p>
      <ul>
        <li>
          <InlineLink href="https://playwright.dev/">Playwright</InlineLink> end-to-end testing
        </li>
        <li>
          <InlineLink href="https://www.typescriptlang.org/">TypeScript</InlineLink>,{" "}
          <InlineLink href="https://react.dev/">React</InlineLink>, and{" "}
          <InlineLink href="https://solidjs.com/">SolidJS</InlineLink> for front-end development
        </li>
        <li>
          <InlineLink href="https://storybook.js.org/">Storybook</InlineLink> and{" "}
          <InlineLink href="https://vitest.dev/">Vitest</InlineLink> for component and unit testing
        </li>
        <li>
          <InlineLink href="https://www.atlassian.com/software/jira">Jira</InlineLink> and{" "}
          <InlineLink href="https://www.atlassian.com/software/confluence">Confluence</InlineLink> for project planning
          and team collaboration
        </li>
        <li>
          <InlineLink href="https://www.figma.com/">Figma</InlineLink> for design reviews and feedback
        </li>
        <li>
          <InlineLink href="https://git-scm.com/">Git</InlineLink> for version control
        </li>
        <li>
          <InlineLink href="https://www.postman.com/">Postman</InlineLink> for API testing
        </li>
        <li>
          <InlineLink href="https://www.deque.com/axe/">AxeCore</InlineLink> for accessibility testing
        </li>
      </ul>

      <h2>Looking Back — and Ahead</h2>
      <p>
        Reflecting on my first two years as a QA Engineer, I’m proud of how much I’ve grown. Building QA processes and
        practices from the ground up has taught me invaluable lessons, not just in technical skills, but in ownership,
        collaboration, and creative problem-solving.
      </p>
      <p>
        One of the most rewarding parts of this journey has been working closely with developers, UX designers, product
        owners, and content teams. I love being part of a team that cares deeply about building the right product in the
        right way.
      </p>
      <p>
        As I look ahead, I’m excited to keep learning, growing, and raising the bar for quality and user experience,
        wherever my career takes me.
      </p>
    </div>
  </>
);

export default QAEngineerBlogPage;
