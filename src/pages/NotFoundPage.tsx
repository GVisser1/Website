import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { IconType } from "../components/Icon";
import Page from "../components/Page";
import Text from "../components/Text";
import { Title } from "../components/Title";
import usePokémon from "../hooks/usePokémon";
import { Color } from "../types/Color";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { pokéData } = usePokémon();

  return (
    <section id="About" className="relative py-20 md:px-8">
      <div className="flex flex-col items-center">
        <Text size="xl">404</Text>
        <Title size="3xl">{t("PAGE_NOT_FOUND")}</Title>
        <Button
          className="mt-8"
          type="destructive"
          onClick={() => navigate("/home")}
          icon={IconType.HOME}
          label={t("Home")}
        />
        {/* {pokéData && (
          <Card
            className="w-56 capitalize"
            title={`#${pokéData.id} ${pokéData.name}`}
            image={
              <img
                className="w-full bg-gray-100 transition duration-300 dark:bg-gray-700"
                src={pokéData.src}
              />
            }
            labels={pokéData.types}
            labelColors={
              pokéData.types && (pokéData.types.map((type) => type.toUpperCase()) as Color[])
            }
          >
            <Text color="medium">{`Ability: ${pokéData.ability}`}</Text>
          </Card>
        )} */}
      </div>
    </section>
  );
};

export default NotFoundPage;
