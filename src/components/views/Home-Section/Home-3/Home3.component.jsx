import { useState, useEffect, useRef } from 'react';
import './Home3.styles.css';

export default function HomePage3() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div className="home-3-container">
            <div className="home-3-blured"></div>
            <div className='home-3-z-section'>
                <div className="home-3-info">
                    <span>Your future starts here. Our expert tutors will guide you every step of the way.</span>
                </div>

                <div className="home-3-button">
                    <a
                        href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0TWGKPOa6BqyP_pj4ntwZ71-_foGOPsQaHNWzRSOLRqXGjrV7mxFv0G10d86dixaW6sF48fC0j?gv=true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book trial lessons
                    </a>
                </div>

                <div className="home-3-success-container" ref={containerRef}>
                    <AnimatedNumber isVisible={isVisible} end={100} label="students trained" showPlus />
                    <AnimatedNumber isVisible={isVisible} end={95} label="success rate" suffix="%" />
                    <AnimatedNumber isVisible={isVisible} end={2000} label="hours of tutoring yearly" showPlus />
                </div>
            </div>
        </div>
    )
}

function AnimatedNumber({ isVisible, end, label, suffix = '', showPlus = false }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const duration = 2200;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    clearInterval(timer);
                    setCount(end);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isVisible, end]);

    return (
        <div className="home-3-success-element">
            <span>
                {count}
                {showPlus && '+'}
                {suffix}
            </span>
            <span>{label}</span>
        </div>
    );
}