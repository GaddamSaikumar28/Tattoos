// // src/layouts/MainLayout.jsx
// import { Outlet } from 'react-router-dom';
// import Header from '../components/navigation/Header';
// import Footer from '../components/navigation/Footer';

// export default function MainLayout() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header stays at the top */}
//       <Header />
      
//       {/* Outlet is where React Router injects the current page (like Home) */}
//       <main className="flex-grow">
//         <Outlet />
//       </main>

//       {/* Footer stays at the bottom */}
//       <Footer />
//     </div>
//   );
// }

// src/layouts/MainLayout.jsx
import { useState, useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';


const ButterflyIcon1 = ({ className, flipped = false }) => (
  <img
    src="/assets/icons/butterflys.svg"
    alt="Butterfly"
    className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`}
  />
);

const ButterflyIcon2 = ({ className, flipped = false }) => (
  <img
    src="/assets/icons/butterfly2s2.svg"
    alt="Butterfly"
    className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`}
  />
);

const LogoSVG = ({ className }) => (
  <img
    src="/assets/icons/DesktopLogo.svg"
    alt="Just Tattoos Logo"
    className={className}
  />
);
// 👇 IMPORTANT: Adjust these paths to where your actual SVG components live!
// import LogoSVG from '../components/LogoSVG'; 
// import ButterflyIcon1 from '../components/ButterflyIcon1'; 

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Outlet } from 'react-router-dom';

// Assuming you have these imported appropriately in your actual file
// import Header from './Header'; 
// import Footer from './Footer';
// import LogoSVG from './LogoSVG';
// import ButterflyIcon1 from './ButterflyIcon1';
// import ButterflyIcon2 from './ButterflyIcon2';

export default function MainLayout() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Check if the splash screen has already been seen in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

    if (!hasSeenSplash) {
      setShowIntro(true);
      // Lock scrolling while splash is active
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem('hasSeenSplash', 'true');
        document.body.style.overflow = ''; // Unlock scroll
      }, 3500); 
      
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              transition: { duration: 0.9, ease: 'easeInOut' } 
            }}
          >
            <div className="relative w-full h-full max-w-[1440px] mx-auto flex items-center justify-center">
              {/* Top-Left Butterfly */}
              <motion.div 
                className="absolute top-[8%] left-[5%] md:top-[9%] md:left-[5%] lg:top-[10%] lg:left-[7%]"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              >
                <ButterflyIcon1 className="w-[100px] md:w-[150px] lg:w-[200px] xl:w-[240px] h-auto" />
              </motion.div>

              {/* Dead-Center Logo */}
              <motion.div 
                className="relative z-10" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
              >
                <LogoSVG className="w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] h-auto" />
              </motion.div>

              {/* Bottom-Right Butterfly */}
              <motion.div 
                className="absolute bottom-[8%] right-[5%] md:bottom-[12%] md:right-[8%] lg:bottom-[15%] lg:right-[12%]"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              >
                <ButterflyIcon2 className="w-[100px] md:w-[150px] lg:w-[200px] xl:w-[240px] h-auto" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN APP LAYOUT */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </div>
    </>
  );
}

// export default function MainLayout() {
//   const [showIntro, setShowIntro] = useState(true);

//   useEffect(() => {
//     // Hide the splash screen after 3.5 seconds
//     const timer = setTimeout(() => {
//       setShowIntro(false);
//     }, 3500); 
    
//     // Cleanup the timer
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <AnimatePresence>
//   {showIntro && (
//     <motion.div
//       className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ 
//         opacity: 0, 
//         transition: { duration: 0.9, ease: 'easeInOut' } 
//       }}
//     >
//       <div className="relative w-full h-full max-w-[1440px] mx-auto flex items-center justify-center">
        
//         {/* Top-Left Butterfly */}
//         <motion.div 
//           className="absolute top-[8%] left-[5%] md:top-[9%] md:left-[5%] lg:top-[10%] lg:left-[7%]"
//           initial={{ opacity: 0 }} 
//           animate={{ opacity: 1 }} 
//           transition={{ duration: 1.4, ease: 'easeInOut' }}
//         >
//           {/* Scaled down drastically to match the wireframe */}
//           <ButterflyIcon1 className="w-[100px] md:w-[150px] lg:w-[200px] xl:w-[240px] h-auto" />
//         </motion.div>

//         {/* Dead-Center Logo */}
//         <motion.div 
//           className="relative z-10" 
//           initial={{ opacity: 0 }} 
//           animate={{ opacity: 1 }} 
//           transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
//         >
//           <LogoSVG className="w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] h-auto" />
//         </motion.div>

//         {/* Bottom-Right Butterfly */}
//         <motion.div 
//           className="absolute bottom-[8%] right-[5%] md:bottom-[12%] md:right-[8%] lg:bottom-[15%] lg:right-[12%]"
//           initial={{ opacity: 0 }} 
//           animate={{ opacity: 1 }} 
//           transition={{ duration: 1.4, ease: 'easeInOut' }}
//         >
//           {/* Scaled down drastically to match the wireframe */}
//           <ButterflyIcon2 className="w-[100px] md:w-[150px] lg:w-[200px] xl:w-[240px] h-auto" />
//         </motion.div>

//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>

//       {/* --- MAIN APP LAYOUT --- */}
//       {/* This renders quietly in the background and is revealed when the splash fades */}
//       <div className="flex flex-col min-h-screen">
//         {/* Header stays at the top */}
//         <Header />
        
//         {/* Outlet is where React Router injects the current page (like Home) */}
//         <main className="flex-grow">
//           <Outlet />
//         </main>

//         {/* Footer stays at the bottom */}
//         <Footer />
//       </div>
//     </>
//   );
// }