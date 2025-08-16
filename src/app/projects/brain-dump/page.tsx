import type { JSX } from "react";
import Header from "../../../components/header";
import PlaceholderMenu from "../../../components/brain-dump/placeholderMenu";
import MultiPlaceholderMenu from "../../../components/brain-dump/multi-placeholderMenu";
import Page from "../../../components/page";

const TestPage = (): JSX.Element => (
  <Page>
    <Header
      title="Test"
      description="Aliquip velit anim commodo esse cupidatat Lorem aute deserunt et qui officia culpa qui sit dolor."
    />

    <div className="flex flex-col gap-y-4">
      <PlaceholderMenu />
      <MultiPlaceholderMenu />
    </div>
  </Page>
);

export default TestPage;
