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
import { Outlet } from 'react-router-dom';
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

export default function MainLayout() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 3.5 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500); 
    
    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* --- SPLASH SCREEN OVERLAY --- */}
      {/* <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.05, 
              filter: 'blur(15px)', 
              transition: { duration: 0.9, ease: 'circIn' } 
            }}
          >
            <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center">
              
             
              <motion.div 
                // Adjusted top and left percentages to push it higher and further out
                className="absolute top-[15%] left-[2%] md:top-[20%] md:left-[8%] lg:top-[22%] lg:left-[12%] xl:left-[18%]"
                initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }} 
                animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }} 
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
             
                <ButterflyIcon1 className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]" />
              </motion.div>

              <motion.div 
                className="relative z-10" 
                initial={{ scale: 0.9, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              >
              
                <LogoSVG className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[380px] xl:w-[420px] h-auto" />
              </motion.div>

            
              <motion.div 
                // Adjusted bottom and right percentages to push it lower and further out
                className="absolute bottom-[15%] right-[2%] md:bottom-[20%] md:right-[8%] lg:bottom-[22%] lg:right-[12%] xl:right-[18%]"
                initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }} 
                animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }} 
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
              
                <ButterflyIcon2 className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]" />
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
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
          {/* Scaled down drastically to match the wireframe */}
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
          {/* Scaled down drastically to match the wireframe */}
          <ButterflyIcon2 className="w-[100px] md:w-[150px] lg:w-[200px] xl:w-[240px] h-auto" />
        </motion.div>

      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* --- MAIN APP LAYOUT --- */}
      {/* This renders quietly in the background and is revealed when the splash fades */}
      <div className="flex flex-col min-h-screen">
        {/* Header stays at the top */}
        <Header />
        
        {/* Outlet is where React Router injects the current page (like Home) */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </>
  );
}