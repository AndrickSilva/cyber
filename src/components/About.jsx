import React from 'react';
import about from '../assets/about.jpg';

const About = () => {
  return (
    <div id="about" className="min-h-[100vh] flex flex-col items-center">
      <div className="relative">
        <h1 className="pt-16 text-center font-exo font-bold text-4xl before:content-[''] before:h-1.5 before:w-24 before:rounded-full before:left-[19%] before:absolute before:bg-primary before:-bottom-6">
          About Us<span className="text-6xl text-primary"> .</span>
        </h1>
      </div>
      <div className="mt-28 flex flex-col md:flex-row justify-center items-center w-[90%] gap-8 sm:gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={about}
            alt="About us"
            className="w-96 h-72 object-cover rounded-lg shadow-lg"></img>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:block">
            <h2 className="text-2xl font-exo font-bold mb-3">Hi, we're Cyber.</h2>
            <p className='w-full md:max-w-md'>
              Since 2001, we've been a trusted cybersecurity partner for businesses
              across the globe. we're strategically positioned to support your needs, no matter your
              location or industry.
            </p>
            <br />
            <p className='w-full md:max-w-md'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nesciunt.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
