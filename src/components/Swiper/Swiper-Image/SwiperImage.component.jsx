import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';
import './SwiperImage.styles.css';


export default function SwiperImageComponent() {
    return (
        <>
            <Swiper
                breakpoints={{
                    1550: {
                        slidesPerView: 3,
                    },
                    800: {
                        slidesPerView: 2,
                    },
                    10: {
                        slidesPerView: 1,
                    }
                }}
                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
                modules={[Pagination, Autoplay]}
                className='image-swiper-about'
            >
                <SwiperSlide className='video-container'>
                    <video controls>
                        <source src="/public/new-photos/Swiper-Images/VID_20231108_124654.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Swiper-Images/_DSC1913.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Swiper-Images/_DSC1915.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Swiper-Images/_DSC1920.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Swiper-Images/_DSC1921.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Swiper-Images/_DSC1931.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Swiper-Images/_DSC1939.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Swiper-Images/Tot_academy_cells.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Swiper-Images/Tot_academy_combined.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Swiper-Images/Tot_academy_DNA_2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Swiper-Images/Tot_academy_logo_2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/public/new-photos/Swiper-Images/Tot_academy_office.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}