import { FC } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal";
import Page from "../components/Page";
import Text from "../components/Text";
import { Title } from "../components/Title";
import useProjectData from "../hooks/useProjectData";

const ProjectsPage: FC = () => {
  const { t } = useTranslation();

  const projectElement = (item: any) => (
    <div key={item.id} className="flex flex-col space-y-4 py-3">
      <Text>{item.description}</Text>
      <img
        src={item.src}
        className="border-2 border-gray-100 dark:border-gray-700"
      />
    </div>
  );

  return (
    <Page>
      <section id="Projects" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <Title as="h2">{t("SCHOOL_PROJECTS")}</Title>
        <div className="flex flex-wrap py-3">
          {useProjectData("SCHOOL")?.map((project) => (
            <div
              key={project.id}
              className="object-fit flex w-full flex-col p-2 md:w-80"
            >
              <img
                src={project.logo}
                className="border-2 border-gray-100 dark:border-gray-700"
              />
              <Title as="h3" size="xl" className="pt-2">
                {project.title ?? ""}
              </Title>
              <Text className="line-clamp-3">
                {project.content[0].description ?? ""}
              </Text>
              <Modal
                btnClassName="py-4"
                title={project.title ?? ""}
                btnLabel={`${t("READ_MORE")}...`}
              >
                <div className="space-y-4">
                  {project.content?.map((item) => projectElement(item))}
                </div>
                {project.href && (
                  <Text className="py-2">
                    {t("CHECK_SOURCE_CODE")}
                    <Text href={project.href}>{project.href}</Text>
                  </Text>
                )}
              </Modal>
            </div>
          ))}
        </div>
        <Title className="pt-8" as="h2">
          {t("PERSONAL_PROJECTS")}
        </Title>
        <div className="flex flex-wrap py-3">
          {useProjectData("PERSONAL")?.map((project) => (
            <div key={project.id} className="flex w-full flex-col p-2 md:w-80">
              <img
                src={project.logo}
                className="border-2 border-gray-100 dark:border-gray-700"
              />
              <Title as="h3" size="xl" className="pt-2">
                {project.title ?? ""}
              </Title>
              <Text className="line-clamp-3">
                {project.content[0].description ?? ""}
              </Text>
              <Modal
                btnClassName="py-4"
                title={project.title ?? ""}
                btnLabel={`${t("READ_MORE")}...`}
              >
                <div className="space-y-4">
                  {project.content?.map((item) => projectElement(item))}
                </div>
                {project.href && (
                  <Text className="py-2">
                    {t("CHECK_SOURCE_CODE")}
                    <Text href={project.href}>{project.href}</Text>
                  </Text>
                )}
              </Modal>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
};

export default ProjectsPage;
