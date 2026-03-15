// // // import { useEffect, useState } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import './Hero.css'; // Import custom styles for the Hero component
// // // // --- PLACEHOLDER COMPONENTS FOR YOUR SVGs ---
// // // // Replace the contents of these with your actual imported SVGs or img tags
// // // const ButterflyLeft = () => (
// // //   <div className="w-[150px] md:w-[300px] h-[300px] bg-gray-200/50 rounded-full flex items-center justify-center text-gray-400 border border-dashed border-gray-400">
// // //     Left Butterflies SVG
// // //   </div>
// // // );

// // // const ButterflyRight = () => (
// // //   <div className="w-[150px] md:w-[300px] h-[300px] bg-gray-200/50 rounded-full flex items-center justify-center text-gray-400 border border-dashed border-gray-400">
// // //     Right Butterflies SVG
// // //   </div>
// // // );

// // // const LogoTextSVG = () => (
// // //   <div className="text-center">
// // //     {/* If your logo is an SVG, place it here. Otherwise, using text as fallback */}
// // //     <h1 className="font-heading text-brand-orange text-5xl md:text-[100px] leading-none">
// // //       Just <br />
// // //       <span className="flex items-center justify-center gap-2">
// // //         <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-20 md:h-20">
// // //           <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
// // //         </svg>
// // //         Tattoos
// // //       </span>
// // //     </h1>
// // //   </div>
// // // );

// // // // --- CARD FAN CONFIGURATION ---
// // // // Determines the final resting state of the 4 cards in the fanned deck
// // // const deckConfig = [
// // //   { id: 1, rotate: 0, x: 0, y: 0, zIndex: 40 },
// // //   { id: 2, rotate: 8, x: 40, y: 15, zIndex: 30 },
// // //   { id: 3, rotate: 16, x: 80, y: 30, zIndex: 20 },
// // //   { id: 4, rotate: 24, x: 120, y: 45, zIndex: 10 },
// // // ];

// // // export default function Hero() {
// // //   const [showIntro, setShowIntro] = useState(true);

