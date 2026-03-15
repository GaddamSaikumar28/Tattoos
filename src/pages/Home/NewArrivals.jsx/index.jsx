// // // // // // import React, { useEffect, useRef, useState } from 'react';

// // // // // // // Custom hook to trigger animations when elements scroll into view
// // // // // // const useScrollReveal = (options = { threshold: 0.15 }) => {
// // // // // //   const ref = useRef(null);
// // // // // //   const [isVisible, setIsVisible] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(([entry]) => {
// // // // // //       if (entry.isIntersecting) {
// // // // // //         setIsVisible(true);
// // // // // //         observer.unobserve(entry.target);
// // // // // //       }
// // // // // //     }, options);

// // // // // //     if (ref.current) observer.observe(ref.current);
// // // // // //     return () => {
// // // // // //       if (ref.current) observer.unobserve(ref.current);
// // // // // //     };
// // // // // //   }, [options]);

// // // // // //   return [ref, isVisible];
// // // // // // };

// // // // // // // Reusable Button Component matching the wireframe specs
// // // // // // const ActionButton = ({ text }) => (
// // // // // //   <button 
// // // // // //     className="group relative flex items-center justify-between w-[249px] h-[50px] bg-white rounded-[30px] border border-black pl-5 pr-[5px] overflow-hidden transition-colors hover:bg-gray-100"
// // // // // //   >
// // // // // //     <span className="font-heading text-[18px] text-black uppercase tracking-wide z-10">
// // // // // //       {text}
// // // // // //     </span>
// // // // // //     <div className="w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-95">
// // // // // //       <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // //         <path d="M8.5 1.5L13.5 6.5M13.5 6.5L8.5 11.5M13.5 6.5H1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // // // // //       </svg>
// // // // // //     </div>
// // // // // //   </button>
// // // // // // );

// // // // // // // Individual Card Component
// // // // // // const ProductCard = ({ imageSrc, title, originalPrice, salePrice, delayClass }) => {
// // // // // //   const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

// // // // // //   return (
// // // // // //     <div 
// // // // // //       ref={ref}
// // // // // //       // Added a cubic-bezier timing function to make the tilted slide-in feel premium and organic
// // // // // //       className={`flex flex-col gap-3 md:gap-5 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
// // // // // //         isVisible 
// // // // // //           ? 'opacity-100 translate-y-0 translate-x-0 rotate-0' 
// // // // // //           : 'opacity-0 translate-y-24 -translate-x-12 -rotate-[8deg]'
// // // // // //       } ${delayClass}`}
// // // // // //     >
// // // // // //       {/* Image Wrapper */}
// // // // // //       <div className="relative w-full aspect-[4/5] p-2 md:p-[10px] bg-white rounded-[24px] md:rounded-[30px] overflow-hidden flex flex-col justify-start items-start">
// // // // // //         <img 
// // // // // //           src={imageSrc} 
// // // // // //           alt={title} 
// // // // // //           className="w-full h-full object-cover rounded-[16px] md:rounded-[20px]"
// // // // // //         />
// // // // // //         {/* SALE Badge */}
// // // // // //         <div className="absolute top-4 left-4 md:top-5 md:left-5 bg-[#FE8204] rounded-[80px] md:rounded-[100px] px-4 py-2 md:px-5 md:py-[10px] flex items-center justify-center">
// // // // // //           <span className="font-montserrat font-bold text-white text-[12px] md:text-[16px] leading-none">
// // // // // //             SALE
// // // // // //           </span>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Product Details */}
// // // // // //       <div className="flex flex-col gap-2 md:gap-[10px]">
// // // // // //         <h3 className="font-heading font-bold text-white text-[16px] md:text-[20px] uppercase truncate">
// // // // // //           {title}
// // // // // //         </h3>
// // // // // //         <div className="flex items-center gap-2 md:gap-[10px]">
// // // // // //           <span className="font-montserrat font-light text-white text-[12px] md:text-[16px] line-through opacity-80">
// // // // // //             {originalPrice}
// // // // // //           </span>
// // // // // //           <span className="font-montserrat font-semibold text-white text-[16px] md:text-[20px]">
// // // // // //             {salePrice}
// // // // // //           </span>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default function NewArrivalsSection() {
// // // // // //   const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1 });
// // // // // //   const [btnRef, btnVisible] = useScrollReveal({ threshold: 0.5 });

// // // // // //   // Data mapping based on the text file exports
// // // // // //   const products = [
// // // // // //     {
// // // // // //       title: "Wolves & Rose (Color)",
// // // // // //       originalPrice: "$34,99 USD",
// // // // // //       salePrice: "$29,99 USD",
// // // // // //       imageSrc: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Wolves+%26+Rose",
// // // // // //       delayClass: "md:delay-0" // Triggers immediately on scroll
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Ripped Cross Colored",
// // // // // //       originalPrice: "$29,99 USD",
// // // // // //       salePrice: "$24,99 USD",
// // // // // //       imageSrc: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Ripped+Cross",
// // // // // //       delayClass: "md:delay-[200ms]" // Slight delay for desktop stagger
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Geometric Skull",
// // // // // //       originalPrice: "$29,99 USD",
// // // // // //       salePrice: "$24,99 USD",
// // // // // //       imageSrc: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Geometric+Skull",
// // // // // //       delayClass: "md:delay-[400ms]"
// // // // // //     }
// // // // // //   ];

