import React from "react";

// The CSS for the marquee animation is included directly in the component file.
const MarqueeStyles = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .marquee-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
    background: #1e293b; /* Matching the dark theme from your previous component */
    color: white;
    padding: 1.5rem 0;
  }

  .marquee {
    display: flex;
    width: fit-content;
    animation: scroll var(--duration, 40s) linear infinite;
  }

  .marquee-wrapper:hover .marquee {
    animation-play-state: paused;
  }

  .marquee-group {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
  
  .marquee-item {
    font-size: 2rem;
    padding: 0 2rem;
    font-weight: 600;
  }
`;

export function SuperMarquee({ children, duration = "40s" }) {
   return (
      <>
         <style>{MarqueeStyles}</style>
         <div className="marquee-wrapper">
            <div className="marquee" style={{ "--duration": duration }}>
               <div className="marquee-group">{children}</div>
               <div className="marquee-group" aria-hidden="true">
                  {children}
               </div>
            </div>
         </div>
      </>
   );
}
