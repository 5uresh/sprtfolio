
import './index.css'
import Navbar from './component/Navbar/Navbar';
import Zero from './component/Zero/Zero';
import About from './component/About/About';
import Service from './component/Service/Service';
import Work from './component/Work/Work';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Zero/> 
        <About/>
        <Service />
        <Work/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
