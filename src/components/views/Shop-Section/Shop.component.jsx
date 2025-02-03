import atom from '../../../assets/atom.svg';
import calculator from '../../../assets/calculator.svg';
import eprovetka from '../../../assets/eprovetka.svg';
import squareDark from '../../../assets/square-dark.svg';
import './Shop.styles.css';

export default function Shop() {
    return (
        <div className="coming-soon-container">
            <ul className="background">
                <li> <img src={atom} alt="Atom" className="svg-conf" /></li>
                <li> <img src={atom} alt="Atom" className="svg-conf" /></li>
                <li> <img src={atom} alt="Atom" className="svg-conf" /></li>
                <li> <img src={atom} alt="Atom" className="svg-conf" /></li>
                <li> <img src={atom} alt="Atom" className="svg-conf" /></li>
                <li> <img src={calculator} alt="Calculator" className="svg-conf" /></li>
                <li> <img src={calculator} alt="Calculator" className="svg-conf" /></li>
                <li> <img src={calculator} alt="Calculator" className="svg-conf" /></li>
                <li> <img src={calculator} alt="Calculator" className="svg-conf" /></li>
                <li> <img src={calculator} alt="Calculator" className="svg-conf" /></li>
                <li> <img src={eprovetka} alt="Eprovetka" className="svg-conf" /></li>
                <li> <img src={eprovetka} alt="Eprovetka" className="svg-conf" /></li>
                <li> <img src={eprovetka} alt="Eprovetka" className="svg-conf" /></li>
                <li> <img src={eprovetka} alt="Eprovetka" className="svg-conf" /></li>
                <li> <img src={eprovetka} alt="Eprovetka" className="svg-conf" /></li>
                <li> <img src={squareDark} alt="Square" className="svg-conf" /></li>
                <li> <img src={squareDark} alt="Square" className="svg-conf" /></li>
                <li> <img src={squareDark} alt="Square" className="svg-conf" /></li>
                <li> <img src={squareDark} alt="Square" className="svg-conf" /></li>
                <li> <img src={squareDark} alt="Square" className="svg-conf" /></li>
                <li> <img src={atom} alt="Atom" className="svg-conf" /></li>
            </ul>
            <div className="shop-content">
                <h1 className="shop-title">Coming Soon</h1>
                <div className="shop-subtitle">Our shop is under construction</div>
                <div className="shop-loader"></div>
            </div>


        </div>
    );
}