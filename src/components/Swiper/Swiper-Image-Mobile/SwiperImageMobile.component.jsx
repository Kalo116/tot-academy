import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './SwiperImageMobile.styles.css';

import { EffectCards } from 'swiper/modules';

export default function SwiperImageMobile() {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper mobile-swiper"
            >
                <SwiperSlide className='video-container'>
                    <video controls>
                        <source src="/public/new-photos/VID_20231108_124654.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/_DSC1913.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/_DSC1915.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/_DSC1920.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/_DSC1921.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/_DSC1931.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/_DSC1939.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Tot_academy_cells.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Tot_academy_combined.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Tot_academy_DNA_2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Tot_academy_logo_2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Tot_academy_office.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
