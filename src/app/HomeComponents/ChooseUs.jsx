"use client";
import React from "react";

function ChooseUs() {
   return (
      <section className="relative bg-[#0B1220] text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
               {/* Tag */}
               <span className="inline-block px-6 py-2 bg-teal-500 rounded-full text-sm font-semibold">
                  Why choose us
               </span>

               {/* Heading */}
               <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  <span className="block">Cyber Security Skills Gap Widens</span>
                  <span className="block">As Demand For Experts Continues</span>
                  <span className="block text-stroke">To Soar.</span>
               </h2>

               {/* Paragraph */}
               <p className="text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elitenean commo doligula eget
                  dolorenean massa. In enim justo, rhoncus ut, imperdiet avene natis vitae justo
                  nullam dictum felis eu pede mollis pretium. Inte ger tincid unt cras dapibus.
               </p>

               {/* Stats */}
               <div className="flex gap-12 mt-8">
                  <div>
                     <h3 className="text-3xl md:text-4xl font-bold">94%</h3>
                     <p className="text-gray-400 text-sm">Quality services</p>
                  </div>
                  <div>
                     <h3 className="text-3xl md:text-4xl font-bold">69%</h3>
                     <p className="text-gray-400 text-sm">Skilled Staff</p>
                  </div>
                  <div>
                     <h3 className="text-3xl md:text-4xl font-bold">99%</h3>
                     <p className="text-gray-400 text-sm">Support team</p>
                  </div>
               </div>

               {/* Buttons */}
               <div className="flex gap-4 mt-10">
                  <button className="bg-gradient-to-r from-blue-500 to-pink-500 px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
                     GET YOUR SERVICES ↗
                  </button>
                  <button className="border border-cyan-400 px-6 py-3 rounded-md font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
                     Contact with us ↗
                  </button>
               </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
               <img
                  src="/images/computer.png"
                  alt="Choose Us Illustration"
                  className="w-full max-w-lg"
               />
            </div>
         </div>
      </section>
   );
}

export default ChooseUs;
