import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { IconType } from "../components/Icon";
import Text from "../components/Text";
import { Title } from "../components/Title";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section id="404" className="relative flex flex-col items-center gap-y-10 py-20 md:px-8">
      <Text size="xl">404</Text>
      <Title size="3xl">{t("PAGE_NOT_FOUND")}</Title>
      <Button
        type="destructive"
        onClick={() => navigate("/home")}
        icon={IconType.HOME}
        label={t("Home")}
      />
    </section>
  );
};

export default NotFoundPage;
