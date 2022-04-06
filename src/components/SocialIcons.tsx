import classNames from "classnames";
import { FC } from "react";

interface SocialIconsProps {
  className?: string;
}

const SocialIcons: FC<SocialIconsProps> = ({ className }) => {
  return (
    <Icons
      className={className}
      options={[
        {
          id: "LinkedIn",
          href: "https://linkedin.com/in/g-visser",
          src: "src/images/social/Linkedin.svg",
        },
        {
          id: "GitHub",
          href: "https://github.com/GVisser1",
          src: "src/images/social/GitHub.svg",
          bgColor: "bg-black",
        },
        {
          id: "Instagram",
          href: "https://instagram.com/instaglenn_",
          src: "src/images/social/Instagram.svg",
        },
        {
          id: "Spotify",
          href: "https://open.spotify.com/user/iglenn2345",
          src: "src/images/social/Spotify.svg",
          bgColor: "bg-black",
        },
        {
          id: "Lastfm",
          href: "https://last.fm/user/instaglenn",
          src: "src/images/social/Lastfm.svg",
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
    <div className={classNames("flex justify-center space-x-3", className)}>
      {options.map((option) => (
        <a
          className="rounded-full focus:outline-none focus:ring focus:ring-blue-300"
          href={option.href}
          key={option.id}
        >
          <img
            className={`rounded-full hover:brightness-75 active:brightness-50 ${option.bgColor}`}
            src={option.src}
            style={{ height: 32, width: 32 }}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
