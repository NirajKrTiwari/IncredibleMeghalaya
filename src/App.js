
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Footer from "./components/Footer"
import { Routes, Route } from 'react-router-dom';
import Info from './components/Info';
import Home from "./Home"
import About from "./components/About"
import District from './components/District';
import ContactForm from './components/ContactForm';
function App() {
  
  return (
    <div className="App">
     <Navigation/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Info" element={<Info/>} />
          <Route path="/About" element={<About></About>}/>
          <Route path="/District" element={<District/>}/> 
          <Route path="/ContactForm" element={<ContactForm/>}/>
      </Routes>
      <Footer/>

    </div>
    
  );
}

export default App;
