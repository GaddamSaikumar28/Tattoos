// // src/pages/Home/index.jsx
// export default function Home() {
//   return (
//     <div className="min-h-[50vh] flex flex-col items-center justify-center">
//       <h1 className="text-hero text-black">Welcome to <span className="text-brand-orange">Just Tattoos</span></h1>
//       <p className="text-lead mt-4">The router, layout, header, and footer are officially connected.</p>
//     </div>
//   );
// }
// import { useEffect, useRef, useState } from 'react';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// // The client's butterfly SVG
// const ButterflyIcon = ({ className }) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
//     {/* butterflys svg image in assests icons folder*/}
//     <path d="butterflys"></path>
//   </svg>
// );

// // Configuration for the 8 exploding cards
// // x/y are viewport percentages (vw/vh) to make it responsive
// const explodeConfig = [
//   { id: 1, fanRotate: 0, explodeX: '0vw', explodeY: '0vh', explodeRotate: 0 }, // Center Main Card
//   { id: 2, fanRotate: -5, explodeX: '-25vw', explodeY: '-20vh', explodeRotate: -15 }, // Top Left
//   { id: 3, fanRotate: 5, explodeX: '25vw', explodeY: '-15vh', explodeRotate: 10 }, // Top Right
//   { id: 4, fanRotate: -10, explodeX: '-35vw', explodeY: '10vh', explodeRotate: -25 }, // Far Left
//   { id: 5, fanRotate: 10, explodeX: '35vw', explodeY: '20vh', explodeRotate: 20 }, // Far Right
//   { id: 6, fanRotate: -15, explodeX: '-15vw', explodeY: '30vh', explodeRotate: -10 }, // Bottom Left
//   { id: 7, fanRotate: 15, explodeX: '20vw', explodeY: '35vh', explodeRotate: 5 }, // Bottom Right
//   { id: 8, fanRotate: -20, explodeX: '0vw', explodeY: '40vh', explodeRotate: -5 }, // Bottom Center
// ];

// export default function Home() {
//   const containerRef = useRef(null);
//   const [showHeroText, setShowHeroText] = useState(false);
//   const [startCardDrop, setStartCardDrop] = useState(false);

//   // Track scroll progress within this specific section (0 to 1)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   // Timeline Orchestration
//   useEffect(() => {
//     // 1. Initial "JUST TATTOOS" shows immediately.
//     // 2. Show "REAL INK YOUR WAY" after 2 seconds
//     const textTimer = setTimeout(() => setShowHeroText(true), 2000);
//     // 3. Drop the cards after 3 seconds
//     const cardTimer = setTimeout(() => setStartCardDrop(true), 3000);

//     return () => {
//       clearTimeout(textTimer);
//       clearTimeout(cardTimer);
//     };
//   }, []);

//   return (
//     // The container is 300vh tall to allow scrolling space for the explosion
//     <div ref={containerRef} className="relative w-full h-[300vh] bg-white">
      
//       {/* Sticky wrapper keeps everything on screen while the user scrolls down the 300vh */}
//       <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center pt-20">
        
//         {/* === PHASE 1: Loading / Intro Text === */}
//         <AnimatePresence>
//           {!showHeroText && (
//             <motion.div 
//               className="absolute flex items-center gap-4 z-10"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
//               transition={{ duration: 0.8 }}
//             >
//               <ButterflyIcon className="w-8 h-8 text-black" />
//               <h1 className="text-hero text-black tracking-widest">JUST TATTOOS</h1>
//               <ButterflyIcon className="w-8 h-8 text-black" />
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* === PHASE 2: Main Hero Text === */}
//         <AnimatePresence>
//           {showHeroText && (
//             <motion.div 
//               className="absolute top-[15vh] z-20 flex flex-col items-center pointer-events-none"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <h1 className="flex flex-col items-center">
//                 <span className="text-hero text-black">REAL INK</span>
//                 <span className="text-hero text-brand-orange mt-[-10px] md:mt-[-20px]">YOUR WAY</span>
//               </h1>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* === PHASE 3 & 4: Card Drop & Explosion === */}
//         <div className="absolute top-[40vh] left-1/2 -translate-x-1/2 w-[250px] h-[350px] md:w-[300px] md:h-[420px] z-10">
//           {startCardDrop && explodeConfig.map((card, index) => {
            
