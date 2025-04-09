import { Link } from "react-router-dom";
import "../styles/portfolio-projects.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export const PortfolioPorjects = () => {
  return (
    <section className="portfolio-section">
      <div className="web-design-portfolio-project">
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
      </div>
      <div className="other-projects">
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
      </div>
    </section>
  )
}
