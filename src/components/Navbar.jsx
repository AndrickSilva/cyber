import React from "react";
// import reactLogo from '../assets/react.svg'
const Navbar = () => {
return (
        <nav className="bg-primary flex justify-between items-center py-2 px-12 drop-shadow-md font-semibold sticky top-0 z-50 font-exo">
                {/* <img src={reactLogo} /> */}
                <h1 className="font-bold text-2xl text-white">Cyber</h1>
                <div className="flex gap-10 text-sm">
                        <a href="#home" className="text-slate-200 hover:text-white">Home</a>
                        <a href="#service" className="text-slate-200 hover:text-white">Service</a>
                        <a href="#about" className="text-slate-200 hover:text-white">About</a>
                </div>
                <a href="#contact" className="text-white border-2 border-slate-200 px-6 py-1.5 rounded-sm hover:bg-white hover:text-primary transition duration-300 ease-out">Contact</a>
        </nav>
);
};

export default Navbar;
