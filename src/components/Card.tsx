import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import { Color } from "../types/Color";
import { Themes } from "../types/Themes";
import { Badge } from "./Badge";
import { Text } from "./Text";
import { Title } from "./Title";

export interface FrontCardProps {}
export interface CardProps {
  title?: string;
  banner?: string;
  theme?: Color;
  status?: string;
  className?: string;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  banner,
  theme = "BLUE",
  status,
  title,
  className,
}) => {
  const classes = classNames(
    "relative h-40 min-w-0 transition overflow-hidden rounded-xl border border-slate-400 bg-white shadow-lg",
    "dark:border-slate-500 dark:bg-slate-800",
    className
  );

  const Theme = Themes[theme];

  const frontCard = (
    <div className={classes}>
      <p
        className={`truncate p-2 text-center text-xs font-semibold ${Theme.bgColor} ${Theme.textColor}`}
      >
        {banner}
      </p>
      <div className="flex h-32 flex-col justify-between p-3">
        <Title as="h3" className="truncate">
          {title}
        </Title>

        <Text color="medium" size="sm" className="line-clamp-2">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit nam autem, omnis
          pariatur officia eum earum neque, libero expedita voluptates, voluptatum adipisci. Tempore
          dolore modi necessitatibus, incidunt libero tempora. */}
          This sub title really should not have more than 72 characters! some more
        </Text>
        {status && (
          <div className="flex items-center justify-end">
            <Badge theme={theme}>{status}</Badge>
          </div>
        )}
      </div>
    </div>
  );

  return frontCard;
};
