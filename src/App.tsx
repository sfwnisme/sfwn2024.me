import Nav from "./components/Nav";
import About from "./pages/website/home/About";
import Contact from "./pages/website/home/Contact";
import Footer from "./pages/website/home/Footer";
import Intor from "./pages/website/home/Intor";
import Work from "./pages/website/home/Work";

const App = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <Intor />
      <About />
      <Contact />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
