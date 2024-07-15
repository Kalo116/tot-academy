import logo from '/src/assets/logo.svg';
import atom from '../../../src/assets/atom.svg';
import calculator from '../../../src/assets/calculator.svg';
import eprovetka from '../../../src/assets/eprovetka.svg';
import squareDark from '../../../src/assets/square-dark.svg';

import './Home1.styles.css'

export default function HomePage1() {
    return (
        <section id="home">
            <ul className="background">
                <li> <img src={atom} alt="Atom" className="svg-conf" /></li>
                <li> <img src={atom} alt="Atom" className="svg-conf" /></li>
                <li> <img src={atom} alt="Atom" className="svg-conf" /></li>
                <li> <img src={atom} alt="Atom" className="svg-conf" /></li>
                <li> <img src={atom} alt="Atom" className="svg-conf" /></li>
                <li> <img src={calculator} alt="Atom" className="svg-conf" /></li>
                <li> <img src={calculator} alt="Atom" className="svg-conf" /></li>
                <li> <img src={calculator} alt="Atom" className="svg-conf" /></li>
                <li> <img src={calculator} alt="Atom" className="svg-conf" /></li>
                <li> <img src={calculator} alt="Atom" className="svg-conf" /></li>
                <li> <img src={eprovetka} alt="Atom" className="svg-conf" /></li>
                <li> <img src={eprovetka} alt="Atom" className="svg-conf" /></li>
                <li> <img src={eprovetka} alt="Atom" className="svg-conf" /></li>
                <li> <img src={eprovetka} alt="Atom" className="svg-conf" /></li>
                <li> <img src={eprovetka} alt="Atom" className="svg-conf" /></li>
                <li> <img src={squareDark} alt="Atom" className="svg-conf" /></li>
                <li> <img src={squareDark} alt="Atom" className="svg-conf" /></li>
                <li> <img src={squareDark} alt="Atom" className="svg-conf" /></li>
                <li> <img src={squareDark} alt="Atom" className="svg-conf" /></li>
                <li> <img src={squareDark} alt="Atom" className="svg-conf" /></li>
                <li> <img src={atom} alt="Atom" className="svg-conf" /></li>
            </ul>
            <img src={logo} alt="Main Logo" className="main-logo" />
            <div className="home-info">
                <span className="welcome-span">Welcome to</span>
                <span className="tot-span">Tot Academy</span>
                <p>Educational Center &quot;Tot Academy&quot; offers professional training for national and international exams</p>
            </div>
        </section>
    );
}