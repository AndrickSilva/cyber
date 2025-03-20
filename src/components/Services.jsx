import { Globe } from "lucide-react";
// import secure from "../assets/secure.svg";
import { Smartphone } from "lucide-react";
import { Cable } from "lucide-react";
import { Cloud } from "lucide-react";
import { Server } from "lucide-react";
import { Mail } from "lucide-react";
import { ShieldCheck } from "lucide-react";
const Services = () => {
  return (
    <div className="">
      <div className="relative">
        <h1 className="mt-10 text-center font-exo font-bold text-4xl before:content-[''] before:h-1.5 before:w-24 before:rounded-full before:left-[46%] before:absolute before:bg-primary before:-bottom-6">
          Our Services<span className="text-6xl text-primary"> .</span>
        </h1>
      </div>
      <section className="min-h-[70vh] mt-28 flex flex-col gap-4 relative overflow-hidden items-center">
        {/* <img src={secure} alt="secure" className="h-[80vh] absolute -right-1 -z-1" /> */}
        <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center gap-4 bg-white shadow-sm border border-slate-200 w-60 h-30 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300 ">
          <Globe size={60} strokeWidth={1} className="self-end" />
          <p className="font-exo font-bold text-xl self-start"><span className="text-xl text-tertiary">Web </span>VAPT</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-white shadow-sm border border-slate-200 w-60 h-30 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300 ">
          <Smartphone size={60} strokeWidth={1} className="self-end" />
          <p className="font-exo font-bold text-xl self-start"><span className="text-xl text-tertiary">Mobile</span> VAPT</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-white shadow-sm border border-slate-200 w-60 h-30 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300 ">
          <Cable size={60} strokeWidth={1} className="self-end" />
          <p className="font-exo font-bold text-xl self-start"><span className="text-xl text-tertiary">API</span> VAPT</p>
        </div>
        </div>

        <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center gap-4 bg-white shadow-sm border border-slate-200 w-60 h-30 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300 ">
          <Cloud size={60} strokeWidth={1} className="self-end" />
          <p className="font-exo font-bold text-xl self-start"><span className="text-xl text-tertiary">Cloud </span>VAPT</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-white shadow-sm border border-slate-200 w-60 h-30 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300 ">
          <Server size={60} strokeWidth={1} className="self-end" />
          <p className="font-exo font-bold text-xl self-start"><span className="text-xl text-tertiary">Server</span> VAPT</p>
        </div>
        <div className="flex items-center justify-center gap-4 bg-white shadow-sm border border-slate-200 w-60 h-30 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300 ">
          <p className="font-exo font-bold text-xl self-end"><span className="text-xl text-tertiary">Phishing Email</span> Campaigns</p>
          <Mail size={60} strokeWidth={1} className="self-start h-[37px]" />
        </div>
        </div>
        <div className="flex gap-4">
        <div className="flex items-center justify-center gap-4 bg-white shadow-sm border border-slate-200 w-60 h-30 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300 ">
          <p className="font-exo font-bold text-xl self-end"><span className="text-xl text-tertiary">Security Config </span> Review</p>
          <ShieldCheck size={60} strokeWidth={1} className="self-start h-[37px]" />
        </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
