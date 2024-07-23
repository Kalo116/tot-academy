import logo from '/public/TOT_LOGO_nobackgroun-05.png';
import atom from '../../../../assets/atom.svg';
import calculator from '../../../../assets/calculator.svg';
import eprovetka from '../../../../assets/eprovetka.svg';
import squareDark from '../../../../assets/square-dark.svg';

import SwiperCommentsComponent from '../../../Swiper/Swiper-Comment/SwiperComment.component.jsx';

import './Home1.styles.css'

export default function HomePage1() {
    return (
        <>
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

            <div className='swiper-container'>
                <SwiperCommentsComponent />
            </div>

        </>
    );
}