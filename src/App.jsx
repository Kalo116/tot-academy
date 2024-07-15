import HeaderComponent from "./components/Header/Header.component";

import './App.css'

//Home Pages
import HomePage1 from "./components/Home-Sections/Home1.component";
// import HomePage2 from "./components/Home-Sections/Home2.component";

//----------------------------------------------------------------------------------

import AboutPage from "./components/About-us/About.component";
import ScrollToTopButton from "./components/scroll-to-top/ScrollToTop.component";


function App() {

  return (
    <>
      <HeaderComponent />
      <HomePage1 />
      <AboutPage />
      <ScrollToTopButton />
    </>
  )
}

export default App
