import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import Scope from './components/Scope';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Credits from './components/Credits';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className='hero'>
     <Hero/>
     </div>
     <div className='events'>
     <Events/>
     </div>
     <div className='cards'>
      <Card/>
     </div>
     <div className='scope'>
      <Scope/>
     </div>
     <div className='faq'>
<FAQ/>
     </div>
     <div className='footer'>
     <Footer/>
     <Credits/>
     </div>
    </div>
  );
}

export default App;
