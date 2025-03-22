import { Globe, Smartphone, Cable, Cloud, Server, Mail, ShieldCheck } from "lucide-react";

const serviceData = [
  { id: 1, icon: Globe, title: "Web", subtitle: "VAPT" },
  { id: 2, icon: Smartphone, title: "Mobile", subtitle: "VAPT" },
  { id: 3, icon: Cable, title: "API", subtitle: "VAPT" },
  { id: 4, icon: Cloud, title: "Cloud", subtitle: "VAPT" },
  { id: 5, icon: Server, title: "Server", subtitle: "VAPT" },
  { id: 6, icon: Mail, title: "Phishing Email", subtitle: "Campaigns", isHorizontal: true },
  { id: 7, icon: ShieldCheck, title: "Security Config", subtitle: "Review", isHorizontal: true },
];

const Services = () => {
  return (
    <div className="">
      <div className="relative">
        <h1 className="mt-10 text-center font-exo font-bold text-4xl before:content-[''] before:h-1.5 before:w-24 before:rounded-full before:left-[46%] before:absolute before:bg-primary before:-bottom-6">
          Our Services<span className="text-6xl text-primary"> .</span>
        </h1>
      </div>
      <section className="min-h-[70vh] mt-28 flex flex-col gap-4 relative overflow-hidden items-center">
        <div className="grid grid-cols-3 gap-4">
          {serviceData.map(({ id, icon: Icon, title, subtitle, isHorizontal }) => (
            <div
              key={id}
              className={`flex ${
                isHorizontal ? "flex-row-reverse items-center" : "flex-col items-center"
              } justify-center gap-4 bg-white shadow-sm border border-slate-200 w-60 h-30 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300`}
            >
              {Icon && <Icon size={60} strokeWidth={1} className={`${isHorizontal ? "self-start h-[37px]" : "self-end"}`} />}
              <p className={`font-exo font-bold text-xl ${isHorizontal ? "self-end" : "self-start"}`}>
                <span className="text-xl text-tertiary">{title} </span>
                {subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
