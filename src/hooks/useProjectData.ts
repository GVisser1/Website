import { useTranslation } from "react-i18next";

interface ProjectContent {
  id: string;
  description?: string;
  src?: string;
}

interface ProjectOption {
  id: string;
  logo?: string;
  title?: string;
  content: ProjectContent[];
  href?: string;
}

const useProjectData = (projectType: string) => {
  const { t } = useTranslation();
  switch (projectType) {
    case "SCHOOL": {
      const schoolProjects: ProjectOption[] = [
        {
          id: "Bitfilm",
          logo: "images/projects/Bitfilm.png",
          title: "Bitfilm",
          content: [
            {
              id: "Menu",
              description: t("PROJECTS_BITFILM_CONTENT_1"),
              src: "images/projects/Bitfilm_Menu.png",
            },
            {
              id: "Movie1",
              description: t("PROJECTS_BITFILM_CONTENT_2"),
              src: "images/projects/Bitfilm_Movie.png",
            },
          ],
          href: "https://github.com/BrianVa/Project-B-Hogeschool-Rotterdam",
        },
        {
          id: "Bitmail",
          logo: "images/projects/Bitmail.png",
          title: "Bitmail",
          content: [
            {
              id: "Organisation",
              description: t("PROJECTS_BITMAIL_CONTENT_1"),
              src: "images/projects/Bitmail_Organisation.png",
            },
            {
              id: "Email",
              description: t("PROJECTS_BITMAIL_CONTENT_2"),
              src: "images/projects/Bitmail_Email.png",
            },
          ],
        },
        {
          id: "Bitfit",
          logo: "images/projects/Bitfit.png",
          title: "Bitfit",
          content: [
            {
              id: "Menu",
              description: t("PROJECTS_BITFIT_CONTENT_1"),
              src: "images/projects/Bitfit_Menu.png",
            },
            {
              id: "Schedule",
              description: t("PROJECTS_BITFIT_CONTENT_2"),
              src: "images/projects/Bitfit_Schedule.png",
            },
            {
              id: "Challenge",
              description: t("PROJECTS_BITFIT_CONTENT_3"),
              src: "images/projects/Bitfit_Challenge.png",
            },
          ],
          href: "https://github.com/GVisser1/Project-D-Groep5",
        },
      ];
      return schoolProjects;
    }
    case "PERSONAL": {
      const personalProjects: ProjectOption[] = [
        {
          id: "Glennvisser.com",
          logo: "images/projects/Website_Logo.png",
          title: "Glennvisser.com",
          content: [
            {
              id: "Home",
              description: t("PROJECTS_WEBSITE_CONTENT_1"),
              src: "images/projects/Website_Home.png",
            },
          ],
          href: "https://github.com/GVisser1/Website",
        },
        {
          id: "Clicker Game",
          logo: "images/projects/ClickGame.png",
          title: "Clicker Game",
          content: [
            {
              id: "Startup",
              description: t("PROJECTS_CLICKER_GAME_CONTENT_1"),
              src: "images/projects/ClickGame_Playing.png",
            },
            {
              id: "Upgrades",
              description: t("PROJECTS_CLICKER_GAME_CONTENT_2"),
              src: "images/projects/ClickGame_Upgrades.png",
            },
          ],
        },
      ];
      return personalProjects;
    }
  }
};

export default useProjectData;
