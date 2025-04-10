import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import "../../styles/footer.css";



export const Footer = () => {
  return (
    <footer>
      <div className="pre-footer">
      <div className="pre-footer-text">
        <h1>Let's talk about  your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out  how our expertise can help your
          business grow.
        </p>
      </div>
      <div className="pre-footer-button">
        <button className="footer-button">Get in touch</button>
      </div>
      </div>
      <div className="footer-end">
        <div className="footer-end-content">
          <div className="footer-logo-nav">
            <div className="logo">
              <Link to="/">
                <img src="/assets/shared/desktop/logo-light.png" className="logo-image-light" alt="" />
              </Link>
            </div>
          <nav>
            <ul className="footer-menu">
              <Link to="/about-us" className="hover-underline-animation">Our company</Link>
              <Link to="/locations" className="hover-underline-animation">Locations</Link>
              <Link to="/contact-us" className="hover-underline-animation">Contact</Link>
            </ul>
          </nav>
          </div>
          <hr />
        <div className="footer-info">
          <div className="footer-address">
            <p>
              Designo Central Office<br />
              3886 Wellington Street<br />
              Toronto, Ontario M9C 3J5
            </p>
          </div>
          <div className="footer-contact-us">
            <p>
                Contact Us (Central Office)<br />
                P :<Link to="tel:+12538638967">+1 253-863-8967</Link><br />
                M : <Link to="mailto:contact@designo.com">contact@designo.com</Link>
            </p>
          </div>
          <ul>
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
        </ul>
        </div>
        </div>
      </div>
    </footer>
  )
}
