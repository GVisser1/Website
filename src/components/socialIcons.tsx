import clsx from "clsx";
import Icon, { type IconName } from "./icon";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

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
    <TooltipProvider>
      {options.map((option) => (
        <Tooltip key={option.id}>
          <TooltipTrigger asChild>
            <a
              aria-label={option.id}
              href={option.href}
              target="_blank"
              className="rounded-full hover:brightness-75 focus-visible:outline active:!brightness-50"
              rel="noreferrer"
            >
              <Icon className={`size-7 rounded-full ${option.bgColor}`} name={option.icon} />
            </a>
          </TooltipTrigger>
          <TooltipContent>{option.id}</TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  </div>
);

export default SocialIcons;
