import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import {useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src="/assets/shared/desktop/logo-dark.png" className="logo" alt="" />
        </Link>
        <div className="navbar-links">
          <Link to="/about-us" className="hover-underline-animation">Our company</Link>
          <Link to="/locations" className="hover-underline-animation">Locations</Link>
          <Link to="/contact-us" className="hover-underline-animation">Contact</Link>
        </div>
        <button className="hamburger-menu" onClick={() => toggleModal()}>
          {openModal ? (
            <img src="/assets/shared/mobile/icon-close.svg" alt=""/>
          ): (
            <img src="/assets/shared/mobile/icon-hamburger.svg" alt="" />
          )}
        </button>
      </div>
      {openModal && (
        <motion.div 
          className="mobile-menu" 
          initial={{ opacity: 0, y:-10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mobile-links-container">
            <Link to="/about-us" className="mobile-hover-underline-animation">Our company</Link>
            <Link to="/locations" className="mobile-hover-underline-animation">Locations</Link>
            <Link to="/contact-us" className="mobile-hover-underline-animation">Contact</Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
