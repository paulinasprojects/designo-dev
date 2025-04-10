import { appDesignProjectsData } from "../lib/data"
import { OtherProjects } from "./other-projects"
import { ProjectCard } from "./web-design-project-card"
import "../styles/app-design-projects.css"

export const AppDesignProjects = () => {
  return (
    <section className="app-design-projects-section">
      <div className="app-design-projects-container">
        {appDesignProjectsData.map((data) => (
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
          href="/graphic-design"
          image="/assets/home/desktop/image-graphic-design.jpg"
          title="Graphic Design"
        />
      </div>
    </section>
  )
}
