import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import type { JSX } from "react";
import IconAndTextButton from "@/components/button/iconAndTextButton";
import { Layout } from "@/components/layout";
import Page from "@/components/page";
import { MAIN_PAGES } from "@/constants";

const PAGE = MAIN_PAGES.home;

const NotFoundPage = (): JSX.Element => (
  <Page className="flex h-full flex-col items-center justify-center gap-y-5 text-center">
    <div className="flex max-w-lg flex-col gap-y-2 text-primary">
      <h1 className="font-heading text-title">404</h1>
      <p className="font-heading text-heading">This page is not available</p>
      <p className="text-body">
        The page you’re looking for may have been moved or deleted. Please check the URL or return to the homepage.
      </p>
    </div>
    <IconAndTextButton type="link" variant="primary" href="/" icon="Home" label="Back to Home" />
  </Page>
);

export const Route = createRootRoute({
  head: () => ({
    meta: [{ title: PAGE.meta.title }, { name: "description", content: PAGE.meta.description }],
  }),
  component: () => (
    <Layout>
      <HeadContent />
      <Outlet />
    </Layout>
  ),
  notFoundComponent: NotFoundPage,
});
