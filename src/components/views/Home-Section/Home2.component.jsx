import logo from '/src/assets/logo.svg';
import atom from '../../../src/assets/atom.svg';
import calculator from '../../../src/assets/calculator.svg';
import eprovetka from '../../../src/assets/eprovetka.svg';
import square from '../../../src/assets/square.svg';

import './Home2.styles.css'

export default function HomePagaExtra() {
    return (
        <section id="home2">
            <ul className="background2">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <img src={logo} alt="Main Logo" className="main-logo2" />
            <div className="home-info2">
                <span className="welcome-span2">Welcome to</span>
                <span className="tot-span2">Tot Academy</span>
                <p>Educational Center &quot;Tot Academy&quot; offers professional training for national and international exams</p>
            </div>
            <div className="logos-container2">
                <img src={atom} alt="Atom" className="svg-conf" />
                <img src={calculator} alt="Calculator" className="svg-conf" />
                <img src={eprovetka} alt="Eprovetka" className="svg-conf" />
                <img src={square} alt="Square" className="svg-conf" />
            </div>
        </section>
    );
}