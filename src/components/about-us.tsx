import { motion } from "framer-motion";
import "../styles/about-us-section.css";

export const AboutUsSection = () => {
  return (
    <motion.section 
      className="about-us-section"
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.9, ease: "easeIn" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
      >
      <div className="passionate">
        <img src="/assets/home/desktop/illustration-passionate.svg"/>
        <div className="about-us-content">
            <h3>
                PASSIONATE
            </h3>
            <p>
                Each project starts with an in-depth brand research to ensure we only create products that serve
                a
                purpose. We merge art, design, and technology into exciting new solutions.
            </p>
        </div>
      </div>
      <div className="passionate">
          <img src="/assets/home/desktop/illustration-resourceful.svg"/>
        <div className="about-us-content">
          <h3>
              RESOURCEFUL
          </h3>
          <p>
            Everything that we do has a strategic purpose. We use an agile approach in all of our projects and
            value customer collaboration. It guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </div>
      <div className="passionate">
          <img src="/assets/home/desktop/illustration-friendly.svg"/>
        <div className="about-us-content">
            <h3>
                FRIENDLY
            </h3>
            <p>
              We are a group of enthusiastic folks who know
              how to put people first. Our success depends on our customers, and we strive to give them the
              best
              experience a company can provide.
            </p>
        </div>
      </div>
    </motion.section>
  )
}
