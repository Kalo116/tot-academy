import './ScrollToTop.styles.css'

export default function ScrollToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={scrollToTop} className="scroll-to-top">
            ☝
        </button>
    );
}