"use client"; // 👈 make this client

import { usePathname } from "next/navigation";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

export default function ClientLayout({ children }) {
   const pathname = usePathname();

   return (
      <>
         {pathname !== "/login" && <Nav />}
         {children}
         {pathname !== "/login" && <Footer />}
      </>
   );
}
