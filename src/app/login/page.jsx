import React from "react";

// --- SVG Icons ---

const GoogleIcon = () => (
   <svg className="w-5 h-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
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

const GithubIcon = () => (
   <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
   </svg>
);

const FacebookIcon = () => (
   <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path d="M22.675 0h-21.35C.589 0 0 .589 0 1.325v21.35C0 23.41.589 24 1.325 24H12.82v-9.29h-3.128v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.59 1.325-1.325V1.325C24 .589 23.411 0 22.675 0z" />
   </svg>
);

function Login() {
   return (
      <div className="bg-[#0d1a2e] min-h-screen flex items-center justify-center p-4 relative overflow-hidden font-sans">
         {/* Background Glows */}
         <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-600/30 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
         <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-400/30 rounded-full filter blur-3xl opacity-40 animate-pulse delay-2000"></div>

         <div className="w-full max-w-5xl bg-black/20 backdrop-blur-xl shadow-2xl rounded-3xl flex overflow-hidden z-10 border border-white/10">
            {/* Left Side: Login Form */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
               <h1 className="text-2xl font-bold text-white mb-2 tracking-wider">
                  PHISH N MITIGATE
               </h1>
               <p className="text-gray-400 mb-8">Please Enter your Account details</p>

               <form>
                  <div className="mb-6">
                     <label
                        className="text-sm font-semibold text-gray-300 mb-2 block"
                        htmlFor="email"
                     >
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        defaultValue="johndoe@gmail.com"
                        className="w-full px-5 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
                     />
                  </div>

                  <div>
                     <label
                        className="text-sm font-semibold text-gray-300 mb-2 block"
                        htmlFor="password"
                     >
                        Password
                     </label>
                     <input
                        type="password"
                        id="password"
                        defaultValue="••••••••••"
                        className="w-full px-5 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
                     />
                  </div>

                  <div className="text-right mt-4">
                     <a href="#" className="text-sm text-cyan-400 hover:underline">
                        Forgot Password
                     </a>
                  </div>

                  <button
                     type="submit"
                     className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 px-4 rounded-xl mt-8 hover:opacity-90 shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
                  >
                     Sign in
                  </button>
               </form>

               <div className="flex items-center justify-center space-x-4 my-8">
                  <button className="w-11 h-11 flex items-center justify-center bg-gray-900/50 border border-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors">
                     <GoogleIcon />
                  </button>
                  <button className="w-11 h-11 flex items-center justify-center bg-gray-900/50 border border-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors">
                     <GithubIcon />
                  </button>
                  <button className="w-11 h-11 flex items-center justify-center bg-gray-900/50 border border-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors">
                     <FacebookIcon />
                  </button>
               </div>

               <p className="text-center text-sm text-gray-400">
                  <a href="#" className="text-cyan-400 font-semibold hover:underline">
                     Create an account
                  </a>
               </p>
            </div>

            {/* Right Side: Title */}
            <div
               className="hidden lg:flex w-1/2 p-10 bg-gradient-to-br from-blue-900/50 to-cyan-800/50 rounded-r-3xl relative items-center justify-center"
               style={{
                  borderTopRightRadius: "1.5rem",
                  borderBottomRightRadius: "1.5rem",
                  clipPath: "polygon(25% 0, 100% 0, 100% 100%, 25% 100%, 0 50%)",
               }}
            >
               <h1 className="text-8xl font-black text-white uppercase transform -rotate-90 tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 opacity-50">
                  Sign In
               </h1>
            </div>
         </div>
      </div>
   );
}

export default Login;
