import { motion } from "framer-motion";
import "../styles/page-heading.css";

interface PageHeadingProps {
  title: string;
  description: React.ReactNode;
}

export const PageHeading = ({ title, description }: PageHeadingProps) => {
  return (
    <section className="page-heading-section">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} 
      >
        <h1>
          {title}
        </h1>
        <p>
          {description}
        </p>
      </motion.div>
    </section>
  )
}
