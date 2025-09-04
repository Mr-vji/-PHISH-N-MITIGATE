"use client"; // 👈 keep this

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // 👈 icons for burger & close

function Nav() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const navLinks = (
      <>
         <li>
            <Link
               href="/"
               className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors duration-300"
            >
               HOME
            </Link>
         </li>
         <li>
            <Link
               href="/"
               className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors duration-300"
            >
               ABOUT
            </Link>
         </li>
         <li>
            <Link
               href="/"
               className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors duration-300"
            >
               SERVICES
            </Link>
         </li>
         <li>
            <Link
               href="/pricing"
               className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors duration-300"
            >
               Pricing
            </Link>
         </li>
         <li>
            <Link
               href="/"
               className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors duration-300"
            >
               BLOG
            </Link>
         </li>
         <li>
            <Link
               href="/contact"
               className="cursor-pointer hover:text-gray-300 transition-colors duration-300"
            >
               CONTACT
            </Link>
         </li>
      </>
   );

   return (
      <nav className="font-sans bg-[#0F172A] text-white py-5 px-12 sticky top-0 z-50">
         <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
               <Link href="/" className="text-2xl font-bold">
                  PHISH N MITIGATE
               </Link>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-10 font-semibold tracking-wider">
               {navLinks}
            </ul>

            <button className="hidden lg:block bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 px-7 rounded-md tracking-wider">
               GET STARTED NOW
            </button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
               <button onClick={toggleMenu} aria-label="Toggle menu">
                  {isOpen ? (
                     <HiX className="w-7 h-7 text-white" />
                  ) : (
                     <HiMenu className="w-7 h-7 text-white" />
                  )}
               </button>
            </div>
         </div>

         {/* Mobile Nav */}
         {isOpen && (
            <div className="lg:hidden mt-4">
               <ul className="flex flex-col items-center gap-6 font-semibold tracking-wider py-4">
                  {navLinks}
               </ul>
               <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white font-bold py-3 px-6 rounded-md tracking-wider">
                  GET STARTED NOW
               </button>
            </div>
         )}
      </nav>
   );
}

export default Nav;
