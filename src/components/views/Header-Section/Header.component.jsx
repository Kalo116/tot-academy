import { useState, useEffect } from "react";
import "./Header.style.css";
import { Link, useLocation } from "react-router-dom";

export default function HeaderComponent() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
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
            if (window.innerWidth <= 1096) {
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

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header id="header" className={isNavVisible ? "visible" : "hidden"}>
            <Link to="/" className="header-logo-container">
                <img src="/TOT_LOGO_navbar.png" alt="" />
            </Link>


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
                    {window.innerWidth > 1095 ? (
                        <li className="navbar-li dropdown">
                            <div className="dropdown-trigger" onClick={toggleDropdown}>
                                <Link to="/" onClick={(e) => e.preventDefault()}>
                                    Home
                                    <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
                                </Link>
                            </div>
                            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                <li>
                                    <Link to="/#about" onClick={handleLinkClick} className="dropdown-link">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#questions" onClick={handleLinkClick} className="dropdown-link">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/#contacts" onClick={handleLinkClick} className="dropdown-link">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    ) : (
                        <>
                            <li className="navbar-li">
                                <Link to="/#home" onClick={handleLinkClick}>Home</Link>
                            </li>
                            <li className="navbar-li">
                                <Link to="/#about" onClick={handleLinkClick}>About Us</Link>
                            </li>
                            <li className="navbar-li">
                                <Link to="/#questions" onClick={handleLinkClick}>FAQs</Link>
                            </li>
                            <li className="navbar-li">
                                <Link to="/#contacts" onClick={handleLinkClick}>Contact Us</Link>
                            </li>
                        </>
                    )}
                    <li className="navbar-li">
                        <Link to="/table" onClick={handleLinkClick}>Courses</Link>
                    </li>
                    <li className="navbar-li">
                        <Link to="/shop" onClick={handleLinkClick}>Shop</Link>
                    </li>
                    <li className="navbar-li">
                        <Link
                            to="https://ibeelearning.com"
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
                        </Link>
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
