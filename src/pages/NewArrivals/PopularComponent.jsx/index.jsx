// // // // // // import React from 'react';

// // // // // // const PopularComponent = () => {
// // // // // //   return (
// // // // // //     // Outer container: Flexbox for responsive layout. Stacks vertically on mobile, horizontally on desktop.
// // // // // //     <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-5 w-full min-h-screen bg-white p-5 md:p-16 overflow-hidden">
      
// // // // // //       {/* Product Card Section (Appears Second on Mobile, First on Desktop) */}
// // // // // //       <div className="order-2 md:order-1 flex flex-col gap-3 md:gap-5 w-[320px] md:w-[400px]">
        
// // // // // //         {/* Image Box */}
// // // // // //         <div className="relative flex flex-col items-start justify-start w-full h-[400px] md:h-[500px] p-2 md:p-[10px] rounded-[24px] md:rounded-[30px] outline outline-1 outline-black outline-offset-[-1px] bg-white overflow-hidden">
// // // // // //           {/* Product Image */}
// // // // // //           <img 
// // // // // //             src="https://placehold.co/400x500" 
// // // // // //             alt="Snake Skull Compass" 
// // // // // //             className="absolute top-0 left-0 w-full h-full object-cover rounded-[24px] md:rounded-[30px]" 
// // // // // //           />
          
// // // // // //           {/* Badge: SALE (Mobile) / POPULAR (Desktop) - You can make this dynamic via props */}
// // // // // //           <div className="relative z-10 inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 bg-[#FE8204] rounded-[80px] md:rounded-[100px]">
// // // // // //             <span className="text-white text-xs md:text-base font-bold font-['Montserrat']">
// // // // // //               <span className="md:hidden">SALE</span>
// // // // // //               <span className="hidden md:inline">POPULAR</span>
// // // // // //             </span>
// // // // // //           </div>
// // // // // //         </div>
        
// // // // // //         {/* Text & Pricing Details */}
// // // // // //         <div className="flex flex-col w-full gap-2 md:gap-2.5">
// // // // // //           <h2 className="text-black text-base md:text-[20px] font-bold font-['Almarena'] uppercase break-words w-full m-0">
// // // // // //             Snake Skull Compass (colored)
// // // // // //           </h2>
          
// // // // // //           <div className="flex items-center gap-2 md:gap-2.5">
// // // // // //             <span className="text-black text-xs md:text-base font-light font-['Montserrat'] line-through">
// // // // // //               $29,99 USD
// // // // // //             </span>
// // // // // //             <span className="text-black text-base md:text-[20px] font-semibold font-['Montserrat']">
// // // // // //               $24,99 USD
// // // // // //             </span>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //       </div>

// // // // // //       {/* Visual Box Section: Video/Animation Area (Appears First on Mobile, Second on Desktop) */}
// // // // // //       <div className="order-1 md:order-2 relative w-[320px] md:w-[892px] h-[500px] md:h-[573px] bg-black rounded-[30px] overflow-hidden">
// // // // // //         {/* Replace the image below with your <video> tag if needed */}
// // // // // //         <img 
// // // // // //           src="https://placehold.co/892x573" 
// // // // // //           alt="Tattoo Animation Visual" 
// // // // // //           className="w-full h-full object-cover" 
// // // // // //         />
// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PopularComponent;

// // // // // import React from 'react';

// // // // // const PopularComponent = () => {
// // // // //   return (
// // // // //     // Outer container: Flexbox for responsive layout. Stacks vertically on mobile, horizontally on desktop.
// // // // //     <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-[64px] w-full min-h-screen bg-white p-5 md:p-16 overflow-hidden">
      
// // // // //       {/* Injecting responsive keyframe animations for plug-and-play ease without altering tailwind.config.js */}
// // // // //       <style>{`
// // // // //         @keyframes slideInFromLeft {
// // // // //           0% { transform: translateX(-100vw); opacity: 0; }
// // // // //           100% { transform: translateX(0); opacity: 1; }
// // // // //         }
// // // // //         @keyframes slideInFromRight {
// // // // //           0% { transform: translateX(100vw); opacity: 0; }
// // // // //           100% { transform: translateX(0); opacity: 1; }
// // // // //         }
        
