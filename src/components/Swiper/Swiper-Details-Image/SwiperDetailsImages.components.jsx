import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './SwiperDetailsImages.styles.css';

// Sample product images
const productImagesBefore = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
];

const ProductCarousel = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [productImages, setProductImages] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProductImages(productImagesBefore);
            setIsLoading(false);
        }, 4000);
    }, []);


    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-carousel">
            <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className="main-swiper-details"
            >
                {productImages.map((src, index) => (
                    <SwiperSlide key={`main-${index}`}>
                        <img src={src} alt={`Product Image ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                modules={[FreeMode, Thumbs]}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="thumbnail-swiper"
            >
                {productImages.map((src, index) => (
                    <SwiperSlide key={`thumb-${index}`}>
                        <img src={src} alt={`Thumbnail ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCarousel;
