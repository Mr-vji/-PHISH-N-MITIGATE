"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
   return (
      <footer className="bg-[#0B1D36] text-gray-300 relative">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
               {/* Section 1: Logo & Social */}
               <div>
                  <div className="flex items-center mb-4">
                     {/* <div className="w-10 h-10 bg-teal-500 flex items-center justify-center rounded-md">
                        <span className="text-white font-bold text-lg">A</span>
                     </div> */}
                     <span className="ml-3 text-2xl font-semibold text-white">
                        PHISH N MITIGATE
                     </span>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                     Train your employees, reduce risks, and protect your business from cyber
                     threats.
                  </p>
                  <div className="flex space-x-3">
                     <a
                        href="#"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1E3A5F] hover:bg-teal-500 transition-colors"
                     >
                        <FaFacebookF />
                     </a>
                     <a
                        href="#"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1E3A5F] hover:bg-teal-500 transition-colors"
                     >
                        <FaTwitter />
                     </a>
                     <a
                        href="#"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1E3A5F] hover:bg-teal-500 transition-colors"
                     >
                        <FaInstagram />
                     </a>
                     <a
                        href="#"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1E3A5F] hover:bg-teal-500 transition-colors"
                     >
                        <FaLinkedinIn />
                     </a>
                  </div>
               </div>

               {/* Section 2: About Company */}
               <div>
                  <h3 className="text-white text-lg font-semibold mb-4">About Company</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link href="#">About Us</Link>
                     </li>
                     <li>
                        <Link href="#">Blog & News</Link>
                     </li>
                     <li>
                        <Link href="#">Our Portfolio</Link>
                     </li>
                     <li>
                        <Link href="#">Pricing Plan</Link>
                     </li>
                     <li>
                        <Link href="#">Asked Question</Link>
                     </li>
                     <li>
                        <Link href="#">Contact Us</Link>
                     </li>
                  </ul>
               </div>

               {/* Section 3: Services */}
               <div>
                  <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link href="#">Network Protection</Link>
                     </li>
                     <li>
                        <Link href="#">Computer Security</Link>
                     </li>
                     <li>
                        <Link href="#">Cyber Solution</Link>
                     </li>
                     <li>
                        <Link href="#">Locker Security</Link>
                     </li>
                     <li>
                        <Link href="#">Code Inspection</Link>
                     </li>
                     <li>
                        <Link href="#">Folder Duplication</Link>
                     </li>
                  </ul>
               </div>

               {/* Section 4: Download App */}
               <div>
                  <h3 className="text-white text-lg font-semibold mb-4">Download App</h3>
                  {/* <p className="text-gray-400 mb-6 leading-relaxed">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec
                     dui venenatis.
                  </p> */}
                  <div className="space-y-4">
                     <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <Image
                           src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                           alt="Get it on Google Play"
                           width={180}
                           height={54}
                           className="h-12 w-auto pb-3 "
                        />
                     </a>
                     <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <Image
                           src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                           alt="Download on the App Store"
                           width={180}
                           height={54}
                           className="h-14 w-auto pb-3"
                        />
                     </a>
                  </div>
               </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
               <p>© 2025. All Rights Reserved.</p>
               <div className="flex space-x-6 mt-4 md:mt-0">
                  <Link href="#">Terms of Use</Link>
                  <Link href="#">Privacy Policy</Link>
                  <Link href="#">Cookie Policy</Link>
               </div>
            </div>
         </div>
      </footer>
   );
}
