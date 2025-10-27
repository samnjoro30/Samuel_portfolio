// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './component/header';
import Skills from './component/skills';
import About from './component/about';
import Projects from './component/body';
import Services from './component/service';
import Contact from './component/Contact';
import ThreeLoader from './component/load';
import Home from './component/home';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2500);
    const removeLoader = setTimeout(() => setLoading(false), 3700);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeLoader);
    };
  }, []);

  if (loading) return <ThreeLoader fadeOut={fadeOut} />;

  return (
    <Router>
      <Header />
      <main className="page-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
