import React from "react";

function Trust() {
   const companies = ["Walmart", "LinkedIn", "TREND MICRO", "appen", "Spotify", "amazon"];
   const extendedCompanies = [...companies, ...companies];

   return (
      <>
         <style>
            {`
          @keyframes marquee-ltr {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee-ltr {
            animation: marquee-ltr 25s linear infinite;
          }
        `}
         </style>
         <section className="bg-[#0F172A] text-gray-300 py-20 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                  <div className="mb-8 md:mb-0">
                     <span className="bg-[#00a99d] text-white text-lg font-semibold px-4 py-1 rounded-full">
                        Trusted By
                     </span>
                     <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight">
                        Trusted By The World's <br /> Leading Companies
                     </h2>
                  </div>
               </div>
            </div>

            <div className="mt-16">
               <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                     <svg
                        className="w-full h-auto text-[#1E293B]"
                        viewBox="0 0 1440 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                     >
                        <path
                           d="M1440 70.3642C1236.67 114.364 1024.17 122.031 718.5 70.3642C412.833 18.6975 204.667 8.36418 0 70.3642V120H1440V70.3642Z"
                           fill="currentColor"
                        />
                     </svg>
                  </div>

                  <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0F172A] to-transparent z-10" />
                  <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#0F172A] to-transparent z-10" />

                  <div className="overflow-hidden">
                     <div className="flex animate-marquee-ltr">
                        {extendedCompanies.map((name, index) => (
                           <span
                              key={index}
                              className="text-gray-400 text-3xl font-bold tracking-wider whitespace-nowrap px-12 flex-shrink-0"
                           >
                              {name}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default Trust;