// // //   // Manage the intro phase timing
// // //   useEffect(() => {
// // //     const timer = setTimeout(() => {
// // //       setShowIntro(false);
// // //     }, 2800); // Intro lasts for 2.8 seconds
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   return (
// // //     <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
      
// // //       {/* =========================================
// // //           PHASE 1: INTRO ANIMATION (LOGO & BUTTERFLIES)
// // //           ========================================= */}
// // //       <AnimatePresence>
// // //         {showIntro && (
// // //           <motion.div 
// // //             className="absolute inset-0 z-50 flex items-center justify-between px-4 md:px-20 bg-white"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
// // //             transition={{ duration: 0.8, ease: "easeInOut" }}
// // //           >
// // //             {/* Left Butterflies */}
// // //             <motion.div
// // //               initial={{ x: -100, opacity: 0 }}
// // //               animate={{ x: 0, opacity: 1 }}
// // //               transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
// // //             >
// // //               <ButterflyLeft />
// // //             </motion.div>

// // //             {/* Center Logo */}
// // //             <motion.div
// // //               initial={{ scale: 0.8, opacity: 0 }}
// // //               animate={{ scale: 1, opacity: 1 }}
// // //               transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
// // //             >
// // //               <LogoTextSVG />
// // //             </motion.div>

// // //             {/* Right Butterflies */}
// // //             <motion.div
// // //               initial={{ x: 100, opacity: 0 }}
// // //               animate={{ x: 0, opacity: 1 }}
// // //               transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
// // //             >
// // //               <ButterflyRight />
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       {/* =========================================
// // //           PHASE 2: MAIN HERO SECTION
// // //           ========================================= */}
// // //       {!showIntro && (
// // //         <motion.div 
// // //           className="relative z-10 flex flex-col flex-grow"
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           transition={{ duration: 0.8, delay: 0.2 }}
// // //         >
// // //           {/* Top Navigation Placeholder */}
// // //           {/* Main Hero Content Split */}
// // //           <main className="max-w-7xl mx-auto px-8 w-full flex-grow flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20">
            
// // //             {/* Left Column: Typography */}
// // //             <div className="w-full md:w-1/2 flex flex-col items-start z-20">
// // //               <motion.h1 
// // //                 className="flex flex-col text-left"
// // //                 initial={{ x: -50, opacity: 0 }}
// // //                 animate={{ x: 0, opacity: 1 }}
// // //                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
// // //               >
// // //                 <span className="text-hero text-black leading-[0.85]">REAL INK</span>
// // //                 <span className="text-hero text-brand-orange leading-[0.85]">YOUR WAY</span>
// // //               </motion.h1>
              
// // //               <motion.p 
// // //                 className="mt-6 text-lead text-gray-800 max-w-lg"
// // //                 initial={{ y: 20, opacity: 0 }}
// // //                 animate={{ y: 0, opacity: 1 }}
// // //                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
// // //               >
// // //                 Get the authentic tattoo look without the needle or the lifelong commitment. Our clinically tested, permanent ink sinks into the top layer of your skin, fully developing into a bold, <span className="text-brand-orange font-medium">realistic design within 24 hours</span>
// // //               </motion.p>
              
// // //               <motion.button 
// // //                 className="mt-8 bg-black text-white rounded-full px-8 py-4 flex items-center gap-3 text-btn hover:bg-gray-800 transition-colors group"
// // //                 initial={{ y: 20, opacity: 0 }}
// // //                 animate={{ y: 0, opacity: 1 }}
// // //                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
// // //               >
// // //                 SHOP COLLECTIONS 
// // //                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
// // //                   &rarr;
// // //                 </span>
// // //               </motion.button>
// // //             </div>

// // //             {/* Right Column: Card Deck Animation */}
// // //             <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative flex justify-center items-center mt-16 md:mt-0">
// // //               <div className="relative w-[280px] h-[380px] md:w-[350px] md:h-[480px]">
// // //                 {deckConfig.map((card, index) => (
// // //                   <motion.div
// // //                     key={card.id}
// // //                     className="absolute inset-0 bg-white rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden flex flex-col items-center justify-center"
// // //                     style={{ zIndex: card.zIndex, transformOrigin: 'bottom left' }}
// // //                     initial={{ 
// // //                       y: -100, 
// // //                       x: -50,
// // //                       opacity: 0, 
// // //                       rotate: -10 
// // //                     }}
// // //                     animate={{ 
// // //                       y: card.y, 
// // //                       x: card.x,
// // //                       opacity: 1, 
// // //                       rotate: card.rotate 
// // //                     }}
// // //                     transition={{ 
// // //                       type: 'spring', 
// // //                       damping: 12, 
// // //                       stiffness: 70, 
// // //                       delay: 0.8 + (index * 0.15) // Staggered fanning effect
// // //                     }}
// // //                   >
// // //                     {/* Placeholder for the Tattoo Image inside the card */}
// // //                     <div className="w-[90%] h-[90%] bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
// // //                       {card.id === 1 ? (
// // //                          <span className="font-heading text-xl text-black">Top Card (Skull)</span>
// // //                       ) : (
// // //                          <span className="font-heading text-xl text-gray-400">Card {card.id}</span>
// // //                       )}
// // //                     </div>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </main>

// // //           {/* Bottom Black Strip matching the wireframe */}
// // //           <motion.div 
// // //             className="w-full h-24 bg-black mt-auto"
// // //             initial={{ y: 50, opacity: 0 }}
// // //             animate={{ y: 0, opacity: 1 }}
// // //             transition={{ delay: 1.2, duration: 0.8 }}
// // //           ></motion.div>
// // //         </motion.div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // import { useEffect, useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import './Hero.css';

// // // --- PLACEHOLDER COMPONENTS ---
// // const ButterflyLeft = () => (
// //   <div className="w-[100px] md:w-[300px] h-[300px] bg-gray-200/50 rounded-full flex items-center justify-center text-gray-400 border border-dashed border-gray-400">
// //     Left Butterflies SVG
// //   </div>
// // );

// // const ButterflyRight = () => (
// //   <div className="w-[100px] md:w-[300px] h-[300px] bg-gray-200/50 rounded-full flex items-center justify-center text-gray-400 border border-dashed border-gray-400">
// //     Right Butterflies SVG
// //   </div>
// // );

// // const LogoTextSVG = () => (
// //   <div className="text-center">
// //     <h1 className="font-heading text-brand-orange text-5xl md:text-[100px] leading-none">
// //       Just <br />
// //       <span className="flex items-center justify-center gap-2">
// //         <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-20 md:h-20">
// //           <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
// //         </svg>
// //         Tattoos
// //       </span>
// //     </h1>
// //   </div>
// // );

// // // --- CARD FAN CONFIGURATION ---
// // // Adjusted for a strictly horizontal right-fanning layout, mimicking the wireframe closely.
// // const deckConfig = [
// //   { id: 1, rotate: -2, x: 0, y: 0, zIndex: 40 },       // Top Card (Main)
// //   { id: 2, rotate: 3, x: 50, y: 2, zIndex: 30 },       // Slides right, tiny rotation
// //   { id: 3, rotate: 7, x: 100, y: 4, zIndex: 20 },      // Slides further right
// //   { id: 4, rotate: 11, x: 150, y: 6, zIndex: 10 },     // Farthest right
// // ];

// // export default function Hero() {
// //   const [showIntro, setShowIntro] = useState(true);
// //   const [isExpanded, setIsExpanded] = useState(false); // New state to control the horizontal expansion

// //   // Manage the timeline: Intro -> Drop Stack -> Expand Deck
// //   useEffect(() => {
// //     const introTimer = setTimeout(() => {
// //       setShowIntro(false);
      
// //       // Exactly 1 second after the intro hides, trigger the card deck horizontal expansion
// //       setTimeout(() => {
// //         setIsExpanded(true);
// //       }, 1000);

// //     }, 2800); // Intro duration
    
// //     return () => clearTimeout(introTimer);
// //   }, []);

// //   return (
// //     <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
      
// //       {/* =========================================
// //           PHASE 1: INTRO ANIMATION (LOGO & BUTTERFLIES)
// //           ========================================= */}
// //       <AnimatePresence>
// //         {showIntro && (
// //           <motion.div 
// //             className="absolute inset-0 z-50 flex items-center justify-between px-4 md:px-20 bg-white"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
// //             transition={{ duration: 0.8, ease: "easeInOut" }}
// //           >
// //             <motion.div
// //               initial={{ x: -100, opacity: 0 }}
// //               animate={{ x: 0, opacity: 1 }}
// //               transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
// //             >
// //               <ButterflyLeft />
// //             </motion.div>

// //             <motion.div
// //               initial={{ scale: 0.8, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
// //             >
// //               <LogoTextSVG />
// //             </motion.div>

// //             <motion.div
// //               initial={{ x: 100, opacity: 0 }}
// //               animate={{ x: 0, opacity: 1 }}
// //               transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
// //             >
// //               <ButterflyRight />
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* =========================================
// //           PHASE 2: MAIN HERO SECTION
// //           ========================================= */}
// //       {!showIntro && (
// //         <motion.div 
// //           className="relative z-10 flex flex-col flex-grow"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //         >
// //           <main className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20">
            
// //             {/* Left Column: Typography */}
// //             <div className="w-full md:w-[45%] flex flex-col items-start z-20">
// //               <motion.h1 
// //                 className="flex flex-col text-left"
// //                 initial={{ x: -50, opacity: 0 }}
// //                 animate={{ x: 0, opacity: 1 }}
// //                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
// //               >
// //                 <span className="text-[64px] md:text-[80px] font-bold uppercase text-black leading-[0.85] tracking-tight">REAL INK</span>
// //                 <span className="text-[64px] md:text-[80px] font-bold uppercase text-brand-orange leading-[0.85] tracking-tight">YOUR WAY</span>
// //               </motion.h1>
              
// //               <motion.p 
// //                 className="mt-6 text-base md:text-lg text-gray-800 max-w-lg"
// //                 initial={{ y: 20, opacity: 0 }}
// //                 animate={{ y: 0, opacity: 1 }}
// //                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
// //               >
// //                 Get the authentic tattoo look without the needle or the lifelong commitment. Our clinically tested, permanent ink sinks into the top layer of your skin, fully developing into a bold, <span className="text-brand-orange font-bold">realistic design within 24 hours.</span>
// //               </motion.p>
              
// //               <motion.button 
// //                 className="mt-8 bg-black text-white rounded-full px-8 py-4 flex items-center gap-3 font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors group"
// //                 initial={{ y: 20, opacity: 0 }}
// //                 animate={{ y: 0, opacity: 1 }}
// //                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
// //               >
// //                 SHOP COLLECTIONS 
// //                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
// //                   &rarr;
// //                 </span>
// //               </motion.button>
// //             </div>

// //             {/* Right Column: Dynamic Horizontal Card Deck */}
// //             <div className="w-full md:w-[55%] h-[400px] md:h-[600px] relative flex justify-center md:justify-start items-center mt-16 md:mt-0 pl-0 md:pl-10">
// //               {/* Container is positioned to allow cards to span out to the right without clipping */}
// //               <div className="relative w-[240px] h-[340px] md:w-[320px] md:h-[440px]">
// //                 {deckConfig.map((card, index) => (
// //                   <motion.div
// //                     key={card.id}
// //                     className="absolute inset-0 bg-white rounded-2xl shadow-xl border-4 border-white overflow-hidden flex flex-col items-center justify-center"
// //                     // Transform origin centered to keep the horizontal line clean when rotating
// //                     style={{ zIndex: card.zIndex, transformOrigin: 'center' }}
// //                     // Start way above the screen, unrotated
// //                     initial={{ 
// //                       y: -200, 
// //                       x: 0,
// //                       opacity: 0, 
// //                       rotate: 0 
// //                     }}
// //                     // Animate conditionally: Drop to stack first, expand later
// //                     animate={{ 
// //                       y: isExpanded ? card.y : 0, 
// //                       x: isExpanded ? card.x : 0,
// //                       opacity: 1, 
// //                       rotate: isExpanded ? card.rotate : (card.id === 1 ? -2 : 0)
// //                     }}
// //                     transition={{ 
// //                       type: 'spring', 
// //                       damping: 14, 
// //                       stiffness: 80, 
// //                       // 1. Drop simultaneously (or close to it)
// //                       // 2. When expanding, stagger them beautifully so the bottom card slides out last
// //                       delay: isExpanded ? (index * 0.1) : 0.8 + (index * 0.05)
// //                     }}
// //                   >
// //                     {/* Placeholder for actual Tattoo Images */}
// //                     // assets/images/Card1.png, Card2.png, etc. can be used here below for the cards
// //                     <div className="w-full h-full bg-gray-100 flex items-center justify-center">
// //                       {card.id === 1 ? (
// //                          <span className="font-bold text-2xl text-black">Top Card</span>
// //                       ) : (
// //                          <span className="font-bold text-xl text-gray-400">Card {card.id}</span>
// //                       )}
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </div>
// //           </main>

// //           {/* Bottom Black Strip */}
// //           <motion.div 
// //             className="w-full h-16 md:h-24 bg-black mt-auto"
// //             initial={{ y: 50, opacity: 0 }}
// //             animate={{ y: 0, opacity: 1 }}
// //             transition={{ delay: 1.2, duration: 0.8 }}
// //           ></motion.div>
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // }



// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Hero.css';

// const ButterflyIcon1 = ({ className, flipped = false }) => (
//   <img 
//     src="/assets/icons/butterflys.svg" 
//     alt="Butterfly" 
//     className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`} 
//   />
// );

// const ButterflyIcon2 = ({ className, flipped = false }) => (
//   <img 
//     src="/assets/icons/butterflys2.svg" 
//     alt="Butterfly" 
//     className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`} 
//   />
// );

// // Component for the Main Logo SVG
// const LogoSVG = ({ className }) => (
//   <img 
//     src="/assets/icons/DesktopLogo.svg" 
//     alt="Just Tattoos Logo" 
//     className={className} 
//   />
// );

// const deckConfig = [
//   { id: 1, expandRotate: -4, expandX: -10, expandY: 5, zIndex: 40 },   // Top Card (Tilts slightly left)
//   { id: 2, expandRotate: 5, expandX: 10, expandY: -20, zIndex: 30 },    // Second card
//   { id: 3, expandRotate: 10, expandX: 50, expandY: -35, zIndex: 20 },    // Third card
//   { id: 4, expandRotate: 20, expandX: 70, expandY: -55, zIndex: 10 },  // Bottom card (Farthest right)
// ];

// export default function Hero() {
//   const [showIntro, setShowIntro] = useState(true);
//   const [isExpanded, setIsExpanded] = useState(false);

//   useEffect(() => {
//     // 1. Hide Intro after 2.8s
//     const introTimer = setTimeout(() => {
//       setShowIntro(false);
      
//       // 2. Wait 1.2s AFTER the hero mounts to fan the cards out
//       // This gives the user time to see the perfectly neat, stacked single card first
//       setTimeout(() => {
//         setIsExpanded(true);
//       }, 1200);

//     }, 2800); 
    
//     return () => clearTimeout(introTimer);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
//       <AnimatePresence>
//         {showIntro && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
//             initial={{ opacity: 1 }}
//             exit={{
//               opacity: 0,
//               scale: 1.05,
//               filter: "blur(15px)",
//               transition: { duration: 0.9, ease: "circIn" },
//             }}
//           >
//             {/* Mobile: flex-col (Vertical stack like image 2)
//           Desktop: flex-row (Horizontal stack like image 1)
//       */}
//             <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 gap-12 md:gap-20">
//               {/* Left/Top Butterfly */}
//               <motion.div
//                 className="order-1 md:order-none"
//                 initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 {/* Scaled based on wireframe: smaller on mobile, prominent on desktop */}
//                 <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" />
//               </motion.div>

//               {/* Main Logo Center */}
//               <motion.div
//                 className="z-10 order-2 md:order-none"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//               >
//                 {/* Logo sizing adjusted for the "Just Tattoos" proportions in your PNG */}
//                 <LogoSVG className="w-[260px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto" />
//               </motion.div>

//               {/* Right/Bottom Butterfly */}
//               <motion.div
//                 className="order-3 md:order-none"
//                 initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1
//                   className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80"
//                   flipped
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* =========================================
//           PHASE 2: MAIN HERO SECTION
//           ========================================= */}
//       {!showIntro && (
//         <motion.div
//           className="relative z-10 flex flex-col flex-grow"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           {/* Main container explicitly styled to balance the 50/50 layout visually */}
//           <main className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col md:flex-row items-center justify-between mt-10 md:mt-16">
//             <div className="w-full md:w-[60%] flex flex-col items-start justify-center z-20">
//               <motion.div
//                 className="flex flex-col text-left w-full"
//                 initial={{ x: -30, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//               >
//                 {/* Fixed line height and scaling fonts to prevent overlap */}
//                 <div
//                   style={{
//                     color: "black",
//                     fontSize: "clamp(64px, 8vw, 140px)",
//                     fontFamily: "Almarena, sans-serif",
//                     fontWeight: "700",
//                     textTransform: "uppercase",
//                     lineHeight: "0.85",
//                   }}
//                 >
//                   Real ink
//                 </div>
//                 <div
//                   style={{
//                     color: "#FE8204",
//                     fontSize: "clamp(64px, 8vw, 140px)",
//                     fontFamily: "Almarena, sans-serif",
//                     fontWeight: "700",
//                     textTransform: "uppercase",
//                     lineHeight: "0.85",
//                   }}
//                 >
//                   Your Way
//                 </div>
//               </motion.div>

//               <motion.p
//                 // Constrained paragraph width so it wraps neatly like the design
//                 className="mt-8 text-left w-full max-w-[650px]"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
//               >
//                 {/* Corrected JSX inline style syntax */}
//                 <span
//                   style={{
//                     color: "black",
//                     fontSize: "clamp(16px, 2vw, 24px)",
//                     fontFamily: "Montserrat, sans-serif",
//                     fontWeight: "500",
//                     lineHeight: "1.4",
//                   }}
//                 >
//                   Get the authentic tattoo look without the needle or the
//                   lifelong commitment. Our clinically tested, permanent ink
//                   sinks into the top layer of your skin, fully developing into a
//                   bold,{" "}
//                 </span>
//                 <span
//                   style={{
//                     color: "#FE8204",
//                     fontSize: "clamp(16px, 2vw, 24px)",
//                     fontFamily: "Montserrat, sans-serif",
//                     fontWeight: "500",
//                     lineHeight: "1.4",
//                   }}
//                 >
//                   realistic design within 24 hours.
//                 </span>
//               </motion.p>

//               <motion.button
//                 className="mt-10 bg-black text-white rounded-full px-8 py-4 flex items-center gap-4 font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors group"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
//               >
//                 SHOP COLLECTIONS
//                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                   &rarr;
//                 </span>
//               </motion.button>
//             </div>

//             {/* Right Column: Dynamic Horizontal Card Deck */}
//             <div className="w-full md:w-[50%] h-[400px] md:h-[600px] relative flex justify-center md:justify-start items-center mt-16 md:mt-0 pl-0 md:pl-10">
//               {/* Card Container */}
//               <div className="relative w-[260px] h-[360px] md:w-[320px] md:h-[460px]">
//                 {deckConfig.map((card, index) => (
//                   <motion.div
//                     key={card.id}
//                     className="absolute inset-0 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white overflow-hidden flex flex-col items-center justify-center"
//                     // Bottom-left origin creates that perfect playing-card fan arc
//                     style={{
//                       zIndex: card.zIndex,
//                       transformOrigin: "bottom left",
//                     }}
//                     // INITIAL STATE: Starts slightly lower, fully transparent, perfectly straight
//                     initial={{ y: 40, x: 0, opacity: 0, rotate: 0 }}
//                     // ANIMATE STATE:
//                     // Phase 1 (Entrance): x: 0, y: 0, rotate: 0 (perfectly neat stack)
//                     // Phase 2 (Expanded): shifts to config values
//                     animate={{
//                       y: isExpanded ? card.expandY : 0,
//                       x: isExpanded ? card.expandX : 0,
//                       opacity: 1,
//                       rotate: isExpanded ? card.expandRotate : 0,
//                     }}
//                     transition={{
//                       type: "spring",
//                       damping: 15,
//                       stiffness: 85,
//                       // 1. Entrance: all fade in perfectly together (delay: 0.3)
//                       // 2. Expansion: stagger slightly so the bottom card fans out last
//                       delay: isExpanded ? index * 0.1 : 0.3,
//                     }}
//                   >
//                     {/* Actual Card Image Tags */}
//                     <img
//                       src={`/assets/images/Card${card.id}.png`}
//                       alt={`Tattoo Card ${card.id}`}
//                       className="w-full h-full object-cover bg-gray-100"
//                       // Fallback text if image doesn't load immediately
//                       onError={(e) => {
//                         e.target.style.display = "none";
//                         e.target.nextSibling.style.display = "flex";
//                       }}
//                     />
//                     <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                       <span className="font-bold text-xl text-gray-400">
//                         Card {card.id} Image Placeholder
//                       </span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </main>

//           {/* Bottom Black Strip - perfectly matches wireframe layout */}
//           <motion.div
//             className="w-full h-16 md:h-24 bg-black mt-auto"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           ></motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Hero.css';

// const ButterflyIcon1 = ({ className, flipped = false }) => (
//   <img
//     src="/assets/icons/butterflys.svg"
//     alt="Butterfly"
//     className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`}
//   />
// );

// const LogoSVG = ({ className }) => (
//   <img
//     src="/assets/icons/DesktopLogo.svg"
//     alt="Just Tattoos Logo"
//     className={className}
//   />
// );

// const deckConfig = [
//   { id: 1, expandRotate: -4,  expandX: -10, expandY: 5,   zIndex: 40 },
//   { id: 2, expandRotate: 5,   expandX: 10,  expandY: -20, zIndex: 30 },
//   { id: 3, expandRotate: 10,  expandX: 50,  expandY: -35, zIndex: 20 },
//   { id: 4, expandRotate: 20,  expandX: 70,  expandY: -55, zIndex: 10 },
// ];


// const FACE_CARD_DROP_MS   = 2200; // approx spring settle time
// const POST_SETTLE_GAP_MS  =  1000; // pause between card landing and fan open
// const EXPAND_DELAY_MS     = FACE_CARD_DROP_MS + POST_SETTLE_GAP_MS; // 1800 ms

// export default function Hero() {
//   const [showIntro,    setShowIntro]    = useState(true);
//   const [topCardReady, setTopCardReady] = useState(false);
//   const [isExpanded,   setIsExpanded]   = useState(false);
// const [cardIsFalling, setCardIsFalling] = useState(false);
// // Update the topCardReady timeout block:
// setTimeout(() => {
//   setTopCardReady(true);
//   setCardIsFalling(true); // elevate z-index when drop starts
//   setTimeout(() => {
//     setCardIsFalling(false); // restore z-index after card settles
//   }, FACE_CARD_DROP_MS); // matches the fall duration
//   setTimeout(() => {
//     setIsExpanded(true);
//   }, EXPAND_DELAY_MS);
// }, 400);

//   useEffect(() => {
//     const introTimer = setTimeout(() => {
//       setShowIntro(false);

//       // Short pause for hero to mount, then drop face card
//       setTimeout(() => {
//         setTopCardReady(true);

//         // Wait for drop + settle gap, then fan the deck
//         setTimeout(() => {
//           setIsExpanded(true);
//         }, EXPAND_DELAY_MS);

//       }, 400);
//     }, 2800);

//     return () => clearTimeout(introTimer);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">

//       {/* ════════════════════════════════════
//           PHASE 1 — INTRO SPLASH
//           ════════════════════════════════════ */}
//       <AnimatePresence>
//         {showIntro && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
//             initial={{ opacity: 1 }}
//             exit={{
//               opacity: 0,
//               scale: 1.05,
//               filter: 'blur(15px)',
//               transition: { duration: 0.9, ease: 'circIn' },
//             }}
//           >
//             <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 gap-12 md:gap-20">
//               <motion.div
//                 className="order-1 md:order-none"
//                 initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" />
//               </motion.div>

//               <motion.div
//                 className="z-10 order-2 md:order-none"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
//               >
//                 <LogoSVG className="w-[260px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto" />
//               </motion.div>

//               <motion.div
//                 className="order-3 md:order-none"
//                 initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1
//                   className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80"
//                   flipped
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ════════════════════════════════════
//           PHASE 2 — MAIN HERO
//           ════════════════════════════════════ */}
//       {!showIntro && (
//         <motion.div
//           className="relative z-10 flex flex-col flex-grow"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//         >
//           <main
//             className="
//               max-w-[1400px] mx-auto px-6 md:px-16 w-full flex-grow
//               flex flex-col md:flex-row
//               items-center justify-between
//               pt-6 md:pt-10 pb-0
//             "
//           >
//             {/* ── LEFT: Copy ── */}
//             <div className="w-full md:w-[55%] flex flex-col items-start justify-center z-20">
//               <motion.div
//                 initial={{ x: -30, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
//               >
//                 <div
//                   style={{
//                     color: 'black',
//                     fontSize: 'clamp(56px, 10.5vw, 132px)',
//                     fontFamily: 'Almarena, sans-serif',
//                     fontWeight: '700',
//                     textTransform: 'uppercase',
//                     lineHeight: '0.88',
//                     letterSpacing: '-0.01em',
//                     marginLeft: '-14px',
//                   }}
//                 >
//                   Real ink
//                 </div>
//                 <div
//                   style={{
//                     color: '#FE8204',
//                     fontSize: 'clamp(56px, 10.5vw, 132px)',
//                     fontFamily: 'Almarena, sans-serif',
//                     fontWeight: '700',
//                     textTransform: 'uppercase',
//                     lineHeight: '0.88',
//                     letterSpacing: '-0.01em',
//                   }}
//                 >
//                   Your Way
//                 </div>
//               </motion.div>

//               {/* Body copy */}
//               <motion.p
//                 className="mt-6 md:mt-8 text-left"
//                 style={{ maxWidth: '520px' }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
//               >
//                 <span
//                   style={{
//                     color: 'black',
//                     fontSize: 'clamp(15px, 1.25vw, 19px)',
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '500',
//                     lineHeight: '1.55',
//                   }}
//                 >
//                   Get the authentic tattoo look without the needle or the
//                   lifelong commitment. Our clinically tested, permanent ink
//                   sinks into the top layer of your skin, fully developing into
//                   a bold,{' '}
//                 </span>
//                 <span
//                   style={{
//                     color: '#FE8204',
//                     fontSize: 'clamp(15px, 1.25vw, 19px)',
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '500',
//                     lineHeight: '1.55',
//                   }}
//                 >
//                   realistic design within 24 hours.
//                 </span>
//               </motion.p>

//               {/* CTA */}
//               <motion.button
//                 className="
//                   mt-8 md:mt-10 bg-black text-white rounded-full
//                   px-7 py-3.5 md:px-8 md:py-4
//                   flex items-center gap-4
//                   font-bold uppercase tracking-widest text-sm md:text-base
//                   hover:bg-gray-800 transition-colors group
//                 "
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
//               >
//                 SHOP COLLECTIONS
//                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                   &rarr;
//                 </span>
//               </motion.button>
//             </div>

//             {/* ── RIGHT: Card Deck ── */}
//             <div
//               className="
//                 w-full md:w-[45%]
//                 h-[420px] md:h-[560px] lg:h-[640px]
//                 relative flex justify-center md:justify-center items-center
//                 mt-14 md:mt-0
//               "
//             >
//               <div className="relative w-[280px] h-[300px] md:w-[340px] md:h-[470px] lg:w-[320px] lg:h-[470px]">
//                 {deckConfig.map((card, index) => {
//                   const isTopCard = index === 0;

//                   if (isTopCard) {
//                     return (
//                       <motion.div
//                         key={card.id}
//                         className="absolute inset-0 rounded-3xl overflow-hidden flex flex-col items-center justify-center"
//                         style={{
//                           zIndex: cardIsFalling ? 9999 : card.zIndex,
//                           transformOrigin: 'bottom left',
//                           border: '3px solid #111',
//                           boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
//                           backgroundColor: '#fff',
//                         }}
//                         /*
//                           Initial state: off-screen top-right
//                           (x offset gives the parabola its starting horizontal position)
//                         */
//                         // initial={{ x: 120, y: -800, opacity: 0, rotate: 12 }}
//                         initial={{ x: -400, y: -700, opacity: 0, rotate: -20 }}
//                         animate={
//                           isExpanded
//                             ? {
//                                 // Fan position — spring to final spot
//                                 x: card.expandX,
//                                 y: card.expandY,
//                                 opacity: 1,
//                                 rotate: card.expandRotate,
//                               }
//                             : topCardReady
//                             ? {
//                               x: [-400, -180, 0],    // gentle leftward arc → lands center
//                               y: [-700, -300, 0],    // slow float down from top
//                               rotate: [-20, -5, 0],  // smoothly straightens
//                               opacity: [0, 1, 1],
//                               //  x: [-400, 120, 0],   // ← left → swing right (C belly) → land
//                               //  y: [-700, -200, 0],  // ← high → mid-fall → ground
//                               //  rotate: [-20, 8, 0], // ← tilted left → tilts right → straight
//                               //  opacity: [0, 1, 1],
//                               }
//                             : {
//                                 // Waiting state — invisible, off-screen
//                                 // x: 120,
//                                 // y: -800,
//                                 // opacity: 0,
//                                 // rotate: 12,
//                                 x: -400,
//                                 y: -700,
//                                 opacity: 0,
//                                 rotate: -20,
//                               }
//                         }
//                         transition={
//                           isExpanded
//                             ? {
//                                 // Snap to fan position — quick spring
//                                 type: 'spring',
//                                 damping: 18,
//                                 stiffness: 70,
//                                 delay: 0,
//                               }
//                             : topCardReady
//                             ? {
                               
//                               duration: 1.5,              // slow, deliberate fall
//                               times: [0,0.2,1],        // spend more time in the arc
//                               ease: 'easeInOut',          // no sharp cuts — smooth in and out
//                               opacity: { duration: 0.8, ease: 'easeIn' },
//                               }
//                             : { duration: 0 }
//                         }
//                       >
//                         <img
//                           src={`/assets/images/Card${card.id}.png`}
//                           alt={`Tattoo Card ${card.id}`}
//                           className="w-full h-full object-cover"
//                           onError={(e) => {
//                             e.target.style.display = 'none';
//                             e.target.nextSibling.style.display = 'flex';
//                           }}
//                         />
//                         <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                           <span className="font-bold text-xl text-gray-400">
//                             Card {card.id}
//                           </span>
//                         </div>
//                       </motion.div>
//                     );
//                   }

//                   // ── BACK CARDS (index 1–3) ──────────────────────────────
//                   // Stay invisible and stacked until isExpanded fires,
//                   // then spring-fan out with a light stagger.
//                   return (
//                     <motion.div
//                       key={card.id}
//                       className="absolute inset-0 rounded-3xl overflow-hidden flex flex-col items-center justify-center"
//                       style={{
//                         zIndex: card.zIndex,
//                         transformOrigin: 'bottom left',
//                         border: '3px solid #111',
//                         boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
//                         backgroundColor: '#fff',
//                       }}
//                       initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
//                       animate={{
//                         x:       isExpanded ? card.expandX      : 0,
//                         y:       isExpanded ? card.expandY      : 0,
//                         opacity: isExpanded ? 1                 : 0,
//                         rotate:  isExpanded ? card.expandRotate : 0,
//                       }}
//                       transition={{
//                         type:      'spring',
//                         damping:   18,
//                         stiffness: 90,
//                         // Stagger: card 2 → 0.08 s, card 3 → 0.16 s, card 4 → 0.24 s
//                         delay: isExpanded ? index * 0.08 : 0,
//                       }}
//                     >
//                       <img
//                         src={`/assets/images/Card${card.id}.png`}
//                         alt={`Tattoo Card ${card.id}`}
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           e.target.style.display = 'none';
//                           e.target.nextSibling.style.display = 'flex';
//                         }}
//                       />
//                       <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                         <span className="font-bold text-xl text-gray-400">
//                           Card {card.id}
//                         </span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </main>

//           {/* ════════════════════════════════════
//               Bottom Black Scrolling Strip
//               ════════════════════════════════════ */}
//           <motion.div
//             className="w-full h-14 md:h-20 bg-black mt-auto overflow-hidden flex items-center"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           >
//             <motion.div
//               className="flex whitespace-nowrap"
//               animate={{ x: ['0%', '-50%'] }}
//               transition={{
//                 duration: 18,
//                 ease: 'linear',
//                 repeat: Infinity,
//                 repeatType: 'loop',
//               }}
//             >
//               {[0, 1].map((i) => (
//                 <span
//                   key={i}
//                   className="flex items-center"
//                   style={{
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '700',
//                     fontSize: 'clamp(13px, 1.1vw, 17px)',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.12em',
//                     color: '#fff',
//                   }}
//                 >
//                   {Array.from({ length: 10 }).map((_, j) => (
//                     <span key={j} className="flex items-center">
//                       Just Tattoos
//                       <span style={{ color: '#FE8204', margin: '0 18px', fontSize: '10px' }}>
//                         ◆
//                       </span>
//                     </span>
//                   ))}
//                 </span>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// perfectly working
// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Hero.css';

// const ButterflyIcon1 = ({ className, flipped = false }) => (
//   <img
//     src="/assets/icons/butterflys.svg"
//     alt="Butterfly"
//     className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`}
//   />
// );

// const LogoSVG = ({ className }) => (
//   <img
//     src="/assets/icons/DesktopLogo.svg"
//     alt="Just Tattoos Logo"
//     className={className}
//   />
// );

// const deckConfig = [
//   { id: 1, expandRotate: -4,  expandX: -10, expandY: 5,   zIndex: 40 },
//   { id: 2, expandRotate: 5,   expandX: 10,  expandY: -20, zIndex: 30 },
//   { id: 3, expandRotate: 10,  expandX: 50,  expandY: -35, zIndex: 20 },
//   { id: 4, expandRotate: 20,  expandX: 70,  expandY: -55, zIndex: 10 },
// ];

// // TIMING CONSTANTS (Adjusted for slower drop and exactly 2 sec pause)
// const FACE_CARD_DROP_MS  = 2500; // Slower, smoother 2.5 second fall
// const POST_SETTLE_GAP_MS = 500; // Exactly 2 seconds pause after landing
// const EXPAND_DELAY_MS    = FACE_CARD_DROP_MS + POST_SETTLE_GAP_MS; 

// export default function Hero() {
//   const [showIntro,     setShowIntro]     = useState(true);
//   const [topCardReady,  setTopCardReady]  = useState(false);
//   const [isExpanded,    setIsExpanded]    = useState(false);
//   const [cardIsFalling, setCardIsFalling] = useState(false);

//   useEffect(() => {
//     // 1. Hide Intro Splash after 2.8s
//     const introTimer = setTimeout(() => {
//       setShowIntro(false);

//       // 2. Short pause for hero to mount, then trigger card drop
//       setTimeout(() => {
//         setTopCardReady(true);
//         setCardIsFalling(true); // Elevate z-index when drop starts

//         // 3. Restore z-index right when the card lands
//         setTimeout(() => {
//           setCardIsFalling(false); 
//         }, FACE_CARD_DROP_MS);

//         // 4. Wait for drop + 2 seconds, then fan the deck
//         setTimeout(() => {
//           setIsExpanded(true);
//         }, EXPAND_DELAY_MS);

//       }, 400); // 400ms delay after splash screen starts fading
//     }, 2800);

//     return () => clearTimeout(introTimer);
//   }, []); // Empty dependency array ensures timeouts only trigger once on mount

//   return (
//     <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">

//       {/* ════════════════════════════════════
//           PHASE 1 — INTRO SPLASH
//           ════════════════════════════════════ */}
//       <AnimatePresence>
//         {showIntro && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
//             initial={{ opacity: 1 }}
//             exit={{
//               opacity: 0,
//               scale: 1.05,
//               filter: 'blur(15px)',
//               transition: { duration: 0.9, ease: 'circIn' },
//             }}
//           >
//             <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 gap-12 md:gap-20">
//               <motion.div
//                 className="order-1 md:order-none"
//                 initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" />
//               </motion.div>

//               <motion.div
//                 className="z-10 order-2 md:order-none"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
//               >
//                 <LogoSVG className="w-[260px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto" />
//               </motion.div>

//               <motion.div
//                 className="order-3 md:order-none"
//                 initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1
//                   className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80"
//                   flipped
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ════════════════════════════════════
//           PHASE 2 — MAIN HERO
//           ════════════════════════════════════ */}
//       {!showIntro && (
//         <motion.div
//           className="relative z-10 flex flex-col flex-grow"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <main
//             className="
//               max-w-[1400px] mx-auto px-6 md:px-16 w-full flex-grow
//               flex flex-col md:flex-row
//               items-center justify-between
//               pb-0
//             "
//           >
//             {/* ── LEFT: Copy (Delays removed so it appears instantly) ── */}
//             <div className="w-full md:w-[55%] flex flex-col items-start justify-center z-20">
//               <motion.div
//                 initial={{ x: -30, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }} 
//               >
//                 <div
//                   style={{
//                     color: 'black',
//                     fontSize: 'clamp(56px, 10.5vw, 132px)',
//                     fontFamily: 'Almarena, sans-serif',
//                     fontWeight: '700',
//                     textTransform: 'uppercase',
//                     lineHeight: '0.88',
//                     letterSpacing: '-0.01em',
//                     marginLeft: '-14px',
//                   }}
//                 >
//                   Real ink
//                 </div>
//                 <div
//                   style={{
//                     color: '#FE8204',
//                     fontSize: 'clamp(56px, 10.5vw, 132px)',
//                     fontFamily: 'Almarena, sans-serif',
//                     fontWeight: '700',
//                     textTransform: 'uppercase',
//                     lineHeight: '0.88',
//                     letterSpacing: '-0.01em',
//                   }}
//                 >
//                   Your Way
//                 </div>
//               </motion.div>

//               {/* Body copy */}
//               <motion.p
//                 className="mt-6 md:mt-8 text-left"
//                 style={{ maxWidth: '520px' }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
//               >
//                 <span
//                   style={{
//                     color: 'black',
//                     fontSize: 'clamp(15px, 1.25vw, 19px)',
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '500',
//                     lineHeight: '1.55',
//                   }}
//                 >
//                   Get the authentic tattoo look without the needle or the
//                   lifelong commitment. Our clinically tested, permanent ink
//                   sinks into the top layer of your skin, fully developing into
//                   a bold,{' '}
//                 </span>
//                 <span
//                   style={{
//                     color: '#FE8204',
//                     fontSize: 'clamp(15px, 1.25vw, 19px)',
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '500',
//                     lineHeight: '1.55',
//                   }}
//                 >
//                   realistic design within 24 hours.
//                 </span>
//               </motion.p>

//               {/* CTA */}
//               <motion.button
//                 className="
//                   mt-8 md:mt-10 bg-black text-white rounded-full
//                   px-7 py-3.5 md:px-8 md:py-4
//                   flex items-center gap-4
//                   font-bold uppercase tracking-widest text-sm md:text-base
//                   hover:bg-gray-800 transition-colors group
//                 "
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
//               >
//                 SHOP COLLECTIONS
//                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                   &rarr;
//                 </span>
//               </motion.button>
//             </div>

//             {/* ── RIGHT: Card Deck ── */}
//             <div
//               className="
//                 w-full md:w-[45%]
//                 h-[420px] md:h-[560px] lg:h-[640px]
//                 relative flex justify-center md:justify-center items-center
//                 mt-14 md:mt-0
//               "
//             >
//               <div className="relative w-[380px] h-[300px] md:w-[340px] md:h-[470px] lg:w-[400px] lg:h-[550px]">
//                 {deckConfig.map((card, index) => {
//                   const isTopCard = index === 0;

//                   if (isTopCard) {
//                     return (
//                       <motion.div
//                         key={card.id}
//                         className="absolute inset-0 rounded-3xl overflow-hidden flex flex-col items-center justify-center"
//                         style={{
//                           zIndex: cardIsFalling ? 9999 : card.zIndex,
//                           transformOrigin: 'bottom left',
//                           border: '3px solid #111',
//                           boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
//                           backgroundColor: '#fff',
//                         }}
//                         initial={{ x: -650, y: -650, opacity: 0, rotate: -20 }}
//                         animate={
//                           isExpanded
//                             ? {
//                                 x: card.expandX,
//                                 y: card.expandY,
//                                 opacity: 1,
//                                 rotate: card.expandRotate,
//                               }
//                             : topCardReady
//                             ? {
//                                 // Adjusted keyframes for a smoother, wider arc
//                                 x: [-650, -20, 0],
//                                 y: [-650, -40, 0],    
//                                 rotate: [-70, 15, 0], // Swings slightly past 0 before settling
//                                 opacity: [0, 1, 1],
//                               }
//                             : {
//                                 x: -650,
//                                 y: -650,
//                                 opacity: 0,
//                                 rotate: -20,
//                               }
//                         }
//                         transition={
//                           isExpanded
//                             ? {
//                                 type: 'spring',
//                                 damping: 20,
//                                 stiffness: 70,
//                                 delay: 0,
//                               }
//                             : topCardReady
//                             ? {
//                                 duration: 2.5, // Matches the 2500ms variable
//                                 times: [0,0.99,1], // Hangs in the air longer (0.6) before dropping
//                                 ease: [0.25, 0.1, 0.25, 1], // Very smooth, airy cubic-bezier curve
//                               }
//                             : { duration: 0 }
//                         }
//                       >
//                         <img
//                           src={`/assets/images/Card${card.id}.png`}
//                           alt={`Tattoo Card ${card.id}`}
//                           className="w-full h-full object-cover"
//                           onError={(e) => {
//                             e.target.style.display = 'none';
//                             e.target.nextSibling.style.display = 'flex';
//                           }}
//                         />
//                         <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                           <span className="font-bold text-xl text-gray-400">
//                             Card {card.id}
//                           </span>
//                         </div>
//                       </motion.div>
//                     );
//                   }

//                   // ── BACK CARDS (index 1–3) ──────────────────────────────
//                   return (
//                     <motion.div
//                       key={card.id}
//                       className="absolute inset-0 rounded-3xl overflow-hidden flex flex-col items-center justify-center"
//                       style={{
//                         zIndex: card.zIndex,
//                         transformOrigin: 'bottom left',
//                         border: '3px solid #111',
//                         boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
//                         backgroundColor: '#fff',
//                       }}
//                       initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
//                       animate={{
//                         x:       isExpanded ? card.expandX      : 0,
//                         y:       isExpanded ? card.expandY      : 0,
//                         opacity: isExpanded ? 1                 : 0,
//                         rotate:  isExpanded ? card.expandRotate : 0,
//                       }}
//                       transition={{
//                         type:      'spring',
//                         damping:   18,
//                         stiffness: 90,
//                         delay: isExpanded ? index * 0.08 : 0,
//                       }}
//                     >
//                       <img
//                         src={`/assets/images/Card${card.id}.png`}
//                         alt={`Tattoo Card ${card.id}`}
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           e.target.style.display = 'none';
//                           e.target.nextSibling.style.display = 'flex';
//                         }}
//                       />
//                       <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                         <span className="font-bold text-xl text-gray-400">
//                           Card {card.id}
//                         </span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </main>

//           {/* ════════════════════════════════════
//               Bottom Black Scrolling Strip
//               ════════════════════════════════════ */}
//           <motion.div
//             className="w-full h-14 md:h-20 bg-black mt-auto overflow-hidden flex items-center"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             <motion.div
//               className="flex whitespace-nowrap"
//               animate={{ x: ['0%', '-50%'] }}
//               transition={{
//                 duration: 18,
//                 ease: 'linear',
//                 repeat: Infinity,
//                 repeatType: 'loop',
//               }}
//             >
//               {[0, 1].map((i) => (
//                 <span
//                   key={i}
//                   className="flex items-center"
//                   style={{
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '700',
//                     fontSize: 'clamp(13px, 1.1vw, 17px)',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.12em',
//                     color: '#fff',
//                   }}
//                 >
//                   {Array.from({ length: 10 }).map((_, j) => (
//                     <span key={j} className="flex items-center">
//                       Just Tattoos
//                       <span style={{ color: '#FE8204', margin: '0 18px', fontSize: '10px' }}>
//                         ◆
//                       </span>
//                     </span>
//                   ))}
//                 </span>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }


//Perfect -2
// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Hero.css';

// const ButterflyIcon1 = ({ className, flipped = false }) => (
//   <img
//     src="/assets/icons/butterflys.svg"
//     alt="Butterfly"
//     className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`}
//   />
// );

// const LogoSVG = ({ className }) => (
//   <img
//     src="/assets/icons/DesktopLogo.svg"
//     alt="Just Tattoos Logo"
//     className={className}
//   />
// );

// const deckConfig = [
//   { id: 1, expandRotate: -4,  expandX: -10, expandY: 5,   zIndex: 40 },
//   { id: 2, expandRotate: 5,   expandX: 10,  expandY: -20, zIndex: 30 },
//   { id: 3, expandRotate: 10,  expandX: 50,  expandY: -35, zIndex: 20 },
//   { id: 4, expandRotate: 20,  expandX: 70,  expandY: -55, zIndex: 10 },
// ];

// const FACE_CARD_DROP_MS  = 2500;
// const POST_SETTLE_GAP_MS = 500;
// const EXPAND_DELAY_MS    = FACE_CARD_DROP_MS + POST_SETTLE_GAP_MS;

// export default function Hero() {
//   const [showIntro,     setShowIntro]     = useState(true);
//   const [topCardReady,  setTopCardReady]  = useState(false);
//   const [isExpanded,    setIsExpanded]    = useState(false);
//   const [cardIsFalling, setCardIsFalling] = useState(false);

//   useEffect(() => {
//     const introTimer = setTimeout(() => {
//       setShowIntro(false);

//       setTimeout(() => {
//         setTopCardReady(true);
//         setCardIsFalling(true);

//         setTimeout(() => {
//           setCardIsFalling(false);
//         }, FACE_CARD_DROP_MS);

//         setTimeout(() => {
//           setIsExpanded(true);
//         }, EXPAND_DELAY_MS);

//       }, 400);
//     }, 2800);

//     return () => clearTimeout(introTimer);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">

//       {/* ════════════════════════════════════
//           PHASE 1 — INTRO SPLASH
//           ════════════════════════════════════ */}
//       <AnimatePresence>
//         {showIntro && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
//             initial={{ opacity: 1 }}
//             exit={{
//               opacity: 0,
//               scale: 1.05,
//               filter: 'blur(15px)',
//               transition: { duration: 0.9, ease: 'circIn' },
//             }}
//           >
//             <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 gap-12 md:gap-20">
//               <motion.div
//                 className="order-1 md:order-none"
//                 initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" />
//               </motion.div>

//               <motion.div
//                 className="z-10 order-2 md:order-none"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
//               >
//                 <LogoSVG className="w-[260px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto" />
//               </motion.div>

//               <motion.div
//                 className="order-3 md:order-none"
//                 initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1
//                   className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80"
//                   flipped
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ════════════════════════════════════
//           PHASE 2 — MAIN HERO
//           ════════════════════════════════════ */}
//       {!showIntro && (
//         <motion.div
//           className="relative z-10 flex flex-col flex-grow"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <main
//             className="
//               max-w-[1400px] mx-auto px-6 md:px-16 w-full flex-grow
//               flex flex-col md:flex-row
//               items-center justify-between
//               pt-12 md:pt-0
//               pb-0
//             "
//           >
//             {/* ── MOBILE: Heading sits at top above cards ── */}
//             {/* ── DESKTOP: Left column with copy ── */}
//             <div className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center z-20 order-1 md:order-1">
//               <motion.div
//                 initial={{ x: -30, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
//                 className="w-full text-center md:text-left"
//               >
//                 {/* Heading */}
//                 <div
//                   className="text-black text-[18vw] sm:text-[14vw] md:text-[7vw] lg:text-[100px] xl:text-[118px] leading-[0.85] tracking-tight uppercase"
//                   style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '700' }}
//                 >
//                   Real ink
//                 </div>
//                 <div
//                   className="text-[#FE8204] text-[18vw] sm:text-[14vw] md:text-[7vw] lg:text-[100px] xl:text-[118px] leading-[0.85] tracking-tight uppercase mt-2 md:mt-0"
//                   style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '700' }}
//                 >
//                   Your Way
//                 </div>
//               </motion.div>

//               {/* Body copy — hidden on mobile, shown on desktop */}
//               <motion.p
//                 className="mt-8 text-left hidden md:block text-[#111]"
//                 style={{ maxWidth: '500px', fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
//               >
//                 <span className="text-[15px] lg:text-[17px] leading-[1.6]">
//                   Get the authentic tattoo look without the needle or the
//                   lifelong commitment. Our clinically tested, permanent ink
//                   sinks into the top layer of your skin, fully developing into
//                   a bold,{' '}
//                 </span>
//                 <span className="text-[#FE8204] text-[15px] lg:text-[17px] leading-[1.6]">
//                   realistic design within 24 hours.
//                 </span>
//               </motion.p>

//               {/* CTA — hidden on mobile, shown on desktop */}
//               <motion.button
//                 className="
//                   mt-10 bg-black text-white rounded-full
//                   px-8 py-4 lg:px-9 lg:py-4.5
//                   hidden md:flex items-center gap-4
//                   font-bold uppercase tracking-widest text-[13px] lg:text-[15px]
//                   hover:bg-gray-800 transition-colors group
//                 "
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
//               >
//                 SHOP COLLECTIONS
//                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                 </span>
//               </motion.button>
//             </div>

//             {/* ── Card Deck ── */}
//             <div
//               className="
//                 w-full md:w-[50%]
//                 h-[320px] sm:h-[400px] md:h-[540px] lg:h-[620px]
//                 relative flex justify-center items-center
//                 mt-8 md:mt-0
//                 order-2 md:order-2
//               "
//             >
//               <div className="relative w-[280px] h-[240px] sm:w-[340px] sm:h-[300px] md:w-[340px] md:h-[460px] lg:w-[390px] lg:h-[535px]">
//                 {deckConfig.map((card, index) => {
//                   const isTopCard = index === 0;

//                   if (isTopCard) {
//                     return (
//                       <motion.div
//                         key={card.id}
//                         className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-center justify-center"
//                         style={{
//                           zIndex: cardIsFalling ? 9999 : card.zIndex,
//                           transformOrigin: 'bottom left',
//                           border: '3px solid #111',
//                           boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
//                           backgroundColor: '#fff',
//                         }}
//                         initial={{ x: -650, y: -650, opacity: 0, rotate: -20 }}
//                         animate={
//                           isExpanded
//                             ? {
//                                 x: card.expandX,
//                                 y: card.expandY,
//                                 opacity: 1,
//                                 rotate: card.expandRotate,
//                               }
//                             : topCardReady
//                             ? {
//                                 x: [-650, -20, 0],
//                                 y: [-650, -40, 0],
//                                 rotate: [-70, 15, 0],
//                                 opacity: [0, 1, 1],
//                               }
//                             : {
//                                 x: -650,
//                                 y: -650,
//                                 opacity: 0,
//                                 rotate: -20,
//                               }
//                         }
//                         transition={
//                           isExpanded
//                             ? {
//                                 type: 'spring',
//                                 damping: 20,
//                                 stiffness: 70,
//                                 delay: 0,
//                               }
//                             : topCardReady
//                             ? {
//                                 duration: 2.5,
//                                 times: [0, 0.99, 1],
//                                 ease: [0.25, 0.1, 0.25, 1],
//                               }
//                             : { duration: 0 }
//                         }
//                       >
//                         <img
//                           src={`/assets/images/Card${card.id}.png`}
//                           alt={`Tattoo Card ${card.id}`}
//                           className="w-full h-full object-cover"
//                           onError={(e) => {
//                             e.target.style.display = 'none';
//                             e.target.nextSibling.style.display = 'flex';
//                           }}
//                         />
//                         <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                           <span className="font-bold text-xl text-gray-400">
//                             Card {card.id}
//                           </span>
//                         </div>
//                       </motion.div>
//                     );
//                   }

//                   return (
//                     <motion.div
//                       key={card.id}
//                       className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-center justify-center"
//                       style={{
//                         zIndex: card.zIndex,
//                         transformOrigin: 'bottom left',
//                         border: '3px solid #111',
//                         boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
//                         backgroundColor: '#fff',
//                       }}
//                       initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
//                       animate={{
//                         x:       isExpanded ? card.expandX      : 0,
//                         y:       isExpanded ? card.expandY      : 0,
//                         opacity: isExpanded ? 1                 : 0,
//                         rotate:  isExpanded ? card.expandRotate : 0,
//                       }}
//                       transition={{
//                         type:      'spring',
//                         damping:   18,
//                         stiffness: 90,
//                         delay: isExpanded ? index * 0.08 : 0,
//                       }}
//                     >
//                       <img
//                         src={`/assets/images/Card${card.id}.png`}
//                         alt={`Tattoo Card ${card.id}`}
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           e.target.style.display = 'none';
//                           e.target.nextSibling.style.display = 'flex';
//                         }}
//                       />
//                       <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                         <span className="font-bold text-xl text-gray-400">
//                           Card {card.id}
//                         </span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* ── Mobile-only: Body copy + CTA below cards ── */}
//             <div className="w-full order-3 md:hidden flex flex-col items-center text-center px-2 pb-12 mt-4">
//               <motion.p
//                 className="text-[#111]"
//                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
//               >
//                 <span className="text-[15px] leading-[1.6]">
//                   Get the authentic tattoo look without the needle or the
//                   lifelong commitment. Our clinically tested, permanent ink
//                   sinks into the top layer of your skin, fully developing into
//                   a bold,{' '}
//                 </span>
//                 <span className="text-[#FE8204] text-[15px] leading-[1.6]">
//                   realistic design within 24 hours.
//                 </span>
//               </motion.p>

//               <motion.button
//                 className="
//                   mt-8 bg-black text-white rounded-full
//                   px-8 py-4
//                   flex items-center gap-4
//                   font-bold uppercase tracking-widest text-[13px]
//                   hover:bg-gray-800 transition-colors group
//                 "
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
//               >
//                 SHOP COLLECTIONS
//                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                 </span>
//               </motion.button>
//             </div>
//           </main>

//           {/* ════════════════════════════════════
//               Bottom Black Scrolling Strip
//               ════════════════════════════════════ */}
//           <motion.div
//             className="w-full h-14 md:h-20 bg-black mt-auto overflow-hidden flex items-center"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             <motion.div
//               className="flex whitespace-nowrap"
//               animate={{ x: ['0%', '-50%'] }}
//               transition={{
//                 duration: 18,
//                 ease: 'linear',
//                 repeat: Infinity,
//                 repeatType: 'loop',
//               }}
//             >
//               {[0, 1].map((i) => (
//                 <span
//                   key={i}
//                   className="flex items-center"
//                   style={{
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '700',
//                     fontSize: 'clamp(13px, 1.1vw, 17px)',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.12em',
//                     color: '#fff',
//                   }}
//                 >
//                   {Array.from({ length: 10 }).map((_, j) => (
//                     <span key={j} className="flex items-center">
//                       Just Tattoos
//                       <span style={{ color: '#FE8204', margin: '0 18px', fontSize: '10px' }}>
//                         ◆
//                       </span>
//                     </span>
//                   ))}
//                 </span>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }

 {/* <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }} className="w-full text-center md:text-left">
                  <div className="text-black text-[18vw] sm:text-[14vw] md:text-[7vw] lg:text-[100px] xl:text-[118px] leading-[0.85] tracking-tight uppercase" style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '700' }}>Real ink</div>
                  <div className="text-[#FE8204] text-[18vw] sm:text-[14vw] md:text-[7vw] lg:text-[100px] xl:text-[118px] leading-[0.85] tracking-tight uppercase mt-2 md:mt-0" style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '700' }}>Your Way</div>
                </motion.div> */}
                {/* <motion.div 
                  initial={{ x: -30, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }} 
                  // Changed w-full to w-max so it ignores parent boundaries, and added z-30 to ensure it stays above cards
                  className="w-max text-center md:text-left relative z-30"
                >
              
                  <div 
                    className="text-black text-[12vw] sm:text-[12vw] md:text-[9vw] lg:text-[130px] xl:text-[160px] leading-[0.85] tracking-tight uppercase whitespace-nowrap -ml-2 md:-ml-8 lg:-ml-12" 
                    style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '700' }}
                  >
                    Real ink
                  </div>
                  
                 
                  <div 
                    className="text-[#FE8204] text-[22vw] sm:text-[18vw] md:text-[9vw] lg:text-[130px] xl:text-[160px] leading-[0.85] tracking-tight uppercase mt-2 md:mt-0 whitespace-nowrap ml-[25vw] md:ml-[14vw] lg:ml-[240px] xl:ml-[300px]" 
                    style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '700' }}
                  >
                    Your Way
                  </div>
                </motion.div> */}
                {/* <motion.div 
                  initial={{ x: -30, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }} 
                  // w-max ensures it breaks out of the 50% grid constraint
                  className="w-max flex flex-col text-left relative z-30"
                >
             
                  <div 
                    className="text-black text-[22vw] sm:text-[17vw] md:text-[9vw] lg:text-[130px] xl:text-[160px] leading-[0.8] tracking-tighter uppercase whitespace-nowrap" 
                    style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '800' }}
                  >
                    REAL INK
                  </div>
                  
          
                  <div 
                    className="text-[#FE8204] text-[22vw] sm:text-[17vw] md:text-[9vw] lg:text-[130px] xl:text-[160px] leading-[0.8] tracking-tighter uppercase whitespace-nowrap 
                              mt-10 md:mt-10 lg:mt-4 
                              ml-[14vw] sm:ml-[11vw] md:ml-[6.5vw] lg:ml-[90px] xl:ml-[115px]" 
                    style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '800' }}
                  >
                    YOUR WAY
                  </div>
                </motion.div> */}

 {/* <motion.div 
                className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center z-20 order-1 md:order-1"
                animate={{ 
                  opacity: isScrolled ? 0 : 1, 
                  y: isScrolled ? -40 : 0, 
                  filter: isScrolled ? 'blur(10px)' : 'blur(0px)' 
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
              >
               
                <motion.div 
                    initial={{ x: -30, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }} 
                    
                    className="w-max flex flex-col text-left relative z-30 -ml-10 md:-ml-20 lg:-ml-32"
                  >
                  
                    <div 
                      className="text-black text-[16vw] sm:text-[17vw] md:text-[5vw] lg:text-[110px] xl:text-[160px] leading-[0.8] tracking-tighter uppercase whitespace-nowrap" 
                      style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '700' }}
                    >
                      REAL INK
                    </div>
                    
                
                    <div 
                      className="text-[#FE8204] text-[16vw] sm:text-[17vw] md:text-[5vw] lg:text-[110px] xl:text-[160px] leading-[0.8] tracking-tighter uppercase whitespace-nowrap 
                                mt-4 md:mt-2 lg:mt-0 
                                ml-[14vw] sm:ml-[11vw] md:ml-[6.5vw] lg:ml-[90px] xl:ml-[115px]" 
                      style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '700' }}
                    >
                      YOUR WAY
                    </div>
                  </motion.div>

                <motion.p className="mt-8 text-left hidden md:block text-[#111]" style={{ maxWidth: '500px', fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
                  <span className="text-[15px] lg:text-[17px] leading-[1.6]">Get the authentic tattoo look without the needle or the lifelong commitment. Our clinically tested, permanent ink sinks into the top layer of your skin, fully developing into a bold, </span>
                  <span className="text-[#FE8204] text-[15px] lg:text-[17px] leading-[1.6]">realistic design within 24 hours.</span>
                </motion.p>

                <motion.button className="mt-10 bg-black text-white rounded-full px-8 py-4 lg:px-9 lg:py-4.5 hidden md:flex items-center gap-4 font-bold uppercase tracking-widest text-[13px] lg:text-[15px] hover:bg-gray-800 transition-colors group" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
                  SHOP COLLECTIONS
                  <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </span>
                </motion.button>
              </motion.div> */}

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Hero.css';

// const ButterflyIcon1 = ({ className, flipped = false }) => (
//   <img
//     src="/assets/icons/butterflys.svg"
//     alt="Butterfly"
//     className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`}
//   />
// );

// const LogoSVG = ({ className }) => (
//   <img
//     src="/assets/icons/DesktopLogo.svg"
//     alt="Just Tattoos Logo"
//     className={className}
//   />
// );

// // Expanded to 8 cards for the circular scroll state
// const deckConfig = [
//   { id: 1, heroRotate: -4,  heroX: -10, heroY: 5,   circRotate: -45,  circX: -200, circY: -200, zIndex: 40 },
//   { id: 2, heroRotate: 5,   heroX: 10,  heroY: -20, circRotate: 0,    circX: 0,    circY: -280, zIndex: 30 },
//   { id: 3, heroRotate: 10,  heroX: 50,  heroY: -35, circRotate: 45,   circX: 200,  circY: -200, zIndex: 20 },
//   { id: 4, heroRotate: 20,  heroX: 70,  heroY: -55, circRotate: 90,   circX: 280,  circY: 0,    zIndex: 10 },
//   // Cards 5-8 stay hidden behind Card 1 during hero phase
//   { id: 5, heroRotate: -4,  heroX: -10, heroY: 5,   circRotate: 135,  circX: 200,  circY: 200,  zIndex: 5 },
//   { id: 6, heroRotate: -4,  heroX: -10, heroY: 5,   circRotate: 180,  circX: 0,    circY: 280,  zIndex: 4 },
//   { id: 7, heroRotate: -4,  heroX: -10, heroY: 5,   circRotate: 225,  circX: -200, circY: 200,  zIndex: 3 },
//   { id: 8, heroRotate: -4,  heroX: -10, heroY: 5,   circRotate: 270,  circX: -280, circY: 0,    zIndex: 2 },
// ];

// const FACE_CARD_DROP_MS  = 2500;
// const POST_SETTLE_GAP_MS = 500;
// const EXPAND_DELAY_MS    = FACE_CARD_DROP_MS + POST_SETTLE_GAP_MS;

// export default function Hero() {
//   const [showIntro,     setShowIntro]     = useState(true);
//   const [topCardReady,  setTopCardReady]  = useState(false);
//   const [isExpanded,    setIsExpanded]    = useState(false);
//   const [cardIsFalling, setCardIsFalling] = useState(false);
  
//   // New States for Scroll Animation
//   const [isScrolled,    setIsScrolled]    = useState(false);
//   const [isDesktop,     setIsDesktop]     = useState(true);

//   // Initial sequence effect
//   useEffect(() => {
//     const introTimer = setTimeout(() => {
//       setShowIntro(false);
//       setTimeout(() => {
//         setTopCardReady(true);
//         setCardIsFalling(true);
//         setTimeout(() => setCardIsFalling(false), FACE_CARD_DROP_MS);
//         setTimeout(() => setIsExpanded(true), EXPAND_DELAY_MS);
//       }, 400);
//     }, 2800);
//     return () => clearTimeout(introTimer);
//   }, []);

//   // Scroll and Resize Event Listeners
//   useEffect(() => {
//     setIsDesktop(window.innerWidth >= 768);
//     const handleResize = () => setIsDesktop(window.innerWidth >= 768);
//     window.addEventListener('resize', handleResize);

//     const handleScroll = () => {
//       // Only trigger scroll animation IF the initial hero expansion is finished
//       if (window.scrollY > 50 && isExpanded) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [isExpanded]);

//   // Helper to shrink radius for mobile gracefully
//   const getCircPos = (val) => isDesktop ? val : val * 0.55;

//   return (
//     // Wrap entire app in a scrolling container to allow scrub-feel
//     <div className="relative w-full h-[150vh] bg-white">
      
//       {/* Sticky wrapper to hold the screen while scrolling */}
//       <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col">
        
//         {/* ════════════════════════════════════
//             PHASE 1 — INTRO SPLASH
//             ════════════════════════════════════ */}
//         <AnimatePresence>
//           {showIntro && (
//             <motion.div
//               className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
//               initial={{ opacity: 1 }}
//               exit={{ opacity: 0, scale: 1.05, filter: 'blur(15px)', transition: { duration: 0.9, ease: 'circIn' } }}
//             >
//               <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 gap-12 md:gap-20">
//                 <motion.div className="order-1 md:order-none" initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }} animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}>
//                   <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" />
//                 </motion.div>
//                 <motion.div className="z-10 order-2 md:order-none" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}>
//                   <LogoSVG className="w-[260px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto" />
//                 </motion.div>
//                 <motion.div className="order-3 md:order-none" initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }} animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}>
//                   <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" flipped />
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* ════════════════════════════════════
//             PHASE 2 & 3 — HERO AND SCROLL STATE
//             ════════════════════════════════════ */}
//         {!showIntro && (
//           <motion.div
//             className="relative z-10 flex flex-col flex-grow"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <main className="max-w-[1400px] mx-auto px-6 md:px-30 w-full flex-grow flex flex-col md:flex-row items-center justify-between pt-12 md:pt-0 pb-0">
              
        
//               <motion.div 
//   className="w-full md:w-[60%] flex flex-col items-center md:items-start justify-center z-20 order-1 md:order-1 md:-ml-12 lg:-ml-20 xl:-ml-32"
//   animate={{ 
//     opacity: isScrolled ? 0 : 1, 
//     y: isScrolled ? -40 : 0, 
//     filter: isScrolled ? 'blur(10px)' : 'blur(0px)' 
//   }}
//   transition={{ duration: 0.6, ease: 'easeInOut' }}
//   style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
// >
//   {/* HEADING BLOCK */}
//   <motion.div 
//     initial={{ x: -30, opacity: 0 }} 
//     animate={{ x: 0, opacity: 1 }} 
//     transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }} 
//     className="w-max flex flex-col text-left relative z-30"
//   >
//     {/* REAL INK - The Anchor point */}
//     <div 
//       className="text-black text-[18vw] sm:text-[17vw] md:text-[8vw] lg:text-[120px] xl:text-[150px] leading-[0.8] tracking-[ -0.05em] uppercase whitespace-nowrap" 
//       style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '800' }}
//     >
//       REAL INK
//     </div>
    
//     {/* YOUR WAY - Indented after the 'R' */}
//     <div 
//       className="text-[#FE8204] text-[18vw] sm:text-[17vw] md:text-[8vw] lg:text-[120px] xl:text-[150px] leading-[0.8] tracking-[-0.05em] uppercase whitespace-nowrap 
//                 mt-2 md:mt-1 lg:mt-0 
//                 ml-[12vw] sm:ml-[11vw] md:ml-[5.5vw] lg:ml-[80px] xl:ml-[105px]" 
//       style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '800' }}
//     >
//       YOUR WAY
//     </div>
//   </motion.div>

//   {/* PARAGRAPH - Aligned with the 'R' in REAL */}
//   <motion.p 
//     className="mt-8 text-left hidden md:block text-[#111]" 
//     style={{ 
//       maxWidth: '540px', 
//       fontFamily: 'Montserrat, sans-serif', 
//       fontWeight: '500' 
//     }} 
//     initial={{ y: 20, opacity: 0 }} 
//     animate={{ y: 0, opacity: 1 }} 
//     transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
//   >
//     <span className="text-[15px] lg:text-[17px] leading-[1.6]">
//       Get the authentic tattoo look without the needle or the lifelong commitment. Our clinically tested, permanent ink sinks into the top layer of your skin, fully developing into a bold, 
//     </span>
//     <span className="text-[#FE8204] text-[15px] lg:text-[17px] leading-[1.6] font-semibold">
//       {" "}realistic design within 24 hours.
//     </span>
//   </motion.p>

//   {/* BUTTON - Aligned with the 'R' in REAL */}
//   <motion.button 
//     className="mt-10 bg-black text-white rounded-full px-8 py-4 lg:px-9 lg:py-4.5 hidden md:flex items-center gap-4 font-bold uppercase tracking-widest text-[13px] lg:text-[15px] hover:bg-gray-800 transition-colors group" 
//     initial={{ y: 20, opacity: 0 }} 
//     animate={{ y: 0, opacity: 1 }} 
//     transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
//   >
//     SHOP COLLECTIONS
//     <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M5 12h14"></path>
//         <path d="m12 5 7 7-7 7"></path>
//       </svg>
//     </span>
//   </motion.button>
// </motion.div>

//               {/* ── Right Column: Card Deck ── */}
//               <motion.div 
//                 className="w-full md:w-[50%] h-[320px] sm:h-[400px] md:h-[540px] lg:h-[620px] relative flex justify-center items-center mt-8 md:mt-0 order-2 md:order-2"
//                 // This perfectly centers the circle dynamically when text fades out!
//                 animate={{ x: isScrolled && isDesktop ? '-50%' : '0%' }}
//                 transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 {/* Center "Real Tattoo Look" Logo Reveal */}
//                 <motion.div
//                   className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-[60]"
//                   initial={{ opacity: 0, scale: 0.5 }}
//                   animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.5 }}
//                   transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: isScrolled ? 0.15 : 0 }}
//                 >
//                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FE8204" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
//                   <span className="text-[22px] md:text-[34px] leading-[1.1] mt-3 tracking-widest text-black uppercase text-center" style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '800' }}>
//                     Real<br/>Tattoo<br/>Look
//                   </span>
//                 </motion.div>

//                 <div className="relative w-[280px] h-[240px] sm:w-[340px] sm:h-[300px] md:w-[340px] md:h-[460px] lg:w-[390px] lg:h-[535px]">
//                   {deckConfig.map((card, index) => {
//                     const isTopCard = index === 0;
//                     const isVisibleInHero = card.id <= 4;

//                     return (
//                       <motion.div
//                         key={card.id}
//                         className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-center justify-center"
//                         style={{
//                           zIndex: isTopCard && cardIsFalling ? 9999 : card.zIndex,
//                           transformOrigin: 'bottom left',
//                           border: '3px solid #111',
//                           boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
//                           backgroundColor: '#fff',
//                         }}
//                         initial={isTopCard ? { x: -650, y: -650, opacity: 0, rotate: -20 } : { x: 0, y: 0, opacity: 0, rotate: 0 }}
//                         animate={
//                           isScrolled 
//                             ? {
//                                 x: getCircPos(card.circX),
//                                 y: getCircPos(card.circY),
//                                 rotate: card.circRotate,
//                                 opacity: 1,
//                                 scale: isDesktop ? 0.8 : 0.65 // slight scale down to form a clean circle
//                               }
//                             : isExpanded
//                             ? {
//                                 x: card.heroX,
//                                 y: card.heroY,
//                                 rotate: card.heroRotate,
//                                 opacity: isVisibleInHero ? 1 : 0, // Cards 5-8 hidden seamlessly
//                                 scale: 1
//                               }
//                             : isTopCard && topCardReady
//                             ? {
//                                 x: [-650, -20, 0],
//                                 y: [-650, -40, 0],
//                                 rotate: [-70, 15, 0],
//                                 opacity: [0, 1, 1],
//                                 scale: 1
//                               }
//                             : {
//                                 x: isTopCard ? -650 : 0,
//                                 y: isTopCard ? -650 : 0,
//                                 opacity: 0,
//                                 rotate: isTopCard ? -20 : 0,
//                                 scale: 1
//                               }
//                         }
//                         transition={
//                           isScrolled
//                             ? { type: 'spring', damping: 25, stiffness: 85, mass: 1 }
//                             : isExpanded
//                             ? { type: 'spring', damping: 18, stiffness: 90, delay: isTopCard ? 0 : index * 0.08 }
//                             : isTopCard && topCardReady
//                             ? { duration: 2.5, times: [0, 0.99, 1], ease: [0.25, 0.1, 0.25, 1] }
//                             : { duration: 0 }
//                         }
//                       >
//                         <img src={`/assets/images/Card${card.id}.png`} alt={`Tattoo Card ${card.id}`} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
//                         <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                           <span className="font-bold text-xl text-gray-400">Card {card.id}</span>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </motion.div>

//               {/* ── Mobile-only Body Copy ── */}
//               <motion.div 
//                 className="w-full order-3 md:hidden flex flex-col items-center text-center px-2 pb-12 mt-4"
//                 animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? 40 : 0 }}
//                 transition={{ duration: 0.6 }}
//                 style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
//               >
//                 <motion.p className="text-[#111]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
//                   <span className="text-[15px] leading-[1.6]">Get the authentic tattoo look without the needle or the lifelong commitment. Our clinically tested, permanent ink sinks into the top layer of your skin, fully developing into a bold, </span>
//                   <span className="text-[#FE8204] text-[15px] leading-[1.6]">realistic design within 24 hours.</span>
//                 </motion.p>
//                 <motion.button className="mt-8 bg-black text-white rounded-full px-8 py-4 flex items-center gap-4 font-bold uppercase tracking-widest text-[13px] hover:bg-gray-800 transition-colors group" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
//                   SHOP COLLECTIONS
//                   <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   </span>
//                 </motion.button>
//               </motion.div>
//             </main>

//             {/* ════════════════════════════════════
//                 Bottom Black Scrolling Strip (Slides out on Scroll)
//                 ════════════════════════════════════ */}
//             <motion.div
//               className="w-full h-14 md:h-20 bg-black mt-auto overflow-hidden flex items-center"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{
//                 y: 0,
//                 opacity: isScrolled ? 0 : 1,
//                 x: isScrolled ? '100%' : '0%' // Slides right and vanishes!
//               }}
//               transition={{ delay: showIntro ? 0.5 : 0, duration: 0.8, ease: 'easeInOut' }}
//             >
//               <motion.div className="flex whitespace-nowrap" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 18, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}>
//                 {[0, 1].map((i) => (
//                   <span key={i} className="flex items-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', fontSize: 'clamp(13px, 1.1vw, 17px)', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#fff' }}>
//                     {Array.from({ length: 10 }).map((_, j) => (
//                       <span key={j} className="flex items-center">
//                         Just Tattoos <span style={{ color: '#FE8204', margin: '0 18px', fontSize: '10px' }}>◆</span>
//                       </span>
//                     ))}
//                   </span>
//                 ))}
//               </motion.div>
//             </motion.div>

//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }




// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Hero.css';

// const ButterflyIcon1 = ({ className, flipped = false }) => (
//   <img
//     src="/assets/icons/butterflys.svg"
//     alt="Butterfly"
//     className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`}
//   />
// );

// const LogoSVG = ({ className }) => (
//   <img
//     src="/assets/icons/DesktopLogo.svg"
//     alt="Just Tattoos Logo"
//     className={className}
//   />
// );

// // FIXED: Mathematical layout for a perfect 8-card circle.
// // Radius is roughly 320px, diagonal coordinates are roughly 226px (320 * sin(45))
// const deckConfig = [
//   { id: 1, heroRotate: -4,  heroX: -10, heroY: 5,   circRotate: 0,    circX: 0,    circY: -320, zIndex: 40 }, // Top Center
//   { id: 2, heroRotate: 5,   heroX: 10,  heroY: -20, circRotate: 45,   circX: 226,  circY: -226, zIndex: 30 }, // Top Right
//   { id: 3, heroRotate: 10,  heroX: 50,  heroY: -35, circRotate: 90,   circX: 320,  circY: 0,    zIndex: 20 }, // Right
//   { id: 4, heroRotate: 20,  heroX: 70,  heroY: -55, circRotate: 135,  circX: 226,  circY: 226,  zIndex: 10 }, // Bottom Right
//   { id: 5, heroRotate: -4,  heroX: -10, heroY: 5,   circRotate: 180,  circX: 0,    circY: 320,  zIndex: 5 },  // Bottom Center
//   { id: 6, heroRotate: -4,  heroX: -10, heroY: 5,   circRotate: 225,  circX: -226, circY: 226,  zIndex: 4 },  // Bottom Left
//   { id: 7, heroRotate: -4,  heroX: -10, heroY: 5,   circRotate: 270,  circX: -320, circY: 0,    zIndex: 3 },  // Left
//   { id: 8, heroRotate: -4,  heroX: -10, heroY: 5,   circRotate: 315,  circX: -226, circY: -226, zIndex: 2 },  // Top Left
// ];

// const FACE_CARD_DROP_MS  = 2500;
// const POST_SETTLE_GAP_MS = 500;
// const EXPAND_DELAY_MS    = FACE_CARD_DROP_MS + POST_SETTLE_GAP_MS;

// export default function Hero() {
//   const [showIntro,     setShowIntro]     = useState(true);
//   const [topCardReady,  setTopCardReady]  = useState(false);
//   const [isExpanded,    setIsExpanded]    = useState(false);
//   const [cardIsFalling, setCardIsFalling] = useState(false);
  
//   // New States for Scroll Animation
//   const [isScrolled,    setIsScrolled]    = useState(false);
//   const [isDesktop,     setIsDesktop]     = useState(true);

//   // Initial sequence effect
//   useEffect(() => {
//     const introTimer = setTimeout(() => {
//       setShowIntro(false);
//       setTimeout(() => {
//         setTopCardReady(true);
//         setCardIsFalling(true);
//         setTimeout(() => setCardIsFalling(false), FACE_CARD_DROP_MS);
//         setTimeout(() => setIsExpanded(true), EXPAND_DELAY_MS);
//       }, 400);
//     }, 2800);
//     return () => clearTimeout(introTimer);
//   }, []);

//   // Scroll and Resize Event Listeners
//   useEffect(() => {
//     setIsDesktop(window.innerWidth >= 768);
//     const handleResize = () => setIsDesktop(window.innerWidth >= 768);
//     window.addEventListener('resize', handleResize);

//     const handleScroll = () => {
//       // Only trigger scroll animation IF the initial hero expansion is finished
//       if (window.scrollY > 50 && isExpanded) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [isExpanded]);

//   // Helper to shrink radius for mobile gracefully
//   const getCircPos = (val) => isDesktop ? val : val * 0.55;

//   return (
//     // Wrap entire app in a scrolling container to allow scrub-feel
//     <div className="relative w-full h-[150vh] bg-white">
      
//       {/* Sticky wrapper to hold the screen while scrolling */}
//       <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col">
        
//         {/* ════════════════════════════════════
//             PHASE 1 — INTRO SPLASH
//             ════════════════════════════════════ */}
//         <AnimatePresence>
//           {showIntro && (
//             <motion.div
//               className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
//               initial={{ opacity: 1 }}
//               exit={{ opacity: 0, scale: 1.05, filter: 'blur(15px)', transition: { duration: 0.9, ease: 'circIn' } }}
//             >
//               <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 gap-12 md:gap-20">
//                 <motion.div className="order-1 md:order-none" initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }} animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}>
//                   <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" />
//                 </motion.div>
//                 <motion.div className="z-10 order-2 md:order-none" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}>
//                   <LogoSVG className="w-[260px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto" />
//                 </motion.div>
//                 <motion.div className="order-3 md:order-none" initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }} animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}>
//                   <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" flipped />
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* ════════════════════════════════════
//             PHASE 2 & 3 — HERO AND SCROLL STATE
//             ════════════════════════════════════ */}
//         {!showIntro && (
//           <motion.div
//             className="relative z-10 flex flex-col flex-grow"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <main className="max-w-[1400px] mx-auto px-6 md:px-30 w-full flex-grow flex flex-col md:flex-row items-center justify-between pt-12 md:pt-0 pb-0">
              
        
//               <motion.div 
//                 className="w-full md:w-[60%] flex flex-col items-center md:items-start justify-center z-20 order-1 md:order-1 md:-ml-12 lg:-ml-20 xl:-ml-32"
//                 animate={{ 
//                   opacity: isScrolled ? 0 : 1, 
//                   y: isScrolled ? -40 : 0, 
//                   filter: isScrolled ? 'blur(10px)' : 'blur(0px)' 
//                 }}
//                 transition={{ duration: 0.6, ease: 'easeInOut' }}
//                 style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
//               >
//                 {/* HEADING BLOCK */}
//                 <motion.div 
//                   initial={{ x: -30, opacity: 0 }} 
//                   animate={{ x: 0, opacity: 1 }} 
//                   transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }} 
//                   className="w-max flex flex-col text-left relative z-30"
//                 >
//                   {/* REAL INK - The Anchor point */}
//                   <div 
//                     className="text-black text-[18vw] sm:text-[17vw] md:text-[8vw] lg:text-[120px] xl:text-[150px] leading-[0.8] tracking-[ -0.05em] uppercase whitespace-nowrap" 
//                     style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '800' }}
//                   >
//                     REAL INK
//                   </div>
                  
//                   {/* YOUR WAY - Indented after the 'R' */}
//                   <div 
//                     className="text-[#FE8204] text-[18vw] sm:text-[17vw] md:text-[8vw] lg:text-[120px] xl:text-[150px] leading-[0.8] tracking-[-0.05em] uppercase whitespace-nowrap 
//                               mt-2 md:mt-1 lg:mt-0 
//                               ml-[12vw] sm:ml-[11vw] md:ml-[5.5vw] lg:ml-[80px] xl:ml-[105px]" 
//                     style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '800' }}
//                   >
//                     YOUR WAY
//                   </div>
//                 </motion.div>

//                 {/* PARAGRAPH - Aligned with the 'R' in REAL */}
//                 <motion.p 
//                   className="mt-8 text-left hidden md:block text-[#111]" 
//                   style={{ 
//                     maxWidth: '540px', 
//                     fontFamily: 'Montserrat, sans-serif', 
//                     fontWeight: '500' 
//                   }} 
//                   initial={{ y: 20, opacity: 0 }} 
//                   animate={{ y: 0, opacity: 1 }} 
//                   transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
//                 >
//                   <span className="text-[15px] lg:text-[17px] leading-[1.6]">
//                     Get the authentic tattoo look without the needle or the lifelong commitment. Our clinically tested, permanent ink sinks into the top layer of your skin, fully developing into a bold, 
//                   </span>
//                   <span className="text-[#FE8204] text-[15px] lg:text-[17px] leading-[1.6] font-semibold">
//                     {" "}realistic design within 24 hours.
//                   </span>
//                 </motion.p>

//                 {/* BUTTON - Aligned with the 'R' in REAL */}
//                 <motion.button 
//                   className="mt-10 bg-black text-white rounded-full px-8 py-4 lg:px-9 lg:py-4.5 hidden md:flex items-center gap-4 font-bold uppercase tracking-widest text-[13px] lg:text-[15px] hover:bg-gray-800 transition-colors group" 
//                   initial={{ y: 20, opacity: 0 }} 
//                   animate={{ y: 0, opacity: 1 }} 
//                   transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
//                 >
//                   SHOP COLLECTIONS
//                   <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M5 12h14"></path>
//                       <path d="m12 5 7 7-7 7"></path>
//                     </svg>
//                   </span>
//                 </motion.button>
//               </motion.div>

//               {/* ── Right Column: Card Deck ── */}
//               <motion.div 
//                 className="w-full md:w-[50%] h-[320px] sm:h-[400px] md:h-[540px] lg:h-[620px] relative flex justify-center items-center mt-8 md:mt-0 order-2 md:order-2"
//                 // This perfectly centers the circle dynamically when text fades out!
//                 animate={{ x: isScrolled && isDesktop ? '-50%' : '0%' }}
//                 transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 {/* Center "Real Tattoo Look" Logo Reveal */}
//                 <motion.div
//                   className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-[60]"
//                   initial={{ opacity: 0, scale: 0.5 }}
//                   animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.5 }}
//                   transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: isScrolled ? 0.15 : 0 }}
//                 >
//                   {/* FIXED: Reordered elements to put the heart exactly in the middle per the video */}
//                   <span className="text-[26px] md:text-[36px] leading-[1.1] tracking-widest text-black uppercase text-center" style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '800' }}>
//                     REAL
//                   </span>
//                   <svg className="my-1.5" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FE8204" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//                   </svg>
//                   <span className="text-[26px] md:text-[36px] leading-[1.1] tracking-widest text-black uppercase text-center" style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '800' }}>
//                     TATTOO<br/>LOOK
//                   </span>
//                 </motion.div>

//                 <div className="relative w-[280px] h-[240px] sm:w-[340px] sm:h-[300px] md:w-[340px] md:h-[460px] lg:w-[390px] lg:h-[535px]">
//                   {deckConfig.map((card, index) => {
//                     const isTopCard = index === 0;
//                     const isVisibleInHero = card.id <= 4;

//                     return (
//                       <motion.div
//                         key={card.id}
//                         className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-center justify-center"
//                         style={{
//                           zIndex: isTopCard && cardIsFalling ? 9999 : card.zIndex,
//                           transformOrigin: 'bottom left',
//                           border: '3px solid #111',
//                           boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
//                           backgroundColor: '#fff',
//                         }}
//                         initial={isTopCard ? { x: -650, y: -650, opacity: 0, rotate: -20 } : { x: 0, y: 0, opacity: 0, rotate: 0 }}
//                         animate={
//                           isScrolled 
//                             ? {
//                                 x: getCircPos(card.circX),
//                                 y: getCircPos(card.circY),
//                                 rotate: card.circRotate,
//                                 opacity: 1,
//                                 scale: isDesktop ? 0.8 : 0.65 // slight scale down to form a clean circle
//                               }
//                             : isExpanded
//                             ? {
//                                 x: card.heroX,
//                                 y: card.heroY,
//                                 rotate: card.heroRotate,
//                                 opacity: isVisibleInHero ? 1 : 0, // Cards 5-8 hidden seamlessly
//                                 scale: 1
//                               }
//                             : isTopCard && topCardReady
//                             ? {
//                                 x: [-650, -20, 0],
//                                 y: [-650, -40, 0],
//                                 rotate: [-70, 15, 0],
//                                 opacity: [0, 1, 1],
//                                 scale: 1
//                               }
//                             : {
//                                 x: isTopCard ? -650 : 0,
//                                 y: isTopCard ? -650 : 0,
//                                 opacity: 0,
//                                 rotate: isTopCard ? -20 : 0,
//                                 scale: 1
//                               }
//                         }
//                         transition={
//                           isScrolled
//                             ? { type: 'spring', damping: 25, stiffness: 85, mass: 1 }
//                             : isExpanded
//                             ? { type: 'spring', damping: 18, stiffness: 90, delay: isTopCard ? 0 : index * 0.08 }
//                             : isTopCard && topCardReady
//                             ? { duration: 2.5, times: [0, 0.99, 1], ease: [0.25, 0.1, 0.25, 1] }
//                             : { duration: 0 }
//                         }
//                       >
//                         <img src={`/assets/images/Card${card.id}.png`} alt={`Tattoo Card ${card.id}`} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
//                         <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                           <span className="font-bold text-xl text-gray-400">Card {card.id}</span>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </motion.div>

//               {/* ── Mobile-only Body Copy ── */}
//               <motion.div 
//                 className="w-full order-3 md:hidden flex flex-col items-center text-center px-2 pb-12 mt-4"
//                 animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? 40 : 0 }}
//                 transition={{ duration: 0.6 }}
//                 style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
//               >
//                 <motion.p className="text-[#111]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
//                   <span className="text-[15px] leading-[1.6]">Get the authentic tattoo look without the needle or the lifelong commitment. Our clinically tested, permanent ink sinks into the top layer of your skin, fully developing into a bold, </span>
//                   <span className="text-[#FE8204] text-[15px] leading-[1.6]">realistic design within 24 hours.</span>
//                 </motion.p>
//                 <motion.button className="mt-8 bg-black text-white rounded-full px-8 py-4 flex items-center gap-4 font-bold uppercase tracking-widest text-[13px] hover:bg-gray-800 transition-colors group" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
//                   SHOP COLLECTIONS
//                   <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   </span>
//                 </motion.button>
//               </motion.div>
//             </main>

//             {/* ════════════════════════════════════
//                 Bottom Black Scrolling Strip (Slides out on Scroll)
//                 ════════════════════════════════════ */}
//             <motion.div
//               className="w-full h-14 md:h-20 bg-black mt-auto overflow-hidden flex items-center"
//               initial={{ y: 50, opacity: 0 }}
//               animate={{
//                 y: 0,
//                 opacity: isScrolled ? 0 : 1,
//                 x: isScrolled ? '100%' : '0%' // Slides right and vanishes!
//               }}
//               transition={{ delay: showIntro ? 0.5 : 0, duration: 0.8, ease: 'easeInOut' }}
//             >
//               <motion.div className="flex whitespace-nowrap" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 18, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}>
//                 {[0, 1].map((i) => (
//                   <span key={i} className="flex items-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', fontSize: 'clamp(13px, 1.1vw, 17px)', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#fff' }}>
//                     {Array.from({ length: 10 }).map((_, j) => (
//                       <span key={j} className="flex items-center">
//                         Just Tattoos <span style={{ color: '#FE8204', margin: '0 18px', fontSize: '10px' }}>◆</span>
//                       </span>
//                     ))}
//                   </span>
//                 ))}
//               </motion.div>
//             </motion.div>

//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

        {/* PHASE 1 — INTRO SPLASH */}
        {/* <AnimatePresence>
          {showIntro && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(15px)', transition: { duration: 0.9, ease: 'circIn' } }}
            >
              <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 gap-12 md:gap-20">
                <motion.div className="order-1 md:order-none" initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }} animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}>
                  <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" />
                </motion.div>
                <motion.div className="z-10 order-2 md:order-none" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}>
                  <LogoSVG className="w-[260px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto" />
                </motion.div>
                <motion.div className="order-3 md:order-none" initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }} animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}>
                  <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" flipped />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}

{/* <AnimatePresence>
          {showIntro && (
            <motion.div
              // Added overflow-hidden to prevent scrollbars during the flying animation
              className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(15px)', transition: { duration: 0.9, ease: 'circIn' } }}
            >
            
              <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center">
                
                <motion.div 
                  // Absolutely positioned to the top-left, adjusting responsive values for mobile vs desktop
                  className="absolute top-[12%] left-[0%] md:top-[15%] md:left-[5%] lg:left-[10%]"
                  initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }} 
                  animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }} 
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ButterflyIcon1 className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]" />
                </motion.div>

               
                <motion.div 
                  className="relative z-10" 
                  initial={{ scale: 0.9, opacity: 0 }} 
                  animate={{ scale: 1, opacity: 1 }} 
                  transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                >
                  <LogoSVG className="w-[240px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto" />
                </motion.div>

               
                <motion.div 
                 
                  className="absolute bottom-[12%] right-[0%] md:bottom-[15%] md:right-[5%] lg:right-[10%]"
                  initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }} 
                  animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }} 
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ButterflyIcon1 className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]" flipped />
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence> */}

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

// const ButterflyIcon1 = ({ className, flipped = false }) => (
//   <img
//     src="/assets/icons/butterflys.svg"
//     alt="Butterfly"
//     className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`}
//   />
// );

// const LogoSVG = ({ className }) => (
//   <img
//     src="/assets/icons/DesktopLogo.svg"
//     alt="Just Tattoos Logo"
//     className={className}
//   />
// );

// Adjusted for smaller card size: tighter explosion radius (~260px on desktop)
// Fan gap (heroX/heroRotate) expanded to match the neat deck spread in Screenshot 2
// const deckConfig = [
//   { id: 1, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 0,   circX: 0,    circY: -260, zIndex: 40 }, 
//   { id: 2, heroRotate: 4,   heroX: 35,  heroY: -10, circRotate: 45,  circX: 184,  circY: -184, zIndex: 30 }, 
//   { id: 3, heroRotate: 10,  heroX: 75,  heroY: -20, circRotate: 90,  circX: 260,  circY: 0,    zIndex: 20 }, 
//   { id: 4, heroRotate: 16,  heroX: 115, heroY: -30, circRotate: 135, circX: 184,  circY: 184,  zIndex: 10 }, 
//   // Cards 5-8 hidden behind card 1 during initial state
//   { id: 5, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 180, circX: 0,    circY: 260,  zIndex: 5 },  
//   { id: 6, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 225, circX: -184, circY: 184,  zIndex: 4 },  
//   { id: 7, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 270, circX: -260, circY: 0,    zIndex: 3 },  
//   { id: 8, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 315, circX: -184, circY: -184, zIndex: 2 },  
// ];

// const deckConfig = [
//   { id: 1, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 0,   circX: 0,    circY: -230, zIndex: 40 }, 
//   { id: 2, heroRotate: 4,   heroX: 35,  heroY: -10, circRotate: 45,  circX: 163,  circY: -163, zIndex: 30 }, 
//   { id: 3, heroRotate: 10,  heroX: 75,  heroY: -20, circRotate: 90,  circX: 230,  circY: 0,    zIndex: 20 }, 
//   { id: 4, heroRotate: 16,  heroX: 115, heroY: -30, circRotate: 135, circX: 163,  circY: 163,  zIndex: 10 }, 
//   { id: 5, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 180, circX: 0,    circY: 230,  zIndex: 5 },  
//   { id: 6, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 225, circX: -163, circY: 163,  zIndex: 4 },  
//   { id: 7, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 270, circX: -230, circY: 0,    zIndex: 3 },  
//   { id: 8, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 315, circX: -163, circY: -163, zIndex: 2 },  
// ];

// const deckConfig = [
//   { id: 1, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 0,   circX: 0,    circY: -180, zIndex: 40 }, 
//   { id: 2, heroRotate: 4,   heroX: 35,  heroY: -10, circRotate: 45,  circX: 127,  circY: -127, zIndex: 30 }, 
//   { id: 3, heroRotate: 10,  heroX: 75,  heroY: -20, circRotate: 90,  circX: 180,  circY: 0,    zIndex: 20 }, 
//   { id: 4, heroRotate: 16,  heroX: 115, heroY: -30, circRotate: 135, circX: 127,  circY: 127,  zIndex: 10 }, 
//   { id: 5, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 180, circX: 0,    circY: 180,  zIndex: 5 },  
//   { id: 6, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 225, circX: -127, circY: 127,  zIndex: 4 },  
//   { id: 7, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 270, circX: -180, circY: 0,    zIndex: 3 },  
//   { id: 8, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 315, circX: -127, circY: -127, zIndex: 2 },  
// ];

const deckConfig = [
  // Cards 1-4: Fanned out in hero state
  { id: 1, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 0,   circX: 0,    circY: -220, zIndex: 40 }, 
  { id: 2, heroRotate: 6,   heroX: 45,  heroY: -5, circRotate: 45,  circX: 156,  circY: -156, zIndex: 30 }, 
  { id: 3, heroRotate: 14,  heroX: 85,  heroY: -10, circRotate: 90,  circX: 220,  circY: 0,    zIndex: 20 }, 
  { id: 4, heroRotate: 22,  heroX: 125, heroY: -10, circRotate: 135, circX: 156,  circY: 156,  zIndex: 10 }, 
  // Cards 5-8: Hidden directly behind Card 1 during initial state
  { id: 5, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 180, circX: 0,    circY: 220,  zIndex: 5 },  
  { id: 6, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 225, circX: -156, circY: 156,  zIndex: 4 },  
  { id: 7, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 270, circX: -220, circY: 0,    zIndex: 3 },  
  { id: 8, heroRotate: -2,  heroX: 0,   heroY: 0,   circRotate: 315, circX: -156, circY: -156, zIndex: 2 },  
];

const FACE_CARD_DROP_MS  = 2500;
const POST_SETTLE_GAP_MS = 500;
const EXPAND_DELAY_MS    = FACE_CARD_DROP_MS + POST_SETTLE_GAP_MS;

export default function Hero() {
  const [showIntro,     setShowIntro]     = useState(true);
  const [topCardReady,  setTopCardReady]  = useState(false);
  const [isExpanded,    setIsExpanded]    = useState(false);
  const [cardIsFalling, setCardIsFalling] = useState(false);
  
  const [isScrolled,    setIsScrolled]    = useState(false);
  const [isDesktop,     setIsDesktop]     = useState(true);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => {
        setTopCardReady(true);
        setCardIsFalling(true);
        setTimeout(() => setCardIsFalling(false), FACE_CARD_DROP_MS);
        setTimeout(() => setIsExpanded(true), EXPAND_DELAY_MS);
      }, 400);
    }, 2800);
    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      if (window.scrollY > 50 && isExpanded) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isExpanded]);

  const getCircPos = (val) => isDesktop ? val : val * 0.6;

  return (
    <div className="relative w-full h-[150vh] bg-white">
      
      {/* Sticky container uses exactly 100vh so the bottom bar isn't forced off-screen */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col">

        {/* PHASE 2 & 3 — HERO AND SCROLL STATE */}
        {true && (
          <motion.div
            className="relative z-10 flex flex-col h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* flex-grow ensures this area takes up available space without pushing the ticker offscreen */}
            {/* <main className="max-w-[1300px] mx-auto px-6 lg:px-12 w-full flex-grow flex flex-col md:flex-row items-center justify-between pb-8 pt-6 md:pt-0"> */}
              {/* Change justify-between to justify-center and reduce padding-top */}
<main className="max-w-[1300px] mx-auto px-6 lg:px-12 w-full flex-grow flex flex-col md:flex-row items-center justify-center pb-8 pt-2 md:pt-0 gap-8">
              {/* Left Column: Text (Properly scaled) */}
              <motion.div 
                className="w-full md:w-[55%] flex flex-col items-center md:items-start justify-center z-20 order-1"
                animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? -40 : 0, filter: isScrolled ? 'blur(10px)' : 'blur(0px)' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
              >
                <motion.div 
                  initial={{ x: -30, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }} 
                  className="w-max flex flex-col text-left relative z-30"
                >
                  <div 
                    className="text-black text-[15vw] md:text-[72px] lg:text-[86px] xl:text-[100px] leading-[0.85] tracking-[-0.03em] uppercase whitespace-nowrap" 
                    style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '800' }}
                  >
                    REAL INK
                  </div>
                  
                  <div 
                    className="text-[#FE8204] text-[15vw] md:text-[72px] lg:text-[86px] xl:text-[100px] leading-[0.85] tracking-[-0.03em] uppercase whitespace-nowrap mt-1 lg:mt-2 ml-[10vw] md:ml-[60px] lg:ml-[70px] xl:ml-[85px]" 
                    style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '800' }}
                  >
                    YOUR WAY
                  </div>
                </motion.div>

                <motion.p 
                  className="mt-6 md:mt-8 text-left hidden md:block text-[#111]" 
                  style={{ maxWidth: '520px', fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} 
                  initial={{ y: 20, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }} 
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                  <span className="text-[14px] lg:text-[16px] leading-[1.6]">
                    Get the authentic tattoo look without the needle or the lifelong commitment. Our clinically tested, permanent ink sinks into the top layer of your skin, fully developing into a bold, 
                  </span>
                  <span className="text-[#FE8204] text-[14px] lg:text-[16px] leading-[1.6] font-semibold">
                    {" "}realistic design within 24 hours.
                  </span>
                </motion.p>

                <motion.button 
                  className="mt-8 bg-black text-white rounded-full px-7 py-3.5 lg:px-8 lg:py-4 hidden md:flex items-center gap-4 font-bold uppercase tracking-widest text-[12px] lg:text-[14px] hover:bg-gray-800 transition-colors group" 
                  initial={{ y: 20, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }} 
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                >
                  SHOP COLLECTIONS
                  <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </motion.button>
              </motion.div>

              {/* Right Column: Scaled-down Card Deck */}
              {/* <motion.div 
                
                className="w-full md:w-[45%] h-[280px] md:h-[380px] lg:h-[420px] relative flex justify-center items-center mt-2 md:-mt-12 order-2"
                animate={{ x: isScrolled && isDesktop ? '-50%' : '0%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              > */}
              <motion.div 
                className="w-full md:w-[45%] h-[280px] md:h-[380px] lg:h-[420px] relative flex justify-center items-center mt-2 md:-mt-12 order-2"
                // Changed from -50% to -61% for mathematically perfect center-screen alignment
                // animate={{ x: isScrolled && isDesktop ? '-61%' : '0%' }} 
                animate={{ x: isScrolled && isDesktop ? '-61%' : '0%', 
                  y: isScrolled ? 80 : 0
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Center "Real Tattoo Look" Logo */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-[60]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.5 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: isScrolled ? 0.15 : 0 }}
                >
                  <span className="text-[24px] md:text-[32px] leading-[1.1] tracking-widest text-black uppercase text-center" style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '800' }}>
                    REAL
                  </span>
                  <svg className="my-1.5" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FE8204" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span className="text-[24px] md:text-[32px] leading-[1.1] tracking-widest text-black uppercase text-center" style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '800' }}>
                    TATTOO<br/>LOOK
                  </span>
                </motion.div>

                {/* Shrunk overall wrapper size to match layout */}
                <div className="relative w-[220px] h-[300px] md:w-[260px] md:h-[360px] lg:w-[320px] lg:h-[440px]">
                  {deckConfig.map((card, index) => {
                    const isTopCard = index === 0;
                    const isVisibleInHero = card.id <= 4;

                    return (
                      <motion.div
                        // key={card.id}
                        // className="absolute inset-0 rounded-2xl md:rounded-[24px] overflow-hidden flex flex-col items-center justify-center"
                        // style={{
                        //   zIndex: isTopCard && cardIsFalling ? 9999 : card.zIndex,
                        //   transformOrigin: 'bottom left',
                        //   border: '2px solid #111',
                        //   boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                        //   backgroundColor: '#fff',
                        // }}
                        key={card.id}
                        className="absolute inset-0 rounded-2xl md:rounded-[24px] overflow-hidden flex flex-col items-center justify-center"
                        style={{
                          zIndex: isTopCard && cardIsFalling ? 9999 : card.zIndex,
                          transformOrigin: 'center', 
                          border: '2px solid #111',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                          backgroundColor: '#fff',
                        }}
                        initial={isTopCard ? { x: -650, y: -650, opacity: 0, rotate: -20 } : { x: 0, y: 0, opacity: 0, rotate: 0 }}
                        animate={
                          isScrolled 
                            ? {
                                x: getCircPos(card.circX),
                                y: getCircPos(card.circY),
                                rotate: card.circRotate,
                                opacity: 1,
                               scale: isDesktop ? 0.5 : 0.4
                              }
                            : isExpanded
                            ? {
                                x: card.heroX,
                                y: card.heroY,
                                rotate: card.heroRotate,
                                opacity: isVisibleInHero ? 1 : 0, 
                                scale: 1
                              }
                            : isTopCard && topCardReady
                            ? {
                                x: [-650, -20, 0],
                                y: [-650, -40, 0],
                                rotate: [-70, 15, 0],
                                opacity: [0, 1, 1],
                                scale: 1
                              }
                            : {
                                x: isTopCard ? -650 : 0,
                                y: isTopCard ? -650 : 0,
                                opacity: 0,
                                rotate: isTopCard ? -20 : 0,
                                scale: 1
                              }
                        }
                        transition={
                          isScrolled
                            ? { type: 'spring', damping: 25, stiffness: 85, mass: 1 }
                            : isExpanded
                            ? { type: 'spring', damping: 18, stiffness: 90, delay: isTopCard ? 0 : index * 0.08 }
                            : isTopCard && topCardReady
                            ? { duration: 2.5, times: [0, 0.99, 1], ease: [0.25, 0.1, 0.25, 1] }
                            : { duration: 0 }
                        }
                      >
                        <img src={`/assets/images/Card${card.id}.png`} alt={`Tattoo Card ${card.id}`} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                        <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
                          <span className="font-bold text-xl text-gray-400">Card {card.id}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Mobile-only Body Copy */}
              <motion.div 
                className="w-full order-3 md:hidden flex flex-col items-center text-center px-4 pb-12 mt-4"
                animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? 40 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
              >
                <motion.p className="text-[#111]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
                  <span className="text-[14px] leading-[1.6]">Get the authentic tattoo look without the needle or the lifelong commitment. Our clinically tested, permanent ink sinks into the top layer of your skin, fully developing into a bold, </span>
                  <span className="text-[#FE8204] text-[14px] leading-[1.6]">realistic design within 24 hours.</span>
                </motion.p>
                <motion.button className="mt-8 bg-black text-white rounded-full px-8 py-4 flex items-center gap-4 font-bold uppercase tracking-widest text-[13px] hover:bg-gray-800 transition-colors group" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
                  SHOP COLLECTIONS
                  <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </span>
                </motion.button>
              </motion.div>
              
            </main>

            <motion.div
              className="absolute bottom-0 z-50 top-160 w-full h-14 md:h-16 bg-black flex-shrink-0 flex items-center overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: isScrolled ? 0 : 1,
                x: isScrolled ? '100%' : '0%' 
              }}
              transition={{ delay: showIntro ? 0.5 : 0, duration: 0.8, ease: 'easeInOut' }}
            >
              <motion.div className="flex whitespace-nowrap" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 18, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}>
                {[0, 1].map((i) => (
                  <span key={i} className="flex items-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', fontSize: 'clamp(13px, 1.1vw, 16px)', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#fff' }}>
                    {Array.from({ length: 10 }).map((_, j) => (
                      <span key={j} className="flex items-center">
                        Just Tattoos <span style={{ color: '#FE8204', margin: '0 18px', fontSize: '10px' }}>◆</span>
                      </span>
                    ))}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Bottom Black Scrolling Strip (Slides out on Scroll) */}
            {/* flex-shrink-0 keeps it visible within 100vh layout */}
          
          </motion.div>
        )}
      </div>
    </div>
  );
}




// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Hero.css';

// const ButterflyIcon1 = ({ className, flipped = false }) => (
//   <img
//     src="/assets/icons/butterflys.svg"
//     alt="Butterfly"
//     className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`}
//   />
// );

// const LogoSVG = ({ className }) => (
//   <img
//     src="/assets/icons/DesktopLogo.svg"
//     alt="Just Tattoos Logo"
//     className={className}
//   />
// );

// const deckConfig = [
//   { id: 1, expandRotate: -4,  expandX: -10, expandY: 5,   zIndex: 40 },
//   { id: 2, expandRotate: 5,   expandX: 10,  expandY: -20, zIndex: 30 },
//   { id: 3, expandRotate: 10,  expandX: 50,  expandY: -35, zIndex: 20 },
//   { id: 4, expandRotate: 20,  expandX: 70,  expandY: -55, zIndex: 10 },
// ];

// const FACE_CARD_DROP_MS  = 2500;
// const POST_SETTLE_GAP_MS = 500;
// const EXPAND_DELAY_MS    = FACE_CARD_DROP_MS + POST_SETTLE_GAP_MS;

// export default function Hero() {
//   const [showIntro,     setShowIntro]     = useState(true);
//   const [topCardReady,  setTopCardReady]  = useState(false);
//   const [isExpanded,    setIsExpanded]    = useState(false);
//   const [cardIsFalling, setCardIsFalling] = useState(false);

