import { useEffect, useState } from 'react';
import { useComments } from '../../../context/CommentsContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Keyboard, Mousewheel } from 'swiper/modules';
import { getComments } from '../../../utils/firebase.js';
import CommentCard from './Comment-Card/CommentCard.component.jsx'

import 'swiper/css/bundle';
import './SwiperComment.styles.css';

export default function SwiperCommentsComponent() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [slidesCount, setSlidesCount] = useState(3);
    const { cachedComments, setCachedComments } = useComments();

    useEffect(() => {
        const updateSlidesCount = () => {
            if (window.innerWidth >= 1560) setSlidesCount(3);
            else if (window.innerWidth >= 976) setSlidesCount(2);
            else setSlidesCount(1);
        };

        updateSlidesCount();
        window.addEventListener('resize', updateSlidesCount);
        return () => window.removeEventListener('resize', updateSlidesCount);
    }, []);

    useEffect(() => {
        const fetchComments = async () => {
            if (cachedComments.length > 0) {
                setIsLoading(false);
                return;
            }

            try {
                const comments = await getComments();
                setCachedComments(comments);
                setError(null);
            } catch (err) {
                setError('Failed to load comments. Please try again later.');
                console.error('Error fetching comments:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchComments();
    }, [cachedComments.length, setCachedComments]);

    if (error) {
        return (
            <div className="comments-error-container">
                <div className="comments-error">
                    <p>{error}</p>
                    <button onClick={() => {
                        setIsLoading(true);
                        setError(null);
                        setCachedComments([]);
                    }}>
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="comments-loading-container">
                <div className="comments-loading-skeleton">
                    {[...Array(slidesCount)].map((_, index) => (
                        <div key={index} className="skeleton-card" />
                    ))}
                </div>
                <div className="comments-loading-overlay">
                    <span className="loader"></span>
                    <p>Loading comments...</p>
                </div>
            </div>
        );
    }

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
                {cachedComments.map(el => {
                    return (
                        <>
                            <SwiperSlide className='slide-comment' key={`comment-${el.id}`} >
                                <CommentCard comment={el.comment} name={el.name} key={el.id} />
                            </SwiperSlide>
                        </>
                    )
                })}

            </Swiper>
        </>
    )
}