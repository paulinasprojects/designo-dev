import { graphicDesignProjectsData } from "../lib/data";
import { OtherProjects } from "./other-projects";
import { ProjectCard } from "./web-design-project-card";
import "../styles/graphic-design-projects.css";

export const GraphicDesignProjects = () => {
  return (
    <section className="graphic-design-projects-section">
      <div className="graphic-design-projects-container">
        {graphicDesignProjectsData.map((data) => (
          <ProjectCard
            key={data.id}
            description={data.description}
            image={data.image}
            title={data.title}
          />
        ))}
      </div>
      <div className="flex">
        <OtherProjects
          href="/web-design"
          image="/assets/home/desktop/image-web-design-small.jpg"
          title="Web Design"
        />
        <OtherProjects
          href="/app-design"
          image="/assets/home/desktop/image-app-design.jpg"
          title="App Design"
        />
      </div>
    </section>
  )
}