//   useEffect(() => {
//     const introTimer = setTimeout(() => {
//       setShowIntro(false);

//       setTimeout(() => {
//         setTopCardReady(true);
//         setCardIsFalling(true);

//         setTimeout(() => {
//           setCardIsFalling(false);
//         }, FACE_CARD_DROP_MS);

//         setTimeout(() => {
//           setIsExpanded(true);
//         }, EXPAND_DELAY_MS);

//       }, 400);
//     }, 2800);

//     return () => clearTimeout(introTimer);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">

//       {/* ════════════════════════════════════
//           PHASE 1 — INTRO SPLASH
//           ════════════════════════════════════ */}
//       <AnimatePresence>
//         {showIntro && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
//             initial={{ opacity: 1 }}
//             exit={{
//               opacity: 0,
//               scale: 1.05,
//               filter: 'blur(15px)',
//               transition: { duration: 0.9, ease: 'circIn' },
//             }}
//           >
//             <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 gap-12 md:gap-20">
//               <motion.div
//                 className="order-1 md:order-none"
//                 initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" />
//               </motion.div>

//               <motion.div
//                 className="z-10 order-2 md:order-none"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
//               >
//                 <LogoSVG className="w-[260px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto" />
//               </motion.div>

//               <motion.div
//                 className="order-3 md:order-none"
//                 initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1
//                   className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80"
//                   flipped
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ════════════════════════════════════
//           PHASE 2 — MAIN HERO
//           ════════════════════════════════════ */}
//       {!showIntro && (
//         <motion.div
//           className="relative z-10 flex flex-col flex-grow"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <main
//             className="
//               max-w-[1400px] mx-auto px-6 md:px-16 w-full flex-grow
//               flex flex-col md:flex-row
//               items-center justify-between
//               pt-12 md:pt-0
//               pb-0
//             "
//           >
//             {/* ── MOBILE: Heading sits at top above cards ── */}
//             {/* ── DESKTOP: Left column with copy ── */}
//             <div className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center z-20 order-1 md:order-1">
//               <motion.div
//                 initial={{ x: -30, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
//                 className="w-full text-center md:text-left"
//               >
//                 {/* Heading */}
//                 <div
//                   className="text-black text-[18vw] sm:text-[14vw] md:text-[7vw] lg:text-[100px] xl:text-[118px] leading-[0.85] tracking-tight uppercase"
//                   style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '700' }}
//                 >
//                   Real ink
//                 </div>
//                 <div
//                   className="text-[#FE8204] text-[18vw] sm:text-[14vw] md:text-[7vw] lg:text-[100px] xl:text-[118px] leading-[0.85] tracking-tight uppercase mt-2 md:mt-0"
//                   style={{ fontFamily: 'Almarena, sans-serif', fontWeight: '700' }}
//                 >
//                   Your Way
//                 </div>
//               </motion.div>