// // // // //         /* Mobile Animation Assignments */
// // // // //         @media (max-width: 767px) {
// // // // //           .animate-responsive-product {
// // // // //             animation: slideInFromRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// // // // //           }
// // // // //           .animate-responsive-visual {
// // // // //             animation: slideInFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// // // // //           }
// // // // //         }
        
// // // // //         /* Desktop Animation Assignments */
// // // // //         @media (min-width: 768px) {
// // // // //           .animate-responsive-product {
// // // // //             animation: slideInFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// // // // //           }
// // // // //           .animate-responsive-visual {
// // // // //             animation: slideInFromRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// // // // //           }
// // // // //         }
// // // // //       `}</style>

// // // // //       {/* PRODUCT CARD SECTION 
// // // // //         Mobile: order-2 (Bottom), Slides in from Right 
// // // // //         Desktop: order-1 (Left), Slides in from Left
// // // // //       */}
// // // // //       <div className="animate-responsive-product order-2 md:order-1 flex flex-col gap-[12px] md:gap-[20px] w-[320px] md:w-[400px]">
        
// // // // //         {/* Image Box with group for hover effects */}
// // // // //         <div className="group relative flex flex-col items-start justify-start w-full h-[400px] md:h-[500px] p-[8px] md:p-[10px] rounded-[24px] md:rounded-[30px] outline outline-1 outline-black outline-offset-[-1px] bg-white overflow-hidden cursor-pointer">
          
// // // // //           {/* Product Image with Hover Scale */}
// // // // //           <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[24px] md:rounded-[30px]">
// // // // //             <img 
// // // // //               src="/assets/images/Card9.png" 
// // // // //               alt="Snake Skull Compass" 
// // // // //               className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
// // // // //             />
// // // // //           </div>
          
// // // // //           {/* Badge: SALE (Mobile) / POPULAR (Desktop) */}
// // // // //           <div className="relative z-10 inline-flex items-center justify-center px-[16px] py-[8px] md:px-[20px] md:py-[10px] bg-[#FE8204] rounded-[80px] md:rounded-[100px] shadow-sm">
// // // // //             <span className="text-white text-[12px] md:text-[16px] font-bold font-['Montserrat'] uppercase">
// // // // //               <span className="md:hidden">SALE</span>
// // // // //               <span className="hidden md:inline">POPULAR</span>
// // // // //             </span>
// // // // //           </div>
// // // // //         </div>
        
// // // // //         {/* Text & Pricing Details exact to Figma */}
// // // // //         <div className="flex flex-col w-full gap-[8px] md:gap-[10px]">
// // // // //           <h2 className="text-black text-[16px] md:text-[20px] font-bold font-['Almarena'] uppercase break-words w-full m-0">
// // // // //             Snake Skull Compass (colored)
// // // // //           </h2>
          
// // // // //           <div className="flex items-center gap-[8px] md:gap-[10px]">
// // // // //             <span className="text-black text-[12px] md:text-[16px] font-light font-['Montserrat'] line-through">
// // // // //               $29,99 USD
// // // // //             </span>
// // // // //             <span className="text-black text-[16px] md:text-[20px] font-semibold font-['Montserrat']">
// // // // //               $24,99 USD
// // // // //             </span>
// // // // //           </div>
// // // // //         </div>

// // // // //       </div>

// // // // //       {/* VISUAL BOX SECTION (Video/Image)
// // // // //         Mobile: order-1 (Top), Slides in from Left
// // // // //         Desktop: order-2 (Right), Slides in from Right 
// // // // //       */}
// // // // //       <div className="animate-responsive-visual order-1 md:order-2 relative w-[320px] h-[500px] md:w-[892px] md:h-[573px] bg-black rounded-[30px] overflow-hidden shadow-lg">
// // // // //         {/* Replace with <video autoPlay loop muted> for actual implementation */}
// // // // //         <img 
// // // // //           src="/assets/images/backgroundphotoPopular.png" 
// // // // //           alt="Tattoo Animation Visual" 
// // // // //           className="w-full h-full object-cover" 
// // // // //         />
// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PopularComponent;

// // // // import React from 'react';

// // // // const PopularComponent = () => {
// // // //   return (
// // // //     // Outer container: Flexbox for responsive layout.
// // // //     <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-6 md:gap-[64px] w-full min-h-screen bg-white p-5 md:p-16 overflow-hidden">
      
// // // //       {/* Injecting responsive keyframe animations */}
// // // //       <style>{`
// // // //         /* Smooth, premium slide-in distances rather than 100vw which can look jarring */
// // // //         @keyframes slideInFromLeft {
// // // //           0% { transform: translateX(-100%); opacity: 0; }
// // // //           100% { transform: translateX(0); opacity: 1; }
// // // //         }
// // // //         @keyframes slideInFromRight {
// // // //           0% { transform: translateX(100%); opacity: 0; }
// // // //           100% { transform: translateX(0); opacity: 1; }
// // // //         }
        
// // // //         /* Initial state prevents flashing before animation loads */
// // // //         .animate-responsive-product,
// // // //         .animate-responsive-visual {
// // // //           opacity: 0; 
// // // //         }

// // // //         /* -------------------------------------------
// // // //            MOBILE FIRST (< 768px)
// // // //            Visual (Top): Slides Left to Right
// // // //            Product (Bottom): Slides Right to Left
// // // //         ------------------------------------------- */
// // // //         .animate-responsive-visual {
// // // //           animation: slideInFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// // // //         }
// // // //         .animate-responsive-product {
// // // //           animation: slideInFromRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// // // //         }
        
// // // //         /* -------------------------------------------
// // // //            DESKTOP (>= 768px)
// // // //            Product (Left): Slides Left to Right
// // // //            Visual (Right): Slides Right to Left
// // // //         ------------------------------------------- */
// // // //         @media (min-width: 768px) {
// // // //           .animate-responsive-product {
// // // //             animation: slideInFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// // // //           }
// // // //           .animate-responsive-visual {
// // // //             animation: slideInFromRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// // // //           }
// // // //         }
// // // //       `}</style>

// // // //       {/* PRODUCT CARD SECTION 
// // // //         Mobile: order-2 (Bottom)
// // // //         Desktop: order-1 (Left)
// // // //       */}
// // // //       <div className="animate-responsive-product flex-shrink-0 order-2 md:order-1 flex flex-col gap-[12px] md:gap-[20px] w-full max-w-[320px] md:max-w-[400px]">
        
// // // //         {/* Image Box with group for hover effects */}
// // // //         <div className="group relative flex flex-col items-start justify-start w-full h-[400px] md:h-[500px] p-[8px] md:p-[10px] rounded-[24px] md:rounded-[30px] outline outline-1 outline-black outline-offset-[-1px] bg-white overflow-hidden cursor-pointer">
          
// // // //           {/* Product Image with Hover Scale */}
// // // //           <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[24px] md:rounded-[30px]">
// // // //             <img 
// // // //               src="/assets/images/Card9.png" 
// // // //               alt="Snake Skull Compass" 
// // // //               className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
// // // //             />
// // // //           </div>
          
// // // //           {/* Badge: SALE (Mobile) / POPULAR (Desktop) */}
// // // //           <div className="relative z-10 inline-flex items-center justify-center px-[16px] py-[8px] md:px-[20px] md:py-[10px] bg-[#FE8204] rounded-[80px] md:rounded-[100px] shadow-sm">
// // // //             <span className="text-white text-[12px] md:text-[16px] font-bold font-['Montserrat'] uppercase">
// // // //               <span className="md:hidden">SALE</span>
// // // //               <span className="hidden md:inline">POPULAR</span>
// // // //             </span>
// // // //           </div>
// // // //         </div>
        
// // // //         {/* Text & Pricing Details exact to Figma */}
// // // //         <div className="flex flex-col w-full gap-[8px] md:gap-[10px]">
// // // //           <h2 className="text-black text-[16px] md:text-[20px] font-bold font-['Almarena'] uppercase break-words w-full m-0">
// // // //             Snake Skull Compass (colored)
// // // //           </h2>
          
// // // //           <div className="flex items-center gap-[8px] md:gap-[10px]">
// // // //             <span className="text-black text-[12px] md:text-[16px] font-light font-['Montserrat'] line-through">
// // // //               $29,99 USD
// // // //             </span>
// // // //             <span className="text-black text-[16px] md:text-[20px] font-semibold font-['Montserrat']">
// // // //               $24,99 USD
// // // //             </span>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* VISUAL BOX SECTION (Video/Image)
// // // //         Mobile: order-1 (Top)
// // // //         Desktop: order-2 (Right) 
// // // //       */}
// // // //       <div className="animate-responsive-visual order-1 md:order-2 relative w-full max-w-[320px] md:max-w-[892px] md:flex-1 h-[400px] md:h-[573px] bg-black rounded-[30px] overflow-hidden shadow-lg">
// // // //         {/* Replace with <video autoPlay loop muted playsInline> for actual implementation */}
// // // //         <img 
// // // //           src="/assets/images/backgroundphotoPopular.png" 
// // // //           alt="Tattoo Animation Visual" 
// // // //           className="w-full h-full object-cover" 
// // // //         />
// // // //       </div>

// // // //     </div>
// // // //   );
// // // // };

// // // // export default PopularComponent;

// // // import React from 'react';

// // // const PopularComponent = () => {
// // //   return (
// // //     // Outer container: Flexbox for responsive layout. Stacks vertically on mobile, horizontally on desktop.
// // //     <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-[64px] w-full min-h-screen bg-white p-5 md:p-16 overflow-hidden">
      
// // //       {/* Injecting responsive keyframe animations for plug-and-play ease without altering tailwind.config.js */}
// // //       <style>{`
// // //         @keyframes slideInFromLeft {
// // //           0% { transform: translateX(-100vw); opacity: 0; }
// // //           100% { transform: translateX(0); opacity: 1; }
// // //         }
// // //         @keyframes slideInFromRight {
// // //           0% { transform: translateX(100vw); opacity: 0; }
// // //           100% { transform: translateX(0); opacity: 1; }
// // //         }
        
// // //         /* Mobile Animation Assignments */
// // //         @media (max-width: 767px) {
// // //           .animate-responsive-product {
// // //             animation: slideInFromRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// // //           }
// // //           .animate-responsive-visual {
// // //             animation: slideInFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// // //           }
// // //         }
        
// // //         /* Desktop Animation Assignments */
// // //         @media (min-width: 768px) {
// // //           .animate-responsive-product {
// // //             animation: slideInFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// // //           }
// // //           .animate-responsive-visual {
// // //             animation: slideInFromRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// // //           }
// // //         }
// // //       `}</style>

// // //       {/* PRODUCT CARD SECTION 
// // //         Mobile: order-2 (Bottom), Slides in from Right 
// // //         Desktop: order-1 (Left), Slides in from Left
// // //       */}
// // //       <div className="animate-responsive-product order-2 md:order-1 flex flex-col gap-[12px] md:gap-[20px] w-[320px] md:w-[400px]">
        
// // //         {/* Image Box with group for hover effects */}
// // //         <div className="group relative flex flex-col items-start justify-start w-full h-[400px] md:h-[500px] p-[8px] md:p-[10px] rounded-[24px] md:rounded-[30px] outline outline-1 outline-black outline-offset-[-1px] bg-white overflow-hidden cursor-pointer">
          
// // //           {/* Product Image with Hover Scale */}
// // //           <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[24px] md:rounded-[30px]">
// // //             <img 
// // //               src="https://placehold.co/400x500" 
// // //               alt="Snake Skull Compass" 
// // //               className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
// // //             />
// // //           </div>
          
// // //           {/* Badge: SALE (Mobile) / POPULAR (Desktop) */}
// // //           <div className="relative z-10 inline-flex items-center justify-center px-[16px] py-[8px] md:px-[20px] md:py-[10px] bg-[#FE8204] rounded-[80px] md:rounded-[100px] shadow-sm">
// // //             <span className="text-white text-[12px] md:text-[16px] font-bold font-['Montserrat'] uppercase">
// // //               <span className="md:hidden">SALE</span>
// // //               <span className="hidden md:inline">POPULAR</span>
// // //             </span>
// // //           </div>
// // //         </div>
        
// // //         {/* Text & Pricing Details exact to Figma */}
// // //         <div className="flex flex-col w-full gap-[8px] md:gap-[10px]">
// // //           <h2 className="text-black text-[16px] md:text-[20px] font-bold font-['Almarena'] uppercase break-words w-full m-0">
// // //             Snake Skull Compass (colored)
// // //           </h2>
          
// // //           <div className="flex items-center gap-[8px] md:gap-[10px]">
// // //             <span className="text-black text-[12px] md:text-[16px] font-light font-['Montserrat'] line-through">
// // //               $29,99 USD
// // //             </span>
// // //             <span className="text-black text-[16px] md:text-[20px] font-semibold font-['Montserrat']">
// // //               $24,99 USD
// // //             </span>
// // //           </div>
// // //         </div>

