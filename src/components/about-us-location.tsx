import { Link } from "react-router-dom";
import { aboutUsLocationsData } from "../lib/data";
import "../styles/about-us-location.css";

export const AboutUsLocation = () => {
  return (
    <section className="about-us-location-section">
      <div className="about-us-location-content-container">
        {aboutUsLocationsData.map((data) => (
          <div className="about-us-location-content" key={data.id}>
            <img src={data.image} alt="" className="about-us-location-illustration" /> 
            <h3>{data.title}</h3>
            <Link to="/locations">See location</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
