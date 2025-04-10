import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/other-projects.css";

interface OtherProjectsProps {
  image: string;
  title: string;
  href: string;
}

export const OtherProjects = ({ image,  title, href }: OtherProjectsProps) => {
  return (
    <div className="other-project-content-container">
      <div className="other-project-content">
      <img src={image} alt="" className="mobile-image" />
      <div className="other-project-overlay">
        <h2>{title}</h2>
        <Link to={href}>
          View Project
          <MdOutlineKeyboardArrowRight style={{color: "#E7816B"}}/>
        </Link>
      </div>
      </div>
    </div>
  )
}
