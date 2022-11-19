import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Summary from './Components/Summary/Summary';
import Skills from './Components/Skill/Skills';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
       <Home/>
       <Summary/>
       <AboutMe/>
       <Skills/>
    </div>
  );
}

export default App;
