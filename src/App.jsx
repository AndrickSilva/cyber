// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[#fbfbfb]">
        <Home />
        <Services />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
