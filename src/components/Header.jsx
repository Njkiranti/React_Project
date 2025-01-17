import React, { useState } from "react"; // Import useState
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa"; // Import Font Awesome icons
import { FaT } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // useState hook for mobile menu visibility

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <header className="bg-[#022574] text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo/Title */}
        <h1 className="text-2xl font-bold sm:text-xl md:text-2xl transition transform hover:scale-105">NIra & Co.</h1>

        {/* Desktop Navigation Links */}
        <ul className="flex space-x-6 text-sm md:text-base lg:text-lg hidden md:flex ">
          <li>
            <a
              href="#about"
              className="hover:text-gray-400 "
              onClick={(e) => scrollToSection(e, "about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:text-gray-400"
              onClick={(e) => scrollToSection(e, "portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-gray-400"
              onClick={(e) => scrollToSection(e, "experience")}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:text-gray-400"
              onClick={(e) => scrollToSection(e, "testimonials")}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="hover:text-gray-400"
              onClick={(e) => scrollToSection(e, "service")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#package"
              className="hover:text-gray-400"
              onClick={(e) => scrollToSection(e, "package")}
            >
              Packages
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-400"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button (Visible on small screens) */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          &#9776;
        </button>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-gray-400 hover:text-gray-400">
          <a
            href="https://www.facebook.com/niryasocialmediaspecialist/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/nirya.socialmanager/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nirya-rayamajhi-6bb901313/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@n.socially"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaTiktok size={24} />
          </a>
          {/* <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100"
          >
            <FaTwitter size={24} />
          </a> */}
        </div>
      </nav>

      {/* Mobile Menu (Visible when `isMenuOpen` is true) */}
      {isMenuOpen && (
        <div className="bg-gray-800 p-4 flex flex-col space-y-4 md:hidden">
          <a
            href="#about"
            className="text-white hover:text-gray-400"
            onClick={(e) => {
              scrollToSection(e, "about");
              setIsMenuOpen(false); // Close the menu after selecting an option
            }}
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-white hover:text-gray-400"
            onClick={(e) => {
              scrollToSection(e, "portfolio");
              setIsMenuOpen(false); // Close the menu after selecting an option
            }}
          >
            Portfolio
          </a>
          <a
            href="#experience"
            className="text-white hover:text-gray-400"
            onClick={(e) => {
              scrollToSection(e, "experience");
              setIsMenuOpen(false); // Close the menu after selecting an option
            }}
          >
            Work Experiences
          </a>
          <a
            href="#testimonials"
            className="text-white hover:text-gray-400"
            onClick={(e) => {
              scrollToSection(e, "testimonials");
              setIsMenuOpen(false); // Close the menu after selecting an option
            }}
          >
            Testimonials
          </a>
          <a
            href="#service"
            className="text-white hover:text-gray-400"
            onClick={(e) => {
              scrollToSection(e, "service");
              setIsMenuOpen(false); // Close the menu after selecting an option
            }}
          >
            Service
          </a>
          <a
            href="#package"
            className="text-white hover:text-gray-400"
            onClick={(e) => {
              scrollToSection(e, "package");
              setIsMenuOpen(false); // Close the menu after selecting an option
            }}
          >
            Package
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-400"
            onClick={(e) => {
              scrollToSection(e, "contact");
              setIsMenuOpen(false); // Close the menu after selecting an option
            }}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
