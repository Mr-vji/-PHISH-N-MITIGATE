import React from "react";

function Contact() {
   return (
      <section className="bg-[#0F172A] text-white min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden">
         {/* Background decorative elements */}
         <div className="absolute top-[-5rem] left-[-10rem] w-[30rem] h-[30rem] bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
         <div
            className="absolute bottom-[-5rem] right-[-10rem] w-[30rem] h-[30rem] bg-fuchsia-500 rounded-full filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
         ></div>

         <div className="container mx-auto max-w-2xl w-full relative z-10">
            <div className="text-center mb-12">
               <span className="bg-[#111827] text-[#00D1C5] text-sm font-semibold px-4 py-1 rounded-full">
                  Contact Us
               </span>
               <h2 className="text-4xl lg:text-5xl font-bold mt-4">Get in Touch</h2>
               <p className="text-gray-400 mt-2">Ready to protect your business? Start today</p>
            </div>

            <div className="bg-[#111827]/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
               <form>
                  <div className="mb-6">
                     <label htmlFor="name" className="block text-gray-300 mb-2">
                        Name
                     </label>
                     <input
                        type="text"
                        id="name"
                        className="w-full bg-[#1E293B] border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00D1C5]"
                        placeholder="vijay Doe"
                     />
                  </div>
                  <div className="mb-6">
                     <label htmlFor="email" className="block text-gray-300 mb-2">
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        className="w-full bg-[#1E293B] border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00D1C5]"
                        placeholder="vijay.doe@example.com"
                     />
                  </div>
                  <div className="mb-8">
                     <label htmlFor="message" className="block text-gray-300 mb-2">
                        Message
                     </label>
                     <textarea
                        id="message"
                        rows="5"
                        className="w-full bg-[#1E293B] border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00D1C5]"
                        placeholder="Your message here..."
                     ></textarea>
                  </div>
                  <div className="text-center">
                     <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white font-bold py-3 px-10 rounded-md tracking-wider transition-transform transform hover:scale-105"
                     >
                        Send Message
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
}

export default Contact;
