import React from 'react'

const Footer = () => {
  return (
<footer class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#">
            {/* <img class="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt=""></img> */}
            <span className='font-bold text-3xl text-white'>Cyber</span>
        </a>

        <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a href="#" class="text-sm transition-colors duration-300 text-gray-200 hover:text-tertiary">
                Home
            </a>

            <a href="#" class="text-sm transition-colors duration-300 text-gray-200 hover:text-tertiary">
                Service
            </a>

            <a href="#" class="text-sm transition-colors duration-300 text-gray-200 hover:text-tertiary">
                About
            </a>
        </div>

        <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2001 Cyber.</p>
    </div>
</footer>
)
}

export default Footer
