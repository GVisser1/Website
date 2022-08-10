import { useTranslation } from "react-i18next";

export interface ProjectItem {
  title: string;
  description: string[];
  src?: string;
  href?: string;
  labels?: string[];
}

const ProjectsData = () => {
  const { t } = useTranslation();

  const getSchoolProjects = [
    {
      logo: "/images/projects/Bitfilm.webp",
      title: "Bitfilm",
      description: [t("PROJECTS_BITFILM_CONTENT_1"), t("PROJECTS_BITFILM_CONTENT_2")],
      src: "/images/projects/Bitfilm_Menu2.png",
      href: "https://github.com/BrianVa/Project-B-Hogeschool-Rotterdam",
      imgClassName: "object-cover overflow-none",
    },
    {
      logo: "/images/projects/Bitmail.webp",
      title: "Bitmail",
      description: [t("PROJECTS_BITMAIL_CONTENT_1"), t("PROJECTS_BITMAIL_CONTENT_2")],
      src: "/images/projects/Bitmail_Email.png",
    },
    {
      logo: "/images/projects/Bitfit.webp",
      title: "Bitfit",
      description: [t("PROJECTS_BITFIT_CONTENT_1"), t("PROJECTS_BITFIT_CONTENT_2")],
      src: "/images/projects/Bitfit_Schedule.png",
      href: "https://github.com/GVisser1/Project-D-Groep5",
    },
  ];

  const getPersonalProjects = [
    {
      logo: "/images/projects/Website_Logo.webp",
      title: "Portfolio Website",
      description: [
        t("PROJECTS_WEBSITE_CONTENT_1"),
        t("PROJECTS_WEBSITE_CONTENT_2"),
        t("PROJECTS_WEBSITE_CONTENT_3"),
      ],
      href: "https://github.com/GVisser1/Website",
      src: "/images/projects/Website.png",
      imgClassName: "object-cover overflow-none",
    },
    {
      logo: "/images/projects/ClickGame.png",
      title: "Clicker Game",
      description: [t("PROJECTS_CLICKER_GAME_CONTENT_1"), t("PROJECTS_CLICKER_GAME_CONTENT_2")],
      src: "/images/projects/ClickGame_Playing.png",
    },
  ];

  return { getSchoolProjects, getPersonalProjects };
};

export default ProjectsData;
