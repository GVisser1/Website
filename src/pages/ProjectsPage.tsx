import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "../components/Card";
import Modal from "../components/Modal";
import Page from "../components/Page";
import Text from "../components/Text";
import { Title } from "../components/Title";
import useProjectData, { ProjectOption } from "../hooks/useProjectData";

const ProjectsPage: FC = () => {
  const { t } = useTranslation();

  const projectElements = (project: ProjectOption, index: number) => (
    <Card
      key={index}
      title={project.title}
      src={project.logo}
      description={project.paragraphs[0]}
      button={
        <Modal
          title={project.title}
          btnProps={{
            label: `${t("READ_MORE")}...`,
            block: true,
            className: "py-4",
          }}
        >
          {project.paragraphs.map((paragraph: string, parIndex) => (
            <div key={parIndex} className="flex flex-col space-y-4 py-3">
              <Text>{paragraph}</Text>
            </div>
          ))}
          {project.src && (
            <img src={project.src} className="border-2 border-gray-100 dark:border-gray-700" />
          )}
          {project.href && (
            <Text className="py-2">
              {t("CHECK_SOURCE_CODE")}
              <Text href={project.href}>{project.href}</Text>
            </Text>
          )}
        </Modal>
      }
    />
  );

  return (
    <Page>
      <section id="Projects" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <Title as="h2">{t("SCHOOL_PROJECTS")}</Title>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:grid-rows-1">
          {useProjectData("SCHOOL")?.map((project, index) => projectElements(project, index))}
        </div>
        <Title className="my-8" as="h2">
          {t("PERSONAL_PROJECTS")}
        </Title>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:grid-rows-1">
          {useProjectData("PERSONAL")?.map((project, index) => projectElements(project, index))}
        </div>
      </section>
    </Page>
  );
};

export default ProjectsPage;
