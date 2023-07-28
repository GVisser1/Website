import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import { Color } from "../types/Color";
import { Themes } from "../types/Themes";
import { Badge } from "./Badge";
import { Icon } from "./Icon";
import { Link } from "./Link";
import { Text } from "./Text";
import { Title } from "./Title";

export interface CardProps {
  theme?: Color;
  title?: string;
  subTitle?: string;
  description?: string;
  href?: string;
  banner?: string;
  status?: string;
  className?: string;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  theme = "BLUE",
  title,
  subTitle,
  description,
  href,
  banner,
  status,
  className,
}) => {
  const classes = classNames(
    "min-w-0 overflow-hidden rounded-xl border border-slate-400 bg-white shadow-lg",
    "transition dark:border-slate-500 dark:bg-slate-800",
    className,
  );

  const Theme = Themes[theme];

  return (
    <div className={classes}>
      <p
        className={`truncate p-2 text-center text-xs font-semibold ${Theme.bgColor} ${Theme.textColor}`}
      >
        {banner}
      </p>
      <div className="flex flex-col items-start py-4 px-6">
        <Title as="h3" className="truncate">
          {title}
        </Title>
        <Text size="sm" weight="bold" color="medium">
          {subTitle}
        </Text>

        <Text color="medium" size="sm" className="mt-4">
          {description}
        </Text>
        {(status || href) && (
          <div className="mt-4 flex w-full items-center justify-between">
            <Badge theme={theme}>{status}</Badge>
            {href && (
              <Link href={href} color="blue" size="xs" ariaLabel={`Visit ${href}`}>
                <Icon name="ArrowTopRightOnSquareIcon" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
