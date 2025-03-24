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
        img: "/public/web.jpg",
        description: "Comprehensive security testing for web applications to identify vulnerabilities and ensure robust protection. This includes testing for common vulnerabilities such as SQL injection, cross-site scripting (XSS), and authentication flaws, ensuring your web application is secure against potential threats. Our team uses advanced tools and methodologies to simulate real-world attacks, providing actionable insights to strengthen your application's defenses."
      }
    },
    { 
      id: 2, 
      icon: Smartphone, 
      title: "Mobile", 
      subtitle: "VAPT", 
      details: {
        title: "Mobile Application Security Testing",
        img: "/public/web.jpg",
        description: "Thorough security analysis for mobile applications to safeguard user data and prevent breaches. Our testing covers platform-specific vulnerabilities, insecure data storage, and improper session handling to ensure your mobile app is resilient against attacks. We also provide recommendations to enhance app security and protect sensitive user information from unauthorized access."
      }
    },
    { 
      id: 3, 
      icon: Cable, 
      title: "API", 
      subtitle: "VAPT", 
      details: {
        title: "API Security Testing",
        img: "/public/web.jpg",
        description: "Ensure secure communication and data exchange by identifying vulnerabilities in APIs. Our testing process includes analyzing authentication mechanisms, data validation, and error handling to prevent unauthorized access and data breaches. We help you build secure APIs that comply with industry standards and best practices."
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
        img: "/public/web.jpg",
        description: "Evaluate cloud infrastructure for security risks and implement best practices for protection. Our assessment includes reviewing access controls, encryption mechanisms, and compliance with regulatory requirements. We help you secure your cloud environment against potential threats and ensure business continuity."
      }
    },
    { 
      id: 5, 
      icon: Server, 
      title: "Server", 
      subtitle: "VAPT", 
      details: {
        title: "Server Security Testing",
        img: "/public/web.jpg",
        description: "Identify and mitigate vulnerabilities in server configurations and environments. Our experts analyze server settings, patch management, and network configurations to detect weaknesses. We provide detailed reports and actionable recommendations to enhance server security and prevent unauthorized access."
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
        img: "/public/web.jpg",
        description: "Simulate phishing attacks to educate and test the awareness of employees. Our campaigns are designed to mimic real-world phishing scenarios, helping organizations identify vulnerabilities in employee behavior. We also provide training and resources to improve awareness and reduce the risk of successful phishing attacks."
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
        img: "https://placehold.co/200x200",
        description: "Analyze and improve security configurations to ensure compliance and reduce risks. Our review process includes assessing firewall rules, access controls, and encryption settings to identify gaps. We provide tailored recommendations to enhance your security posture and protect critical assets from potential threats."
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
      <div className="min-h-[100vh] w-full bg-primary text-white flex items-center justify-center p-10 mt-2.5">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-4 justify-center w-3/4">
          <div className="">
            <h2 className="font-bold mb-6 font-exo text-3xl">{expandedService.details.title}</h2>
              <p className="mt-2">{expandedService.details.description}</p>
          </div>
            <img src={expandedService.details.img} alt={expandedService.details.img} className="h-[350px] shadow-lg rounded-lg " />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="service">
      <div className="relative">
        <h1 className="pt-16 text-center font-exo font-bold text-4xl before:content-[''] before:h-1.5 before:w-24 before:rounded-full before:left-[46%] before:absolute before:bg-primary before:-bottom-6">
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
                  className={`flex group justify-between relative ${expandedId === id ? "bg-slate-800 text-white": "bg-white"}
                     ${ isHorizontal ? "flex-row-reverse items-center" : "flex-col items-center"} 
                     shadow-sm border border-slate-200 w-60 h-36 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300`}
                >
                  {Icon && <Icon size={50} strokeWidth={1} className={`group-hover:min-h-[50px] ${isHorizontal ? "self-start h-[50px]" : "self-end"}`} />}
                  <div className={`font-exo font-bold text-xl leading-[0.8] ${isHorizontal ? "self-end" : "self-start"}`}>
                    <span className="text-xl text-tertiary">{title} </span>
                    <p>{subtitle}</p>
                  {expandedId === id ? null : <p className="hidden group-hover:block text-gray-400 text-sm font-semibold">Click to learn more</p>}
                  </div>
                  <div className={`${expandedId === id ? "block": "hidden"} absolute w-4 h-4 rotate-45 bg-slate-800 -bottom-1 left-1/2`}></div>
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
                className={`flex group justify-between relative ${expandedId === id ? "bg-slate-800 text-white": "bg-white"}
                   ${ isHorizontal ? "flex-row-reverse items-center" : "flex-col items-center"} 
                   shadow-sm border border-slate-200 w-60 h-36 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300`}
              >
                {Icon && <Icon size={50} strokeWidth={1} className={`group-hover:min-h-[50px] ${isHorizontal ? "self-start h-[50px]" : "self-end"}`} />}
                <div className={`font-exo font-bold text-xl leading-[0.8] ${isHorizontal ? "self-end" : "self-start"}`}>
                  <span className="text-xl text-tertiary">{title} </span>
                  <p>{subtitle}</p>
                {expandedId === id ? null : <p className="hidden group-hover:block text-gray-400 text-sm font-semibold">Click to learn more</p>}
                </div>
                <div className={`${expandedId === id ? "block": "hidden"} absolute w-4 h-4 rotate-45 bg-slate-800 -bottom-1 left-1/2`}></div>
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
                className={`flex group justify-between relative ${expandedId === id ? "bg-slate-800 text-white": "bg-white"}
                   ${ isHorizontal ? "flex-row-reverse items-center" : "flex-col items-center"} 
                   shadow-sm border border-slate-200 w-60 h-36 rounded-lg p-4 text-black hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300`}
              >
                {Icon && <Icon size={50} strokeWidth={1} className={`group-hover:min-h-[50px] ${isHorizontal ? "self-start h-[50px]" : "self-end"}`} />}
                <div className={`font-exo font-bold text-xl leading-[0.8] ${isHorizontal ? "self-end" : "self-start"}`}>
                  <span className="text-xl text-tertiary">{title} </span>
                  <p>{subtitle}</p>
                {expandedId === id ? null : <p className="hidden group-hover:block text-gray-400 text-sm font-semibold">Click to learn more</p>}
                </div>
                <div className={`${expandedId === id ? "block": "hidden"} absolute w-4 h-4 rotate-45 bg-slate-800 -bottom-1 left-1/2`}></div>
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
