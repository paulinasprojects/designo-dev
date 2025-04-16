import { AnimatePresence, motion } from "framer-motion"
import { containerVariants, itemVariants } from "../lib/constants";
import { useMediaQuery } from "usehooks-ts";
import { appDesignProjectsData } from "../lib/data"
import { OtherProjects } from "./other-projects"
import { ProjectCard } from "./web-design-project-card"
import "../styles/app-design-projects.css"

export const AppDesignProjects = () => {
  const isMobile = useMediaQuery("(max-width: 767px)")

  return (
      <AnimatePresence initial={isMobile ? false : true}>
    <section className="app-design-projects-section">
      <motion.div 
        className="app-design-projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.4}}
        variants={containerVariants}
      >
        {appDesignProjectsData.map((data) => (
          <motion.div key={data.id} variants={itemVariants}>
            <ProjectCard
              description={data.description}
              image={data.image}
              title={data.title}
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
          href="/web-design"
          image="/assets/home/desktop/image-web-design-small.jpg"
          title="Web Design"
        />
        <OtherProjects
          href="/graphic-design"
          image="/assets/home/desktop/image-graphic-design.jpg"
          title="Graphic Design"
        />
      </motion.div>
    </section>
      </AnimatePresence>
  )
}
