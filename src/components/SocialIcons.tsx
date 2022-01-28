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
          src: "assets/social_icons/Linkedin.svg",
        },
        {
          id: "GitHub",
          href: "https://github.com/GVisser1",
          src: "assets/social_icons/GitHub.svg",
          bgColor: "bg-black",
        },
        {
          id: "Instagram",
          href: "https://instagram.com/instaglenn_",
          src: "assets/social_icons/Instagram.svg",
        },
        {
          id: "Spotify",
          href: "https://open.spotify.com/user/iglenn2345",
          src: "assets/social_icons/Spotify.svg",
          bgColor: "bg-black",
        },
        {
          id: "Lastfm",
          href: "https://last.fm/user/instaglenn",
          src: "assets/social_icons/Lastfm.svg",
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
    <div
      className={classNames("flex justify-center space-x-3 py-6", className)}
    >
      {options.map((option) => (
        <a className="rounded-full" href={option.href} key={option.id}>
          <img
            className={`rounded-full hover:brightness-50 ${option.bgColor}`}
            src={option.src}
            style={{ height: 32, width: 32 }}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
