import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Services from "./services";
import Portfolio from "./portfolio";
import Navbar from "./navbar";


import { Route, Routes } from "react-router-dom";

function App() {
  return (
   
    <div className="App">
      <header>
        <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </>
      </header>

      
      
    </div>
  );
}

export default App;










