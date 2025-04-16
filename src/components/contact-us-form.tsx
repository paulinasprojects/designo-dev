import { motion } from "framer-motion";
import "../styles/contact-us-form.css";

export const ContactUsForm = () => {
  return (
    <div className="contact-us-form-main-container">
      <motion.div 
        className="contact-us-title-container"
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} 
      >
        <h1>Contact Us</h1>
        <p>Ready to take it to the next level? Let’s talk about your project or <br /> idea and find out how we can help your business grow. If you are <br /> looking for unique digital experiences that’s relatable to your <br /> users, drop us a line.</p>
      </motion.div>
        <form>
      <motion.div 
        className="contact-us-form-container"
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} 
      >
        <div>
          <input type="text" id="name-input" placeholder="Name" required />
        </div>
        <div>
          <input type="text" id="name-input" placeholder="Email Address" required />
        </div>
        <div>
        <input type="text" id="name-input" placeholder="Phone" required  />
        </div>
        <div>
          <textarea placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </motion.div>
        </form>
    </div>
  )
}
