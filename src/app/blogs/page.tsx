import type { JSX } from "react";
import Header from "../../components/header";
import Card from "../../components/card";
import { BLOG_PAGES } from "../../constants";

export const metadata = {
  title: "Blogs",
  description: "A collection of my blogs and articles",
};

const BlogsPage = (): JSX.Element => (
  <>
    <Header title="Blogs" description="A collection of my blogs and articles" />

    <ul className="grid gap-3 sm:grid-cols-2">
      {BLOG_PAGES.map((page) => (
        <li key={page.href}>
          <Card title={page.name} description={page.description} link={page.href} src={page.coverImage} />
        </li>
      ))}
    </ul>
  </>
);

export default BlogsPage;
