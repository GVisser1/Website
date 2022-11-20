import { useTranslation } from "react-i18next";
import { Card } from "../components/Card";
import Text from "../components/Text";
import usePokémon from "../hooks/usePokémon";
import { Color } from "../types/Color";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import classNames from "classnames";

const HobbiesPage: React.FC = () => {
  const { t } = useTranslation();
  const { pokéData, getData } = usePokémon();
  const [starterId] = useState(localStorage["pokémon"]);

  useEffect(() => {
    if (!starterId) {
      return;
    }
    getData(starterId);
  }, []);

  const chooseStarter = (id: string) => {
    localStorage.setItem("pokémon", id);
    getData(id);
  };

  return (
    <>
      <section id="Pokémon" className="relative mx-auto h-full max-w-screen-lg px-5 py-80 md:px-8">
        {!pokéData && (
          <>
            <Text className="mb-12 text-center" size="lg" color="dark">
              {t("POKÉMON_STARTER_CHOICE")}
            </Text>
            <div className="flex flex-col sm:flex-row">
              <PokéBall onClick={() => chooseStarter("1")} className="animate-shake" />
              <PokéBall
                onClick={() => chooseStarter("4")}
                className="animation-delay-5000 animate-shake"
              />
              <PokéBall
                onClick={() => chooseStarter("7")}
                className="animation-delay-10000 animate-shake"
              />
            </div>
          </>
        )}
        {pokéData && (
          <Transition
            show={true}
            appear
            enter="transform transition duration-300"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            className="-mb-24 -mt-24"
          >
            <div className="flex justify-center space-x-1 pb-5 text-center">
              <Text size="2xl">{t("POKÉMON_STARTER_MESSAGE")}</Text>
              <Text size="2xl" className="capitalize">
                {pokéData.name}!
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 xs:flex-row">
              <Card
                hover={false}
                className="h-80 w-56 capitalize"
                title={`#${pokéData.id} ${pokéData.name}`}
                image={
                  <img
                    className="w-full bg-gray-100 transition dark:bg-slate-700"
                    src={pokéData.src}
                    alt="Pokémon sprite"
                  />
                }
                labels={pokéData.types}
                labelColors={
                  pokéData.types && (pokéData.types.map((type) => type.toUpperCase()) as Color[])
                }
              >
                <Text color="medium">{pokéData.species}</Text>
              </Card>
            </div>
          </Transition>
        )}
      </section>
    </>
  );
};

interface PokéBallProps {
  onClick: () => void;
  className?: string;
}

const PokéBall: React.FC<PokéBallProps> = ({ onClick, className }) => (
  <>
    <div
      className={classNames(
        "relative mx-auto mb-8 h-20 w-20 rounded-full shadow-md shadow-current ring-0.5 ring-gray-700",
        className
      )}
    >
      <div className="absolute h-1/2 w-full rounded-t-full bg-red-500" />
      <div className="absolute inset-0 z-10 m-auto h-1 w-full bg-gray-800" />
      <button
        className="absolute inset-0 z-10 m-auto h-5 w-5 rounded-full bg-white ring ring-gray-800 hover:bg-gray-200 active:bg-gray-300"
        onClick={onClick}
      />
      <div className="absolute bottom-0 h-1/2 w-full rounded-b-full bg-white" />
    </div>
  </>
);

export default HobbiesPage;
