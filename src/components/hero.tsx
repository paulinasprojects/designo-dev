import { motion } from "framer-motion";
import "../styles/hero.css";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text-container">
        <motion.div 
          className="hero-text-container-text"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <h1 className="hero-h1">
            Award-winning custom  designs and digital <br /> branding solutions
          </h1>
          <p className="hero-p">
            With over 10 years in the industry, we are experienced in <br /> creating fully responsive websites, app
            design, and engaging <br /> brand experiences. Find out more about our services.
          </p>
          <button className="hero-button">
              Learn more
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
          className="hero-image-container"
        >
          <img className="hero-image" src="/assets/home/desktop/image-hero-phone.png"/>
        </motion.div>
      </div>
  </section>
  )
}
