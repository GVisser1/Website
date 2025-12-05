import { createFileRoute } from "@tanstack/react-router";
import Card from "@/components/card";
import Header from "@/components/header";
import Page from "@/components/page";
import { BLOG_PAGES } from "@/constants";

const BlogsPage = () => {
  return (
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
};

export const Route = createFileRoute("/blogs/")({
  component: BlogsPage,
});
