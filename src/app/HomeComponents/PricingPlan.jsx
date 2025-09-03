import React from "react";

const Plan = ({ title, icon, features, price, popular }) => (
   <div
      className={`bg-[#0a0f1f] border-2 border-[#1e293b] rounded-lg p-10 flex flex-col text-center items-center shadow-lg h-full relative overflow-hidden`}
   >
      <div className="absolute top-0 left-0 w-24 h-14 scale-[5.8] bg-[#1e293b] rounded-br-full z-0"></div>
      <div className="relative z-10 flex flex-col items-center h-full w-full">
         <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
         <div className="bg-[#00D1C5] rounded-full p-5 mb-8 inline-block">{icon}</div>
         <ul className="text-gray-400 space-y-4 mb-10 text-lg">
            {features.map((feature, index) => (
               <li key={index}>{feature}</li>
            ))}
         </ul>
         <div className="mt-auto">
            <p className="text-5xl font-bold text-white mb-6">
               ${price}
               <span className="text-xl text-gray-400">/mo</span>
            </p>
            <button className="bg-gradient-to-r from-[#2563EB] to-[#D946EF] text-white font-semibold py-4 px-10 rounded-lg text-lg">
               PURCHASE NOW
            </button>
         </div>
      </div>
   </div>
);

function PricingPlan() {
   const plans = [
      {
         title: "Personal",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-10 w-10 text-white"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
               />
            </svg>
         ),
         features: [
            "5 Website",
            "50GB Disk Space",
            "50 Email Accounts",
            "50GB Monthly Bandwidth",
            "10 Subdomains",
         ],
         price: 99,
      },
      {
         title: "Business",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-10 w-10 text-white"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7a8 8 0 0116 0M12 5c4.418 0 8-1.79 8-4S16.418 1 12 1 4 2.79 4 5"
               />
            </svg>
         ),
         features: [
            "5 Website",
            "50GB Disk Space",
            "50 Email Accounts",
            "50GB Monthly Bandwidth",
            "10 Subdomains",
         ],
         price: 199,
      },
      {
         title: "Premium",
         icon: (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-10 w-10 text-white"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4h.01M17 17h.01"
               />
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 S0 11-1 0 .5.5 0 011 0z"
               />
            </svg>
         ),
         features: [
            "5 Website",
            "50GB Disk Space",
            "50 Email Accounts",
            "50GB Monthly Bandwidth",
            "10 Subdomains",
         ],
         price: 299,
      },
   ];

   return (
      <section className="bg-[#0a0f1f] text-white min-h-[120vh] py-20 relative flex items-center">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <span className="bg-[#00a99d] text-white text-lg font-semibold px-4 py-1 rounded-full">
                  Pricing Plan
               </span>
               <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                  Our best pricing plan for <br /> your solution
               </h2>
            </div>
            <div className="max-w-7xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {plans.map((plan, index) => (
                     <Plan key={index} {...plan} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default PricingPlan;
