import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Places from './components/Places';
import Category from './components/Category';
import Footer from "./components/Footer"
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <Category/>
      <Places/>
      <About/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
