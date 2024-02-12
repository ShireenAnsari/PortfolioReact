import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Curser from './components/curser/Curser';
import AboutMe from './components/About/AboutMe';
import Skills from './components/Skills/Skills';
import { Toaster } from 'react-hot-toast';
const App = () => {
  return <div>
   <Toaster/>
     <Curser/>
        <section id="Home">
          <Navbar/>
          <Hero/>
        </section>
    <section id="About">
      <AboutMe/>
    </section>
    <section id="Skills">
      <Skills/>
    </section>
    {/* <section id="Portfolio">
      <Parallex type='portfolio'/>
    </section> */}
    <div id="Projects">  <Portfolio/></div>
    
    <section id="ContactMe">
     
      <Contact/>
    </section> 
   
  </div>;
};

export default App;
