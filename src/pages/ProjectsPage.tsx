import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "../components/Card";
import Cards from "../components/Cards";
import Modal from "../components/Modal";
import Page from "../components/Page";
import Text from "../components/Text";
import { Title } from "../components/Title";
import ProjectsData from "../data/ProjectsData";

const ProjectsPage: FC = () => {
  const { t } = useTranslation();
  const { getSchoolProjects, getPersonalProjects } = ProjectsData();

  // const projectElements = (project, index: number) => (
  //   <Card
  //     key={index}
  //     title={project.title}
  //     src={project.logo}
  //     description={project.paragraphs[0]}
  //     button={
  //       <Modal
  //         title={project.title}
  //         btnProps={{
  //           label: `${t("READ_MORE")}...`,
  //           block: true,
  //           className: "py-4",
  //         }}
  //       >
  //         {project.paragraphs.map((paragraph: string, i) => (
  //           <div key={i} className="flex flex-col space-y-4 py-3">
  //             <Text>{paragraph}</Text>
  //           </div>
  //         ))}
  //         {project.src && (
  //           <img src={project.src} className="border-2 border-gray-100 dark:border-gray-700" />
  //         )}
  //         {project.href && (
  //           <Text className="py-2">
  //             {t("CHECK_SOURCE_CODE")}
  //             <Text href={project.href}>{project.href}</Text>
  //           </Text>
  //         )}
  //       </Modal>
  //     }
  //   />
  // );

  return (
    <Page>
      <section id="Projects" className="mx-auto my-10 max-w-screen-xl px-5 md:px-8">
        <Title as="h2" size="xl" className="mb-3">
          {t("SCHOOL_PROJECTS")}
        </Title>
        {/* <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:grid-rows-1">
          {getSchoolProjects.map((project, index) => projectElements(project, index))}
        </div> */}
        <Cards data={getSchoolProjects} type={"PROJECTS"} />
        <Title as="h2" size="xl" className="mt-8 mb-3">
          {t("PERSONAL_PROJECTS")}
        </Title>
        <Cards data={getPersonalProjects} type={"PROJECTS"} />
        {/* <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:grid-rows-1">
          {getPersonalProjects.map((project, index) => projectElements(project, index))}
        </div> */}
      </section>
    </Page>
  );
};

export default ProjectsPage;