//             // Map the scroll progress (0 to 1) to the specific X, Y, and Rotation of THIS card
//             // We use standard React hooks inside a loop here because the array is static and never changes length
//             const moveX = useTransform(scrollYProgress, [0, 1], ['0vw', card.explodeX]);
//             const moveY = useTransform(scrollYProgress, [0, 1], ['0vh', card.explodeY]);
//             const currentRotation = useTransform(scrollYProgress, [0, 1], [card.fanRotate, card.explodeRotate]);

//             return (
//               <motion.div
//                 key={card.id}
//                 className="absolute inset-0 bg-brand-orange rounded-xl shadow-xl border-4 border-white flex items-center justify-center overflow-hidden"
//                 style={{
//                   x: moveX,
//                   y: moveY,
//                   rotate: currentRotation,
//                   // Ensure the main card stays on top initially
//                   zIndex: card.id === 1 ? 50 : 40 - index 
//                 }}
//                 // Falling animation: starts way above screen (-100vh), falls to 0
//                 initial={{ y: '-100vh', opacity: 0 }}
//                 animate={{ 
//                   y: '0vh', 
//                   opacity: 1, 
//                   // The fanRotate ensures they fan out nicely when they land, before scrolling
//                   rotate: card.fanRotate 
//                 }}
//                 transition={{ 
//                   type: 'spring', 
//                   damping: 15, 
//                   stiffness: 100, 
//                   // Drop the main card first, then cascade the rest rapidly
//                   delay: card.id === 1 ? 0 : 0.4 + (index * 0.1) 
//                 }}
//               >
//                 {/* Replace with actual Shopify Images later */}
//                 {card.id === 1 ? (
//                   <span className="text-white text-h3">Main Card</span>
//                 ) : (
//                   <img src={`/placeholder-${card.id}.jpg`} alt="Tattoo" className="w-full h-full object-cover mix-blend-multiply opacity-20" />
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </div>
//   );
// }

// import { useEffect, useRef, useState } from 'react';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// // Fixed SVG: Added a real placeholder butterfly path so it doesn't crash
// const ButterflyIcon = ({ className }) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
//     {/* Replace this d="..." string later with your actual Figma path */}
//     <path d="M12,2C8,2 4,5 4,9C4,11.5 6,14 8,15.5L12,22L16,15.5C18,14 20,11.5 20,9C20,5 16,2 12,2Z"></path>
//   </svg>
// );

// // Configuration for the 8 exploding cards
// const explodeConfig = [
//   { id: 1, fanRotate: 0, explodeX: '0vw', explodeY: '0vh', explodeRotate: 0 }, 
//   { id: 2, fanRotate: -5, explodeX: '-25vw', explodeY: '-20vh', explodeRotate: -15 }, 
//   { id: 3, fanRotate: 5, explodeX: '25vw', explodeY: '-15vh', explodeRotate: 10 }, 
//   { id: 4, fanRotate: -10, explodeX: '-35vw', explodeY: '10vh', explodeRotate: -25 }, 
//   { id: 5, fanRotate: 10, explodeX: '35vw', explodeY: '20vh', explodeRotate: 20 }, 
//   { id: 6, fanRotate: -15, explodeX: '-15vw', explodeY: '30vh', explodeRotate: -10 }, 
//   { id: 7, fanRotate: 15, explodeX: '20vw', explodeY: '35vh', explodeRotate: 5 }, 
//   { id: 8, fanRotate: -20, explodeX: '0vw', explodeY: '40vh', explodeRotate: -5 }, 
// ];

