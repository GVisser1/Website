import { FC } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal";
import Page from "../components/Page";
import Text from "../components/Text";
import { Title } from "../components/Title";
import useProjectData from "../hooks/useProjectData";

const ProjectsPage: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative flex h-full">
      <Page>
        <div className="overflow-y-auto">
          <section
            id="Projects"
            className="max-w-5xl mx-auto px-5 py-10 md:px-8"
          >
            <Title as="h2">{"School Projects"}</Title>
            <div className="flex flex-wrap py-3">
              {useProjectData("SCHOOL")?.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col w-full md:w-80 object-fit p-2"
                >
                  <img src={project.logo} className="w-full h-54" />
                  <Title as="h3" size="xl" className="pt-2">
                    {project.title ?? ""}
                  </Title>
                  <Text className="line-clamp-3">
                    {project.content[0].description ?? ""}
                  </Text>
                  <Modal
                    btnClassName="py-4"
                    title={project.title ?? ""}
                    btnLabel="Read More..."
                  >
                    <div className="space-y-4">
                      {project.content?.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col py-3 space-y-4"
                        >
                          <Text>{item.description}</Text>
                          <img
                            src={item.src}
                            className="border-2 border-gray-700"
                          />
                        </div>
                      ))}
                    </div>
                    {project.href && (
                      <Text className="py-2">
                        {"Check out the source code yourself:"}
                        <Text href={project.href}>{project.href}</Text>
                      </Text>
                    )}
                  </Modal>
                </div>
              ))}
            </div>
            <Title className="pt-8" as="h2">
              {"Personal Projects"}
            </Title>
            <div className="flex flex-wrap py-3">
              {useProjectData("PERSONAL")?.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col w-full md:w-80 p-2"
                >
                  <img
                    src={project.logo}
                    className="border-2 border-gray-700"
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
                    btnLabel="Read More..."
                  >
                    <div className="space-y-4">
                      {project.content?.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col py-3 space-y-4"
                        >
                          <Text>{item.description}</Text>
                          <img
                            src={item.src}
                            className="border-2 border-gray-700"
                          />
                        </div>
                      ))}
                    </div>
                    {project.href && (
                      <Text className="py-2">
                        {"Check out the source code yourself:"}
                        <Text href={project.href}>{project.href}</Text>
                      </Text>
                    )}
                  </Modal>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Page>
    </section>
  );
};

export default ProjectsPage;
