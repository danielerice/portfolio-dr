import { PROJECTS } from '../data/projects';
import PixelCard from '../pixel-system/components/PixelCard';

export default function Projects() {
  return (
    <section className="page projects">
      <h1 className="page-title">&gt; PROJECT_ARCHIVE</h1>
      <p className="page-sub">SELECT A CARTRIDGE</p>
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <PixelCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
