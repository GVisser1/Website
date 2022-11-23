import classNames from "classnames";
import { FC } from "react";

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
          src: "/images/social/Linkedin.svg",
        },
        {
          id: "GitHub",
          href: "https://github.com/GVisser1",
          src: "/images/social/GitHub.svg",
          bgColor: "bg-black",
        },
        {
          id: "Instagram",
          href: "https://instagram.com/instaglenn_",
          src: "/images/social/Instagram.svg",
        },
        {
          id: "Spotify",
          href: "https://open.spotify.com/user/iglenn2345",
          src: "/images/social/Spotify.svg",
          bgColor: "bg-black",
        },
        {
          id: "Lastfm",
          href: "https://last.fm/user/instaglenn",
          src: "/images/social/Lastfm.svg",
        },
        {
          id: "Letterboxd",
          href: "https://letterboxd.com/iGlenn/",
          src: "https://a.ltrbxd.com/logos/letterboxd-decal-dots-pos-rgb.svg",
        },
      ]}
    />
  );
};

interface IconsOption {
  id: string;
  href?: string;
  src?: string;
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
          <img
            className={`h-7 w-7 rounded-full active:!brightness-50 pointer:hover:brightness-75 ${option.bgColor}`}
            loading="lazy"
            src={option.src}
            alt={`${option.id} icon`}
          />
        </a>
      ))}
    </div>
  );
};
