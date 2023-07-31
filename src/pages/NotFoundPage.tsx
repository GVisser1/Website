import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { Text } from "../components/Text";
import { Title } from "../components/Title";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Section id="404" className="items-center pt-20">
      <Text size="xl">404</Text>
      <Title>{t("PAGE_NOT_FOUND")}</Title>
      <Button
        variant="destructive"
        onClick={() => navigate("")}
        icon="HomeIcon"
        label={t("HOME")}
      />
    </Section>
  );
};
