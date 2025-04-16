import { motion } from "framer-motion";
import "../styles/about-us-talent.css";

export const AboutUsTalent = () => {
  return (
    <section className="about-us-talent-section">
      <motion.div 
        className="about-us-talent-main-container"
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} 
      >
      <div className="about-us-talent-image-container">
          <img src="/assets/about/desktop/image-world-class-talent.jpg" alt="" />
          <img src="/assets/about/tablet/image-world-class-talent.jpg" alt="" className="talent-tablet-image" />
          <img src="/assets/about/mobile/image-world-class-talent.jpg" alt="" className="talent-mobile-image" />
        </div>
        <div className="about-us-talent-title-container">
          <h1>World class talent</h1>
          <p>
            We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. 
          </p>
          <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
        </div>
      </motion.div>
    </section>
  )
}