//               {/* Body copy — hidden on mobile, shown on desktop */}
//               <motion.p
//                 className="mt-8 text-left hidden md:block text-[#111]"
//                 style={{ maxWidth: '500px', fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
//               >
//                 <span className="text-[15px] lg:text-[17px] leading-[1.6]">
//                   Get the authentic tattoo look without the needle or the
//                   lifelong commitment. Our clinically tested, permanent ink
//                   sinks into the top layer of your skin, fully developing into
//                   a bold,{' '}
//                 </span>
//                 <span className="text-[#FE8204] text-[15px] lg:text-[17px] leading-[1.6]">
//                   realistic design within 24 hours.
//                 </span>
//               </motion.p>

//               {/* CTA — hidden on mobile, shown on desktop */}
//               <motion.button
//                 className="
//                   mt-10 bg-black text-white rounded-full
//                   px-8 py-4 lg:px-9 lg:py-4.5
//                   hidden md:flex items-center gap-4
//                   font-bold uppercase tracking-widest text-[13px] lg:text-[15px]
//                   hover:bg-gray-800 transition-colors group
//                 "
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
//               >
//                 SHOP COLLECTIONS
//                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                 </span>
//               </motion.button>
//             </div>

//             {/* ── Card Deck ── */}
//             <div
//               className="
//                 w-full md:w-[50%]
//                 h-[320px] sm:h-[400px] md:h-[540px] lg:h-[620px]
//                 relative flex justify-center items-center
//                 mt-8 md:mt-0
//                 order-2 md:order-2
//               "
//             >
//               <div className="relative w-[280px] h-[240px] sm:w-[340px] sm:h-[300px] md:w-[340px] md:h-[460px] lg:w-[390px] lg:h-[535px]">
//                 {deckConfig.map((card, index) => {
//                   const isTopCard = index === 0;

