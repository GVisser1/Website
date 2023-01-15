import classNames from "classnames";
import { FC } from "react";
import { Icon, IconType } from "./Icon";

interface SocialIconsProps {
  className?: string;
}

export const SocialIcons: FC<SocialIconsProps> = ({ className }) => {
  return (
    <Icons
      className={className}
      options={[
        {
          id: "LinkedIn",
          href: "https://linkedin.com/in/g-visser",
          icon: "LinkedInIcon",
        },
        {
          id: "GitHub",
          href: "https://github.com/GVisser1",
          icon: "GitHubIcon",
          bgColor: "bg-black",
        },
        {
          id: "Instagram",
          href: "https://instagram.com/instaglenn_",
          icon: "InstagramIcon",
        },
        {
          id: "Spotify",
          href: "https://open.spotify.com/user/iglenn2345",
          icon: "SpotifyIcon",
          bgColor: "bg-black",
        },
        {
          id: "Lastfm",
          href: "https://last.fm/user/instaglenn",
          icon: "LastFmIcon",
        },
        {
          id: "Letterboxd",
          href: "https://letterboxd.com/iGlenn/",
          icon: "LetterboxdIcon",
        },
      ]}
    />
  );
};

interface IconsOption {
  id: string;
  href?: string;
  icon: IconType;
  bgColor?: string;
}

export interface IconsProps {
  className?: string;
  options: IconsOption[];
}

export const Icons: React.FC<IconsProps> = ({ className, options }) => {
  return (
    <div className={classNames("flex justify-center gap-x-3", className)}>
      {options.map((option) => (
        <a
          className="rounded-full outline-none focus-visible:ring focus-visible:ring-blue-400"
          href={option.href}
          key={option.id}
        >
          <Icon
            className={`h-7 w-7 rounded-full active:!brightness-50 pointer:hover:brightness-75 ${option.bgColor}`}
            name={option.icon}
          />
        </a>
      ))}
    </div>
  );
};