// // //       </div>

// // //       {/* VISUAL BOX SECTION (Video/Image)
// // //         Mobile: order-1 (Top), Slides in from Left
// // //         Desktop: order-2 (Right), Slides in from Right 
// // //       */}
// // //       <div className="animate-responsive-visual order-1 md:order-2 relative w-[320px] h-[500px] md:w-[892px] md:h-[573px] bg-black rounded-[30px] overflow-hidden shadow-lg">
// // //         {/* Replace with <video autoPlay loop muted> for actual implementation */}
// // //         <img 
// // //           src="https://placehold.co/892x573" 
// // //           alt="Tattoo Animation Visual" 
// // //           className="w-full h-full object-cover" 
// // //         />
// // //       </div>

// // //     </div>
// // //   );
// // // };

// // // export default PopularComponent;

// // import React, { useEffect, useRef, useState } from 'react';

// // const PopularComponent = () => {
// //   // 1. Set up the state and reference for the intersection observer
// //   const [isVisible, setIsVisible] = useState(false);
// //   const componentRef = useRef(null);

// //   useEffect(() => {
// //     // 2. Create the observer
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         // When the component comes into view, set isVisible to true
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //           // Optional: Stop observing once it has animated in
// //           observer.unobserve(entry.target); 
// //         }
// //       },
// //       {
// //         root: null,
// //         rootMargin: '0px',
// //         threshold: 0.2, // Triggers when 20% of the component is visible
// //       }
// //     );

// //     if (componentRef.current) {
// //       observer.observe(componentRef.current);
// //     }

// //     // Cleanup observer on unmount
// //     return () => {
// //       if (componentRef.current) {
// //         observer.unobserve(componentRef.current);
// //       }
// //     };
// //   }, []);

// //   return (
// //     // Attach the ref to the outermost container
// //     <div 
// //       ref={componentRef} 
// //       className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-[64px] w-full min-h-screen bg-white p-5 md:p-16 overflow-hidden"
// //     >
      
// //       {/* Injecting responsive keyframe animations */}
// //       <style>{`
// //         @keyframes slideInFromLeft {
// //           0% { transform: translateX(-100vw); opacity: 0; }
// //           100% { transform: translateX(0); opacity: 1; }
// //         }
// //         @keyframes slideInFromRight {
// //           0% { transform: translateX(100vw); opacity: 0; }
// //           100% { transform: translateX(0); opacity: 1; }
// //         }
        
// //         /* Mobile Animation Assignments */
// //         @media (max-width: 767px) {
// //           .animate-product-mobile-desktop {
// //             animation: slideInFromRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// //           }
// //           .animate-visual-mobile-desktop {
// //             animation: slideInFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// //           }
// //         }
        
// //         /* Desktop Animation Assignments */
// //         @media (min-width: 768px) {
// //           .animate-product-mobile-desktop {
// //             animation: slideInFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// //           }
// //           .animate-visual-mobile-desktop {
// //             animation: slideInFromRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
// //           }
// //         }
// //       `}</style>

// //       {/* PRODUCT CARD SECTION 
// //         Mobile: order-2 (Bottom), Slides in from Right 
// //         Desktop: order-1 (Left), Slides in from Left
// //       */}
// //       <div 
// //         className={`order-2 md:order-1 flex flex-col gap-[12px] md:gap-[20px] w-[320px] md:w-[400px] opacity-0 ${isVisible ? 'animate-product-mobile-desktop' : ''}`}
// //       >
        
// //         {/* Image Box with group for hover effects */}
// //         <div className="group relative flex flex-col items-start justify-start w-full h-[400px] md:h-[500px] p-[8px] md:p-[10px] rounded-[24px] md:rounded-[30px] outline outline-1 outline-black outline-offset-[-1px] bg-white overflow-hidden cursor-pointer">
          
// //           {/* Product Image with Hover Scale */}
// //           <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[24px] md:rounded-[30px]">
// //             <img 
// //               src="https://placehold.co/400x500" 
// //               alt="Snake Skull Compass" 
// //               className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
// //             />
// //           </div>
          