//                   if (isTopCard) {
//                     return (
//                       <motion.div
//                         key={card.id}
//                         className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-center justify-center"
//                         style={{
//                           zIndex: cardIsFalling ? 9999 : card.zIndex,
//                           transformOrigin: 'bottom left',
//                           border: '3px solid #111',
//                           boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
//                           backgroundColor: '#fff',
//                         }}
//                         initial={{ x: -650, y: -650, opacity: 0, rotate: -20 }}
//                         animate={
//                           isExpanded
//                             ? {
//                                 x: card.expandX,
//                                 y: card.expandY,
//                                 opacity: 1,
//                                 rotate: card.expandRotate,
//                               }
//                             : topCardReady
//                             ? {
//                                 x: [-650, -20, 0],
//                                 y: [-650, -40, 0],
//                                 rotate: [-70, 15, 0],
//                                 opacity: [0, 1, 1],
//                               }
//                             : {
//                                 x: -650,
//                                 y: -650,
//                                 opacity: 0,
//                                 rotate: -20,
//                               }
//                         }
//                         transition={
//                           isExpanded
//                             ? {
//                                 type: 'spring',
//                                 damping: 20,
//                                 stiffness: 70,
//                                 delay: 0,
//                               }
//                             : topCardReady
//                             ? {
//                                 duration: 2.5,
//                                 times: [0, 0.99, 1],
//                                 ease: [0.25, 0.1, 0.25, 1],
//                               }
//                             : { duration: 0 }
//                         }
//                       >
//                         <img
//                           src={`/assets/images/Card${card.id}.png`}
//                           alt={`Tattoo Card ${card.id}`}
//                           className="w-full h-full object-cover"
//                           onError={(e) => {
//                             e.target.style.display = 'none';
//                             e.target.nextSibling.style.display = 'flex';
//                           }}
//                         />
//                         <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                           <span className="font-bold text-xl text-gray-400">
//                             Card {card.id}
//                           </span>
//                         </div>
//                       </motion.div>
//                     );
//                   }

//                   return (
//                     <motion.div
//                       key={card.id}
//                       className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-center justify-center"
//                       style={{
//                         zIndex: card.zIndex,
//                         transformOrigin: 'bottom left',
//                         border: '3px solid #111',
//                         boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
//                         backgroundColor: '#fff',
//                       }}
//                       initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
//                       animate={{
//                         x:       isExpanded ? card.expandX      : 0,
//                         y:       isExpanded ? card.expandY      : 0,
//                         opacity: isExpanded ? 1                 : 0,
//                         rotate:  isExpanded ? card.expandRotate : 0,
//                       }}
//                       transition={{
//                         type:      'spring',
//                         damping:   18,
//                         stiffness: 90,
//                         delay: isExpanded ? index * 0.08 : 0,
//                       }}
//                     >
//                       <img
//                         src={`/assets/images/Card${card.id}.png`}
//                         alt={`Tattoo Card ${card.id}`}
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           e.target.style.display = 'none';
//                           e.target.nextSibling.style.display = 'flex';
//                         }}
//                       />
//                       <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                         <span className="font-bold text-xl text-gray-400">
//                           Card {card.id}
//                         </span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* ── Mobile-only: Body copy + CTA below cards ── */}
//             <div className="w-full order-3 md:hidden flex flex-col items-center text-center px-2 pb-12 mt-4">
//               <motion.p
//                 className="text-[#111]"
//                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
//               >
//                 <span className="text-[15px] leading-[1.6]">
//                   Get the authentic tattoo look without the needle or the
//                   lifelong commitment. Our clinically tested, permanent ink
//                   sinks into the top layer of your skin, fully developing into
//                   a bold,{' '}
//                 </span>
//                 <span className="text-[#FE8204] text-[15px] leading-[1.6]">
//                   realistic design within 24 hours.
//                 </span>
//               </motion.p>

//               <motion.button
//                 className="
//                   mt-8 bg-black text-white rounded-full
//                   px-8 py-4
//                   flex items-center gap-4
//                   font-bold uppercase tracking-widest text-[13px]
//                   hover:bg-gray-800 transition-colors group
//                 "
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
//               >
//                 SHOP COLLECTIONS
//                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                 </span>
//               </motion.button>
//             </div>
//           </main>

