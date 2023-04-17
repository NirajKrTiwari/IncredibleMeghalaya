
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Info from './components/Info';
import Home from "./Home"
import About from "./components/About"
import Category from './components/Category';
import District from './components/District';
function App() {
  return (
    <div className="App">
     <Navigation/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Info" element={<Info/>} />
          <Route path="/About" element={<About></About>}/>
          <Route path="/District" element={<District/>}/> 
      </Routes>
      <Footer/>

    </div>
    
  );
}

export default App;
