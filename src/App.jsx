import './app.scss';
import Test from './Test';
import Navbar from './components/navbar/Navbar';
const App = () => {
  return <div>
        <section>
          <Navbar/>
        </section>
    <section>Parallex</section>
    <section>Services</section>
    <section>Hero</section>
    <section>Parallex</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Contact</section>
    {/* <Test/> */}
  </div>;
};

export default App;
