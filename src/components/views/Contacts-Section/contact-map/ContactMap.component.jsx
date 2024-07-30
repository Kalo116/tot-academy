import './ContactMap.styles.css';

export default function ContactMap() {
    return (
        <div className='contact-map-container'>
            <div className='contact-map-info'>
                <div className="contact-item">
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="35px"
                        width="35px"
                        color='#fff'
                    >
                        <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z" />
                    </svg>
                    <span>+359 885 076 024</span>

                </div>

                <div className="contact-item">
                    <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="35px"
                        width="35px"
                        color='#fff'
                    >
                        <path d="M9.828.722a.5.5 0 01.354.146l4.95 4.95a.5.5 0 010 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 01.16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 01-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 010-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 011.013.16l3.134-3.133a2.772 2.772 0 01-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 01.353-.146z" />
                    </svg>
                    <span>&quot;48 Gen. Skobelev Boulevard, Sofia&quot;</span>
                </div>
            </div>

            <div className="contact-map">
                <iframe width="100%" height="100%" style={{ ['border-radius']: "16px" }} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=%D0%91%D1%83%D0%BB.%20%22%D0%93%D0%B5%D0%BD.%20%D0%A1%D0%BA%D0%BE%D0%B1%D0%B5%D0%BB%D0%B5%D0%B2%22%2048,%20%D0%A1%D0%BE%D1%84%D0%B8%D1%8F%20+(Tot%20Academy)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
            </div>
        </div>

    )
}