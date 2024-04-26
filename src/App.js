
import React from "react";
import Navbar from './Home/Navbar';
import Header from "./Home/Header";
import About from "./Home/About";
import Device from "./Home/Device";
import Age from "./Home/Age";
import Download from "./Home/Download";
import Apped from "./Home/Apped";
import Footer from "./Home/Footer";
function App (){
  return(
    <div>
    <Navbar/>
    <Header/>
    <About/>
    <Device/>
    <Age/>
    <Download/>
    <Apped/>
    <Footer/>
    </div>
  )
}


export default App;