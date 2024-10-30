import { useState, useEffect } from "react";
import "./Header.style.css";

export default function HeaderComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const checkScreenWidth = () => {
      if (window.innerWidth <= 821) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
        setIsNavVisible(true);
      }
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [lastScrollY]);

  return (
    <header id="header" className={isNavVisible ? "visible" : "hidden"}>
      <div className="header-logo-container">
        <img src="/TOT_LOGO_navbar.png" alt="" />
      </div>

      <nav className="nav-container">
        <div
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <ul className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <li className="navbar-li">
            <a href="#home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li className="navbar-li">
            <a
              href="https://ibeelearning.com"
              target="_blank"
              onClick={handleLinkClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <img
                src="/IBEE_origiral_drawing_side_view.svg"
                alt="IBEE Logo"
                style={{ width: '30px', height: '30px' }}
              />
              IB Calculator
            </a>
          </li>
          <li className="navbar-li">
            <a href="#about" onClick={handleLinkClick}>
              About Us
            </a>
          </li>
          <li className="navbar-li">
            <a href="#questions" onClick={handleLinkClick}>
              FAQs
            </a>
          </li>
          <li className="navbar-li">
            <a href="#contacts" onClick={handleLinkClick}>
              Contact Us
            </a>
          </li>
          <li className="navbar-li active">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0TWGKPOa6BqyP_pj4ntwZ71-_foGOPsQaHNWzRSOLRqXGjrV7mxFv0G10d86dixaW6sF48fC0j?gv=true"
              target="_blank"
              onClick={handleLinkClick}
            >
              Book a call
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
