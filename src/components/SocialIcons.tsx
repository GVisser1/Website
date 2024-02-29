import clsx from "clsx";
import Icon, { type IconName } from "./Icon";

type SocialIconsProps = { className?: string };

const SocialIcons = ({ className }: SocialIconsProps): JSX.Element => (
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

type IconsOption = {
  id: string;
  href?: string;
  icon: IconName;
  bgColor?: string;
};

type IconsProps = {
  className?: string;
  options: IconsOption[];
};

const Icons = ({ className, options }: IconsProps): JSX.Element => (
  <div className={clsx("flex flex-wrap gap-5", className)}>
    {options.map((option) => (
      <a
        key={option.id}
        aria-label={`Follow me on ${option.id}`}
        href={option.href}
        className="rounded-full focus-visible:outline"
      >
        <Icon
          className={`h-7 w-7 rounded-full hover:brightness-75 active:!brightness-50 ${option.bgColor}`}
          name={option.icon}
        />
      </a>
    ))}
  </div>
);

export default SocialIcons;
