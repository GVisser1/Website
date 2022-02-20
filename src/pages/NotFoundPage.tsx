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
    <Page>
      <div className="flex flex-col items-center justify-center space-y-10 py-72">
        <Text size="xl">{"404"}</Text>
        <Title size="3xl">{t("PAGE_NOT_FOUND")}</Title>
        <Button
          type="destructive"
          onClick={() => navigate("/home")}
          icon={IconType.HOME}
          label={t("Home")}
        />
      </div>
    </Page>
  );
};

export default NotFoundPage;
