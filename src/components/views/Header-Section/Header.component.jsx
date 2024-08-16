import { useState } from "react";
import "./Header.style.css";

export default function HeaderComponent() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = () => {
        // Close the mobile menu after clicking a link
        setIsMobileMenuOpen(false);
    };

    return (
        <header id="header">
            <img src="/public/ezgif-2-69c0ff883e.jpg" alt="" />

            <nav className="nav-container">
                {/* Hamburger icon for mobile */}
                <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

                {/* Navbar */}
                <ul className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
                    <li className="navbar-li">
                        <a href="#home" onClick={handleLinkClick}>
                            Home
                        </a>
                    </li>
                    <li className="navbar-li">
                        <a href="#about" onClick={handleLinkClick}>
                            About Us
                        </a>
                    </li>
                    <li className="navbar-li">
                        <a href="#questions" onClick={handleLinkClick}>
                            Q&A
                        </a>
                    </li>
                    <li className="navbar-li">
                        <a href="#contacts" onClick={handleLinkClick}>
                            Contact Us
                        </a>
                    </li>

                    <li className="navbar-li active">
                        <a href="https://www.youtube.com/" target="_blank" onClick={handleLinkClick}>
                            Book a call
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
