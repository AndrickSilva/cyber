import React from "react";
import security from "../assets/security-not-css.svg";
import { MoveRight } from "lucide-react";
const Home = () => {
  return (
    <div id="home" className="min-h-[100vh] flex items-center justify-between gap-4 bg-secondary font-inter px-2">
      <img src={security} className="h-[480px] w-1/2 hidden sm:block"></img>
      <div className="p-6 sm:p-0 sm:w-1/2">
        <div className="max-w-[580px]">
          <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold font-exo text-slate-800">
            Rigorous Application Penetration Testing Services
          </h1>
          <p className="text-lg sm:text-sm lg:text-lg mt-7 text-slate-700">
            Adhere to the latest compliance standards and fast track time to
            launch. Our CREST-approved application penetration testing services
            detect and nullify every possible vulnerability.
          </p>
        </div>
      <a href="#service" className=" w-fit group bg-gradient-to-r bg-primary hover:bg-red-700 transition duration-300 ease-out cursor-pointer mt-7  text-white p-2 lg:py-3 lg:px-4 rounded-md flex items-center justify-center gap-1">
        <span>View Services</span>
        <MoveRight className="group-hover:translate-x-1.5 transition duration-300 ease-out"/>
        </a>
      </div>
    </div>
  );
};

export default Home;
