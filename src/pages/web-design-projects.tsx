import { OtherProjects } from "../components/other-projects"
import { ProjectCard } from "../components/web-design-project-card"
import { webDesignProjectsData } from "../lib/data"
import "../styles/web-design-projects.css"

export const WebDesignProjects = () => {
  return (
    <section className="web-design-projects-section">
      <div className="projects-container">
        {webDesignProjectsData.map((data) => (
          <ProjectCard
            key={data.id}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      <div className="flex">
        <OtherProjects
          href="/app-design"
          image="/assets/home/desktop/image-app-design.jpg"
          title="App Design"
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
