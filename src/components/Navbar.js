import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  const menuItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Case Studies",
      path: "/case-studies",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure navbar height and set it as a CSS custom property
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        const height = navbarRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`
        );
      }
    };

    // Initial measurement
    updateNavbarHeight();

    // Update on window resize
    window.addEventListener("resize", updateNavbarHeight);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, [isOpen]); // Re-measure when menu opens/closes

  return (
    <nav
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
      ref={navbarRef}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="MadMatcher" />
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <div key={item.title} className="navbar-item">
              <Link
                to={item.path}
                className={`navbar-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={handleMenuClick}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
