import './Home3.styles.css';

export default function HomePage3() {
    return (
        <div className="home-3-container">
            <div className="home-3-blured"></div>
            <div className='home-3-z-section'>
                <div className="home-3-info">
                    <span>Your future starts here. Our expert tutors will guide you every step of the way.</span>
                </div>

                <div className="home-3-button">
                    {/* <Link to={'www.youtube.com'} /> */}
                    <a
                        href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0TWGKPOa6BqyP_pj4ntwZ71-_foGOPsQaHNWzRSOLRqXGjrV7mxFv0G10d86dixaW6sF48fC0j?gv=true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book trial lessons
                    </a>
                </div>


                <div className="home-3-success-container">
                    <div className="home-3-success-element">
                        <span>100+</span>
                        <span>students trained</span>
                    </div>

                    <div className="home-3-success-element">
                        <span>95%</span>
                        <span>success rate</span>
                    </div>

                    <div className="home-3-success-element">
                        <span>2000+</span>
                        <span>hours of tutoring</span>
                    </div>
                </div>
            </div>
        </div>
    )
}