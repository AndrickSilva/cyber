import { X, Menu } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="bg-primary flex justify-between items-center py-3 px-6 md:px-12 drop-shadow-md font-semibold sticky top-0 z-50 font-exo">
      {/* Logo */}
      <h1 className="font-bold text-2xl text-white">Cyber</h1>
      
      {/* Menu Items - Hidden on small screens */}
      <div className={`md:flex gap-10 text-sm hidden`}>
        <a href="#home" className="text-slate-200 hover:text-white">Home</a>
        <a href="#service" className="text-slate-200 hover:text-white">Service</a>
        <a href="#about" className="text-slate-200 hover:text-white">About</a>
      </div>
      
      {/* Contact Button */}
      <a href="#contact" className="hidden md:block text-white border-2 border-slate-200 px-6 py-1.5 rounded-sm hover:bg-white hover:text-primary transition duration-300 ease-out">
        Contact
      </a>
      
      {/* Mobile Menu Toggle */}
      <div className="md:hidden block cursor-pointer text-white" onClick={handleMenuToggle}>
        {toggle ? <X /> : <Menu />}
      </div>

      {/* Mobile Menu - Visible on Toggle */}
      {toggle && (
        <div className="absolute top-13 h-screen left-0 w-full bg-primary flex flex-col items-center gap-16 py-6 md:hidden" onClick={handleMenuToggle}>
          <a href="#home" className="text-slate-200 hover:text-white">Home</a>
          <a href="#service" className="text-slate-200 hover:text-white">Service</a>
          <a href="#about" className="text-slate-200 hover:text-white">About</a>
          <a href="#contact" className="text-white border-2 border-slate-200 px-6 py-1.5 rounded-sm hover:bg-white hover:text-primary transition duration-300 ease-out">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;