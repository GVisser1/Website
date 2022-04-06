import { useTranslation } from "react-i18next";
export interface ProjectOption {
  logo: string;
  title: string;
  paragraphs: string[];
  src?: string;
  href?: string;
}

const useProjectData = (projectType: string) => {
  const { t } = useTranslation();
  switch (projectType) {
    case "SCHOOL": {
      const schoolProjects: ProjectOption[] = [
        {
          logo: "src/images/projects/Bitfilm.webp",
          title: "Bitfilm",
          paragraphs: [
            t("PROJECTS_BITFILM_CONTENT_1"),
            t("PROJECTS_BITFILM_CONTENT_2"),
          ],
          src: "src/images/projects/Bitfilm_Menu.webp",
          href: "https://github.com/BrianVa/Project-B-Hogeschool-Rotterdam",
        },
        {
          logo: "src/images/projects/Bitmail.webp",
          title: "Bitmail",
          paragraphs: [
            t("PROJECTS_BITMAIL_CONTENT_1"),
            t("PROJECTS_BITMAIL_CONTENT_2"),
          ],
          src: "src/images/projects/Bitmail_Email.webp",
        },
        {
          logo: "src/images/projects/Bitfit.webp",
          title: "Bitfit",
          paragraphs: [
            t("PROJECTS_BITFIT_CONTENT_1"),
            t("PROJECTS_BITFIT_CONTENT_2"),
          ],
          src: "src/images/projects/Bitfit_Schedule.webp",
          href: "https://github.com/GVisser1/Project-D-Groep5",
        },
      ];
      return schoolProjects;
    }
    case "PERSONAL": {
      const personalProjects: ProjectOption[] = [
        {
          logo: "src/images/projects/Website_Logo.webp",
          title: "Glennvisser.com",
          paragraphs: [
            t("PROJECTS_WEBSITE_CONTENT_1"),
            t("PROJECTS_WEBSITE_CONTENT_2"),
            t("PROJECTS_WEBSITE_CONTENT_3"),
          ],
          href: "https://github.com/GVisser1/Website",
        },
        {
          logo: "src/images/projects/ClickGame.webp",
          title: "Clicker Game",
          paragraphs: [
            t("PROJECTS_CLICKER_GAME_CONTENT_1"),
            t("PROJECTS_CLICKER_GAME_CONTENT_2"),
          ],
          src: "src/images/projects/ClickGame_Playing.webp",
        },
      ];
      return personalProjects;
    }
  }
};

export default useProjectData;
