import React from "react";

// --- SVG Icons & Illustrations ---

const MasteryHubLogo = () => (
   <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-indigo-800"
   >
      <path
         d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
         stroke="currentColor"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
      />
   </svg>
);

const GoogleIcon = () => (
   <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path
         fill="#FFC107"
         d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
         fill="#FF3D00"
         d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
         fill="#4CAF50"
         d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.223 0-9.641-3.657-11.29-8.481l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
         fill="#1976D2"
         d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 35.846 44 30.138 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
   </svg>
);

const ExamIllustration = () => (
   <svg viewBox="0 0 350 250" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
         {/* Background elements */}
         <circle cx="175" cy="125" r="100" fill="#eef2ff" />
         <path d="M50 50 Q 175 -20 300 50" stroke="#dbeafe" strokeWidth="2" strokeDasharray="5,5" />
         <path d="M310 80 L 330 90 L 310 100 Z" fill="#93c5fd" />
         <text x="250" y="40" fontFamily="Arial, sans-serif" fontSize="14" fill="#6c757d">
            f(x)
         </text>
         <text x="200" y="30" fontFamily="Arial, sans-serif" fontSize="14" fill="#6c757d">
            a²
         </text>
         <path d="M130 35 L140 25 L150 35" stroke="#6c757d" strokeWidth="1.5" />
         <line x1="135" y1="35" x2="145" y2="20" stroke="#6c757d" strokeWidth="1.5" />
         <text x="160" y="30" fontFamily="Arial, sans-serif" fontSize="14" fill="#6c757d">
            √x
         </text>

         {/* Student and Desk */}
         <g transform="translate(130, 100)">
            {/* Chair */}
            <path
               d="M40 80 L 40 120 L 70 120 L 70 80 Q 70 70 60 70 L 50 70 Q 40 70 40 80"
               fill="#60a5fa"
            />
            <rect x="42" y="118" width="5" height="15" fill="#3b82f6" />
            <rect x="63" y="118" width="5" height="15" fill="#3b82f6" />
            <rect x="30" y="75" width="50" height="10" rx="3" fill="#3b82f6" />

            {/* Person */}
            <circle cx="55" cy="50" r="15" fill="#f5e1d3" />
            <path d="M55 35 L 50 45 L 60 45 Z" fill="#333" />
            <path d="M55 65 C 45 75, 45 95, 55 110 C 65 95, 65 75, 55 65" fill="#f8f9fa" />
            <path
               d="M55 110 L 45 130 L 50 130 L 60 115 L 65 130 L 70 130 L 60 110"
               fill="#495057"
            />
            {/* Arm */}
            <path
               d="M65 80 C 80 85, 90 95, 100 100"
               stroke="#f5e1d3"
               strokeWidth="6"
               strokeLinecap="round"
            />
         </g>

         {/* Desk and papers */}
         <path d="M70 190 L 200 170 L 205 180 L 75 200 Z" fill="#a08d7e" />
         <rect
            x="75"
            y="140"
            width="100"
            height="60"
            rx="5"
            ry="5"
            fill="#ffffff"
            stroke="#ced4da"
            transform="rotate(-10 125 170)"
         />
         <rect
            x="80"
            y="150"
            width="80"
            height="3"
            fill="#e9ecef"
            transform="rotate(-10 120 165)"
         />
         <rect
            x="80"
            y="160"
            width="80"
            height="3"
            fill="#e9ecef"
            transform="rotate(-10 120 175)"
         />
         <rect
            x="80"
            y="170"
            width="80"
            height="3"
            fill="#e9ecef"
            transform="rotate(-10 120 185)"
         />
         <path d="M170 150 L 200 155 L 195 125 Z" fill="#93c5fd" />

         {/* Pencil */}
         <path d="M175 145 l 20 -5 l 2 2 l -20 5 Z" fill="#fbc02d" />
         <path d="M195 140 l 5 -1 l -2 5 Z" fill="#333" />

         {/* Backpack */}
         <path
            d="M240 160 Q 230 150 240 140 L 270 140 Q 280 150 270 160 L 270 190 Q 270 200 260 200 L 250 200 Q 240 200 240 190 Z"
            fill="#60a5fa"
         />
         <rect x="245" y="150" width="20" height="5" rx="2" fill="#3b82f6" />

         {/* Plant */}
         <path d="M60 200 C 60 190, 70 190, 70 200 Z" fill="#8b5a2b" />
         <path d="M65 190 C 55 180, 55 170, 65 170 C 75 170, 75 180, 65 190" fill="#3b82f6" />
         <path d="M65 180 C 60 170, 70 165, 75 175" stroke="#3b82f6" strokeWidth="2" />
      </g>
   </svg>
);

function LoginPage() {
   return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen flex items-center justify-center p-4">
         <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl flex overflow-hidden">
            {/* Left Side: Illustration and Branding */}
            <div className="hidden lg:flex flex-col items-center justify-center w-1/2 bg-blue-50 p-12 text-center">
               <ExamIllustration />
               <h1 className="text-3xl font-bold text-gray-800 mt-6">Exam Mastery Hub</h1>
               <p className="text-gray-600 mt-2 max-w-sm">
                  Unleash Your Academic Success with Exam Mastery Hub's Exam Excellence Platform
               </p>
               <div className="flex space-x-2 mt-8">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
               </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
               <div className="flex items-center justify-center mb-8">
                  <MasteryHubLogo />
                  <h2 className="text-2xl font-bold text-gray-700 ml-3 tracking-wider">
                     MASTERY HUB
                  </h2>
               </div>

               <form>
                  <div>
                     <label
                        className="text-sm font-semibold text-gray-600 mb-2 block"
                        htmlFor="username"
                     >
                        Username or email
                     </label>
                     <input
                        type="text"
                        id="username"
                        defaultValue="johnsmith007"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                     />
                  </div>

                  <div className="mt-6">
                     <label
                        className="text-sm font-semibold text-gray-600 mb-2 block"
                        htmlFor="password"
                     >
                        Password
                     </label>
                     <input
                        type="password"
                        id="password"
                        defaultValue="••••••••••"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                     />
                  </div>

                  <div className="text-right mt-3">
                     <a href="#" className="text-sm text-blue-600 hover:underline">
                        Forgot password?
                     </a>
                  </div>

                  <button
                     type="submit"
                     className="w-full bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg mt-8 hover:bg-indigo-800 transition-colors"
                  >
                     Sign in
                  </button>
               </form>

               <div className="flex items-center my-8">
                  <hr className="w-full border-gray-300" />
                  <span className="px-4 text-gray-500 text-sm">or</span>
                  <hr className="w-full border-gray-300" />
               </div>

               <button className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  <GoogleIcon />
                  Sign in with Google
               </button>

               <p className="text-center text-sm text-gray-600 mt-10">
                  Are you new?{" "}
                  <a href="#" className="text-blue-600 font-semibold hover:underline">
                     Create an Account
                  </a>
               </p>
            </div>
         </div>
      </div>
   );
}

export default LoginPage;
