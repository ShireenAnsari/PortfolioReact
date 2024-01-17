import './app.scss';
import Test from './Test';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
const App = () => {
  return <div>
        <section id="Homepage">
          <Navbar/>
          <Hero/>
        </section>
    <section id="Services">Parallex</section>
    <section>Services</section>
    <section>Hero</section>
    <section id="Portfolio">Parallex</section>
    <section >Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
    {/* <Test/> */}
  </div>;
};

export default App;
