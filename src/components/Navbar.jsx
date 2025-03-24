import React from "react";
// import reactLogo from '../assets/react.svg'
const Navbar = () => {
return (
        <nav className="bg-primary flex justify-between items-center py-2 px-12 drop-shadow-md font-semibold sticky top-0 z-50">
                {/* <img src={reactLogo} /> */}
                <h1 className="font-bold text-2xl text-white">Cyber</h1>
                <div className="flex gap-10 text-sm">
                        <a href="#home" className="text-slate-200 hover:text-white">Home</a>
                        <a href="#service" className="text-slate-200 hover:text-white">Service</a>
                        <a href="#about" className="text-slate-200 hover:text-white">About Us</a>
                </div>
                <a href="#contact" className="bg-slate-200 px-2 py-2 rounded-sm hover:bg-white transition duration-300 ease-out">Contact Us</a>
        </nav>
);
};

export default Navbar;
