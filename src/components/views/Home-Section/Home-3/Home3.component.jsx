import './Home3.styles.css';

export default function HomePage3() {
    return (
        <div className="home-3-container">
            <div className="home-3-blured"></div>
            <div className='home-3-z-section'>
                <div className="home-3-info">
                    <span>The university of your dreams is within reach. Our IB tutors are already there (TS copy).</span>
                </div>

                <div className="home-3-button">
                    {/* <Link to={'www.youtube.com'} /> */}
                    <a
                        href="https://www.youtube.com/"
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
                        <span>10+</span>
                        <span>years of experience</span>
                    </div>
                </div>
            </div>
        </div>
    )
}