//           {/* ════════════════════════════════════
//               Bottom Black Scrolling Strip
//               ════════════════════════════════════ */}
//           <motion.div
//             className="w-full h-14 md:h-20 bg-black mt-auto overflow-hidden flex items-center"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             <motion.div
//               className="flex whitespace-nowrap"
//               animate={{ x: ['0%', '-50%'] }}
//               transition={{
//                 duration: 18,
//                 ease: 'linear',
//                 repeat: Infinity,
//                 repeatType: 'loop',
//               }}
//             >
//               {[0, 1].map((i) => (
//                 <span
//                   key={i}
//                   className="flex items-center"
//                   style={{
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '700',
//                     fontSize: 'clamp(13px, 1.1vw, 17px)',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.12em',
//                     color: '#fff',
//                   }}
//                 >
//                   {Array.from({ length: 10 }).map((_, j) => (
//                     <span key={j} className="flex items-center">
//                       Just Tattoos
//                       <span style={{ color: '#FE8204', margin: '0 18px', fontSize: '10px' }}>
//                         ◆
//                       </span>
//                     </span>
//                   ))}
//                 </span>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Hero.css';

// const ButterflyIcon1 = ({ className, flipped = false }) => (
//   <img
//     src="/assets/icons/butterflys.svg"
//     alt="Butterfly"
//     className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`}
//   />
// );

// const LogoSVG = ({ className }) => (
//   <img
//     src="/assets/icons/DesktopLogo.svg"
//     alt="Just Tattoos Logo"
//     className={className}
//   />
// );

// const deckConfig = [
//   { id: 1, expandRotate: -4,  expandX: -10, expandY: 5,   zIndex: 40 },
//   { id: 2, expandRotate: 5,   expandX: 10,  expandY: -20, zIndex: 30 },
//   { id: 3, expandRotate: 10,  expandX: 50,  expandY: -35, zIndex: 20 },
//   { id: 4, expandRotate: 20,  expandX: 70,  expandY: -55, zIndex: 10 },
// ];

// const FACE_CARD_DROP_MS  = 2500;
// const POST_SETTLE_GAP_MS = 500;
// const EXPAND_DELAY_MS    = FACE_CARD_DROP_MS + POST_SETTLE_GAP_MS;

// export default function Hero() {
//   const [showIntro,     setShowIntro]     = useState(true);
//   const [topCardReady,  setTopCardReady]  = useState(false);
//   const [isExpanded,    setIsExpanded]    = useState(false);
//   const [cardIsFalling, setCardIsFalling] = useState(false);

//   useEffect(() => {
//     const introTimer = setTimeout(() => {
//       setShowIntro(false);

//       setTimeout(() => {
//         setTopCardReady(true);
//         setCardIsFalling(true);

//         setTimeout(() => {
//           setCardIsFalling(false);
//         }, FACE_CARD_DROP_MS);

//         setTimeout(() => {
//           setIsExpanded(true);
//         }, EXPAND_DELAY_MS);

//       }, 400);
//     }, 2800);

//     return () => clearTimeout(introTimer);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">

//       {/* ════════════════════════════════════
//           PHASE 1 — INTRO SPLASH
//           ════════════════════════════════════ */}
//       <AnimatePresence>
//         {showIntro && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
//             initial={{ opacity: 1 }}
//             exit={{
//               opacity: 0,
//               scale: 1.05,
//               filter: 'blur(15px)',
//               transition: { duration: 0.9, ease: 'circIn' },
//             }}
//           >
//             <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 gap-12 md:gap-20">
//               <motion.div
//                 className="order-1 md:order-none"
//                 initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" />
//               </motion.div>

//               <motion.div
//                 className="z-10 order-2 md:order-none"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
//               >
//                 <LogoSVG className="w-[260px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto" />
//               </motion.div>

//               <motion.div
//                 className="order-3 md:order-none"
//                 initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1
//                   className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80"
//                   flipped
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ════════════════════════════════════
//           PHASE 2 — MAIN HERO
//           ════════════════════════════════════ */}
//       {!showIntro && (
//         <motion.div
//           className="relative z-10 flex flex-col flex-grow"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <main
//             className="
//               max-w-[1400px] mx-auto px-6 md:px-16 w-full flex-grow
//               flex flex-col md:flex-row
//               items-center justify-between
//               pt-8 md:pt-0
//               pb-0
//             "
//           >
//             {/* ── MOBILE: Heading sits at top above cards ── */}
//             {/* ── DESKTOP: Left column with copy ── */}
//             <div className="w-full md:w-[50%] flex flex-col items-start md:items-start justify-center z-20 order-1 md:order-1">
//               <motion.div
//                 initial={{ x: -30, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
//                 className="w-full"
//               >
//                 {/* Heading */}
//                 <div
//                   style={{
//                     color: 'black',
//                     fontSize: 'clamp(52px, 9vw, 118px)',
//                     fontFamily: 'Almarena, sans-serif',
//                     fontWeight: '700',
//                     textTransform: 'uppercase',
//                     lineHeight: '0.9',
//                     letterSpacing: '-0.01em',
//                     marginLeft: '-3px',
//                     textAlign: 'left',
//                   }}
//                 >
//                   Real ink
//                 </div>
//                 <div
//                   style={{
//                     color: '#FE8204',
//                     fontSize: 'clamp(52px, 9vw, 118px)',
//                     fontFamily: 'Almarena, sans-serif',
//                     fontWeight: '700',
//                     textTransform: 'uppercase',
//                     lineHeight: '0.9',
//                     letterSpacing: '-0.01em',
//                     textAlign: 'left',
//                   }}
//                 >
//                   Your Way
//                 </div>
//               </motion.div>

//               {/* Body copy — hidden on mobile, shown on desktop */}
//               <motion.p
//                 className="mt-6 md:mt-8 text-left hidden md:block"
//                 style={{ maxWidth: '480px' }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
//               >
//                 <span
//                   style={{
//                     color: 'black',
//                     fontSize: 'clamp(14px, 1.1vw, 17px)',
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '500',
//                     lineHeight: '1.6',
//                   }}
//                 >
//                   Get the authentic tattoo look without the needle or the
//                   lifelong commitment. Our clinically tested, permanent ink
//                   sinks into the top layer of your skin, fully developing into
//                   a bold,{' '}
//                 </span>
//                 <span
//                   style={{
//                     color: '#FE8204',
//                     fontSize: 'clamp(14px, 1.1vw, 17px)',
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '500',
//                     lineHeight: '1.6',
//                   }}
//                 >
//                   realistic design within 24 hours.
//                 </span>
//               </motion.p>

//               {/* CTA — hidden on mobile, shown on desktop */}
//               <motion.button
//                 className="
//                   mt-8 md:mt-10 bg-black text-white rounded-full
//                   px-7 py-3.5 md:px-8 md:py-4
//                   hidden md:flex items-center gap-4
//                   font-bold uppercase tracking-widest text-sm md:text-base
//                   hover:bg-gray-800 transition-colors group
//                 "
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
//               >
//                 SHOP COLLECTIONS
//                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                   &rarr;
//                 </span>
//               </motion.button>
//             </div>

//             {/* ── Card Deck ── */}
//             <div
//               className="
//                 w-full md:w-[50%]
//                 h-[360px] sm:h-[400px] md:h-[540px] lg:h-[620px]
//                 relative flex justify-center items-center
//                 mt-6 md:mt-0
//                 order-2 md:order-2
//               "
//             >
//               <div className="relative w-[300px] h-[260px] sm:w-[340px] sm:h-[300px] md:w-[340px] md:h-[460px] lg:w-[390px] lg:h-[535px]">
//                 {deckConfig.map((card, index) => {
//                   const isTopCard = index === 0;

//                   if (isTopCard) {
//                     return (
//                       <motion.div
//                         key={card.id}
//                         className="absolute inset-0 rounded-3xl overflow-hidden flex flex-col items-center justify-center"
//                         style={{
//                           zIndex: cardIsFalling ? 9999 : card.zIndex,
//                           transformOrigin: 'bottom left',
//                           border: '3px solid #111',
//                           boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
//                           backgroundColor: '#fff',
//                         }}
//                         initial={{ x: -650, y: -650, opacity: 0, rotate: -20 }}
//                         animate={
//                           isExpanded
//                             ? {
//                                 x: card.expandX,
//                                 y: card.expandY,
//                                 opacity: 1,
//                                 rotate: card.expandRotate,
//                               }
//                             : topCardReady
//                             ? {
//                                 x: [-650, -20, 0],
//                                 y: [-650, -40, 0],
//                                 rotate: [-70, 15, 0],
//                                 opacity: [0, 1, 1],
//                               }
//                             : {
//                                 x: -650,
//                                 y: -650,
//                                 opacity: 0,
//                                 rotate: -20,
//                               }
//                         }
//                         transition={
//                           isExpanded
//                             ? {
//                                 type: 'spring',
//                                 damping: 20,
//                                 stiffness: 70,
//                                 delay: 0,
//                               }
//                             : topCardReady
//                             ? {
//                                 duration: 2.5,
//                                 times: [0, 0.99, 1],
//                                 ease: [0.25, 0.1, 0.25, 1],
//                               }
//                             : { duration: 0 }
//                         }
//                       >
//                         <img
//                           src={`/assets/images/Card${card.id}.png`}
//                           alt={`Tattoo Card ${card.id}`}
//                           className="w-full h-full object-cover"
//                           onError={(e) => {
//                             e.target.style.display = 'none';
//                             e.target.nextSibling.style.display = 'flex';
//                           }}
//                         />
//                         <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                           <span className="font-bold text-xl text-gray-400">
//                             Card {card.id}
//                           </span>
//                         </div>
//                       </motion.div>
//                     );
//                   }

//                   return (
//                     <motion.div
//                       key={card.id}
//                       className="absolute inset-0 rounded-3xl overflow-hidden flex flex-col items-center justify-center"
//                       style={{
//                         zIndex: card.zIndex,
//                         transformOrigin: 'bottom left',
//                         border: '3px solid #111',
//                         boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
//                         backgroundColor: '#fff',
//                       }}
//                       initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
//                       animate={{
//                         x:       isExpanded ? card.expandX      : 0,
//                         y:       isExpanded ? card.expandY      : 0,
//                         opacity: isExpanded ? 1                 : 0,
//                         rotate:  isExpanded ? card.expandRotate : 0,
//                       }}
//                       transition={{
//                         type:      'spring',
//                         damping:   18,
//                         stiffness: 90,
//                         delay: isExpanded ? index * 0.08 : 0,
//                       }}
//                     >
//                       <img
//                         src={`/assets/images/Card${card.id}.png`}
//                         alt={`Tattoo Card ${card.id}`}
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           e.target.style.display = 'none';
//                           e.target.nextSibling.style.display = 'flex';
//                         }}
//                       />
//                       <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                         <span className="font-bold text-xl text-gray-400">
//                           Card {card.id}
//                         </span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* ── Mobile-only: Body copy + CTA below cards ── */}
//             <div className="w-full order-3 md:hidden flex flex-col items-center text-center px-2 pb-8">
//               <motion.p
//                 className="mt-4"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
//               >
//                 <span
//                   style={{
//                     color: 'black',
//                     fontSize: 'clamp(14px, 3.8vw, 17px)',
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '500',
//                     lineHeight: '1.6',
//                   }}
//                 >
//                   Get the authentic tattoo look without the needle or the
//                   lifelong commitment. Our clinically tested, permanent ink
//                   sinks into the top layer of your skin, fully developing into
//                   a bold,{' '}
//                 </span>
//                 <span
//                   style={{
//                     color: '#FE8204',
//                     fontSize: 'clamp(14px, 3.8vw, 17px)',
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '500',
//                     lineHeight: '1.6',
//                   }}
//                 >
//                   realistic design within 24 hours.
//                 </span>
//               </motion.p>

//               <motion.button
//                 className="
//                   mt-7 bg-black text-white rounded-full
//                   px-8 py-4
//                   flex items-center gap-4
//                   font-bold uppercase tracking-widest text-sm
//                   hover:bg-gray-800 transition-colors group
//                 "
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
//               >
//                 SHOP COLLECTIONS
//                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                   &rarr;
//                 </span>
//               </motion.button>
//             </div>
//           </main>

//           {/* ════════════════════════════════════
//               Bottom Black Scrolling Strip
//               ════════════════════════════════════ */}
//           <motion.div
//             className="w-full h-14 md:h-20 bg-black mt-auto overflow-hidden flex items-center"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             <motion.div
//               className="flex whitespace-nowrap"
//               animate={{ x: ['0%', '-50%'] }}
//               transition={{
//                 duration: 18,
//                 ease: 'linear',
//                 repeat: Infinity,
//                 repeatType: 'loop',
//               }}
//             >
//               {[0, 1].map((i) => (
//                 <span
//                   key={i}
//                   className="flex items-center"
//                   style={{
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '700',
//                     fontSize: 'clamp(13px, 1.1vw, 17px)',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.12em',
//                     color: '#fff',
//                   }}
//                 >
//                   {Array.from({ length: 10 }).map((_, j) => (
//                     <span key={j} className="flex items-center">
//                       Just Tattoos
//                       <span style={{ color: '#FE8204', margin: '0 18px', fontSize: '10px' }}>
//                         ◆
//                       </span>
//                     </span>
//                   ))}
//                 </span>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }


// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Hero.css';

// const ButterflyIcon1 = ({ className, flipped = false }) => (
//   <img
//     src="/assets/icons/butterflys.svg"
//     alt="Butterfly"
//     className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`}
//   />
// );

// const LogoSVG = ({ className }) => (
//   <img
//     src="/assets/icons/DesktopLogo.svg"
//     alt="Just Tattoos Logo"
//     className={className}
//   />
// );

// const deckConfig = [
//   { id: 1, expandRotate: -4,  expandX: -10, expandY: 5,   zIndex: 40 }, // Top / face card
//   { id: 2, expandRotate: 5,   expandX: 10,  expandY: -20, zIndex: 30 },
//   { id: 3, expandRotate: 10,  expandX: 50,  expandY: -35, zIndex: 20 },
//   { id: 4, expandRotate: 20,  expandX: 70,  expandY: -55, zIndex: 10 },
// ];

// // How long (ms) the face-card spring takes to fully settle before fan begins
// const FACE_CARD_SETTLE_MS = 1200;

// export default function Hero() {
//   const [showIntro,    setShowIntro]    = useState(true);
//   const [topCardReady, setTopCardReady] = useState(false); // face card starts falling
//   const [isExpanded,   setIsExpanded]   = useState(false); // fan deck opens

//   useEffect(() => {
//     // 1. Kill intro after 2.8 s
//     const introTimer = setTimeout(() => {
//       setShowIntro(false);

//       // 2. Short pause so the hero layout renders, then drop the face card
//       setTimeout(() => {
//         setTopCardReady(true);

//         // 3. Wait for the face card to fully settle, THEN fan the deck
//         setTimeout(() => {
//           setIsExpanded(true);
//         }, FACE_CARD_SETTLE_MS);

//       }, 400);
//     }, 2800);

//     return () => clearTimeout(introTimer);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">

//       {/* ════════════════════════════════════
//           PHASE 1 — INTRO SPLASH
//           ════════════════════════════════════ */}
//       <AnimatePresence>
//         {showIntro && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
//             initial={{ opacity: 1 }}
//             exit={{
//               opacity: 0,
//               scale: 1.05,
//               filter: 'blur(15px)',
//               transition: { duration: 0.9, ease: 'circIn' },
//             }}
//           >
//             <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 gap-12 md:gap-20">
//               <motion.div
//                 className="order-1 md:order-none"
//                 initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" />
//               </motion.div>

//               <motion.div
//                 className="z-10 order-2 md:order-none"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
//               >
//                 <LogoSVG className="w-[260px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto" />
//               </motion.div>

//               <motion.div
//                 className="order-3 md:order-none"
//                 initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1
//                   className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80"
//                   flipped
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ════════════════════════════════════
//           PHASE 2 — MAIN HERO
//           ════════════════════════════════════ */}
//       {!showIntro && (
//         <motion.div
//           className="relative z-10 flex flex-col flex-grow"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//         >
//           <main
//             className="
//               max-w-[1400px] mx-auto px-6 md:px-16 w-full flex-grow
//               flex flex-col md:flex-row
//               items-center justify-between
//               pt-6 md:pt-10 pb-0
//             "
//           >
//             {/* ── LEFT: Copy ── */}
//             <div className="w-full md:w-[55%] flex flex-col items-start justify-center z-20">

//               <motion.div
//                 initial={{ x: -30, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
//               >
//                 {/*
//                   Observation 2 fix:
//                   "REAL INK" is slightly indented left compared to "YOUR WAY".
//                   We add a small negative margin-left on the first line to mimic
//                   the optical offset visible in the wireframe.
//                 */}
//                 <div
//                   style={{
//                     color: 'black',
//                     fontSize: 'clamp(56px, 10.5vw, 132px)',
//                     fontFamily: 'Almarena, sans-serif',
//                     fontWeight: '700',
//                     textTransform: 'uppercase',
//                     lineHeight: '0.88',
//                     letterSpacing: '-0.01em',
//                     marginLeft: '-14px', // "Real Ink" sits slightly left
//                   }}
//                 >
//                   Real ink
//                 </div>
//                 <div
//                   style={{
//                     color: '#FE8204',
//                     fontSize: 'clamp(56px, 10.5vw, 132px)',
//                     fontFamily: 'Almarena, sans-serif',
//                     fontWeight: '700',
//                     textTransform: 'uppercase',
//                     lineHeight: '0.88',
//                     letterSpacing: '-0.01em',
//                   }}
//                 >
//                   Your Way
//                 </div>
//               </motion.div>

//               {/* Body copy */}
//               <motion.p
//                 className="mt-6 md:mt-8 text-left"
//                 style={{ maxWidth: '520px' }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
//               >
//                 <span
//                   style={{
//                     color: 'black',
//                     fontSize: 'clamp(15px, 1.25vw, 19px)',
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '500',
//                     lineHeight: '1.55',
//                   }}
//                 >
//                   Get the authentic tattoo look without the needle or the
//                   lifelong commitment. Our clinically tested, permanent ink
//                   sinks into the top layer of your skin, fully developing into
//                   a bold,{' '}
//                 </span>
//                 <span
//                   style={{
//                     color: '#FE8204',
//                     fontSize: 'clamp(15px, 1.25vw, 19px)',
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '500',
//                     lineHeight: '1.55',
//                   }}
//                 >
//                   realistic design within 24 hours.
//                 </span>
//               </motion.p>

//               {/* CTA */}
//               <motion.button
//                 className="
//                   mt-8 md:mt-10 bg-black text-white rounded-full
//                   px-7 py-3.5 md:px-8 md:py-4
//                   flex items-center gap-4
//                   font-bold uppercase tracking-widest text-sm md:text-base
//                   hover:bg-gray-800 transition-colors group
//                 "
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
//               >
//                 SHOP COLLECTIONS
//                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                   &rarr;
//                 </span>
//               </motion.button>
//             </div>

//             {/* ── RIGHT: Card Deck ── */}
//             <div
//               className="
//                 w-full md:w-[45%]
//                 h-[420px] md:h-[560px] lg:h-[640px]
//                 relative flex justify-center md:justify-center items-center
//                 mt-14 md:mt-0
//               "
//             >
//               <div className="relative w-[280px] h-[300px] md:w-[340px] md:h-[470px] lg:w-[320px] lg:h-[470px]">
//                 {deckConfig.map((card, index) => {
//                   const isTopCard = index === 0;

//                   /*
//                     ── Animation logic ──────────────────────────────────────
//                     FACE CARD (index 0)
//                       Phase A – falling  : topCardReady=true  → y: 0 (slow drop)
//                       Phase B – expanded : isExpanded=true    → fan position

//                     OTHER CARDS (index 1-3)
//                       They are invisible until isExpanded fires.
//                       They start stacked at 0,0 (opacity 0) then fan out.
//                     ─────────────────────────────────────────────────────── */
//                   const animateState = isTopCard
//                     ? {
//                         // face card
//                         y:       isExpanded ? card.expandY      : topCardReady ? 0    : -800,
//                         x:       isExpanded ? card.expandX      : 0,
//                         opacity: topCardReady ? 1               : 0,
//                         rotate:  isExpanded ? card.expandRotate : 0,
//                       }
//                     : {
//                         // back cards — hidden until fan opens
//                         y:       isExpanded ? card.expandY      : 0,
//                         x:       isExpanded ? card.expandX      : 0,
//                         opacity: isExpanded ? 1                 : 0,
//                         rotate:  isExpanded ? card.expandRotate : 0,
//                       };

