// // // src/components/sections/NewArrivals/index.jsx
// // import { motion } from 'framer-motion';

// // export default function NewArrivals() {
// //   // Animation variants for the text sliding up
// //   const textVariants = {
// //     hidden: { y: '100%' },
// //     visible: { 
// //       y: '0%', 
// //       transition: { 
// //         duration: 0.8, 
// //         ease: [0.16, 1, 0.3, 1] // Custom easing for that snappy, premium pop-up feel
// //       } 
// //     }
// //   };

// //   // Animation variants for the staggered delay
// //   const containerVariants = {
// //     hidden: {},
// //     visible: {
// //       transition: {
// //         staggerChildren: 0.15, // Delay between "NEW" and "ARRIVALS"
// //         delayChildren: 0.2,    // Wait slightly before starting the text animation
// //       }
// //     }
// //   };

// //   return (
// //     <section className="w-full bg-white flex justify-center py-6 px-4 sm:px-6 lg:px-8 overflow-hidden font-['Almarena']">
      
// //       {/* Main Wrapper: 
// //         Max-width based on Figma (1312px). 
// //         Relative positioning to allow text overlay on desktop.
// //       */}
// //       <div className="relative w-full max-w-[1312px] mx-auto flex flex-col md:block">
        
// //         {/* --- Image Container --- */}
// //         <motion.div 
// //           initial={{ opacity: 0, scale: 1.05 }} 
// //           whileInView={{ opacity: 1, scale: 1 }} 
// //           viewport={{ once: true, amount: 0.2 }}
// //           transition={{ duration: 1.2, ease: "easeOut" }}
// //           className="w-full h-[564px] md:h-[635px] rounded-[30px] overflow-hidden bg-gray-200"
// //         >
// //           {/* Replace src with your actual image path */}
// //           <img 
// //             src="/assets/images/new-arrivals-bg.jpg" 
// //             alt="New Arrivals Tattoo Model" 
// //             className="w-full h-full object-cover object-center"
// //           />
// //         </motion.div>

// //         {/* --- Text Container --- */}
// //         <motion.div 
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.5 }}
// //           className="
// //             flex flex-col 
// //             md:absolute md:left-[40px] md:top-[329px] 
// //             mt-[-40px] md:mt-0 px-2 md:px-0
// //             z-10 relative
// //           "
// //         >
// //           {/* "NEW" Line */}
// //           <div className="overflow-hidden">
// //             <motion.h2 
// //               variants={textVariants}
// //               className="
// //                 text-[#FE8204] font-bold uppercase 
// //                 text-[72px] sm:text-[90px] md:text-[140px] 
// //                 leading-[0.85] md:leading-[0.85] tracking-tight
// //               "
// //             >
// //               New
// //             </motion.h2>
// //           </div>

// //           {/* "ARRIVALS" Line */}
// //           <div className="overflow-hidden">
// //             <motion.h2 
// //               variants={textVariants}
// //               className="
// //                 text-[#FE8204] font-bold uppercase 
// //                 text-[72px] sm:text-[90px] md:text-[140px] 
// //                 leading-[0.85] md:leading-[0.85] tracking-tight
// //               "
// //             >
// //               Arrivals
// //             </motion.h2>
// //           </div>
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }


// import { motion } from 'framer-motion';

// export default function NewArrivals() {
//   // Animation variants for the text sliding up strictly within its container
//   const textVariants = {
//     hidden: { y: '100%' },
//     visible: { 
//       y: '0%', 
//       transition: { 
//         duration: 0.8, 
//         ease: [0.16, 1, 0.3, 1] 
//       } 
//     }
//   };

//   return (
//     <section className="w-full bg-white flex justify-center py-6 px-4 sm:px-6 lg:px-8 font-['Almarena']">
      
//       {/* Main Wrapper */}
//       <div className="relative w-full max-w-[1312px] mx-auto flex flex-col md:block">
        
