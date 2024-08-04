import "./Header.style.css";

export default function HeaderComponent() {

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
                        <a href="#questions">
                            Q&A
                        </a>
                    </li>
                    <li className="navbar-li">
                        <a href="#contacts">
                            Contact Us
                        </a>
                    </li>

                    <li className="navbar-li active">
                        <a href="https://www.youtube.com/" target="_blank">
                            Book a call
                        </a>
                    </li>
                </ul>
            </nav>
        </header >
    )
}