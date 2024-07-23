import './About.styles.css';
import LecturersComponent from './Lecturers/Lecturers.component';

export default function AboutPage() {
    return (
        <section id='about'>
            <div className='about-divider'>
                <h1 className='about-title'>About us</h1>
                <div className='about-divider'></div>
            </div>

            <div className="about-info">
                <h2>🌟 Enhance your children&lsquo;s learning experience with us! 🚀</h2>
            </div>

            <div className="lecturers-container">
                <LecturersComponent />
            </div>
        </section>
    )
}