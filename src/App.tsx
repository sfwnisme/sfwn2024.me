import { useEffect } from "react";
import Nav from "./components/Nav";
import About from "./pages/website/home/About";
import Contact from "./pages/website/home/Contact";
import Footer from "./pages/website/home/Footer";
import Intor from "./pages/website/home/Intor";
import Techs from "./pages/website/home/Techs";
import Work from "./pages/website/home/Work";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);

  return (
    <div className="mx-auto">
      <Nav />
      <div className="container mx-auto">
        {/* <div
          className="z-[2] h-screen w-screen fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          style={{
            backgroundImage: "url(./bg-gradient.png)",
            opacity: "0.12",
            pointerEvents: "none",
          }}
        ></div> */}
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