// // // // // //   return (
// // // // // //     <section className="w-full bg-black py-16 md:py-[100px] overflow-hidden">
// // // // // //       <div className="max-w-[1440px] mx-auto px-6 md:px-[64px]">
        
// // // // // //         {/* Animated Header */}
// // // // // //         <div 
// // // // // //           ref={headerRef}
// // // // // //           className={`mb-10 md:mb-[60px] transition-all duration-1000 ease-out ${
// // // // // //             headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
// // // // // //           }`}
// // // // // //         >
// // // // // //           <h2 className="font-heading text-[36px] md:text-[64px] font-bold uppercase text-white leading-tight">
// // // // // //             New Arrivals
// // // // // //           </h2>
// // // // // //         </div>

// // // // // //         {/* Product Grid */}
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[56px] mb-12 md:mb-[80px]">
// // // // // //           {products.map((product, index) => (
// // // // // //             <ProductCard key={index} {...product} />
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* Action Button Container */}
// // // // // //         <div 
// // // // // //           ref={btnRef}
// // // // // //           className={`flex justify-center transition-all duration-1000 ease-out ${
// // // // // //             btnVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
// // // // // //           }`}
// // // // // //         >
// // // // // //           <ActionButton text="Explore all now" />
// // // // // //         </div>

// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // import React, { useEffect, useRef, useState } from 'react';

// // // // // // // Custom hook to trigger animations when elements scroll into view
// // // // // // const useScrollReveal = (options = { threshold: 0.15 }) => {
// // // // // //   const ref = useRef(null);
// // // // // //   const [isVisible, setIsVisible] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(([entry]) => {
// // // // // //       if (entry.isIntersecting) {
// // // // // //         setIsVisible(true);
// // // // // //         observer.unobserve(entry.target);
// // // // // //       }
// // // // // //     }, options);

// // // // // //     if (ref.current) observer.observe(ref.current);
// // // // // //     return () => {
// // // // // //       if (ref.current) observer.unobserve(ref.current);
// // // // // //     };
// // // // // //   }, [options]);

// // // // // //   return [ref, isVisible];
// // // // // // };

// // // // // // // Reusable Button Component matching the wireframe specs
// // // // // // const ActionButton = ({ text }) => (
// // // // // //   <button 
// // // // // //     className="group relative flex items-center justify-between w-[249px] h-[50px] bg-white rounded-[30px] border border-black pl-5 pr-[5px] overflow-hidden transition-colors hover:bg-gray-100"
// // // // // //   >
// // // // // //     <span className="font-heading text-[18px] text-black uppercase tracking-wide z-10">
// // // // // //       {text}
// // // // // //     </span>
// // // // // //     <div className="w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-95">
// // // // // //       <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // // // //         <path d="M8.5 1.5L13.5 6.5M13.5 6.5L8.5 11.5M13.5 6.5H1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // // // // //       </svg>
// // // // // //     </div>
// // // // // //   </button>
// // // // // // );

// // // // // // // Individual Card Component
// // // // // // const ProductCard = ({ imageSrc, title, originalPrice, salePrice, delayClass }) => {
// // // // // //   const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

// // // // // //   return (
// // // // // //     <div 
// // // // // //       ref={ref}
// // // // // //       // Adjusted the hidden state to tilt right (rotate-[8deg]) and slide from right (translate-x-12)
// // // // // //       className={`flex flex-col gap-3 md:gap-5 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-bottom ${
// // // // // //         isVisible 
// // // // // //           ? 'opacity-100 translate-y-0 translate-x-0 rotate-0' 
// // // // // //           : 'opacity-0 translate-y-24 translate-x-12 rotate-[8deg]' 
// // // // // //       } ${delayClass}`}
// // // // // //     >
// // // // // //       {/* Image Wrapper */}
// // // // // //       <div className="relative w-full aspect-[4/5] p-2 md:p-[10px] bg-white rounded-[24px] md:rounded-[30px] overflow-hidden flex flex-col justify-start items-start">
// // // // // //         <img 
// // // // // //           src={imageSrc} 
// // // // // //           alt={title} 
// // // // // //           className="w-full h-full object-cover rounded-[16px] md:rounded-[20px]"
// // // // // //         />
// // // // // //         {/* SALE Badge */}
// // // // // //         <div className="absolute top-4 left-4 md:top-5 md:left-5 bg-[#FE8204] rounded-[80px] md:rounded-[100px] px-4 py-2 md:px-5 md:py-[10px] flex items-center justify-center">
// // // // // //           <span className="font-montserrat font-bold text-white text-[12px] md:text-[16px] leading-none">
// // // // // //             SALE
// // // // // //           </span>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Product Details */}
// // // // // //       <div className="flex flex-col gap-2 md:gap-[10px]">
// // // // // //         <h3 className="font-heading font-bold text-white text-[16px] md:text-[20px] uppercase truncate">
// // // // // //           {title}
// // // // // //         </h3>
// // // // // //         <div className="flex items-center gap-2 md:gap-[10px]">
// // // // // //           <span className="font-montserrat font-light text-white text-[12px] md:text-[16px] line-through opacity-80">
// // // // // //             {originalPrice}
// // // // // //           </span>
// // // // // //           <span className="font-montserrat font-semibold text-white text-[16px] md:text-[20px]">
// // // // // //             {salePrice}
// // // // // //           </span>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default function NewArrivalsSection() {
// // // // // //   const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1 });
// // // // // //   const [btnRef, btnVisible] = useScrollReveal({ threshold: 0.5 });

