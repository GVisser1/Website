import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { IconType } from "../components/Icon";
import Page from "../components/Page";
import Text from "../components/Text";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative flex h-full">
      <Page>
        <div className="overflow-y-auto flex flex-col items-center justify-center py-72 space-y-10">
          <Text size="3xl">{"404"}</Text>
          <Button
            onClick={() => {
              navigate("/home");
            }}
            icon={IconType.HOME}
            label="Home"
          />
        </div>
      </Page>
    </section>
  );
};

export default NotFoundPage;
