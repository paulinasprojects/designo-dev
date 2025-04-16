import { motion } from "framer-motion";
import "../styles/about-us-hero.css";

export const AboutUsHero = () => {
  return (
    <section className="about-us-hero-section">
      <motion.div 
        className="about-us-hero-main-container"
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} 
      >
        <div className="about-us-title-container">
          <h1>About Us</h1>
          <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
        </div>
        <div className="about-us-image-container">
          <img src="/assets/about/desktop/image-about-hero.jpg" alt="" />
          <img src="assets/about/tablet/image-about-hero.jpg" alt="" className="hero-tablet-image" />
          <img src="/assets/about/mobile/image-about-hero.jpg" alt="" className="hero-mobile-image" />
        </div>
      </motion.div>
    </section>
  )
}
