import Link from "next/link";
import React from "react";

function SecondSection() {
   const services = [
      {
         imgSrc: "/images/service1.png",
         title: "Subscribe & Add Users",
         description:
            "  Get started in minutes by choosing a plan that fits your organization. Easily onboard your employees and set up their accounts ",
      },
      {
         imgSrc: "/images/service2.png",
         title: "Assign Training Modules",
         description:
            "Select from a library of phishing, compliance, and security awareness lessons. Assign courses to individuals or entire teams with just a few clicks.",
      },
      {
         imgSrc: "/images/service3.png",
         title: "Monitor Progress & Reports",
         description:
            "Track employee participation and performance through real-time dashboards.Download detailed compliance reports to stay audit-ready.",
      },
   ];

   const ArrowIcon = () => (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth={2}
      >
         <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
   );
   const ArrowIconUp = () => (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth={2}
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
         />
      </svg>
   );

   return (
      <section className="bg-[#0F172A] text-gray-300 py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
               <div className="mb-8 md:mb-0">
                  <span className="bg-[#00a99d] text-white text-lg font-semibold px-4 py-1 rounded-full">
                     How It Works
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight">
                     {/* What we do for your <br /> Cyber security solutions */}
                  </h2>
               </div>
               {/* <a
                  href="#"
                  className="group flex items-center text-[#00a99d] border border-[#00a99d] px-6 py-3 rounded-lg hover:bg-[#00a99d] hover:text-white transition-colors duration-300 whitespace-nowrap"
               >
                  Ready to protect your business? Start today.
                  <ArrowIconUp />
               </a> */}

               <Link
                  href="/pricing" // <-- update with your actual route
                  className="group flex items-center text-[#00a99d] border border-[#00a99d] px-6 py-3 rounded-lg hover:bg-[#00a99d] hover:text-white transition-colors duration-300 whitespace-nowrap"
               >
                  Ready to protect your business? Start today.
                  <ArrowIconUp />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {services.map((service, index) => (
                  <div key={index} className="flex flex-col">
                     <div className="overflow-hidden rounded-lg mb-6">
                        <img
                           src={service.imgSrc}
                           alt={service.title}
                           className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                     </div>
                     <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                     <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                     {/* <a href="#" className="group flex items-center text-[#00a99d] font-semibold">
                        Read More
                        <ArrowIconUp />
                     </a> */}
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default SecondSection;
