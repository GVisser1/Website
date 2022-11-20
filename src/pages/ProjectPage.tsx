import { t } from "i18next";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { IconType } from "../components/Icon";
import Text from "../components/Text";
import { Title } from "../components/Title";
import ProjectsData from "../data/ProjectsData";
import { Colors } from "../utils/colorUtils";
import NotFoundPage from "./NotFoundPage";

const ProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<{ id: string }>();
  const { getSchoolProjects, getPersonalProjects } = ProjectsData();
  const project =
    getSchoolProjects.find((p) => p.id === params.id) ||
    getPersonalProjects.find((p) => p.id === params.id);

  if (!project) {
    return <NotFoundPage />;
  }

  useEffect(() => {
    document.getElementById("scroll")?.scroll(0, 0);
  }, [location]);

  return (
    <section id={project.id ?? "404"} className="mx-auto max-w-screen-md px-5 py-10 md:px-8">
      <Text color="medium" size="xs" className="mb-1 opacity-60">
        {project.date}
      </Text>
      <div className="flex justify-between">
        <Title size="3xl">{project.title}</Title>
        <Button
          className="-mt-1.5"
          variant="clear"
          icon="ArrowRightIcon"
          iconPosition="right"
          label="All projects"
          onClick={() => navigate("/projects")}
        />
      </div>
      <div className="mt-1 mb-3 flex flex-wrap gap-1 text-center">
        {project.labels?.map((label, i) => (
          <Badge color={Colors[i]} key={i}>
            {label}
          </Badge>
        ))}
      </div>
      {project.href && (
        <Text size="xs" color="medium" href={project.href}>
          {t("VIEW_GITHUB_REPO")}
        </Text>
      )}
      <Text className="pt-4 ">{project.description}</Text>
      <img
        className="max-h-[36rem] w-full object-contain py-8"
        src={project.src}
        alt={`Project: ${project.title} thumbnail`}
      />
    </section>
  );
};
export default ProjectPage;
