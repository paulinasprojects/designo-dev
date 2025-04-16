import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../lib/constants";
import { OtherProjects } from "../components/other-projects"
import { ProjectCard } from "../components/web-design-project-card"
import { webDesignProjectsData } from "../lib/data"
import "../styles/web-design-projects.css"

export const WebDesignProjects = () => {
  return (
    <section className="web-design-projects-section">
      <motion.div 
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.4}}
        variants={containerVariants}
      >
        {webDesignProjectsData.map((data) => (
          <motion.div key={data.id} variants={itemVariants}>
            <ProjectCard
              image={data.image}
              title={data.title}
              description={data.description}
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        className="flex"
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} 
      >
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
      </motion.div>
    </section>
  )
}
