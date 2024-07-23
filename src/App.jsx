import HeaderComponent from "./components/views/Header-Section/Header.component";

import './App.css'

import HomeSection from "./components/views/Home-Section/Home.Component";
import AboutPage from "./components/views/AboutUs-Section/About.component";
import ScrollToTopButton from "./components/scroll-to-top/ScrollToTop.component";
import QuestionsPage from "./components/views/Q&A-Section/Questions.component";
import ContactsPage from "./components/views/Contacts-Section/Contacts.component";


function App() {

  return (
    <>
      <HeaderComponent />
      <HomeSection />
      <AboutPage />
      <QuestionsPage />
      <ContactsPage />
      <ScrollToTopButton />
    </>
  )
}

export default App
