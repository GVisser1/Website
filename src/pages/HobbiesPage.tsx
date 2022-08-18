import { useTranslation } from "react-i18next";
import { Card } from "../components/Card";
import { Icon, IconType } from "../components/Icon";
import Text from "../components/Text";
import usePokémon from "../hooks/usePokémon";
import { getAlbums, getGames, getMovies } from "../data/Media";
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
      <section id="Music" className="relative mx-auto max-w-screen-lg px-5 pt-10 pb-20 md:px-8">
        <Card
          hover={false}
          className="my-10"
          image={
            <div className="flex">
              <img
                src="images/hobbies/Vinyl_1.webp"
                className="w-1/2"
                alt="Vinyl collection with cover"
              />
              <img
                src="images/hobbies/Vinyl_2.webp"
                className="w-1/2"
                alt="Vinyl collection without cover"
              />
            </div>
          }
          title={t("MUSIC")}
        >
          <Text>{t("HOBBIES_MUSIC_DESCRIPTION")}</Text>
          <div className="my-4 mx-8 grid grid-cols-1 gap-5 xs:mx-0 xs:grid-cols-2 md:grid-cols-4">
            {getAlbums.map((item, i) => (
              <Card
                key={i}
                title={item.title}
                labels={item.labels}
                image={
                  <a className="relative flex" href={item.href}>
                    <div className="transition-300 group absolute inset-0 hover:flex hover:bg-black/40">
                      <Icon
                        overrideSize
                        className="m-auto hidden h-16 w-16 text-white group-hover:block"
                        name={IconType.PLAY}
                      />
                    </div>
                    <img
                      className="aspect-square w-full"
                      src={item.src}
                      alt={`Album: ${item.title}`}
                    />
                  </a>
                }
              >
                <Text className="line-clamp-1" color="medium">
                  {item.subTitle}
                </Text>
              </Card>
            ))}
          </div>
        </Card>
      </section>

      <section id="Movies" className="relative mx-auto max-w-screen-lg px-5 py-20 md:px-8">
        <Card
          className="my-10"
          hover={false}
          image={
            <img src="images/hobbies/Movies_1.webp" className="w-full" alt="Blu-ray collection" />
          }
          title={t("MOVIES")}
        >
          <Text>{t("HOBBIES_MOVIES_DESCRIPTION")}</Text>
          <div className="my-4 mx-8 grid grid-cols-1 gap-5 xs:mx-0 xs:grid-cols-2 md:grid-cols-4">
            {getMovies.map((item, i) => (
              <Card
                key={i}
                title={item.title}
                labels={item.labels}
                image={
                  <a className="relative flex" href={item.href}>
                    <div className="transition-300 group absolute inset-0 hover:flex hover:bg-black/40">
                      <Icon
                        overrideSize
                        className="m-auto hidden h-16 w-16 text-white group-hover:block"
                        name={IconType.EXTERNAL_LINK}
                      />
                    </div>
                    <img
                      className={"aspect-[2/3] w-full"}
                      src={item.src}
                      alt={`Movie: ${item.title}`}
                    />
                  </a>
                }
              >
                <Text className="line-clamp-1" color="medium">
                  {item.subTitle}
                </Text>
              </Card>
            ))}
          </div>
        </Card>
      </section>

      <section id="Games" className="relative mx-auto max-w-screen-lg px-5 py-20 md:px-8">
        <Card
          className="my-10"
          hover={false}
          image={<img src="images/hobbies/Games_1.webp" className="w-full" alt="Game collection" />}
          title={t("GAMES")}
        >
          <Text>{t("HOBBIES_GAMES_DESCRIPTION")}</Text>
          <div className="my-4 mx-8 grid grid-cols-1 gap-5 xs:mx-0 xs:grid-cols-2 md:grid-cols-4">
            {getGames.map((item, i) => (
              <Card
                key={i}
                title={item.title}
                labels={item.labels}
                image={
                  <a className="relative flex" href={item.href}>
                    <div className="transition-300 group absolute inset-0 hover:flex hover:bg-black/40">
                      <Icon
                        overrideSize
                        className="m-auto hidden h-16 w-16 text-white group-hover:block"
                        name={IconType.EXTERNAL_LINK}
                      />
                    </div>
                    <img
                      className={"aspect-square w-full"}
                      src={item.src}
                      alt={`Game: ${item.title}`}
                    />
                  </a>
                }
              >
                <Text className="line-clamp-1" color="medium">
                  {item.subTitle}
                </Text>
              </Card>
            ))}
          </div>
        </Card>
      </section>

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
            <Text size="2xl" className="pb-5 text-center capitalize">
              {t("POKÉMON_STARTER_MESSAGE")} {pokéData.name}
            </Text>
            <div className="flex flex-col items-center justify-center gap-1 xs:flex-row">
              <Card
                hover={false}
                className="h-80 w-56 capitalize"
                title={`#${pokéData.id} ${pokéData.name}`}
                image={
                  <img
                    className="transition-300 w-full bg-gray-100 dark:bg-slate-700"
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
              <Card hover={false} title={t("SUMMARY")} className="h-80 w-56 capitalize">
                <div className="transition-300 mt-1 border-t border-gray-200 pb-1 dark:border-slate-700" />
                {pokéData?.stats?.map((stat, i) => (
                  <div className="flex w-full justify-between" key={i}>
                    <Text>{stat.name}</Text>
                    <Text color="medium">{stat.base_stat}</Text>
                  </div>
                ))}
                <div className="transition-300 mt-2 justify-between border-y border-gray-200 py-2 dark:border-slate-700">
                  <div className="flex w-full justify-between">
                    <Text>{t("HEIGHT")}: </Text>
                    <Text color="medium" className="normal-case">
                      {pokéData.height} m
                    </Text>
                  </div>
                  <div className="flex w-full justify-between">
                    <Text>{t("WEIGHT")}: </Text>
                    <Text color="medium" className="normal-case">
                      {pokéData.weight} kg
                    </Text>
                  </div>
                </div>
                <div className="flex w-full justify-between py-2">
                  <Text>Ability: </Text>
                  <Text color="medium">{pokéData.ability}</Text>
                </div>
              </Card>
            </div>
          </Transition>
        )}
      </section>
    </>
  );
};

export default HobbiesPage;

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
