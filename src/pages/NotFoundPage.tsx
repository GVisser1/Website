import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { IconType } from "../components/Icon";
import Page from "../components/Page";
import Text from "../components/Text";
import { Title } from "../components/Title";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <section className="relative flex h-full">
      <Page>
        <div className="overflow-y-auto flex flex-col items-center justify-center py-72 space-y-10">
          <Text size="xl">{"404"}</Text>
          <Title size="3xl">{t("PAGE_NOT_FOUND")}</Title>
          <Button
            onClick={() => {
              navigate("/home");
            }}
            icon={IconType.HOME}
            label={t("Home")}
          />
        </div>
      </Page>
    </section>
  );
};

export default NotFoundPage;