// // NEW: We extract the card into its own component. 
// // This fixes the React Hook error because useTransform is now at the top level!
// const ExplodingCard = ({ card, index, scrollYProgress }) => {
//   const moveX = useTransform(scrollYProgress, [0, 1], ['0vw', card.explodeX]);
//   const moveY = useTransform(scrollYProgress, [0, 1], ['0vh', card.explodeY]);
//   const currentRotation = useTransform(scrollYProgress, [0, 1], [card.fanRotate, card.explodeRotate]);

//   return (
//     <motion.div
//       className="absolute inset-0 bg-brand-orange rounded-xl shadow-xl border-4 border-white flex items-center justify-center overflow-hidden"
//       style={{
//         x: moveX,
//         y: moveY,
//         rotate: currentRotation,
//         zIndex: card.id === 1 ? 50 : 40 - index 
//       }}
//       initial={{ y: '-100vh', opacity: 0 }}
//       animate={{ 
//         y: '0vh', 
//         opacity: 1, 
//         rotate: card.fanRotate 
//       }}
//       transition={{ 
//         type: 'spring', 
//         damping: 15, 
//         stiffness: 100, 
//         delay: card.id === 1 ? 0 : 0.4 + (index * 0.1) 
//       }}
//     >
//       {card.id === 1 ? (
//         <span className="text-white text-h3 text-center px-4">JUST TATTOOS</span>
//       ) : (
//         <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//           <span className="text-black text-body">Tattoo {card.id}</span>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default function Home() {
//   const containerRef = useRef(null);
//   const [showHeroText, setShowHeroText] = useState(false);
//   const [startCardDrop, setStartCardDrop] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   useEffect(() => {
//     const textTimer = setTimeout(() => setShowHeroText(true), 1500);
//     const cardTimer = setTimeout(() => setStartCardDrop(true), 2500);

//     return () => {
//       clearTimeout(textTimer);
//       clearTimeout(cardTimer);
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="relative w-full h-[300vh] bg-white">
//       <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center pt-20">
        
//         {/* PHASE 1: Loading / Intro Text */}
//         <AnimatePresence>
//           {!showHeroText && (
//             <motion.div 
//               className="absolute flex items-center gap-4 z-10"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
//               transition={{ duration: 0.8 }}
//             >
//               <ButterflyIcon className="w-8 h-8 text-black" />
//               <h1 className="text-hero text-black tracking-widest">JUST TATTOOS</h1>
//               <ButterflyIcon className="w-8 h-8 text-black" />
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* PHASE 2: Main Hero Text */}
//         <AnimatePresence>
//           {showHeroText && (
//             <motion.div 
//               className="absolute top-[12vh] md:top-[15vh] z-20 flex flex-col items-center pointer-events-none"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               <h1 className="flex flex-col items-center">
//                 <span className="text-hero text-black">REAL INK</span>
//                 <span className="text-hero text-brand-orange mt-[-10px] md:mt-[-20px]">YOUR WAY</span>
//               </h1>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* PHASE 3 & 4: Card Drop & Explosion */}
//         <div className="absolute top-[35vh] md:top-[40vh] left-1/2 -translate-x-1/2 w-[220px] h-[300px] md:w-[300px] md:h-[420px] z-10">
//           {startCardDrop && explodeConfig.map((card, index) => (
//             <ExplodingCard 
//               key={card.id} 
//               card={card} 
//               index={index} 
//               scrollYProgress={scrollYProgress} 
//             />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }
import Hero from './Hero.jsx';
import FeatureSection from './FeatureSection.jsx';
import NewArrivalsSection from './NewArrivals.jsx/index.jsx';
import FreeGiftComponent from './FreeGiftComponent.jsx/index.jsx';
import InfoComponent from './Info.jsx/Info.jsx';
import Testimonials from './Testimonials.jsx/index.jsx';
import FAQSection from './FAQSection.jsx/index.jsx';
import Newsletter from './NewsLetter.jsx/index.jsx';
export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <FeatureSection />
      <NewArrivalsSection />
      <FreeGiftComponent />
      <InfoComponent />
      <Testimonials />
      <FAQSection />
      <Newsletter />
    </div>
  );
}