import type { JSX } from "react";
import Header from "../../components/header";
import Card from "../../components/card";
import { BLOG_PAGES } from "../../constants";
import Page from "../../components/page";

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
          <Card title={page.name} description={page.description} link={page.href} src={page.coverImage} />
        </li>
      ))}
    </ul>
  </Page>
);

export default BlogsPage;
