import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import CommentCard from './Comment-Card/CommentCard.component.jsx'
import comments from './comments.js';

import 'swiper/css/bundle';
import './SwiperComment.styles.css';

export default function SwiperCommentsComponent() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={35}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
                modules={[Pagination, Autoplay]}
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