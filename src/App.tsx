import Nav from "./components/Nav";
import About from "./pages/website/home/About";
import Contact from "./pages/website/home/Contact";
import Work from "./pages/website/home/Work";

const App = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <About />
      <Contact />
      <Work />
    </div>
  );
};

export default App;
