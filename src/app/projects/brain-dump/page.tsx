import Header from "@/components/header";
import MultiPlaceholderMenu from "@/components/brain-dump/multi-placeholderMenu";
import PlaceholderMenu from "@/components/brain-dump/placeholderMenu";

const TestPage = (): JSX.Element => (
  <>
    <Header
      title="Test"
      description="Aliquip velit anim commodo esse cupidatat Lorem aute deserunt et qui officia culpa qui sit dolor."
    />

    <div className="flex flex-col gap-y-4">
      <PlaceholderMenu />
      <MultiPlaceholderMenu />
    </div>
  </>
);

export default TestPage;
