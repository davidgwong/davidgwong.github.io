import { designAndDevs } from "../data/projects";
import ProjectGrid from "../components/ProjectGrid";

export default function DesignAndDevelopmentPage() {
  return <ProjectGrid projects={designAndDevs} />;
}