//                   const transitionConfig = isTopCard
//                     ? {
//                         /*
//                           Slow, deliberate drop — low stiffness + higher damping
//                           so it glides down and gently settles (no bounce).
//                           Duration hint via stiffness/damping combo ≈ 0.9 s settle.
//                         */
//                         type:     'spring',
//                         damping:  28,   // no bounce
//                         stiffness: 55,  // slow, weighty fall
//                         delay:    isExpanded ? 0 : 0,
//                       }
//                     : {
//                         /*
//                           Back cards fan out with a quick stagger AFTER face settles.
//                           No entrance transition needed (they pop in already stacked).
//                         */
//                         type:     'spring',
//                         damping:  18,
//                         stiffness: 90,
//                         delay:    isExpanded ? index * 0.08 : 0,
//                       };

//                   return (
//                     <motion.div
//                       key={card.id}
//                       className="absolute inset-0 rounded-3xl overflow-hidden flex flex-col items-center justify-center"
//                       style={{
//                         zIndex: card.zIndex,
//                         transformOrigin: 'bottom left',
//                         /*
//                           Observation 2 fix: cards have a visible black border
//                           matching the wireframe. Use box-shadow + border.
//                         */
//                         border: '3px solid #111',
//                         boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
//                         backgroundColor: '#fff',
//                       }}
//                       initial={
//                         isTopCard
//                           ? { y: -800, x: 0, opacity: 0, rotate: 0 }
//                           : { y: 0,    x: 0, opacity: 0, rotate: 0 }
//                       }
//                       animate={animateState}
//                       transition={transitionConfig}
//                     >
//                       <img
//                         src={`/assets/images/Card${card.id}.png`}
//                         alt={`Tattoo Card ${card.id}`}
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           e.target.style.display = 'none';
//                           e.target.nextSibling.style.display = 'flex';
//                         }}
//                       />
//                       <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                         <span className="font-bold text-xl text-gray-400">
//                           Card {card.id}
//                         </span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </main>

//           {/* ════════════════════════════════════
//               Observation 1 — Bottom Black Scroller Strip
//               Contains marquee text "Just Tattoos • Just Tattoos • …"
//               ════════════════════════════════════ */}
//           <motion.div
//             className="w-full h-14 md:h-20 bg-black mt-auto overflow-hidden flex items-center"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           >
//             {/*
//               Two identical spans side-by-side.
//               The CSS animation slides the wrapper left by exactly 50%,
//               then loops — creating a seamless infinite marquee.
//             */}
//             <motion.div
//               className="flex whitespace-nowrap"
//               animate={{ x: ['0%', '-50%'] }}
//               transition={{
//                 duration: 18,
//                 ease: 'linear',
//                 repeat: Infinity,
//                 repeatType: 'loop',
//               }}
//             >
//               {/* Duplicate the text so the loop is seamless */}
//               {[0, 1].map((i) => (
//                 <span
//                   key={i}
//                   className="flex items-center"
//                   style={{
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '700',
//                     fontSize: 'clamp(13px, 1.1vw, 17px)',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.12em',
//                     color: '#fff',
//                   }}
//                 >
//                   {/* Repeat the phrase enough times to fill the viewport width */}
//                   {Array.from({ length: 10 }).map((_, j) => (
//                     <span key={j} className="flex items-center">
//                       Just Tattoos
//                       {/* Decorative separator — small orange diamond */}
//                       <span
//                         style={{ color: '#FE8204', margin: '0 18px', fontSize: '10px' }}
//                       >
//                         ◆
//                       </span>
//                     </span>
//                   ))}
//                 </span>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }


// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Hero.css';

// const ButterflyIcon1 = ({ className, flipped = false }) => (
//   <img 
//     src="/assets/icons/butterflys.svg" 
//     alt="Butterfly" 
//     className={`${className} ${flipped ? 'scale-x-[-1]' : ''}`} 
//   />
// );

// const LogoSVG = ({ className }) => (
//   <img 
//     src="/assets/icons/DesktopLogo.svg" 
//     alt="Just Tattoos Logo" 
//     className={className} 
//   />
// );

// const deckConfig = [
//   { id: 1, expandRotate: -4,  expandX: -10, expandY: 5,   zIndex: 40 },
//   { id: 2, expandRotate: 5,   expandX: 10,  expandY: -20, zIndex: 30 },
//   { id: 3, expandRotate: 10,  expandX: 50,  expandY: -35, zIndex: 20 },
//   { id: 4, expandRotate: 20,  expandX: 70,  expandY: -55, zIndex: 10 },
// ];

// export default function Hero() {
//   const [showIntro, setShowIntro] = useState(true);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [topCardReady, setTopCardReady] = useState(false);

//   useEffect(() => {
//     const introTimer = setTimeout(() => {
//       setShowIntro(false);

//       // After hero mounts, trigger the top card drop
//       setTimeout(() => {
//         setTopCardReady(true); // top card starts falling
//       }, 400);

//       // Then fan out after the top card has settled
//       setTimeout(() => {
//         setIsExpanded(true);
//       }, 1400);

//     }, 2800);

//     return () => clearTimeout(introTimer);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">

//       {/* ── INTRO SPLASH ── */}
//       <AnimatePresence>
//         {showIntro && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
//             initial={{ opacity: 1 }}
//             exit={{
//               opacity: 0,
//               scale: 1.05,
//               filter: 'blur(15px)',
//               transition: { duration: 0.9, ease: 'circIn' },
//             }}
//           >
//             <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 gap-12 md:gap-20">
//               <motion.div
//                 className="order-1 md:order-none"
//                 initial={{ x: -100, y: -50, opacity: 0, rotate: -15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1 className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80" />
//               </motion.div>

//               <motion.div
//                 className="z-10 order-2 md:order-none"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
//               >
//                 <LogoSVG className="w-[260px] sm:w-[320px] md:w-[450px] lg:w-[550px] h-auto" />
//               </motion.div>

//               <motion.div
//                 className="order-3 md:order-none"
//                 initial={{ x: 100, y: 50, opacity: 0, rotate: 15 }}
//                 animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <ButterflyIcon1
//                   className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80"
//                   flipped
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ── MAIN HERO ── */}
//       {!showIntro && (
//         <motion.div
//           className="relative z-10 flex flex-col flex-grow"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//         >
//           {/*
//             LAYOUT: mirrors the wireframe
//             Left  ~55%  — headline + body + CTA
//             Right ~45%  — card deck
//             Vertical padding kept tight so the text fills the viewport height like the PNG
//           */}
//           <main
//             className="
//               max-w-[1400px] mx-auto px-6 md:px-16 w-full flex-grow
//               flex flex-col md:flex-row
//               items-center justify-between
//               pt-6 md:pt-10 pb-0
//             "
//           >
//             {/* ── LEFT: Copy ── */}
//             <div className="w-full md:w-[55%] flex flex-col items-start justify-center z-20">

//               {/* Headline — matches the large bold treatment in the PNG */}
//               <motion.div
//                 initial={{ x: -30, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
//               >
//                 <div
//                   style={{
//                     color: 'black',
//                     /*
//                       PNG headline is very large — roughly 12–13 vw on a 1440 wide screen.
//                       clamp: min 56px mobile → fluid → 148px at wide desktop
//                     */
//                     fontSize: 'clamp(56px, 10.5vw, 152px)',
//                     fontFamily: 'Almarena, sans-serif',
//                     fontWeight: '700',
//                     textTransform: 'uppercase',
//                     lineHeight: '0.88',
//                     letterSpacing: '-0.01em',
//                   }}
//                 >
//                   Real ink
//                 </div>
//                 <div
//                   style={{
//                     color: '#FE8204',
//                     fontSize: 'clamp(56px, 10.5vw, 152px)',
//                     fontFamily: 'Almarena, sans-serif',
//                     fontWeight: '700',
//                     textTransform: 'uppercase',
//                     lineHeight: '0.88',
//                     letterSpacing: '-0.01em',
//                   }}
//                 >
//                   Your Way
//                 </div>
//               </motion.div>

//               {/* Body copy — matches the compact paragraph width in the PNG */}
//               <motion.p
//                 className="mt-6 md:mt-8 text-left"
//                 style={{ maxWidth: '520px' }}
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
//               >
//                 <span
//                   style={{
//                     color: 'black',
//                     fontSize: 'clamp(15px, 1.25vw, 19px)',
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '500',
//                     lineHeight: '1.55',
//                   }}
//                 >
//                   Get the authentic tattoo look without the needle or the
//                   lifelong commitment. Our clinically tested, permanent ink
//                   sinks into the top layer of your skin, fully developing into
//                   a bold,{' '}
//                 </span>
//                 <span
//                   style={{
//                     color: '#FE8204',
//                     fontSize: 'clamp(15px, 1.25vw, 19px)',
//                     fontFamily: 'Montserrat, sans-serif',
//                     fontWeight: '500',
//                     lineHeight: '1.55',
//                   }}
//                 >
//                   realistic design within 24 hours.
//                 </span>
//               </motion.p>

//               {/* CTA Button */}
//               <motion.button
//                 className="
//                   mt-8 md:mt-10 bg-black text-white rounded-full
//                   px-7 py-3.5 md:px-8 md:py-4
//                   flex items-center gap-4
//                   font-bold uppercase tracking-widest
//                   text-sm md:text-base
//                   hover:bg-gray-800 transition-colors group
//                 "
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
//               >
//                 SHOP COLLECTIONS
//                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                   &rarr;
//                 </span>
//               </motion.button>
//             </div>

//             {/* ── RIGHT: Card Deck ── */}
//             {/*
//               The deck in the PNG is large, vertically centered, and bleeds slightly
//               into the black strip at the bottom. We size the container generously.
//             */}
//             <div
//               className="
//                 w-full md:w-[45%]
//                 h-[420px] md:h-[560px] lg:h-[640px]
//                 relative flex justify-center md:justify-center items-center
//                 mt-14 md:mt-0
//               "
//             >
//               {/* Inner anchor — cards are positioned relative to this */}
//               <div className="relative w-[280px] h-[380px] md:w-[340px] md:h-[470px] lg:w-[390px] lg:h-[540px]">
//                 {deckConfig.map((card, index) => {
//                   const isTopCard = index === 0;

//                   /*
//                     TOP CARD animation:
//                     - Before topCardReady  → starts way off-screen top (y: -700), transparent
//                     - After topCardReady   → drops into stack (y: 0, x: 0, rotate: 0)
//                     - After isExpanded     → fans to its config position

//                     Other cards:
//                     - Simple fade-in entrance from slightly below, then fan out
//                   */
//                   const animateState = isTopCard
//                     ? {
//                         y: isExpanded
//                           ? card.expandY
//                           : topCardReady
//                           ? 0
//                           : -700,
//                         x: isExpanded ? card.expandX : 0,
//                         opacity: topCardReady ? 1 : 0,
//                         rotate: isExpanded ? card.expandRotate : 0,
//                       }
//                     : {
//                         y: isExpanded ? card.expandY : 0,
//                         x: isExpanded ? card.expandX : 0,
//                         opacity: 1,
//                         rotate: isExpanded ? card.expandRotate : 0,
//                       };

//                   const transitionConfig = isTopCard
//                     ? {
//                         // Drop feels physical — bouncy spring
//                         type: 'spring',
//                         damping: 18,
//                         stiffness: 120,
//                         delay: isExpanded ? 0 : 0, // top card drops immediately on ready
//                       }
//                     : {
//                         type: 'spring',
//                         damping: 15,
//                         stiffness: 85,
//                         delay: isExpanded ? index * 0.1 : 0.3,
//                       };

//                   return (
//                     <motion.div
//                       key={card.id}
//                       className="
//                         absolute inset-0 bg-white rounded-3xl
//                         shadow-[0_20px_60px_rgba(0,0,0,0.18)]
//                         border-4 border-white overflow-hidden
//                         flex flex-col items-center justify-center
//                       "
//                       style={{
//                         zIndex: card.zIndex,
//                         transformOrigin: 'bottom left',
//                       }}
//                       initial={
//                         isTopCard
//                           ? { y: -700, x: 0, opacity: 0, rotate: 0 }
//                           : { y: 40, x: 0, opacity: 0, rotate: 0 }
//                       }
//                       animate={animateState}
//                       transition={transitionConfig}
//                     >
//                       <img
//                         src={`/assets/images/Card${card.id}.png`}
//                         alt={`Tattoo Card ${card.id}`}
//                         className="w-full h-full object-cover bg-gray-100"
//                         onError={(e) => {
//                           e.target.style.display = 'none';
//                           e.target.nextSibling.style.display = 'flex';
//                         }}
//                       />
//                       <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                         <span className="font-bold text-xl text-gray-400">
//                           Card {card.id} Image Placeholder
//                         </span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </main>

//           {/* ── Bottom Black Strip ── */}
//           <motion.div
//             className="w-full h-16 md:h-24 bg-black mt-auto"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           />
//         </motion.div>
//       )}
//     </div>
//   );
// }


// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Hero.css';

// // --- PLACEHOLDER COMPONENTS ---
// const ButterflyLeft = () => (
//   <div className="w-[100px] md:w-[300px] h-[300px] bg-gray-200/50 rounded-full flex items-center justify-center text-gray-400 border border-dashed border-gray-400">
//     Left Butterflies SVG
//   </div>
// );

// const ButterflyRight = () => (
//   <div className="w-[100px] md:w-[300px] h-[300px] bg-gray-200/50 rounded-full flex items-center justify-center text-gray-400 border border-dashed border-gray-400">
//     Right Butterflies SVG
//   </div>
// );

// const LogoTextSVG = () => (
//   <div className="text-center">
//     <h1 className="font-heading text-brand-orange text-5xl md:text-[100px] leading-none">
//       Just <br />
//       <span className="flex items-center justify-center gap-2">
//         <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-20 md:h-20">
//           <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//         </svg>
//         Tattoos
//       </span>
//     </h1>
//   </div>
// );

// // --- CARD FAN CONFIGURATION ---
// const deckConfig = [
//   { id: 1, expandRotate: -4, expandX: -10, expandY: 5, zIndex: 40 },   
//   { id: 2, expandRotate: 5, expandX: 10, expandY: -20, zIndex: 30 },    
//   { id: 3, expandRotate: 10, expandX: 50, expandY: -35, zIndex: 20 },    
//   { id: 4, expandRotate: 20, expandX: 70, expandY: -55, zIndex: 10 },  
// ];

// export default function Hero() {
//   const [showIntro, setShowIntro] = useState(true);
//   const [isExpanded, setIsExpanded] = useState(false);

//   useEffect(() => {
//     const introTimer = setTimeout(() => {
//       setShowIntro(false);
      
//       setTimeout(() => {
//         setIsExpanded(true);
//       }, 1200);

//     }, 2800); 
    
//     return () => clearTimeout(introTimer);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
      
//       {/* =========================================
//           PHASE 1: INTRO ANIMATION
//           ========================================= */}
//       <AnimatePresence>
//         {showIntro && (
//           <motion.div 
//             className="absolute inset-0 z-50 flex items-center justify-between px-4 md:px-20 bg-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//           >
//             <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}>
//               <ButterflyLeft />
//             </motion.div>
//             <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}>
//               <LogoTextSVG />
//             </motion.div>
//             <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}>
//               <ButterflyRight />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* =========================================
//           PHASE 2: MAIN HERO SECTION
//           ========================================= */}
//       {!showIntro && (
//         <motion.div 
//           className="relative z-10 flex flex-col flex-grow w-full"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           {/* Expanded max-width and adjusted padding to push content to the edges like the wireframe */}
//           <main className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-20 w-full flex-grow flex flex-col md:flex-row items-center justify-between ">
            
//             {/* Left Column: Typography (Adjusted to 60% width) */}
//             <div className="w-full md:w-[60%] flex flex-col items-start justify-center z-20">
              
//               <motion.div 
//                 className="flex flex-col text-left w-full"
//                 initial={{ x: -30, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//               >
//                 {/* Fixed line height and scaling fonts to prevent overlap */}
//                 <div style={{ color: 'black', fontSize: 'clamp(64px, 8vw, 140px)', fontFamily: 'Almarena, sans-serif', fontWeight: '700', textTransform: 'uppercase', lineHeight: '0.85' }}>
//                   Real ink
//                 </div>
//                 <div style={{ color: '#FE8204', fontSize: 'clamp(64px, 8vw, 140px)', fontFamily: 'Almarena, sans-serif', fontWeight: '700', textTransform: 'uppercase', lineHeight: '0.85' }}>
//                   Your Way
//                 </div>
//               </motion.div>
              
//               <motion.p 
//                 // Constrained paragraph width so it wraps neatly like the design
//                 className="mt-8 text-left w-full max-w-[650px]"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
//               >
//                {/* Corrected JSX inline style syntax */}
//                <span style={{ color: 'black', fontSize: 'clamp(16px, 2vw, 24px)', fontFamily: 'Montserrat, sans-serif', fontWeight: '500', lineHeight: '1.4' }}>
//                  Get the authentic tattoo look without the needle or the lifelong commitment. Our clinically tested, permanent ink sinks into the top layer of your skin, fully developing into a bold,{' '}
//                </span>
//                <span style={{ color: '#FE8204', fontSize: 'clamp(16px, 2vw, 24px)', fontFamily: 'Montserrat, sans-serif', fontWeight: '500', lineHeight: '1.4' }}>
//                  realistic design within 24 hours.
//                </span>
//               </motion.p>
              
//               <motion.button 
//                 className="mt-10 bg-black text-white rounded-full px-8 py-4 flex items-center gap-4 font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors group"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
//               >
//                 SHOP COLLECTIONS 
//                 <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//                   &rarr;
//                 </span>
//               </motion.button>
//             </div>

//             {/* Right Column: Dynamic Horizontal Card Deck (Adjusted to 40% width) */}
//             <div className="w-full md:w-[40%] h-[400px] md:h-[600px] relative flex justify-center md:justify-end items-center mt-16 md:mt-0">
//               {/* Card Container */}
//               <div className="relative w-[260px] h-[360px] md:w-[320px] md:h-[460px]">
//                 {deckConfig.map((card, index) => (
//                   <motion.div
//                     key={card.id}
//                     className="absolute inset-0 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white overflow-hidden flex flex-col items-center justify-center"
//                     style={{ zIndex: card.zIndex, transformOrigin: 'bottom left' }}
//                     initial={{ y: 40, x: 0, opacity: 0, rotate: 0 }}
//                     animate={{ 
//                       y: isExpanded ? card.expandY : 0, 
//                       x: isExpanded ? card.expandX : 0,
//                       opacity: 1, 
//                       rotate: isExpanded ? card.expandRotate : 0
//                     }}
//                     transition={{ 
//                       type: 'spring', 
//                       damping: 15, 
//                       stiffness: 85, 
//                       delay: isExpanded ? (index * 0.1) : 0.3
//                     }}
//                   >
//                     <img 
//                       src={`/assets/images/Card${card.id}.png`} 
//                       alt={`Tattoo Card ${card.id}`} 
//                       className="w-full h-full object-cover bg-gray-100" 
//                       onError={(e) => {
//                         e.target.style.display = 'none';
//                         e.target.nextSibling.style.display = 'flex';
//                       }}
//                     />
//                     <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-center px-4">
//                       <span className="font-bold text-xl text-gray-400">Card {card.id} Placeholder</span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//           </main>

//           {/* Bottom Black Strip */}
//           <motion.div 
//             className="w-full h-16 md:h-24 bg-black mt-auto"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           ></motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }