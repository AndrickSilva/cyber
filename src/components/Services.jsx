import { Globe } from "lucide-react";
const Services = () => {
  return (
    <>
        <h1>Our Services</h1>
    <section className="min-h-[90vh] flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center gap-4 bg-white shadow-sm border border-slate-200 w-60 h-30 rounded-lg p-4 text-black hover:bg-slate-800 transition-all duration-300 ">
        <Globe size={60} strokeWidth={1} className="self-end"/>
        <p className="font-exo font-bold text-xl self-start">Web VAPT</p>
      </div>

      {/* <li>Mobile VAPT</li>
        <li>API VAPT</li>
        <li>Cloud VAPT</li>
        <li>Server VAPT</li>
        <li>Phishing Email Campaigns</li>
        <li>Security Config Review</li> */}
    </section>
    </>
  );
};

export default Services;