// // // // // //   // Data mapping based on the text file exports
// // // // // //   const products = [
// // // // // //     {
// // // // // //       title: "Wolves & Rose (Color)",
// // // // // //       originalPrice: "$34,99 USD",
// // // // // //       salePrice: "$29,99 USD",
// // // // // //       imageSrc: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Wolves+%26+Rose",
// // // // // //       delayClass: "md:delay-0" // Triggers immediately on scroll
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Ripped Cross Colored",
// // // // // //       originalPrice: "$29,99 USD",
// // // // // //       salePrice: "$24,99 USD",
// // // // // //       imageSrc: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Ripped+Cross",
// // // // // //       delayClass: "md:delay-[200ms]" // Slight delay for desktop stagger
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Geometric Skull",
// // // // // //       originalPrice: "$29,99 USD",
// // // // // //       salePrice: "$24,99 USD",
// // // // // //       imageSrc: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Geometric+Skull",
// // // // // //       delayClass: "md:delay-[400ms]"
// // // // // //     }
// // // // // //   ];

// // // // // //   return (
// // // // // //     <section className="w-full bg-black py-16 md:py-[100px] overflow-hidden">
// // // // // //       <div className="max-w-[1440px] mx-auto px-6 md:px-[64px]">
        
// // // // // //         {/* Animated Header */}
// // // // // //         <div 
// // // // // //           ref={headerRef}
// // // // // //           className={`mb-10 md:mb-[60px] transition-all duration-1000 ease-out ${
// // // // // //             headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
// // // // // //           }`}
// // // // // //         >
// // // // // //           <h2 className="font-heading text-[36px] md:text-[64px] font-bold uppercase text-white leading-tight">
// // // // // //             New Arrivals
// // // // // //           </h2>
// // // // // //         </div>

// // // // // //         {/* Product Grid */}
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[56px] mb-12 md:mb-[80px]">
// // // // // //           {products.map((product, index) => (
// // // // // //             <ProductCard key={index} {...product} />
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* Action Button Container */}
// // // // // //         <div 
// // // // // //           ref={btnRef}
// // // // // //           className={`flex justify-center transition-all duration-1000 ease-out ${
// // // // // //             btnVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
// // // // // //           }`}
// // // // // //         >
// // // // // //           <ActionButton text="Explore all now" />
// // // // // //         </div>

// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // import React, { useEffect, useRef, useState } from 'react';

// // // // // // Custom hook to trigger animations when elements scroll into view
// // // // // const useScrollReveal = (options = { threshold: 0.15 }) => {
// // // // //   const ref = useRef(null);
// // // // //   const [isVisible, setIsVisible] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const observer = new IntersectionObserver(([entry]) => {
// // // // //       if (entry.isIntersecting) {
// // // // //         setIsVisible(true);
// // // // //         observer.unobserve(entry.target);
// // // // //       }
// // // // //     }, options);

// // // // //     if (ref.current) observer.observe(ref.current);
// // // // //     return () => {
// // // // //       if (ref.current) observer.unobserve(ref.current);
// // // // //     };
// // // // //   }, [options]);

// // // // //   return [ref, isVisible];
// // // // // };

// // // // // // Individual Card Component
// // // // // const ProductCard = ({ imageSrc, title, originalPrice, salePrice, delayClass }) => {
// // // // //   const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

// // // // //   return (
// // // // //     <div 
// // // // //       ref={ref}
// // // // //       // Added 'group' for hover targeting and updated to a smooth left-to-right slide
// // // // //       className={`group flex flex-col gap-4 md:gap-5 transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
// // // // //         isVisible 
// // // // //           ? 'opacity-100 translate-x-0' 
// // // // //           : 'opacity-0 -translate-x-12' 
// // // // //       } ${delayClass}`}
// // // // //     >
// // // // //       {/* Image Wrapper */}
// // // // //       <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-white rounded-[24px] md:rounded-[32px] overflow-hidden flex justify-center items-center p-6 cursor-pointer">
        
// // // // //         {/* SALE Badge */}
// // // // //         <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#FF7A00] rounded-full px-4 py-1.5 z-10">
// // // // //           <span className="font-bold text-white text-[12px] md:text-[14px] leading-none tracking-wide">
// // // // //             SALE
// // // // //           </span>
// // // // //         </div>

// // // // //         {/* Product Image with Hover Scale */}
// // // // //         <img 
// // // // //           src={imageSrc} 
// // // // //           alt={title} 
// // // // //           // Scale image up when the card group is hovered
// // // // //           className="w-full h-full object-contain transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-110"
// // // // //         />
// // // // //       </div>

