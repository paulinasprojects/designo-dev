import { WebDesignProjectCard } from "../components/web-design-project-card"
import { webDesignProjectsData } from "../lib/data"
import "../styles/web-design-projects.css"

export const WebDesignProjects = () => {
  return (
    <section className="web-design-projects-section">
      <div className="projects-container">
        {webDesignProjectsData.map((data) => (
          <WebDesignProjectCard
            key={data.id}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </section>
  )
}
