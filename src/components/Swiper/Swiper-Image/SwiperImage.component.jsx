import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Keyboard, Mousewheel } from 'swiper/modules';
import { swiperImages } from './swiperImages.js';

import 'swiper/css/bundle';
import './SwiperImage.styles.css';

export default function SwiperImageComponent() {
    return (
        <>
            <Swiper
                breakpoints={{
                    1650: {
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
                keyboard={{
                    enabled: true,
                }}
                mousewheel={{
                    forceToAxis: true,
                    sensitivity: 1,
                    thresholdDelta: 50,
                    thresholdTime: 50,
                }}
                loop={true}
                modules={[Pagination, Autoplay, Keyboard, Mousewheel]}
                className='image-swiper-about'
            >
                <SwiperSlide className='video-container'>
                    <div className="slide-content">
                        <video controls>
                            <source src="new-photos/Swiper-Images/VID_20231108_124654.mp4" type="video/mp4" />
                        </video>
                    </div>
                </SwiperSlide>

                {swiperImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            <img src={image} alt="tot academy image" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}