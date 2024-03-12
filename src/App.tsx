import React from "react";
import Nav from "./components/Nav";
import About from "./pages/website/home/About";
import Contact from "./pages/website/home/Contact";

const App = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <About />
      <Contact />
    </div>
  );
};

export default App;
