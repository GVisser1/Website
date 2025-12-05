import type { JSX } from "react";
import Card from "../../components/card";
import Header from "../../components/header";
import Page from "../../components/page";
import { BLOG_PAGES } from "../../constants";

export const metadata = {
  title: "Blogs",
  description: "A collection of my blogs and articles",
};

const BlogsPage = (): JSX.Element => (
  <Page>
    <Header title="Blogs" description="A collection of my blogs and articles" />

    <ul className="grid gap-4 sm:grid-cols-2">
      {BLOG_PAGES.map((page) => (
        <li key={page.href}>
          <Card
            title={page.name}
            description={page.description}
            link={page.href}
            src={page.coverImage}
          />
        </li>
      ))}
    </ul>
  </Page>
);

export default BlogsPage;
