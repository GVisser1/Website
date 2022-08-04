import classNames from "classnames";
import { ListOption } from "../hooks/useData";
import { Card } from "./Card";
import { Icon, IconType } from "./Icon";

type ListType = "MUSIC" | "GAMES" | "MOVIES" | "LANGUAGES" | "TOOLS";

interface ImageListProps {
  data: ListOption[];
  className?: string;
  listType: ListType;
}

const ImageList: React.FC<ImageListProps> = ({ className, listType, data }) => {
  return <Lists className={className} listType={listType} data={data} />;
};

export interface ListsProps {
  className?: string;
  listType: ListType;
  data: ListOption[];
}

export const Lists: React.FC<ListsProps> = ({ listType, data }) => {
  const imgClasses = classNames({
    "h-32 my-8 mx-auto w-32": listType === "LANGUAGES" || listType === "TOOLS",
    "w-full": ["MUSIC", "GAMES", "MOVIES"].includes(listType),
  });

  const imgIcon = (
    <Icon
      defaultSize={false}
      className="m-auto hidden h-16 w-16 text-white group-hover:block"
      name={listType === "MUSIC" ? IconType.PLAY : IconType.EXTERNAL_LINK}
    />
  );

  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-7 md:grid-cols-3 md:grid-rows-2 md:gap-4 lg:grid-cols-6 lg:grid-rows-1">
      {data.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          subTitle={item.description}
          labels={item.labels}
          src={item.src}
          href={item.href}
          imgIcon={imgIcon}
          imgClassName={imgClasses}
        />
      ))}
    </div>
  );
};

export default ImageList;
