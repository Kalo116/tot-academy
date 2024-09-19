import './Home2.styles.css';

export default function HomePage2() {
    return (
        <div className="home-2-container">
            <h1 className="home-2-title">
                What makes <span className="home-2-span">Tot Academy</span> different?
            </h1>

            <div className="home-2-info">
                <p>
                    At Tot Academy, we&apos;re transforming learning from a mundane task into an <span>exhilarating adventure</span>.
                </p>
                <p>
                    <span>Our blend of traditional teaching methods with cutting-edge technology</span>, including custom-made 3D models, ensures your child&apos;s educational journey is both captivating and effective.
                </p>
            </div>

            <div className="home-2-image-container">
                <div className="home-2-image">
                    <div className="home-2-image-wrapper">
                        <img src="/public/new-photos/Home-Section-2-Images/standard_1800x1090_define-firstgen12.jpg" alt="" />
                    </div>
                    <p>Dynamic and dedicated IB tutors</p>
                </div>

                <div className="home-2-image">
                    <div className="home-2-image-wrapper">
                        <img src="/public/new-photos/Home-Section-2-Images/image_6.png" alt="" />
                    </div>
                    <p>Expert IB exam preparation</p>
                </div>

                <div className="home-2-image">
                    <div className="home-2-image-wrapper">
                        <img src="/public/new-photos/Home-Section-2-Images/image_5.png" alt="" />
                    </div>
                    <p>Personalised and interactive courses</p>
                </div>
            </div>
        </div>
    );
}