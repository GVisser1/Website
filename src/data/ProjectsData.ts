import { useTranslation } from "react-i18next";

export interface ProjectItem {
  id: string;
  title: string;
  description: string[];
  src: string;
  href?: string;
  labels?: string[];
}

const ProjectsData = () => {
  const { t } = useTranslation();

  const getSchoolProjects: ProjectItem[] = [
    {
      id: "bitfilm",
      title: "Bitfilm",
      description: [t("PROJECTS_BITFILM_CONTENT_1"), t("PROJECTS_BITFILM_CONTENT_2")],
      src: "/images/projects/Bitfilm_Menu.png",
      href: "https://github.com/BrianVa/Project-B-Hogeschool-Rotterdam",
      labels: ["C#", "WinForms"],
    },
    {
      id: "bitmail",
      title: "Bitmail",
      description: [t("PROJECTS_BITMAIL_CONTENT_1"), t("PROJECTS_BITMAIL_CONTENT_2")],
      src: "/images/projects/Bitmail_Email.png",
      labels: ["C#", "Blazor", "HTML", "CSS"],
    },
    {
      id: "bitfit",
      title: "Bitfit",
      description: [t("PROJECTS_BITFIT_CONTENT_1"), t("PROJECTS_BITFIT_CONTENT_2")],
      src: "/images/projects/Bitfit_Schedule.png",
      href: "https://github.com/GVisser1/Project-D-Groep5",
      labels: ["C#", "Blazor", "HTML", "CSS"],
    },
  ];

  const getPersonalProjects: ProjectItem[] = [
    {
      id: "portfolio_website",
      title: "Portfolio Website",
      description: [
        t("PROJECTS_WEBSITE_CONTENT_1"),
        t("PROJECTS_WEBSITE_CONTENT_2"),
        t("PROJECTS_WEBSITE_CONTENT_3"),
      ],
      href: "https://github.com/GVisser1/Website",
      src: "/images/projects/Website.png",
      labels: ["TypeScript", "React", "TailwindCSS", "HTML"],
    },
    {
      id: "click_game",
      title: "Clicker Game",
      description: [t("PROJECTS_CLICKER_GAME_CONTENT_1"), t("PROJECTS_CLICKER_GAME_CONTENT_2")],
      src: "/images/projects/ClickGame_Playing.png",
      labels: ["C#", "Unity"],
    },
  ];

  return { getSchoolProjects, getPersonalProjects };
};

export default ProjectsData;
