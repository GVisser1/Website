import { useTranslation } from "react-i18next";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  src: string;
  href?: string;
  date?: string;
  labels?: string[];
}

const ProjectsData = () => {
  const { t } = useTranslation();

  const getSchoolProjects: ProjectItem[] = [
    {
      id: "bitfilm",
      title: "Bitfilm",
      description: t("PROJECTS_BITFILM_CONTENT"),
      src: "/images/projects/Bitfilm_Menu.png",
      href: "https://github.com/BrianVa/Project-B-Hogeschool-Rotterdam",
      date: `${t("FEBRUARY")} 2020`,
      labels: ["C#", "WinForms"],
    },
    {
      id: "bitmail",
      title: "Bitmail",
      description: t("PROJECTS_BITMAIL_CONTENT"),
      src: "/images/projects/Bitmail_Email.png",
      date: `${t("SEPTEMBER")} 2020`,
      labels: ["C#", "Blazor", "HTML", "CSS"],
    },
    {
      id: "bitfit",
      title: "Bitfit",
      description: t("PROJECTS_BITFIT_CONTENT"),
      src: "/images/projects/Bitfit_Schedule.png",
      href: "https://github.com/GVisser1/Project-D-Groep5",
      date: `${t("FEBRUARY")} 2021`,
      labels: ["C#", "Blazor", "HTML", "CSS"],
    },
  ];

  const getPersonalProjects: ProjectItem[] = [
    {
      id: "portfolio_website",
      title: "Portfolio Website",
      description: t("PROJECTS_WEBSITE_CONTENT"),
      href: "https://github.com/GVisser1/Website",
      src: "/images/projects/Website.png",
      date: `${t("LAST_UPDATED")}: ${t("AUGUST")} 2022`,
      labels: ["TypeScript", "React", "TailwindCSS", "HTML"],
    },
    {
      id: "click_game",
      title: "Clicker Game",
      description: t("PROJECTS_CLICKER_GAME_CONTENT"),
      src: "/images/projects/ClickGame_Playing.png",
      date: `${t("JUNE")} 2020`,
      labels: ["C#", "Unity"],
    },
  ];

  return { getSchoolProjects, getPersonalProjects };
};

export default ProjectsData;
