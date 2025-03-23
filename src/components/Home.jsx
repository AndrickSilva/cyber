import React from "react";
import security from "../assets/security-not-css.svg";
import { MoveRight } from "lucide-react";
const Home = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-between gap-4 bg-secondary font-inter px-2">
      <img src={security} className="h-[480px] w-1/2"></img>
      <div className=" w-1/2">
        <div className="max-w-[580px]">
          <h1 className="text-5xl font-bold font-exo text-slate-800">
            Rigorous Application Penetration Testing Services
          </h1>
          <p className="text-lg mt-7 text-slate-700">
            Adhere to the latest compliance standards and fast track time to
            launch. Our CREST-approved application penetration testing services
            detect and nullify every possible vulnerability.
          </p>
        </div>
      <button className="group bg-gradient-to-r bg-primary hover:bg-red-700 transition duration-300 ease-out cursor-pointer mt-7  text-white py-3 px-6 rounded-md flex items-center justify-center gap-1">
        <span>View Services</span>
        <MoveRight className="group-hover:translate-x-1.5 transition duration-300 ease-out"/>
        </button>
      </div>
    </div>
  );
};

export default Home;
