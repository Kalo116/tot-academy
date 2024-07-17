// import logo from '/src/assets/logo.svg';
import logo from '/public/TOT_LOGO_nobackgroun-05.png';
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
            <div className="home-info">
                <img src={logo} alt="Main Logo" className="main-logo" />
                <span>Educational Center &quot;Tot Academy&quot; offers professional training </span>
                <span>for national and international exams</span>
            </div>
        </section >
    );
}