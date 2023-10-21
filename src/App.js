import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import Video from './component/Video';


// import Slider from './component/Slider';


function App() {
  return (
    <>

<BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/video' element={<Video/>}/>
      <Route exact path='/gallery' element={<Gallery/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/about' element={<About/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