// // // // //       {/* Product Details */}
// // // // //       <div className="flex flex-col gap-1 md:gap-2">
// // // // //         <h3 className="font-bold text-white text-[16px] md:text-[18px] uppercase tracking-wide truncate">
// // // // //           {title}
// // // // //         </h3>
// // // // //         <div className="flex items-center gap-2 md:gap-3">
// // // // //           <span className="text-[#888888] text-[14px] md:text-[16px] line-through">
// // // // //             {originalPrice}
// // // // //           </span>
// // // // //           <span className="font-bold text-white text-[16px] md:text-[18px]">
// // // // //             {salePrice}
// // // // //           </span>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default function NewArrivalsSection() {
// // // // //   const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1 });

// // // // //   // Data mapped directly from your wireframes
// // // // //   const products = [
// // // // //     {
// // // // //       title: "WOLVES & ROSE (COLOR)",
// // // // //       originalPrice: "$34.99 USD",
// // // // //       salePrice: "$29.99 USD",
// // // // //       // Replace with your actual asset paths
// // // // //       imageSrc: "/assets/images/ProductCard1.jpg",
// // // // //       delayClass: "md:delay-0" 
// // // // //     },
// // // // //     {
// // // // //       title: "RIPPED CROSS COLORED",
// // // // //       originalPrice: "$29.99 USD",
// // // // //       salePrice: "$24.99 USD",
// // // // //       imageSrc: "/assets/images/ProductCard2.jpg",
// // // // //       delayClass: "md:delay-[200ms]" 
// // // // //     },
// // // // //     {
// // // // //       title: "SNAKE SKULL COMPASS (COLORED)",
// // // // //       originalPrice: "$29.99 USD",
// // // // //       salePrice: "$24.99 USD",
// // // // //       imageSrc: "/assets/images/ProductCard3.jpg",
// // // // //       delayClass: "md:delay-[400ms]"
// // // // //     }
// // // // //   ];

// // // // //   return (
// // // // //     <section className="w-full bg-black py-16 md:py-[100px] overflow-hidden">
// // // // //       <div className="max-w-[1440px] mx-auto px-6 md:px-[64px]">
        
// // // // //         {/* Animated Header */}
// // // // //         <div 
// // // // //           ref={headerRef}
// // // // //           className={`mb-10 md:mb-[60px] transition-all duration-1000 ease-out ${
// // // // //             headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
// // // // //           }`}
// // // // //         >
// // // // //           <h2 className="text-[36px] md:text-[64px] font-bold uppercase text-white leading-tight tracking-tight">
// // // // //             NEW ARRIVALS
// // // // //           </h2>
// // // // //         </div>

// // // // //         {/* Product Grid */}
// // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[40px]">
// // // // //           {products.map((product, index) => (
// // // // //             <ProductCard key={index} {...product} />
// // // // //           ))}
// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // import React, { useEffect, useRef, useState } from 'react';

// // // // // Custom hook to trigger animations when elements scroll into view
// // // // const useScrollReveal = (options = { threshold: 0.15 }) => {
// // // //   const ref = useRef(null);
// // // //   const [isVisible, setIsVisible] = useState(false);

// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(([entry]) => {
// // // //       if (entry.isIntersecting) {
// // // //         setIsVisible(true);
// // // //         observer.unobserve(entry.target);
// // // //       }
// // // //     }, options);

// // // //     if (ref.current) observer.observe(ref.current);
// // // //     return () => {
// // // //       if (ref.current) observer.unobserve(ref.current);
// // // //     };
// // // //   }, [options]);

// // // //   return [ref, isVisible];
// // // // };

// // // // // Individual Card Component
// // // // const ProductCard = ({ imageSrc, title, originalPrice, salePrice, delayClass }) => {
// // // //   const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

// // // //   return (
// // // //     <div 
// // // //       ref={ref}
// // // //       // Updated Animation: Slides from left (-translate-x-48), starts tilted right (rotate-[12deg]), and straightens out (rotate-0)
// // // //       className={`group flex flex-col gap-4 md:gap-5 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] transform origin-bottom-left ${
// // // //         isVisible 
// // // //           ? 'opacity-100 translate-x-0 rotate-0' 
// // // //           : 'opacity-0 -translate-x-48 rotate-[12deg]' 
// // // //       } ${delayClass}`}
// // // //     >
// // // //       {/* Image Wrapper */}
// // // //       <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-white rounded-[24px] md:rounded-[32px] overflow-hidden flex justify-center items-center p-6 cursor-pointer">
        
// // // //         {/* SALE Badge */}
// // // //         <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#FF7A00] rounded-full px-4 py-1.5 z-10">
// // // //           <span className="font-bold text-white text-[12px] md:text-[14px] leading-none tracking-wide">
// // // //             SALE
// // // //           </span>
// // // //         </div>

// // // //         {/* Product Image with Hover Scale */}
// // // //         <img 
// // // //           src={imageSrc} 
// // // //           alt={title} 
// // // //           // Scale image up when the card group is hovered
// // // //           className="w-full h-full object-contain transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-110"
// // // //         />
// // // //       </div>