// //           {/* Badge: SALE (Mobile) / POPULAR (Desktop) */}
// //           <div className="relative z-10 inline-flex items-center justify-center px-[16px] py-[8px] md:px-[20px] md:py-[10px] bg-[#FE8204] rounded-[80px] md:rounded-[100px] shadow-sm">
// //             <span className="text-white text-[12px] md:text-[16px] font-bold font-['Montserrat'] uppercase">
// //               <span className="md:hidden">SALE</span>
// //               <span className="hidden md:inline">POPULAR</span>
// //             </span>
// //           </div>
// //         </div>
        
// //         {/* Text & Pricing Details exact to Figma */}
// //         <div className="flex flex-col w-full gap-[8px] md:gap-[10px]">
// //           <h2 className="text-black text-[16px] md:text-[20px] font-bold font-['Almarena'] uppercase break-words w-full m-0">
// //             Snake Skull Compass (colored)
// //           </h2>
          
// //           <div className="flex items-center gap-[8px] md:gap-[10px]">
// //             <span className="text-black text-[12px] md:text-[16px] font-light font-['Montserrat'] line-through">
// //               $29,99 USD
// //             </span>
// //             <span className="text-black text-[16px] md:text-[20px] font-semibold font-['Montserrat']">
// //               $24,99 USD
// //             </span>
// //           </div>
// //         </div>

// //       </div>

// //       {/* VISUAL BOX SECTION (Video/Image)
// //         Mobile: order-1 (Top), Slides in from Left
// //         Desktop: order-2 (Right), Slides in from Right 
// //       */}
// //       <div 
// //         className={`order-1 md:order-2 relative w-[320px] h-[500px] md:w-[892px] md:h-[573px] bg-black rounded-[30px] overflow-hidden shadow-lg opacity-0 ${isVisible ? 'animate-visual-mobile-desktop' : ''}`}
// //       >
// //         <img 
// //           src="https://placehold.co/892x573" 
// //           alt="Tattoo Animation Visual" 
// //           className="w-full h-full object-cover" 
// //         />
// //       </div>

// //     </div>
// //   );
// // };

// // export default PopularComponent;

// // import React, { useState, useEffect } from 'react';
// // import { motion } from 'framer-motion';

// // const PopularComponent = () => {
// //   // We need to know if it's mobile to swap the animation directions dynamically
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsMobile(window.innerWidth < 768);
// //     };
    
// //     // Set initial value
// //     handleResize();
    
