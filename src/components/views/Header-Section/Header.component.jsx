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
                <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
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
                        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0TWGKPOa6BqyP_pj4ntwZ71-_foGOPsQaHNWzRSOLRqXGjrV7mxFv0G10d86dixaW6sF48fC0j?gv=true" target="_blank" onClick={handleLinkClick}>
                            Book a call
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
