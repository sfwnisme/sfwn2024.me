import { useEffect } from "react";
import Nav from "./components/Nav";
import About from "./pages/website/home/About";
import Contact from "./pages/website/home/Contact";
import Footer from "./pages/website/home/Footer";
import Intor from "./pages/website/home/Intor";
import Techs from "./pages/website/home/Techs";
import Work from "./pages/website/home/Work";
import AOS from 'aos';
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mx-auto">
      <Nav />
      <div className="container mx-auto">
        <Intor />
        <About />
        <Contact />
        <Work />
        <Techs />
        <Footer />
      </div>
    </div>
  );
};

export default App;
