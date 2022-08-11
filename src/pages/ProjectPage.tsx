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
    <div className="max-w-screen-md">
      <div className="flex justify-between">
        <Title size="3xl">{project.title}</Title>
        <Button
          className="-mt-0.5"
          type="clear"
          icon={IconType.ARROW_RIGHT}
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
      <div className="mt-4 flex flex-col gap-4">
        {project?.description.map((item, i) => (
          <Text key={i}>{item}</Text>
        ))}
      </div>
      <img className="max-h-xl w-full object-contain py-8" src={project.src} />
    </div>
  );
};
export default ProjectPage;
