// import React from "react";
// This is a self-contained component.
// For it to work, you need to have React and Tailwind CSS in your project.
// You can add Tailwind CSS to your project with this script tag in your HTML:
// <script src="https://cdn.tailwindcss.com"></script>
"use client";
ChooseSection = () => {
   return (
      <div className="bg-[#0f172a] min-h-screen text-white font-sans flex items-center justify-center p-4 relative overflow-hidden">
         {/* Background decorative elements */}
         <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>

         {/* Main Content */}
         <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               {/* Left Text Content */}
               <div className="text-center lg:text-left">
                  <span className="inline-block px-4 py-1 text-sm font-semibold text-cyan-300 border border-cyan-300 rounded-full">
                     Why choose us
                  </span>

                  <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
                     Cyber Security Skills Gap Widens
                     <span className="block">As Demand For Experts Continues To Soar.</span>
                  </h1>

                  <p className="text-gray-400 mt-6 max-w-lg mx-auto lg:mx-0">
                     Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo ligula
                     eget dolorean massa in enim justo, rhoncus ut, imperdiet avene natis vitae,
                     justo nullam dictum felis eu pede mollis pretium Inte ger tincidunt cras
                     dapibus.
                  </p>

                  <div className="flex justify-center lg:justify-start gap-8 md:gap-12 mt-10">
                     <div>
                        <p className="text-5xl font-bold text-outline">94%</p>
                        <p className="text-gray-400 mt-2">Quality services</p>
                     </div>
                     <div>
                        <p className="text-5xl font-bold text-outline">69%</p>
                        <p className="text-gray-400 mt-2">Skilled Staff</p>
                     </div>
                     <div>
                        <p className="text-5xl font-bold text-outline">99%</p>
                        <p className="text-gray-400 mt-2">Support team</p>
                     </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-12">
                     <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg hover:opacity-90 transition-opacity duration-300">
                        GET YOUR SERVICES
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           fill="currentColor"
                           viewBox="0 0 16 16"
                        >
                           <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                           />
                        </svg>
                     </button>
                     <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-300 border-2 border-gray-600 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-colors duration-300">
                        Contact with us
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           fill="currentColor"
                           viewBox="0 0 16 16"
                        >
                           <path
                              fillRule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5-.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                           />
                           <path
                              fillRule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                           />
                        </svg>
                     </button>
                  </div>
               </div>

               {/* Right Illustration */}
               <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-lg">
                     {/* Using an illustrative SVG for the graphic */}
                     <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                           <linearGradient id="laptopScreen" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#06b6d4" />
                           </linearGradient>
                           <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                              <feMerge>
                                 <feMergeNode in="coloredBlur" />
                                 <feMergeNode in="SourceGraphic" />
                              </feMerge>
                           </filter>
                        </defs>

                        {/* Cloud */}
                        <path
                           d="M 120,40 C 110,40 100,30 100,20 C 90,20 80,25 75,35 C 65,35 60,45 65,55 C 60,65 65,75 75,75 L 125,75 C 135,75 140,65 135,55 C 140,50 130,40 120,40 Z"
                           fill="#1e293b"
                           opacity="0.8"
                        />
                        <text
                           x="97"
                           y="58"
                           fontFamily="Arial, sans-serif"
                           fontSize="6"
                           fill="#06b6d4"
                           fontWeight="bold"
                           textAnchor="middle"
                        >
                           DATA ACCESS
                        </text>

                        {/* Laptop */}
                        <path d="M 40,125 L 160,125 L 170,135 L 30,135 Z" fill="#334155" />
                        <rect
                           x="50"
                           y="60"
                           width="100"
                           height="65"
                           rx="5"
                           fill="#1e293b"
                           stroke="#475569"
                           strokeWidth="1"
                        />
                        <rect
                           x="55"
                           y="65"
                           width="90"
                           height="55"
                           fill="url(#laptopScreen)"
                           rx="2"
                        />

                        {/* UI elements on screen */}
                        <rect
                           x="90"
                           y="75"
                           width="40"
                           height="30"
                           rx="2"
                           fill="#fff"
                           opacity="0.1"
                        />
                        <path
                           d="M 95,80 L 125,80 M 95,85 L 125,85 M 95,90 L 115,90"
                           stroke="#fff"
                           strokeWidth="1"
                           strokeLinecap="round"
                           opacity="0.3"
                        />
                        <circle
                           cx="100"
                           cy="98"
                           r="5"
                           fill="#3b82f6"
                           stroke="#fff"
                           strokeWidth="0.5"
                        />
                        <path
                           d="M 99,98 L 100,99 L 102,97"
                           stroke="#fff"
                           strokeWidth="1"
                           fill="none"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />

                        {/* Person */}
                        <path
                           d="M 145,85 C 142,75 138,75 135,85 L 135,110 L 140,120 L 150,120 L 155,110 L 155,85 Z"
                           fill="#475569"
                        />
                        <circle cx="145" cy="80" r="5" fill="#06b6d4" />
                        <path
                           d="M 135,95 L 128,90"
                           stroke="#06b6d4"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           filter="url(#glow)"
                        />

                        {/* Lock icon */}
                        <g transform="translate(60, 45) scale(0.1)">
                           <rect x="5" y="45" width="90" height="55" rx="10" fill="#3b82f6" />
                           <path
                              d="M 50,0 C 27.9,0 10,17.9 10,40 L 10,45 L 90,45 L 90,40 C 90,17.9 72.1,0 50,0 Z M 50,10 C 66.6,10 80,23.4 80,40 L 80,45 L 20,45 L 20,40 C 20,23.4 33.4,10 50,10 Z"
                              fill="#3b82f6"
                           />
                        </g>

                        {/* Plant */}
                        <g transform="translate(160, 70)">
                           <path
                              d="M 0,0 C 5, -10 10,-10 15,0"
                              stroke="#10b981"
                              fill="none"
                              strokeWidth="1.5"
                           />
                           <path
                              d="M 7.5,-5 C 12.5, -15 17.5,-15 22.5,-5"
                              stroke="#10b981"
                              fill="none"
                              strokeWidth="1.5"
                           />
                           <path
                              d="M 7.5,-5 C 2.5, -15 -2.5,-15 -7.5,-5"
                              stroke="#10b981"
                              fill="none"
                              strokeWidth="1.5"
                           />
                           <path
                              d="M 7.5,0 L 7.5,10"
                              stroke="#334155"
                              strokeWidth="3"
                              strokeLinecap="round"
                           />
                        </g>

                        {/* Mug */}
                        <path
                           d="M 125,120 C 135,120 135,130 125,130 L 110,130 C 100,130 100,120 110,120 Z"
                           fill="#334155"
                        />
                        <path
                           d="M 128,122 C 132,122 132,128 128,128"
                           fill="none"
                           stroke="#334155"
                           strokeWidth="2"
                        />
                        <path
                           d="M 112,118 L 114,115 L 116,118"
                           stroke="#64748b"
                           strokeWidth="1"
                           strokeLinecap="round"
                        />
                     </svg>
                  </div>
               </div>
            </div>
         </div>

         {/* Scroll to top button */}
         <button className="absolute bottom-8 right-8 bg-gray-700/50 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-600/70 transition-colors">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="20"
               fill="currentColor"
               viewBox="0 0 16 16"
            >
               <path
                  fillRule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
               />
            </svg>
         </button>

         {/* This style tag is for the custom text stroke effect */}
         <style jsx>{`
            .text-outline {
               -webkit-text-stroke: 2px white;
               color: transparent;
            }
         `}</style>
      </div>
   );
};

export default ChooseSection;
