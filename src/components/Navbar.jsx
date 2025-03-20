import React from "react";
import reactLogo from '../assets/react.svg'
const Navbar = () => {
return (
    <nav className="bg-red-800 flex justify-between h-16 items-center px-10 drop-shadow-md">
            <img src={reactLogo} />
            <div className="flex gap-10">
                    <a href="#home" className="text-slate-200 hover:text-white ">Home</a>
                    <a href="#service" className="text-slate-200 hover:text-white">Service</a>
                    <a href="#about-us" className="text-slate-200 hover:text-white">About Us</a>
            </div>
            <a href="#contact-us" className="bg-slate-200 px-2 py-2 rounded-sm hover:bg-gray-200">Contact Us</a>
    </nav>
);
};

export default Navbar;
