import { personalProjects } from "../data/projects";
import ProjectGrid from "../components/ProjectGrid";

export default function PersonalProjectsPage() {
  return <ProjectGrid projects={personalProjects} />;
}
