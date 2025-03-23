import { Globe, Smartphone, Cable, Cloud, Server, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";

const serviceData = [
  [
    { 
      id: 1, 
      icon: Globe, 
      title: "Web", 
      subtitle: "VAPT", 
      details: {
        title: "Web Application Security Testing",
        img: "https://placehold.co/200x200",
        description: "Comprehensive security testing for web applications to identify vulnerabilities and ensure robust protection."
      }
    },
    { 
      id: 2, 
      icon: Smartphone, 
      title: "Mobile", 
      subtitle: "VAPT", 
      details: {
        title: "Mobile Application Security Testing",
        img: "/images/mobile-vapt.png",
        description: "Thorough security analysis for mobile applications to safeguard user data and prevent breaches."
      }
    },
    { 
      id: 3, 
      icon: Cable, 
      title: "API", 
      subtitle: "VAPT", 
      details: {
        title: "API Security Testing",
        img: "/images/api-vapt.png",
        description: "Ensure secure communication and data exchange by identifying vulnerabilities in APIs."
      }
    },
  ],
  [
    { 
      id: 4, 
      icon: Cloud, 
      title: "Cloud", 
      subtitle: "VAPT", 
      details: {
        title: "Cloud Security Assessment",
        img: "/images/cloud-vapt.png",
        description: "Evaluate cloud infrastructure for security risks and implement best practices for protection."
      }
    },
    { 
      id: 5, 
      icon: Server, 
      title: "Server", 
      subtitle: "VAPT", 
      details: {
        title: "Server Security Testing",
        img: "/images/server-vapt.png",
        description: "Identify and mitigate vulnerabilities in server configurations and environments."
      }
    },
    { 
      id: 6, 
      icon: Mail, 
      title: "Phishing Email", 
      subtitle: "Campaigns", 
      isHorizontal: true, 
      details: {
        title: "Phishing Email Campaigns",
        img: "/images/phishing-email.png",
        description: "Simulate phishing attacks to educate and test the awareness of employees."
      }
    },
  ],
  [
    { 
      id: 7, 
      icon: ShieldCheck, 
      title: "Security Config", 
      subtitle: "Review", 
      isHorizontal: true, 
      details: {
        title: "Security Configuration Review",
        img: "/images/security-config.png",
        description: "Analyze and improve security configurations to ensure compliance and reduce risks."
      }
    },
  ],
];

const Services = () => {
  const [expandedId, setExpandedId] = useState(null)
  const handleCardClick=(id)=>{
    setExpandedId(expandedId === id ? null : id)
    console.log(id);
  }

  const renderExpandedSection = (expandedCardSection) => {
    const allServices = serviceData[expandedCardSection];
    const expandedService = allServices.find((service) => service.id === expandedId);

    if (!expandedService) return null;

    return (
      <div className="min-h-[80vh] w-full bg-primary text-white flex items-center justify-center p-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold w-full text-center mb-6">{expandedService.details.title}</h2>
          <img src={expandedService.details.img} alt={expandedService.details.img} className="h-1/4 " />
          <p className="mt-2">{expandedService.details.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="relative">
        <h1 className="mt-10 text-center font-exo font-bold text-4xl before:content-[''] before:h-1.5 before:w-24 before:rounded-full before:left-[46%] before:absolute before:bg-primary before:-bottom-6">
          Our Services<span className="text-6xl text-primary"> .</span>
        </h1>
      </div>
      <section className="min-h-[70vh] mt-28 flex flex-col gap-4">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex justify-center flex-col w-full">
          <div className="flex flex-wrap gap-4 justify-center">
            {serviceData[0].map(({ id, icon: Icon, title, subtitle, isHorizontal }) => (
                <div
                  key={id}
                  onClick={()=>{handleCardClick(id)}}
                  className={`flex group justify-between ${
                    isHorizontal ? "flex-row-reverse items-center" : "flex-col items-center"
                  } bg-white shadow-sm border border-slate-200 w-60 h-36 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300`}
                >
                  {Icon && <Icon size={50} strokeWidth={1} className={`group-hover:min-h-[50px] ${isHorizontal ? "self-start h-[50px]" : "self-end"}`} />}
                  <p className={`font-exo font-bold text-xl leading-[0.8] ${isHorizontal ? "self-end" : "self-start"}`}>
                    <span className="text-xl text-tertiary">{title} </span>
                    <p>{subtitle}</p>
                  <p className="hidden group-hover:block text-gray-400 text-sm font-semibold">Click to learn more</p>
                  </p>
              </div>
            ))}
            </div>
            {renderExpandedSection(0)}
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex justify-center flex-col w-full">
          <div className="flex flex-wrap gap-4 justify-center">
            {serviceData[1].map(({ id, icon: Icon, title, subtitle, isHorizontal }) => (
                <div
                  key={id}
                  onClick={()=>{handleCardClick(id)}}
                  className={`flex group justify-between ${
                    isHorizontal ? "flex-row-reverse items-center" : "flex-col items-center"
                  } bg-white shadow-sm border border-slate-200 w-60 h-36 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300`}
                >
                  {Icon && <Icon size={50} strokeWidth={1} className={`group-hover:min-h-[50px] ${isHorizontal ? "self-start h-[50px]" : "self-end"}`} />}
                  <p className={`font-exo font-bold text-xl leading-[0.8] ${isHorizontal ? "self-end" : "self-start"}`}>
                    <span className="text-xl text-tertiary">{title} </span>
                    <p>{subtitle}</p>
                  <p className="hidden group-hover:block text-gray-400 text-sm font-semibold">Click to learn more</p>
                  </p>
              </div>
            ))}
            </div>
            {renderExpandedSection(1)}
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex justify-center flex-col w-full">
          <div className="flex flex-wrap gap-4 justify-center">
            {serviceData[2].map(({ id, icon: Icon, title, subtitle, isHorizontal }) => (
                <div
                  key={id}
                  onClick={()=>{handleCardClick(id)}}
                  className={`flex group justify-between ${
                    isHorizontal ? "flex-row-reverse items-center" : "flex-col items-center"
                  } bg-white shadow-sm border border-slate-200 w-60 h-36 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300`}
                >
                  {Icon && <Icon size={50} strokeWidth={1} className={`group-hover:min-h-[50px] ${isHorizontal ? "self-start h-[50px]" : "self-end"}`} />}
                  <p className={`font-exo font-bold text-xl leading-[0.8] ${isHorizontal ? "self-end" : "self-start"}`}>
                    <span className="text-xl text-tertiary">{title} </span>
                    <p>{subtitle}</p>
                  <p className="hidden group-hover:block text-gray-400 text-sm font-semibold">Click to learn more</p>
                  </p>
              </div>
            ))}
            </div>
            {renderExpandedSection(2)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
