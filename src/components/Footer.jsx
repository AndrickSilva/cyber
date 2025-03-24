import React from 'react'

const Footer = () => {
  return (
<footer className="bg-gray-900">
    <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#home">
            {/* <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt=""></img> */}
            <span className='font-bold text-3xl text-white'>Cyber</span>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a href="#home" className="text-sm transition-colors duration-300 text-gray-200 hover:text-tertiary">
                Home
            </a>

            <a href="#service" className="text-sm transition-colors duration-300 text-gray-200 hover:text-tertiary">
                Service
            </a>

            <a href="#about" className="text-sm transition-colors duration-300 text-gray-200 hover:text-tertiary">
                About
            </a>
            <a href="#contact" className="text-sm transition-colors duration-300 text-gray-200 hover:text-tertiary">
                Contact
            </a>
        </div>
        <p className="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2001 Cyber.</p>
    </div>
</footer>
)
}

export default Footer
