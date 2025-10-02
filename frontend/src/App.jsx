//import './App.css';
import Header from './component/header';
import Skills from './component/skills';
import About from './component/about';
import Projects from './component/body';
import Services from './component/service';
import Contact from './component/Contact';

function App() {
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