// //     // Listen for window resize
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   return (
// //     // Outer container: Flexbox for responsive layout.
// //     <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-[64px] w-full min-h-screen bg-white p-5 md:p-16 overflow-hidden">
      
// //       {/* PRODUCT CARD SECTION 
// //         Mobile: order-2 (Bottom), Slides in from Right (x: 100)
// //         Desktop: order-1 (Left), Slides in from Left (x: -100)
// //       */}
// //       <motion.div 
// //         initial={{ opacity: 0, x: isMobile ? 100 : -100 }}
// //         whileInView={{ opacity: 1, x: 0 }}
// //         viewport={{ once: true, margin: "-100px" }}
// //         transition={{ duration: 0.8, ease: "easeOut" }}
// //         className="order-2 md:order-1 flex flex-col gap-[12px] md:gap-[20px] w-[320px] md:w-[400px]"
// //       >
        
// //         {/* Image Box with group for hover effects */}
// //         <div className="group relative flex flex-col items-start justify-start w-full h-[400px] md:h-[500px] p-[8px] md:p-[10px] rounded-[24px] md:rounded-[30px] outline outline-1 outline-black outline-offset-[-1px] bg-white overflow-hidden cursor-pointer">
          
// //           {/* Product Image with Hover Scale */}
// //           <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[24px] md:rounded-[30px]">
// //             <img 
// //               src="/assets/images/Card9.png" 
// //               alt="Snake Skull Compass" 
// //               className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
// //             />
// //           </div>
          
// //           {/* Badge: SALE (Mobile) / POPULAR (Desktop) */}
// //           <div className="relative z-10 inline-flex items-center justify-center px-[16px] py-[8px] md:px-[20px] md:py-[10px] bg-[#FE8204] rounded-[80px] md:rounded-[100px] shadow-sm">
// //             <span className="text-white text-[12px] md:text-[16px] font-bold font-['Montserrat'] uppercase">
// //               <span className="md:hidden">SALE</span>
// //               <span className="hidden md:inline">POPULAR</span>
// //             </span>
// //           </div>
// //         </div>
        
// //         {/* Text & Pricing Details exact to Figma */}
// //         <div className="flex flex-col w-full gap-[8px] md:gap-[10px]">
// //           <h2 className="text-black text-[16px] md:text-[20px] font-bold font-['Almarena'] uppercase break-words w-full m-0">
// //             Snake Skull Compass (colored)
// //           </h2>
          
// //           <div className="flex items-center gap-[8px] md:gap-[10px]">
// //             <span className="text-black text-[12px] md:text-[16px] font-light font-['Montserrat'] line-through">
// //               $29,99 USD
// //             </span>
// //             <span className="text-black text-[16px] md:text-[20px] font-semibold font-['Montserrat']">
// //               $24,99 USD
// //             </span>
// //           </div>
// //         </div>

// //       </motion.div>

// //       {/* VISUAL BOX SECTION (Video/Image)
// //         Mobile: order-1 (Top), Slides in from Left (x: -100)
// //         Desktop: order-2 (Right), Slides in from Right (x: 100)
// //       */}
// //       <motion.div 
// //         initial={{ opacity: 0, x: isMobile ? -100 : 100 }}
// //         whileInView={{ opacity: 1, x: 0 }}
// //         viewport={{ once: true, margin: "-100px" }}
// //         transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
// //         className="order-1 md:order-2 relative w-[320px] h-[500px] md:w-[892px] md:h-[573px] bg-black rounded-[30px] overflow-hidden shadow-lg"
// //       >
// //         <img 
// //           src="/assets/images/backgroundphotoPopular.png" 
// //           alt="Tattoo Animation Visual" 
// //           className="w-full h-full object-cover" 
// //         />
// //       </motion.div>

// //     </div>
// //   );
// // };

// // export default PopularComponent;

// import React, { useState, useEffect } from 'react';

// const PopularComponent = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Triggers animation on mount
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-[64px] w-full min-h-screen bg-white p-4 md:p-16 overflow-hidden">
      
//       {/* PRODUCT CARD SECTION 
//         Mobile: order-2, Slides in from RIGHT (translate-x-full)
//         Desktop: order-1, Slides in from LEFT (-translate-x-full)
//       */}
//       <div 
//         className={`
//           order-2 md:order-1 flex flex-col gap-3 md:gap-5 w-full max-w-[400px]
//           transform transition-all duration-1000 ease-out
//           ${isVisible 
//             ? 'translate-x-0 opacity-100' 
//             : 'translate-x-full md:-translate-x-full opacity-0'
//           }
//         `}
//       >
//         {/* Image Box */}
//         <div className="group relative flex flex-col items-start justify-start w-full h-[450px] md:h-[500px] p-2 md:p-[10px] rounded-[24px] md:rounded-[30px] outline outline-1 outline-black outline-offset-[-1px] bg-white overflow-hidden cursor-pointer">
//           <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[24px] md:rounded-[30px]">
//             <img 
//               src="/assets/images/Card9.png" 
//               alt="Snake Skull Compass" 
//               className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
//             />
//           </div>
          
//           {/* Badge */}
//           <div className="relative z-10 inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 bg-[#FE8204] rounded-full shadow-sm">
//             <span className="text-white text-xs md:text-base font-bold font-['Montserrat'] uppercase">
//               <span className="md:hidden">SALE</span>
//               <span className="hidden md:inline">POPULAR</span>
//             </span>
//           </div>
//         </div>
        
//         {/* Text Details */}
//         <div className="flex flex-col w-full gap-2">
//           <h2 className="text-black text-lg md:text-xl font-bold font-['Almarena'] uppercase">
//             Snake Skull Compass (colored)
//           </h2>
//           <div className="flex items-center gap-3">
//             <span className="text-black text-sm md:text-base font-light font-['Montserrat'] line-through opacity-60">
//               $29,99 USD
//             </span>
//             <span className="text-black text-lg md:text-xl font-semibold font-['Montserrat']">
//               $24,99 USD
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* VISUAL BOX SECTION 
//         Mobile: order-1, Slides in from LEFT (-translate-x-full)
//         Desktop: order-2, Slides in from RIGHT (translate-x-full)
//       */}
//       <div 
//         className={`
//           order-1 md:order-2 relative w-full md:flex-1 max-w-[400px] md:max-w-[892px] h-[400px] md:h-[573px] bg-black rounded-[30px] overflow-hidden shadow-xl
//           transform transition-all duration-1000 ease-out
//           ${isVisible 
//             ? 'translate-x-0 opacity-100' 
//             : '-translate-x-full md:translate-x-full opacity-0'
//           }
//         `}
//       >
//         <img 
//           src="/assets/images/backgroundphotoPopular.png" 
//           alt="Tattoo Animation Visual" 
//           className="w-full h-full object-cover" 
//         />
//       </div>

//     </div>
//   );
// };

// export default PopularComponent;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PopularComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Prevent hydration/Framer Motion mismatch by waiting until the client loads
    setIsMounted(true);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Listen for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Return a blank placeholder while determining screen size to ensure smooth animations
  if (!isMounted) return <div className="min-h-screen w-full bg-white"></div>;

  return (
    <section className="bg-white w-full overflow-hidden px-4 py-16 md:px-16 md:py-24 relative">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-[64px] max-w-[1312px] mx-auto">
        
        {/* PRODUCT CARD SECTION 
            Mobile: Appears 2nd (Bottom), Slides in from Right (x: 100), Animates second
            Desktop: Appears 1st (Left), Slides in from Left (x: -100), Animates first
        */}
        <motion.div 
          initial={{ opacity: 0, x: isMobile ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: isMobile ? 0.2 : 0 }}
          className="order-2 md:order-1 flex flex-col gap-[12px] md:gap-[20px] w-full max-w-[420px] md:max-w-[400px] shrink-0"
        >
          {/* Image Box with group for hover scale effect */}
          <div className="group relative flex flex-col items-start w-full h-[500px] md:h-[500px] p-[8px] md:p-[10px] rounded-[24px] md:rounded-[30px] outline outline-1 outline-black outline-offset-[-1px] bg-white overflow-hidden cursor-pointer">
            
            {/* Product Image with Hover Scale */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[24px] md:rounded-[30px]">
              <img 
                src="assets/images/Card9.png" 
                alt="Snake Skull Compass" 
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
              />
            </div>
            
            {/* Badge: SALE (Mobile) / POPULAR (Desktop) */}
            <div className="relative z-10 inline-flex items-center justify-center px-[16px] py-[8px] md:px-[20px] md:py-[10px] bg-[#FE8204] rounded-[80px] md:rounded-[100px]">
              <span className="text-white text-[12px] md:text-[16px] font-bold font-montserrat uppercase">
                <span className="md:hidden">SALE</span>
                <span className="hidden md:inline">POPULAR</span>
              </span>
            </div>
          </div>
          
          {/* Text & Pricing Details (Matched exactly to client Figma specs) */}
          <div className="flex flex-col w-full gap-[8px] md:gap-[10px]">
            <h2 className="text-black text-[16px] md:text-[20px] font-bold font-almarena uppercase break-words w-full m-0">
              Snake Skull Compass (colored)
            </h2>
            
            <div className="flex items-center gap-[8px] md:gap-[10px]">
              <span className="text-black text-[12px] md:text-[16px] font-light font-montserrat line-through">
                $29,99 USD
              </span>
              <span className="text-black text-[16px] md:text-[20px] font-semibold font-montserrat">
                $24,99 USD
              </span>
            </div>
          </div>
        </motion.div>

        {/* VISUAL BOX SECTION (Video/Image)
            Mobile: Appears 1st (Top), Slides in from Left (x: -100), Animates first
            Desktop: Appears 2nd (Right), Slides in from Right (x: 100), Animates second
        */}
        <motion.div 
          initial={{ opacity: 0, x: isMobile ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: isMobile ? 0 : 0.2 }}
          className="order-1 md:order-2 w-full max-w-[420px] md:max-w-[892px] h-[506px] md:h-[573px] bg-black rounded-[30px] overflow-hidden shrink-0"
        >
          {/* Swap this image with your video tag if needed */}
          <img 
            src="assets/images/backgroundphotoPopular.png" 
            alt="Tattoo Animation Visual" 
            className="w-full h-full object-cover" 
          />
        </motion.div>

      </div>
    </section>
  );
};

export default PopularComponent;