import { useEffect } from "react";
import Nav from "./components/Nav";
import About from "./pages/website/home/About";
import Contact from "./pages/website/home/Contact";
import Footer from "./pages/website/home/Footer";
import Intor from "./pages/website/home/Intor";
import FrontendSkills from "./pages/website/home/FrontendSkills";
import AOS from "aos";


// import "aos/dist/aos.css";
import Loader from "./components/Loader";
import MarketingSkills from "./pages/website/home/MarketingSkills";
import Btn01 from "./components/Btn01";
import Projects from "./pages/website/home/Projects";
// import Projects from "./pages/website/home/Projects";

export default function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 200,
      easing: "ease-in-sine",
      delay: 0,
    });
  }, []);
  return (
    <div className="mx-auto">
      <Nav />
      <div className="container mx-auto">

        <Intor />
        <Projects />
        <About />
        <Contact />
        {/* <Work /> */}
        <FrontendSkills />
        <MarketingSkills />
        <Footer />
        <Loader />
      </div>
      <Btn01 />
    </div>
  );
};