//         {/* --- Image Container --- */}
//         {/* Adjusted to ONLY fade in, matching client request. Border radius set to 30px. */}
//         <motion.div 
//           initial={{ opacity: 0 }} 
//           whileInView={{ opacity: 1 }} 
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="w-full h-[564px] md:h-[635px] rounded-[30px] overflow-hidden bg-gray-200 relative"
//         >
//           <img 
//             src="/assets/images/new-arrivals-bg.jpg" 
//             alt="New Arrivals Tattoo Model" 
//             className="w-full h-full object-cover object-center"
//           />
//         </motion.div>

//         {/* --- Text Container --- */}
//         {/* Positioned below image on mobile (mt-6), absolutely positioned on desktop */}
//         <div 
//           className="
//             flex flex-col 
//             mt-6 md:mt-0 px-2 md:px-0
//             md:absolute md:left-[40px] md:top-[329px] 
//             z-10 relative
//           "
//         >
//           {/* "NEW" Line - overflow-hidden creates the mask for the slide-up */}
//           <div className="overflow-hidden">
//             <motion.h2 
//               variants={textVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               className="
//                 text-[#FE8204] font-bold uppercase 
//                 text-[64px] md:text-[140px] 
//                 leading-[1] md:leading-[0.85] tracking-tight
//                 m-0 p-0
//               "
//             >
//               New
//             </motion.h2>
//           </div>

//           {/* "ARRIVALS" Line - overflow-hidden creates the mask for the slide-up */}
//           <div className="overflow-hidden">
//             <motion.h2 
//               variants={textVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               className="
//                 text-[#FE8204] font-bold uppercase 
//                 text-[64px] md:text-[140px] 
//                 leading-[1] md:leading-[0.85] tracking-tight
//                 m-0 p-0
//               "
//             >
//               Arrivals
//             </motion.h2>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


import { motion } from 'framer-motion';

export default function NewArrivals() {
  // Parent container handles the visibility trigger so the hidden text doesn't break it
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  // Text variants slide up exactly 100% of their own height
  const textVariants = {
    hidden: { y: '100%' },
    visible: { 
      y: '0%', 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  return (
    <section className="w-full bg-white flex justify-center py-6 px-4 sm:px-6 lg:px-8 font-['Almarena']">
      
      {/* Main Wrapper: Max-width 1312px. Relative for desktop absolute positioning */}
      <div className="relative w-full max-w-[1312px] mx-auto flex flex-col md:block">
        
        {/* --- Image Container --- */}
        {/* Pure fade-in (0 to 1), 30px rounded corners per Figma */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-[564px] md:h-[635px] rounded-[30px] overflow-hidden bg-gray-200 relative"
        >
          <img 
            src="/assets/images/NewArrivalsHeroDesktop.png" 
            alt="New Arrivals Tattoo Model" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* --- Text Container --- */}
        {/* Triggering the animation from this static container fixes the visibility issue */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            flex flex-col 
            mt-6 md:mt-0 
            md:absolute md:left-[40px] md:top-[329px] 
            z-10
          "
        >
          {/* "NEW" Line - overflow-hidden masks the text while it slides up */}
          <div className="overflow-hidden pb-2 md:pb-4">
            <motion.h2 
              variants={textVariants}
              className="
                text-[#FE8204] font-bold uppercase 
                text-[64px] md:text-[140px] 
                leading-[0.85] tracking-tight
                m-0 p-0
              "
            >
              New
            </motion.h2>
          </div>

          {/* "ARRIVALS" Line - overflow-hidden masks the text while it slides up */}
          <div className="overflow-hidden pb-2 md:pb-4">
            <motion.h2 
              variants={textVariants}
              className="
                text-[#FE8204] font-bold uppercase 
                text-[64px] md:text-[140px] 
                leading-[0.85] tracking-tight
                m-0 p-0
              "
            >
              Arrivals
            </motion.h2>
          </div>
        </motion.div>

      </div>
    </section>
  );
}