// // // //       {/* Product Details */}
// // // //       <div className="flex flex-col gap-1 md:gap-2">
// // // //         <h3 className="font-bold text-white text-[16px] md:text-[18px] uppercase tracking-wide truncate">
// // // //           {title}
// // // //         </h3>
// // // //         <div className="flex items-center gap-2 md:gap-3">
// // // //           <span className="text-[#888888] text-[14px] md:text-[16px] line-through">
// // // //             {originalPrice}
// // // //           </span>
// // // //           <span className="font-bold text-white text-[16px] md:text-[18px]">
// // // //             {salePrice}
// // // //           </span>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default function NewArrivalsSection() {
// // // //   const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1 });

// // // //   // Data mapped directly from your wireframes
// // // //   const products = [
// // // //     {
// // // //       title: "WOLVES & ROSE (COLOR)",
// // // //       originalPrice: "$34.99 USD",
// // // //       salePrice: "$29.99 USD",
// // // //       imageSrc: "https://placehold.co/400x500/ffffff/a3a3a3?text=Wolves+%26+Rose",
// // // //       delayClass: "md:delay-0" // First card triggers immediately
// // // //     },
// // // //     {
// // // //       title: "RIPPED CROSS COLORED",
// // // //       originalPrice: "$29.99 USD",
// // // //       salePrice: "$24.99 USD",
// // // //       imageSrc: "https://placehold.co/400x500/ffffff/a3a3a3?text=Ripped+Cross",
// // // //       delayClass: "md:delay-[200ms]" // Second card follows slightly after
// // // //     },
// // // //     {
// // // //       title: "SNAKE SKULL COMPASS (COLORED)",
// // // //       originalPrice: "$29.99 USD",
// // // //       salePrice: "$24.99 USD",
// // // //       imageSrc: "https://placehold.co/400x500/ffffff/a3a3a3?text=Snake+Skull",
// // // //       delayClass: "md:delay-[400ms]" // Third card completes the cascade
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <section className="w-full bg-black py-16 md:py-[100px] overflow-hidden">
// // // //       <div className="max-w-[1440px] mx-auto px-6 md:px-[64px]">
        
// // // //         {/* Animated Header */}
// // // //         <div 
// // // //           ref={headerRef}
// // // //           className={`mb-10 md:mb-[60px] transition-all duration-1000 ease-out ${
// // // //             headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
// // // //           }`}
// // // //         >
// // // //           <h2 className="text-[36px] md:text-[64px] font-bold uppercase text-white leading-tight tracking-tight">
// // // //             NEW ARRIVALS
// // // //           </h2>
// // // //         </div>

// // // //         {/* Product Grid */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[40px]">
// // // //           {products.map((product, index) => (
// // // //             <ProductCard key={index} {...product} />
// // // //           ))}
// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // import React, { useEffect, useRef, useState } from 'react';

