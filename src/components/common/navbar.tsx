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
        <img src="/assets/shared/desktop/logo-dark.png" className="logo" alt="" />
        <div className="navbar-links">
          <Link to="/about-us">Our company</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/contact-us">Contact</Link>
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
            <Link to="/about-us">Our company</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/contact-us">Contact</Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
