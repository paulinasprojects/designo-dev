import { Link } from "react-router-dom";
import { aboutUsLocationsData } from "../lib/data";
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../lib/constants";
import "../styles/about-us-location.css";

export const AboutUsLocation = () => {
  return (
    <section className="about-us-location-section">
      <motion.div 
        className="about-us-location-content-container"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.4}}
        variants={containerVariants}
      >
        {aboutUsLocationsData.map((data) => (
          <motion.div className="about-us-location-content" key={data.id} variants={itemVariants}>
            <img src={data.image} alt="" className="about-us-location-illustration" /> 
            <h3>{data.title}</h3>
            <Link to="/locations">See location</Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
