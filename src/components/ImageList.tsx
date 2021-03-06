import classNames from "classnames";
import Text from "../components/Text";
import useListData from "../hooks/useListData";

interface ImageListProps {
  className?: string;
  listType: "MUSIC" | "GAMES" | "MOVIES" | "LANGUAGES" | "MISC";
}

const ImageList: React.FC<ImageListProps> = ({ className, listType }) => {
  const data = useListData(listType);
  return <Lists className={className} listType={listType} options={data!} />;
};

interface ListOption {
  src?: string;
  title?: string;
  subTitle?: string;
  href?: string;
}

export interface ListsProps {
  className?: string;
  listType?: "MUSIC" | "GAMES" | "MOVIES" | "LANGUAGES" | "MISC";
  options: ListOption[];
}

export const Lists: React.FC<ListsProps> = ({
  listType,
  options,
  className,
}) => {
  const listClasses = classNames(
    {
      "flex lg:flex-none overflow-x-auto scrollbar-hide py-3": true,
      "space-x-2":
        listType === "MUSIC" || listType === "GAMES" || listType === "MOVIES",
      "space-x-16": listType === "LANGUAGES" || listType === "MISC",
    },
    className
  );

  const itemClasses = classNames({
    "object-fit flex-none py-2 md:py-0": true,
    "w-28 h-fit flex flex-col justify-between items-center":
      listType === "LANGUAGES" || listType === "MISC",
    "w-56 h-fit": listType === "MUSIC",
    "w-44 h-fit": listType === "MOVIES",
    "w-52 h-fit": listType === "GAMES",
  });

  const imageClasses = classNames({
    "h-28": listType === "LANGUAGES" || listType === "MISC",
    "h-56 shadow-md": listType === "MUSIC",
    "h-64 shadow-md": listType === "MOVIES",
    "h-52 shadow-md": listType === "GAMES",
  });

  return (
    <div className={listClasses}>
      {options.map((option, index) => (
        <div className={itemClasses} key={index}>
          <img className={imageClasses} src={option.src} />
          <div className="pt-1">
            <Text size="base" href={option.href} className="line-clamp-1 px-1">
              {option.title ?? ""}
            </Text>
          </div>
          <div className="max-w-fit pb-3">
            <Text className="line-clamp-1 px-1">{option.subTitle ?? ""}</Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
