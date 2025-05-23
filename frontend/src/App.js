import logo from './logo.svg';
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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

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
