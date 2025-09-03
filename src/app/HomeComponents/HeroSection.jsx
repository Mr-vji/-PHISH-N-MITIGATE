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

// Inline SVG component for the check icon
const CheckIcon = (props) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
   >
      <path
         fillRule="evenodd"
         d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
         clipRule="evenodd"
      />
   </svg>
);

function HeroSection() {
   return (
      <>
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
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide">
                     Strengthen Your Organization’s Security Awareness
                  </h1>
                  <p className="mt-6 text-[25px] text-gray-300 ">
                     Train your employees, reduce risks, and protect your business from cyber
                     threats.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                     <button className="hidden lg:block bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white font-bold py-3 px-7 rounded-md tracking-wider">
                        GET STARTED NOW
                     </button>
                     <button className="flex items-center gap-3 text-white font-bold group">
                        <PlayIcon className="w-11 h-11 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                        <span className="tracking-wider">VIDEO TOUR</span>
                     </button>
                  </div>
               </div>
            </div>

            {/* This container is now positioned absolutely to perfectly center the stats box on the boundary */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full z-20">
               <div className="container mx-auto px-4 sm:px-6 lg:px-24">
                  <div className="bg-[#1E293B] text-white rounded-lg p-8 md:p-10 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center border border-slate-700">
                     <div>
                        <p className="text-4xl md:text-5xl font-bold text-outline">34</p>
                        <p className="mt-2 text-gray-400 tracking-wider">Our Experience</p>
                     </div>
                     <div>
                        <p className="text-4xl md:text-5xl font-bold text-outline">99</p>
                        <p className="mt-2 text-gray-400 tracking-wider">Customer Satisfaction</p>
                     </div>
                     <div>
                        <p className="text-4xl md:text-5xl font-bold text-outline">184</p>
                        <p className="mt-2 text-gray-400 tracking-wider">Our team member</p>
                     </div>
                     <div>
                        <p className="text-4xl md:text-5xl font-bold text-outline">541</p>
                        <p className="mt-2 text-gray-400 tracking-wider">Project Complete</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* The second section now has padding-top to ensure its content appears below the centered stats box */}
         {/* The second section now has padding-top to ensure its content appears below the centered stats box */}
         <div className="bg-[#0F172A] min-h-screen pt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-24">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20 items-center">
                  {/* Left side image */}
                  <div className="flex justify-center">
                     <img
                        src="/images/about1.png"
                        alt="About Us"
                        className="rounded-xl shadow-lg max-w-full h-auto"
                     />
                  </div>

                  {/* Right side content */}
                  <div className="text-left">
                     <span className="inline-block bg-cyan-500 bg-opacity-10 text-white text-lg font-semibold px-4 py-1 rounded-full">
                        Core Advantages
                     </span>

                     <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-snug tracking-wide text-white">
                        We make security awareness simple, practical, and effective for every
                        employee.
                     </h2>

                     <div className="mt-8 space-y-4">
                        <div className="bg-[#1E293B] p-6 rounded-lg border border-slate-700">
                           <ul className="space-y-3 text-gray-300 text-lg sm:text-xl md:text-2xl">
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
