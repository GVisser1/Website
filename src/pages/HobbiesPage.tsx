import { useTranslation } from "react-i18next";
import { Card } from "../components/Card";
import { Icon, IconType } from "../components/Icon";
import Text from "../components/Text";
import { Title } from "../components/Title";
import usePokémon from "../hooks/usePokémon";
import { getAlbums, getGames, getMovies } from "../data/Media";
import { Color } from "../types/Color";
import { Badge } from "../components/Badge";

const HobbiesPage: React.FC = () => {
  const { t } = useTranslation();
  const { pokéData, getRandomPokémon } = usePokémon();

  return (
    <>
      <section id="Music" className="relative mx-auto max-w-screen-lg px-5 pt-10 pb-20 md:px-8">
        <Title size="4xl" className="text-center underline">
          {t("MUSIC")}
        </Title>
        <Card
          hover={false}
          className="my-10"
          image={
            <div className="flex">
              <img src="images/hobbies/Vinyl_3.webp" className="w-1/2" />
              <img src="images/hobbies/Vinyl_4.webp" className="w-1/2" />
            </div>
          }
          title="Vinyl"
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Some of my favorite Albums:
          </Text>
          <div className="my-4 mx-8 grid grid-cols-1 gap-5 xs:mx-0 xs:grid-cols-2 md:grid-cols-4">
            {getAlbums.map((item, i) => (
              <Card
                key={i}
                title={item.title}
                labels={item.labels}
                image={
                  <a className="relative flex" href={item.href}>
                    <div className="group absolute inset-0 transition hover:flex hover:bg-black/40">
                      <Icon
                        overrideSize
                        className="m-auto hidden h-16 w-16 text-white group-hover:block"
                        name={IconType.PLAY}
                      />
                    </div>
                    <img className="aspect-square w-full" src={item.src} />
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
        <Title size="4xl" className="text-center underline">
          {t("MOVIES")}
        </Title>
        <Card
          className="my-10"
          hover={false}
          image={<img src="images/hobbies/Movies_1.webp" className="w-full" />}
          title="Games"
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Some of my favorite movies:
          </Text>
          <div className="my-4 mx-8 grid grid-cols-1 gap-5 xs:mx-0 xs:grid-cols-2 md:grid-cols-4">
            {getMovies.map((item, i) => (
              <Card
                key={i}
                title={item.title}
                labels={item.labels}
                image={
                  <a className="relative flex" href={item.href}>
                    <div className="group absolute inset-0 transition hover:flex hover:bg-black/40">
                      <Icon
                        overrideSize
                        className="m-auto hidden h-16 w-16 text-white group-hover:block"
                        name={IconType.EXTERNAL_LINK}
                      />
                    </div>
                    <img className={"aspect-[2/3] w-full"} src={item.src} />
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
        <Title size="4xl" className="text-center underline">
          {t("GAMES")}
        </Title>
        <Card
          className="my-10"
          hover={false}
          image={<img src="images/hobbies/Games_1.webp" className="w-full" />}
          title="Games"
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Some of my favorite games:
          </Text>
          <div className="my-4 mx-8 grid grid-cols-1 gap-5 xs:mx-0 xs:grid-cols-2 md:grid-cols-4">
            {getGames.map((item, i) => (
              <Card
                key={i}
                title={item.title}
                labels={item.labels}
                image={
                  <a className="relative flex" href={item.href}>
                    <div className="group absolute inset-0 transition hover:flex hover:bg-black/40">
                      <Icon
                        overrideSize
                        className="m-auto hidden h-16 w-16 text-white group-hover:block"
                        name={IconType.EXTERNAL_LINK}
                      />
                    </div>
                    <img className={"aspect-square w-full"} src={item.src} />
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

      <section id="Pokémon" className="relative mx-auto max-w-screen-lg px-5 py-20 md:px-8">
        {!pokéData && (
          <div className="relative mx-auto mb-8 h-20 w-20 rounded-full shadow-md shadow-current ring-0.5 ring-gray-700">
            <div className="absolute h-1/2 w-full rounded-t-full bg-red-500" />
            <div className="absolute inset-0 z-10 m-auto h-1 w-full bg-gray-800" />
            <button
              className="absolute inset-0 z-10 m-auto h-5 w-5 rounded-full bg-white ring ring-gray-800 hover:bg-gray-200 active:bg-gray-300"
              onClick={() => getRandomPokémon()}
            />
            <div className="absolute bottom-0 h-1/2 w-full rounded-b-full bg-white" />
          </div>
        )}
        {pokéData && (
          <>
            <Text size="2xl" className="pb-5 text-center capitalize">
              WOW! A {pokéData.name}
            </Text>
            <div className="flex items-center justify-center gap-x-1">
              <Card
                hover={false}
                className="w-56 capitalize"
                title={`#${pokéData.id} ${pokéData.name}`}
                image={
                  <img
                    className="w-full bg-gray-100 transition dark:bg-slate-700"
                    src={pokéData.src}
                  />
                }
                labels={pokéData.types}
                labelColors={
                  pokéData.types && (pokéData.types.map((type) => type.toUpperCase()) as Color[])
                }
              >
                <Text color="medium">{pokéData.species}</Text>
              </Card>

              <Card hover={false} title="Summary" className="h-80 w-56 capitalize">
                <div className="mt-1 border-t border-gray-200 pb-1 transition dark:border-slate-700" />
                {pokéData?.stats?.map((stat, i) => (
                  <div className="flex w-full justify-between" key={i}>
                    <Text>{stat.name}</Text>
                    <Text color="medium">{stat.base_stat}</Text>
                  </div>
                ))}
                <div className="mt-2 justify-between border-y border-gray-200 py-2 transition dark:border-slate-700">
                  <div className="flex w-full justify-between">
                    <Text>Height: </Text>
                    <Text color="medium" className="normal-case">
                      {pokéData.height} m
                    </Text>
                  </div>
                  <div className="flex w-full justify-between">
                    <Text>Weight: </Text>
                    <Text color="medium" className="normal-case">
                      {pokéData.weight} kg
                    </Text>
                  </div>
                </div>
                <div className="flex w-full justify-between py-2">
                  <Text>Ability: </Text>
                  <Text color="medium">{pokéData.ability}</Text>
                </div>
                {pokéData.isLegendary && (
                  <div className="mt-4 flex justify-center">
                    <Badge color="YELLOW">Legendary</Badge>
                  </div>
                )}
                {pokéData.isMythical && (
                  <div className="mt-4 flex justify-center">
                    <Badge color="PINK">Mythical</Badge>
                  </div>
                )}
              </Card>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default HobbiesPage;
