import React from "react";

// Inline SVG component for the play icon
const PlayIcon = (props) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
   >
      <path
         fillRule="evenodd"
         d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
         clipRule="evenodd"
      />
   </svg>
);

function HeroSection() {
   return (
      <>
         {/* Hero Section */}
         <div
            className="relative min-h-[90vh] flex items-center justify-start font-sans"
            style={{
               backgroundImage: "url('/images/home-bg.jpg')",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
         >
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
               <div className="max-w-2xl text-white">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
                     Strengthen Your Organization’s Security Awareness
                  </h1>
                  <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-[25px] text-gray-300">
                     Train your employees, reduce risks, and protect your business from cyber
                     threats.
                  </p>
                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                     {/* CTA button (visible on all screens now, stacked on mobile) */}
                     <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 px-7 rounded-md tracking-wider text-center">
                        GET STARTED NOW
                     </button>
                     <button className="flex items-center gap-3 text-white font-bold group">
                        <PlayIcon className="w-10 h-10 sm:w-11 sm:h-11 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                        <span className="tracking-wider text-base sm:text-lg">VIDEO TOUR</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Second Section */}
         <div className="bg-[#0F172A] min-h-screen pt-20 sm:pt-28 md:pt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-24">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 py-12 sm:py-16 md:py-20 items-center">
                  {/* Left side image */}
                  <div className="flex justify-center">
                     <img
                        src="/images/about1.png"
                        alt="About Us"
                        className="rounded-xl shadow-lg max-w-full h-auto w-full sm:w-4/5 md:w-full"
                     />
                  </div>

                  {/* Right side content */}
                  <div className="text-left">
                     <span className="inline-block bg-cyan-500 bg-opacity-10 text-white text-sm sm:text-base md:text-lg font-semibold px-3 sm:px-4 py-1 rounded-full">
                        Core Advantages
                     </span>

                     <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-snug tracking-wide text-white">
                        We make security awareness simple, practical, and effective for every
                        employee.
                     </h2>

                     <div className="mt-6 sm:mt-8 space-y-4">
                        <div className="bg-[#1E293B] p-4 sm:p-6 rounded-lg border border-slate-700">
                           <ul className="space-y-2 sm:space-y-3 text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl">
                              <li>• Phishing & Social Engineering Training</li>
                              <li>• Gamified Security Awareness Programs</li>
                              <li>• Real-Time Threat Simulations</li>
                              <li>• Detailed Analytics & Compliance Reports</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default HeroSection;
