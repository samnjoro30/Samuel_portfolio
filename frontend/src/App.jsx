//import './App.css';
import { useEffect, useState } from "react";
import Header from './component/header';
import Skills from './component/skills';
import About from './component/about';
import Projects from './component/body';
import Services from './component/service';
import Contact from './component/Contact';
import ThreeLoader from './component/load';

function App() {

  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate a loading time (2.5 seconds)
    const timer = setTimeout(() => setFadeOut(true), 2500);
    // After fade-out completes, remove the loader
    const removeLoader = setTimeout(() => setLoading(false), 3700);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeLoader);
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
