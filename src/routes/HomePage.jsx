import ScrollToTopButton from "../components/scroll-to-top/ScrollToTop.component";
import AboutPage from "../components/views/AboutUs-Section/About.component";
import ContactsPage from "../components/views/Contacts-Section/Contacts.component";
import HomeSection from "../components/views/Home-Section/Home.Component";
import QuestionsPage from "../components/views/Q&A-Section/Questions.component";

export default function HomePage() {
    return (
        <>
            <HomeSection />
            <AboutPage />
            <QuestionsPage />
            <ContactsPage />
            <ScrollToTopButton />
        </>
    )
}