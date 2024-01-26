import './app.scss';
import Test from './Test';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallex from './components/parallex/parallex';
import Services from './components/Services/services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Curser from './components/curser/Curser';
const App = () => {
  return <div>
     <Curser/>
        <section id="Homepage">
          <Navbar/>
          <Hero/>
        </section>
    <section id="Services">
      <Parallex type='services'/>
    </section>
    <section>
      <Services/>
    </section>
    {/* <section id="Portfolio">
      <Parallex type='portfolio'/>
    </section>
    <div>  <Portfolio/></div>
    
    <section id="Contact">
     
      <Contact/>
    </section> */}
    {/* <Test/> */}
  </div>;
};

export default App;
