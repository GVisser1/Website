import classNames from "classnames";
import { ReactElement } from "react";
import { Card, CardProps } from "./Card";
import { Icon, IconType } from "./Icon";

type CardsType = "MUSIC" | "GAMES" | "MOVIES" | "LANGUAGES" | "PROJECTS";

interface CardsProps {
  data: CardProps[];
  className?: string;
  type: CardsType;
}

const Cards: React.FC<CardsProps> = ({ className, type, data }) => {
  const classes = classNames(
    {
      "grid gap-4": true,
      "grid-cols-2 md:grid-cols-4": data.length <= 4,
      "grid-cols-2 md:grid-cols-3 lg:grid-cols-6": data.length === 6,
    },
    className
  );

  const imgClasses = classNames({
    "h-32 my-8 mx-auto w-32": type === "LANGUAGES",
    "aspect-square w-full": ["MUSIC", "GAMES", "PROJECTS"].includes(type),
    "w-full aspect-[2/3]": type === "MOVIES",
  });

  const imgIcon = (
    <Icon
      overrideSize
      className="m-auto hidden h-16 w-16 text-white group-hover:block"
      name={type === "MUSIC" ? IconType.PLAY : IconType.EXTERNAL_LINK}
    />
  );

  return (
    <div className={classes}>
      {data.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          subTitle={item.description}
          labels={item.labels}
          src={item.src}
          href={item.href}
          imgIcon={imgIcon}
          imgClassName={classNames(imgClasses, item.imgClassName)}
        />
      ))}
    </div>
  );
};

export default Cards;
