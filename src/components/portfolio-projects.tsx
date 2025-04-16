import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "../styles/portfolio-projects.css";


export const PortfolioPorjects = () => {
  return (
    <section className="portfolio-section">
      <motion.div 
        className="web-design-portfolio-project"
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} 
      >
        <img src="/assets/home/desktop/image-web-design-large.jpg" alt="" />
        <img src="/assets/home/tablet/image-web-design.jpg" alt="" className="tablet-image" />
        <img src="/assets/home/mobile/image-web-design.jpg" alt="" className="mobile-image" />
        <div className="project-overlay">
          <h2>Web design</h2>
          <Link to="/web-design">
            View projects
            <MdOutlineKeyboardArrowRight style={{color: "#E7816B"}}/>
          </Link>
        </div>
      </motion.div>
      <motion.div className="other-projects"
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} 
      >
        <div className="app-design-portfolio-project">
          <img src="/assets/home/desktop/image-app-design.jpg" alt="" />
          <img src="/assets/home/tablet/image-app-design.jpg" className="tablet-image" alt="" />
          <img src="/assets/home/mobile/image-app-design.jpg" className="mobile-image" alt="" />
          <div className="project-overlay">
          <h2>App design</h2>
          <Link to="/app-design">
            View projects
            <MdOutlineKeyboardArrowRight style={{color: "#E7816B"}}/>
          </Link>
          </div>
        </div>
        <div className="graphic-design-portfolio-project">
          <img src="/assets/home/desktop/image-graphic-design.jpg" alt="" />
          <img src="/assets/home/tablet/image-graphic-design.jpg" alt="" className="tablet-image" />
          <img src="/assets/home/mobile/image-graphic-design.jpg" alt="" className="mobile-image" />
          <div className="project-overlay">
          <h2>Graphic design</h2>
          <Link to="/graphic-design">
            View projects
            <MdOutlineKeyboardArrowRight style={{color: "#E7816B"}}/>
          </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
