import './About.styles.css';
import LecturersComponent from './Lecturers/Lecturers.component';
import SwiperImageComponent from '../../Swiper/Swiper-Image/SwiperImage.component';
import SwiperImageMobile from '../../Swiper/Swiper-Image-Mobile/SwiperImageMobile.component'

export default function AboutPage() {

    return (
        <section id='about'>
            <div className='about-divider-container'>
                <h1 className='about-title'>About us</h1>
            </div>

            <div className="about-info">
                <h2>Enhance your learning experience with us!</h2>
            </div>

            <div className="lecturers-container">
                <LecturersComponent />
            </div>

            <div className='image-slider-container'>
                <SwiperImageComponent />
            </div>
        </section>
    )
}