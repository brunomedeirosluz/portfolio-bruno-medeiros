import "./Projects.css";
import { projectsData } from "./ProjectsArray";

function Projects() {
    return (
        <section className="projects">
          <h3>Projects</h3>
          <div className="project-cards">
            {projectsData.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.imageSrc} alt={project.title} />
                <h4>{project.title}</h4>
                <p>{project.summary}</p>
                <div className="project-links">
                  <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                    Deploy
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }
    
    export default Projects;