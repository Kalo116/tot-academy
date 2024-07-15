// import { useState } from "react";
import "./Header.style.css";

export default function HeaderComponent() {
    // const [active, setActive] = useState('home');

    // const handleClick = (page) => {
    //     setActive(page);
    // };


    return (
        <header id="header">
            <img src="/public/ezgif-2-69c0ff883e.jpg" alt="" />

            <nav className="nav-container">
                <ul className="navbar">
                    <li className="navbar-li">
                        <a href="#home">
                            Home
                        </a>
                    </li>
                    <li className="navbar-li">
                        <a href="#about">
                            About Us
                        </a>
                    </li>
                    <li className="navbar-li">
                        <a href="#contact">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
        </header >
    )
}