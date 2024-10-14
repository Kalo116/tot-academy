import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Keyboard, Mousewheel } from 'swiper/modules';
import CommentCard from './Comment-Card/CommentCard.component.jsx'
import comments from './comments.js';

import 'swiper/css/bundle';
import './SwiperComment.styles.css';

export default function SwiperCommentsComponent() {
    return (
        <>
            <Swiper
                breakpoints={{
                    1560: {
                        slidesPerView: 3,
                    },

                    976: {
                        slidesPerView: 2,
                    },
                    10: {
                        slidesPerView: 1,
                    },
                }}
                spaceBetween={35}
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
                className="swiper-comments"
            >
                {comments.map(el => {
                    return (
                        <>
                            <SwiperSlide className='slide-comment' key={`comment-${el.activeKey}`} >
                                <CommentCard comment={el.comment} name={el.name} />
                            </SwiperSlide>
                        </>
                    )
                })}

            </Swiper>
        </>
    )
}