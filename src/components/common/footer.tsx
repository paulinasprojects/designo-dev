import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import "../../styles/footer.css";



export const Footer = () => {
  return (
    <footer>
      <div className="pre-footer">
      <motion.div 
        className="pre-footer-text"
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} 
      >
        <h1>Let's talk about  your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out  how our expertise can help your
          business grow.
        </p>
      </motion.div>
      <motion.div 
        className="pre-footer-button"
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} 
      >
        <button className="footer-button">Get in touch</button>
      </motion.div>
      </div>
      <div className="footer-end">
        <div className="footer-end-content">
          <div className="footer-logo-nav">
            <motion.div 
              className="footer-logo"
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.9, ease: "easeIn" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} 
            >
              <Link to="/">
                <img src="/assets/shared/desktop/logo-light.png" className="logo-image-light" alt="" />
              </Link>
            </motion.div>
          <nav>
            <motion.ul 
              className="footer-menu"
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.9, ease: "easeIn" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} 
            >
              <Link to="/about-us" className="hover-underline-animation">Our company</Link>
              <Link to="/locations" className="hover-underline-animation">Locations</Link>
              <Link to="/contact-us" className="hover-underline-animation">Contact</Link>
            </motion.ul>
          </nav>
          </div>
          <hr />
        <div className="footer-info">
          <motion.div 
            className="footer-address"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.9, ease: "easeIn" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} 
          >
            <p>
              Designo Central Office<br />
              3886 Wellington Street<br />
              Toronto, Ontario M9C 3J5
            </p>
          </motion.div>
          <motion.div 
            className="footer-contact-us"
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.9, ease: "easeIn" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} 
          >
            <p>
              Contact Us (Central Office)<br />
              P :<Link to="tel:+12538638967">+1 253-863-8967</Link><br />
              M : <Link to="mailto:contact@designo.com">contact@designo.com</Link>
            </p>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.9, ease: "easeIn" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} 
          >
            <li>
                <Link to="#">
                    <BiLogoFacebookSquare/>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <FaYoutube/>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <FaTwitter/>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <FaPinterest/>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <FaInstagram/>
                </Link>
            </li>
        </motion.ul>
        </div>
        </div>
      </div>
    </footer>
  )
}
