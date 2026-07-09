import { useEffect, useState } from "react";

import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <IntroScreen isVisible={showIntro} />

      {!showIntro && (
        <div className="bg-slate-950 text-white">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;