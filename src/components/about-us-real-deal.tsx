import { motion } from "framer-motion";
import "../styles/about-us-real-deal.css";

export const AboutUsRealDeal = () => {
  return (
    <section className="about-us-real-deal-container">
      <motion.div 
        className="about-us-real-deal-main-container"
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} 
      >
        <div className="about-us-real-deal-title-container">
          <h1>The real deal</h1>
          <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
          <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
        </div>
        <div className="about-us-real-deal-image-container">
          <img src="/assets/about/desktop/image-real-deal.jpg" alt="" />
          <img src="assets/about/tablet/image-real-deal.jpg" alt="" className="about-real-deal-tablet-image" />
          <img src="/assets/about/mobile/image-real-deal.jpg" alt="" className="about-real-deal-mobile-image" />
        </div>
    </motion.div>
    </section>
  )
}
