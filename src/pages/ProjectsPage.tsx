import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { IconType } from "../components/Icon";
import Text from "../components/Text";
import { Title } from "../components/Title";
import ProjectsData, { ProjectItem } from "../data/ProjectsData";

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { getSchoolProjects, getPersonalProjects } = ProjectsData();

  useEffect(() => {
    document.getElementById("scroll")?.scroll(0, 0);
  }, [location]);

  const projectCard = (project: ProjectItem, index: number) => (
    <Card
      key={index}
      title={project.title}
      hover={false}
      image={
        <img
          className="h-64 w-full object-cover object-bottom"
          src={project.src}
          alt={`Project: ${project.title} preview`}
        />
      }
      labels={project.labels}
      button={
        <Button
          block
          onClick={() => navigate(`/projects/${project.id}`)}
          icon="ArrowRightIcon"
          iconPosition="right"
          label={`${t("READ_MORE")}`}
          className="mt-5"
        />
      }
    >
      <Text className="line-clamp-3" color="medium">
        {project.description}
      </Text>
    </Card>
  );

  return (
    <section id="Projects" className="relative mx-auto mb-10 max-w-screen-2xl px-5 pt-10 md:px-8">
      <Title as="h2" size="xl" className="mb-3">
        {t("SCHOOL_PROJECTS")}
      </Title>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {getSchoolProjects.map((project, index) => projectCard(project, index))}
      </div>
      <Title as="h2" size="xl" className="mt-8 mb-3">
        {t("PERSONAL_PROJECTS")}
      </Title>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {getPersonalProjects.map((project, index) => projectCard(project, index))}
      </div>
    </section>
  );
};

export default ProjectsPage;
