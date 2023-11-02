import "./Projects.css";
import { projectsData } from "./ProjectsArray";

function Projects() {
  return (
    <section className="projects">
      <h3>Meus Projetos:</h3>
      <div className="project-cards">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageSrc} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.summary}</p>
            <div className="project-links">
              {project.deployLink && (
                <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                  Deploy
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;