// // // // Custom hook to trigger animations when elements scroll into view
// // // const useScrollReveal = (options = { threshold: 0.15 }) => {
// // //   const ref = useRef(null);
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(([entry]) => {
// // //       if (entry.isIntersecting) {
// // //         setIsVisible(true);
// // //         observer.unobserve(entry.target);
// // //       }
// // //     }, options);

// // //     if (ref.current) observer.observe(ref.current);
// // //     return () => {
// // //       if (ref.current) observer.unobserve(ref.current);
// // //     };
// // //   }, [options]);

// // //   return [ref, isVisible];
// // // };

// // // // Individual Card Component
// // // const ProductCard = ({ imageSrc, title, originalPrice, salePrice, delayClass }) => {
// // //   const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

// // //   return (
// // //     <div 
// // //       ref={ref}
// // //       // Animation: Starts far left, tilted 15 degrees right. 
// // //       // 1500ms duration with a strong ease-out for a slow, settling finish.
// // //       className={`group flex flex-col gap-4 md:gap-5 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-left ${
// // //         isVisible 
// // //           ? 'opacity-100 translate-x-0 rotate-0' 
// // //           : 'opacity-0 -translate-x-[150%] rotate-[15deg]' 
// // //       } ${delayClass}`}
// // //     >
// // //       {/* Image Wrapper */}
// // //       <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-white rounded-[24px] md:rounded-[32px] overflow-hidden flex justify-center items-center p-6 cursor-pointer">
        
// // //         {/* SALE Badge */}
// // //         <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#FF7A00] rounded-full px-4 py-1.5 z-10">
// // //           <span className="font-bold text-white text-[12px] md:text-[14px] leading-none tracking-wide">
// // //             SALE
// // //           </span>
// // //         </div>

// // //         {/* Product Image with Hover Scale */}
// // //         <img 
// // //           src={imageSrc} 
// // //           alt={title} 
// // //           className="w-full h-full object-contain transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-110"
// // //         />
// // //       </div>

// // //       {/* Product Details */}
// // //       <div className="flex flex-col gap-1 md:gap-2">
// // //         <h3 className="font-bold text-white text-[16px] md:text-[18px] uppercase tracking-wide truncate">
// // //           {title}
// // //         </h3>
// // //         <div className="flex items-center gap-2 md:gap-3">
// // //           <span className="text-[#888888] text-[14px] md:text-[16px] line-through">
// // //             {originalPrice}
// // //           </span>
// // //           <span className="font-bold text-white text-[16px] md:text-[18px]">
// // //             {salePrice}
// // //           </span>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default function NewArrivalsSection() {
// // //   const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1 });

// // //   // Increased stagger gaps (0ms -> 300ms -> 600ms) for a clearer follow-the-leader effect
// // //   const products = [
// // //     {
// // //       title: "WOLVES & ROSE (COLOR)",
// // //       originalPrice: "$34.99 USD",
// // //       salePrice: "$29.99 USD",
// // //       imageSrc: "https://placehold.co/400x500/ffffff/a3a3a3?text=Wolves+%26+Rose",
// // //       delayClass: "delay-0" 
// // //     },
// // //     {
// // //       title: "RIPPED CROSS COLORED",
// // //       originalPrice: "$29.99 USD",
// // //       salePrice: "$24.99 USD",
// // //       imageSrc: "https://placehold.co/400x500/ffffff/a3a3a3?text=Ripped+Cross",
// // //       delayClass: "delay-[300ms]" 
// // //     },
// // //     {
// // //       title: "SNAKE SKULL COMPASS (COLORED)",
// // //       originalPrice: "$29.99 USD",
// // //       salePrice: "$24.99 USD",
// // //       imageSrc: "https://placehold.co/400x500/ffffff/a3a3a3?text=Snake+Skull",
// // //       delayClass: "delay-[600ms]" 
// // //     }
// // //   ];

// // //   return (
// // //     // overflow-hidden on the section prevents the -translate-x-[150%] from causing horizontal scrollbars
// // //     <section className="w-full bg-black py-16 md:py-[100px] overflow-hidden">
// // //       <div className="max-w-[1440px] mx-auto px-6 md:px-[64px]">
        
// // //         {/* Animated Header */}
// // //         <div 
// // //           ref={headerRef}
// // //           className={`mb-10 md:mb-[60px] transition-all duration-[1200ms] ease-out ${
// // //             headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
// // //           }`}
// // //         >
// // //           <h2 className="text-[36px] md:text-[64px] font-bold uppercase text-white leading-tight tracking-tight">
// // //             NEW ARRIVALS
// // //           </h2>
// // //         </div>

// // //         {/* Product Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[40px]">
// // //           {products.map((product, index) => (
// // //             <ProductCard key={index} {...product} />
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import React, { useEffect, useRef, useState } from 'react';

// // // Custom hook to trigger animations when elements scroll into view
// // const useScrollReveal = (options = { threshold: 0.15 }) => {
// //   const ref = useRef(null);
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(([entry]) => {
// //       if (entry.isIntersecting) {
// //         setIsVisible(true);
// //         observer.unobserve(entry.target);
// //       }
// //     }, options);

// //     if (ref.current) observer.observe(ref.current);
// //     return () => {
// //       if (ref.current) observer.unobserve(ref.current);
// //     };
// //   }, [options]);

// //   return [ref, isVisible];
// // };

// // // Individual Card Component
// // const ProductCard = ({ imageSrc, title, originalPrice, salePrice }) => {
// //   const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

// //   return (
// //     <div 
// //       ref={ref}
// //       // Animation: Starts translated left, tilted 15 degrees right. Moves simultaneously.
// //       className={`group flex flex-col gap-4 md:gap-5 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom-left ${
// //         isVisible 
// //           ? 'opacity-100 translate-x-0 rotate-0' 
// //           : 'opacity-0 -translate-x-[100%] rotate-[15deg]' 
// //       }`}
// //     >
// //       {/* Image Wrapper */}
// //       <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-white rounded-[24px] md:rounded-[32px] overflow-hidden flex justify-center items-center p-6 cursor-pointer">
        
// //         {/* SALE Badge */}
// //         <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#FF7A00] rounded-full px-4 py-1.5 z-20">
// //           <span className="font-bold text-white text-[12px] md:text-[14px] leading-none tracking-wide">
// //             SALE
// //           </span>
// //         </div>

// //         {/* Product Image: Scales down while sliding in, scales up on hover */}
// //         <img 
// //           src={imageSrc} 
// //           alt={title} 
// //           className={`w-full h-full object-contain transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
// //             isVisible ? 'scale-100 group-hover:scale-110' : 'scale-[1.3]'
// //           }`}
// //         />
// //       </div>

// //       {/* Product Details */}
// //       <div className="flex flex-col gap-1 md:gap-2">
// //         <h3 className="font-bold text-white text-[16px] md:text-[18px] uppercase tracking-wide truncate">
// //           {title}
// //         </h3>
// //         <div className="flex items-center gap-2 md:gap-3">
// //           <span className="text-[#888888] text-[14px] md:text-[16px] line-through">
// //             {originalPrice}
// //           </span>
// //           <span className="font-bold text-white text-[16px] md:text-[18px]">
// //             {salePrice}
// //           </span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default function NewArrivalsSection() {
// //   const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1 });

// //   // Data mapped directly from your wireframes - delays removed for simultaneous movement
// //   const products = [
// //     {
// //       title: "WOLVES & ROSE (COLOR)",
// //       originalPrice: "$34.99 USD",
// //       salePrice: "$29.99 USD",
// //       imageSrc: "assets/images/ProductCard1.jpg",
// //     },
// //     {
// //       title: "RIPPED CROSS COLORED",
// //       originalPrice: "$29.99 USD",
// //       salePrice: "$24.99 USD",
// //       imageSrc: "assets/images/ProductCard2.jpg",
// //     },
// //     {
// //       title: "SNAKE SKULL COMPASS (COLORED)",
// //       originalPrice: "$29.99 USD",
// //       salePrice: "$24.99 USD",
// //       imageSrc: "assets/images/ProductCard3.jpg",
// //     }
// //   ];

// //   return (
// //     <section className="w-full bg-black py-16 md:py-[100px] overflow-hidden">
// //       <div className="max-w-[1440px] mx-auto px-6 md:px-[64px]">
        
// //         {/* Animated Header */}
// //         <div 
// //           ref={headerRef}
// //           className={`mb-10 md:mb-[60px] transition-all duration-[1200ms] ease-out ${
// //             headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
// //           }`}
// //         >
// //           <h2 className="text-[36px] md:text-[64px] font-bold uppercase text-white leading-tight tracking-tight">
// //             NEW ARRIVALS
// //           </h2>
// //         </div>

// //         {/* Product Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[40px]">
// //           {products.map((product, index) => (
// //             <ProductCard key={index} {...product} />
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// import React, { useEffect, useRef, useState } from 'react';

// // Custom hook to trigger animations when elements scroll into view
// const useScrollReveal = (options = { threshold: 0.15 }) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsVisible(true);
//         observer.unobserve(entry.target);
//       }
//     }, options);

//     if (ref.current) observer.observe(ref.current);
//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, [options]);

//   return [ref, isVisible];
// };

// // Individual Card Component
// const ProductCard = ({ imageSrc, title, originalPrice, salePrice, index }) => {
//   const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

//   // Determine if the card is even (0, 2) or odd (1)
//   const isEven = index % 2 === 0;

//   // Mobile: Even indexes slide from left, Odd indexes slide from right.
//   // Desktop (md:): ALL cards override to slide from the left (-translate-x-[100%]).
//   const hiddenTransformClasses = isEven 
//     ? '-translate-x-[100%] rotate-[15deg]' 
//     : 'translate-x-[100%] -rotate-[15deg] md:-translate-x-[100%] md:rotate-[15deg]';
    
//   // Adjust the transform origin so the right-to-left cards swing naturally from the bottom-right
//   const originClass = isEven
//     ? 'origin-bottom-left'
//     : 'origin-bottom-right md:origin-bottom-left';

//   return (
//     <div 
//       ref={ref}
//       className={`group flex flex-col gap-4 md:gap-5 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${originClass} ${
//         isVisible 
//           ? 'opacity-100 translate-x-0 rotate-0' 
//           : `opacity-0 ${hiddenTransformClasses}` 
//       }`}
//     >
//       {/* Image Wrapper */}
//       <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-white rounded-[24px] md:rounded-[32px] overflow-hidden flex justify-center items-center p-6 cursor-pointer">
        
//         {/* SALE Badge */}
//         <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#FF7A00] rounded-full px-4 py-1.5 z-20">
//           <span className="font-bold text-white text-[12px] md:text-[14px] leading-none tracking-wide">
//             SALE
//           </span>
//         </div>

//         {/* Product Image: Scales down while sliding in, scales up on hover */}
//         <img 
//           src={imageSrc} 
//           alt={title} 
//           className={`w-full h-full object-contain transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
//             isVisible ? 'scale-100 group-hover:scale-110' : 'scale-[1.3]'
//           }`}
//         />
//       </div>

//       {/* Product Details */}
//       <div className="flex flex-col gap-1 md:gap-2">
//         <h3 className="font-bold text-white text-[16px] md:text-[18px] uppercase tracking-wide truncate">
//           {title}
//         </h3>
//         <div className="flex items-center gap-2 md:gap-3">
//           <span className="text-[#888888] text-[14px] md:text-[16px] line-through">
//             {originalPrice}
//           </span>
//           <span className="font-bold text-white text-[16px] md:text-[18px]">
//             {salePrice}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function NewArrivalsSection() {
//   const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1 });
//     const [btnRef, btnVisible] = useScrollReveal({ threshold: 0.5 });
//   const products = [
//     {
//       title: "WOLVES & ROSE (COLOR)",
//       originalPrice: "$34.99 USD",
//       salePrice: "$29.99 USD",
//       imageSrc: "https://placehold.co/400x500/ffffff/a3a3a3?text=Wolves+%26+Rose",
//     },
//     {
//       title: "RIPPED CROSS COLORED",
//       originalPrice: "$29.99 USD",
//       salePrice: "$24.99 USD",
//       imageSrc: "https://placehold.co/400x500/ffffff/a3a3a3?text=Ripped+Cross",
//     },
//     {
//       title: "SNAKE SKULL COMPASS (COLORED)",
//       originalPrice: "$29.99 USD",
//       salePrice: "$24.99 USD",
//       imageSrc: "https://placehold.co/400x500/ffffff/a3a3a3?text=Snake+Skull",
//     }
//   ];

//   return (
//     <section className="w-full bg-black py-16 md:py-[100px] overflow-hidden">
//       <div className="max-w-[1440px] mx-auto px-6 md:px-[64px]">
        
//         {/* Animated Header */}
//         <div 
//           ref={headerRef}
//           className={`mb-10 md:mb-[60px] transition-all duration-[1200ms] ease-out ${
//             headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
//           }`}
//         >
//           <h2 className="text-[36px] md:text-[64px] font-bold uppercase text-white leading-tight tracking-tight">
//             NEW ARRIVALS
//           </h2>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[40px]">
//           {/* {products.map((product, index) => (
           
//             <ProductCard key={index} index={index} {...product} />
//           ))} */}
//            {products.map((product, index) => (
//                 <ProductCard key={index}  index={index} {...product} />
//             ))}
//         </div>

//         <div 
//           ref={btnRef}
//           className={`flex justify-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
//             btnVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//           }`}
//         >
//           <ActionButton text="Explore all now" />
//         </div>

//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from 'react';

// Custom hook to trigger animations when elements scroll into view
const useScrollReveal = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible];
};

// Reusable Button Component matching the wireframe specs
const ActionButton = ({ text }) => (
  <button 
    className="group relative flex items-center justify-between w-[249px] h-[50px] bg-white rounded-[30px] border border-black pl-5 pr-[5px] overflow-hidden transition-colors hover:bg-gray-200"
  >
    <span className="font-bold text-[14px] md:text-[16px] text-black uppercase tracking-wide z-10">
      {text}
    </span>
    <div className="w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-95">
      <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 1.5L13.5 6.5M13.5 6.5L8.5 11.5M13.5 6.5H1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </button>
);

// Individual Card Component
const ProductCard = ({ imageSrc, title, originalPrice, salePrice, index }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  // Determine if the card is even (0, 2) or odd (1)
  const isEven = index % 2 === 0;

  // Mobile: Even indexes slide from left, Odd indexes slide from right.
  // Desktop (md:): ALL cards override to slide from the left (-translate-x-[100%]).
  const hiddenTransformClasses = isEven 
    ? '-translate-x-[100%] rotate-[15deg]' 
    : 'translate-x-[100%] -rotate-[15deg] md:-translate-x-[100%] md:rotate-[15deg]';
    
  // Adjust the transform origin so the right-to-left cards swing naturally
  const originClass = isEven
    ? 'origin-bottom-left'
    : 'origin-bottom-right md:origin-bottom-left';

  return (
    <div 
      ref={ref}
      className={`group flex flex-col gap-4 md:gap-5 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${originClass} ${
        isVisible 
          ? 'opacity-100 translate-x-0 rotate-0' 
          : `opacity-0 ${hiddenTransformClasses}` 
      }`}
    >
      {/* Image Wrapper */}
      <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-white rounded-[24px] md:rounded-[32px] overflow-hidden flex justify-center items-center p-6 cursor-pointer">
        
        {/* SALE Badge */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#FF7A00] rounded-full px-4 py-1.5 z-20">
          <span className="font-bold text-white text-[12px] md:text-[14px] leading-none tracking-wide">
            SALE
          </span>
        </div>

        {/* Product Image: Scales down while sliding in, scales up on hover */}
        <img 
          src={imageSrc} 
          alt={title} 
          className={`w-full h-full object-contain transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isVisible ? 'scale-100 group-hover:scale-110' : 'scale-[1.3]'
          }`}
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-1 md:gap-2">
        <h3 className="font-bold text-white text-[16px] md:text-[18px] uppercase tracking-wide truncate">
          {title}
        </h3>
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-[#888888] text-[14px] md:text-[16px] line-through">
            {originalPrice}
          </span>
          <span className="font-bold text-white text-[16px] md:text-[18px]">
            {salePrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function NewArrivalsSection() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1 });
  const [btnRef, btnVisible] = useScrollReveal({ threshold: 0.5 }); // Button triggers when slightly more visible

  const products = [
    {
      title: "WOLVES & ROSE (COLOR)",
      originalPrice: "$34.99 USD",
      salePrice: "$29.99 USD",
      imageSrc: "assets/images/ProductCard1.jpg",
    },
    {
      title: "RIPPED CROSS COLORED",
      originalPrice: "$29.99 USD",
      salePrice: "$24.99 USD",
      imageSrc: "assets/images/ProductCard2.jpg",
    },
    {
      title: "SNAKE SKULL COMPASS (COLORED)",
      originalPrice: "$29.99 USD",
      salePrice: "$24.99 USD",
      imageSrc: "assets/images/ProductCard3.jpg",
    }
  ];

  return (
    <section className="w-full bg-black py-16 md:py-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[64px]">
        
        {/* Animated Header */}
        <div 
          ref={headerRef}
          className={`mb-10 md:mb-[60px] transition-all duration-[1200ms] ease-out ${
            headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <h2 className="text-[36px] md:text-[64px] font-bold uppercase text-white leading-tight tracking-tight">
            NEW ARRIVALS
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[40px] mb-12 md:mb-[60px]">
          {products.map((product, index) => (
            <ProductCard key={index} index={index} {...product} />
          ))}
        </div>

        {/* Action Button Container */}
        <div 
          ref={btnRef}
          className={`flex justify-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            btnVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <ActionButton text="Explore all now" />
        </div>

      </div>
    </section>
  );
}