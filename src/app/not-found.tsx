import type { Metadata } from "next";
import type { JSX } from "react";
import IconAndTextButton from "../components/button/iconAndTextButton";

export const metadata: Metadata = {
  title: "This page is not available",
  description: "The page you’re looking for may have been moved or deleted.",
};

const NotFoundPage = (): JSX.Element => (
  <div className="flex h-full flex-col items-center justify-center gap-y-5 text-center">
    <div className="flex max-w-128 flex-col gap-y-2 text-primary dark:text-primary-dark">
      <h1 className="text-header-4xl">404</h1>
      <p className="text-header-xl">This page is not available</p>
      <p className="text-base-regular">
        The page you’re looking for may have been moved or deleted. Please check the URL or return
        to the homepage.
      </p>
    </div>
    <IconAndTextButton type="link" variant="primary" href="/" icon="Home" label="Back to Home" />
  </div>
);

export default NotFoundPage;
