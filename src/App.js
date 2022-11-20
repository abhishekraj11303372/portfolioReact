import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Summary from './Components/Summary/Summary';
import Skills from './Components/Skill/Skills';
import AboutMe from './Components/AboutMe/AboutMe';
import Portfolio from './Components/Portfolio/Portfolio';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Home/>
       <Summary/>
       <AboutMe/>
       <Skills/>
       <Portfolio/>
       <ContactMe/>
       <Footer/>
    </div>
  );
}

export default App;
