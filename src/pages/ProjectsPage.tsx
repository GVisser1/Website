import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { IconType } from "../components/Icon";
import Modal from "../components/Modal";
import Page from "../components/Page";
import Text from "../components/Text";
import { Title } from "../components/Title";
import ProjectsData, { ProjectItem } from "../data/ProjectsData";

const ProjectsPage: FC = () => {
  const { t } = useTranslation();
  const { getSchoolProjects, getPersonalProjects } = ProjectsData();
  // const [open, setOpen] = useState(false);

  const projectCard = (project: ProjectItem, index: number) => (
    <Card
      key={index}
      title={project.title}
      hover={false}
      // button={
      //   <Button block onClick={() => setOpen(true)} label={t("READ_MORE")} className="mt-4" />
      // }
      image={<img className={"aspect-square w-full object-cover"} src={project.src} />}
    >
      <Text className="line-clamp-3" color="light">
        {project.description[0]}
      </Text>
      {/* <Modal
        title={project.title}
        open={open}
        rightBtn={
          <Button
            type="clear"
            compact
            icon={IconType.X}
            className="mr-4 mt-6"
            onClick={() => setOpen(false)}
          />
        }
        onClose={() => setOpen(false)}
      >
        {project.description.map((data: string, i) => (
          <div key={i} className="flex flex-col space-y-4 py-3">
            <Text>{data}</Text>
          </div>
        ))}
        {project.src && (
          <img src={project.src} className="border-2 border-gray-100 dark:border-gray-700" />
        )}
        {project.href && (
          <>
            <Text className="py-2">{t("CHECK_SOURCE_CODE")}</Text>
            <Text href={project.href}>{project.href}</Text>
          </>
        )}
      </Modal> */}
    </Card>
  );

  // TODO: Remove model -> Render everything on this page -> Scrolling etc. -> Commit first!
  return (
    <Page>
      <section id="Projects" className="mx-auto my-10 max-w-screen-xl px-5 md:px-8">
        <Title as="h2" size="xl" className="mb-3">
          {t("SCHOOL_PROJECTS")}
        </Title>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {getSchoolProjects.map((project, index) => projectCard(project, index))}
        </div>
        <Title as="h2" size="xl" className="mt-8 mb-3">
          {t("PERSONAL_PROJECTS")}
        </Title>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {getPersonalProjects.map((project, index) => projectCard(project, index))}
        </div>
      </section>
    </Page>
  );
};

export default ProjectsPage;
