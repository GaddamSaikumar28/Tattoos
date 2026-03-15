// // // // // import React from "react";

// // // // // const NewArrivalsProducts = () => {
// // // // //   // Mock data representing the 3 cards shown in the desktop wireframe
// // // // //   const products = [
// // // // //     {
// // // // //       id: 1,
// // // // //       title: "Colored Botanical Butterfly",
// // // // //       oldPrice: "$22.99 USD",
// // // // //       newPrice: "$17.99 USD",
// // // // //       sale: true,
// // // // //       image: "https://placehold.co/400x500/121212/ffffff?text=Butterfly",
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       title: "Celestial Mischief Duo",
// // // // //       oldPrice: "$19.99 USD",
// // // // //       newPrice: "$14.99 USD",
// // // // //       sale: true,
// // // // //       image: "https://placehold.co/400x500/121212/ffffff?text=Duo",
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       title: "Botanical Phoenix",
// // // // //       oldPrice: "$19.99 USD",
// // // // //       newPrice: "$14.99 USD",
// // // // //       sale: true,
// // // // //       image: "https://placehold.co/400x500/121212/ffffff?text=Phoenix",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <section className="w-full bg-black text-white relative py-12 md:py-24 px-4 md:px-[64px] overflow-hidden">
// // // // //       <div className="max-w-[1312px] mx-auto flex flex-col gap-9 md:gap-[36px]">
        
// // // // //         {/* --- HEADER & FILTERS --- */}
// // // // //         <div className="flex flex-col md:flex-row md:justify-between md:items-end w-full">
// // // // //           {/* Title (Top Left) */}
// // // // //           <h2 className="font-heading text-[36px] md:text-hero uppercase leading-none mb-6 md:mb-0">
// // // // //             New Arrivals
// // // // //           </h2>

// // // // //           {/* Filters & Sort (Top Right) */}
// // // // //           <div className="flex justify-between md:justify-end items-center gap-4 w-full md:w-auto">
// // // // //             <button className="flex items-center justify-center gap-3 border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors w-1/2 md:w-auto cursor-pointer">
// // // // //               {/* Filter Icon */}
// // // // //               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // //                 <line x1="4" y1="21" x2="4" y2="14"></line>
// // // // //                 <line x1="4" y1="10" x2="4" y2="3"></line>
// // // // //                 <line x1="12" y1="21" x2="12" y2="12"></line>
// // // // //                 <line x1="12" y1="8" x2="12" y2="3"></line>
// // // // //                 <line x1="20" y1="21" x2="20" y2="16"></line>
// // // // //                 <line x1="20" y1="12" x2="20" y2="3"></line>
// // // // //                 <line x1="1" y1="14" x2="7" y2="14"></line>
// // // // //                 <line x1="9" y1="8" x2="15" y2="8"></line>
// // // // //                 <line x1="17" y1="16" x2="23" y2="16"></line>
// // // // //               </svg>
// // // // //               <span className="font-['Montserrat'] font-normal text-sm md:text-base">Filters</span>
// // // // //             </button>

// // // // //             <button className="flex items-center justify-center gap-3 border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors w-1/2 md:w-auto cursor-pointer">
// // // // //               <span className="font-['Montserrat'] font-normal text-sm md:text-base">Sort by</span>
// // // // //               {/* Chevron Icon */}
// // // // //               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // // //                 <polyline points="6 9 12 15 18 9"></polyline>
// // // // //               </svg>
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* --- PRODUCT GRID --- */}
// // // // //         {/* Exact gaps defined in Figma: 56px between cards on desktop */}
// // // // //         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-[56px] w-full">
// // // // //           {products.map((product) => (
// // // // //             <div key={product.id} className="flex flex-col gap-[20px] group cursor-pointer">
              
// // // // //               {/* Image Container (White Frame) */}
// // // // //               <div className="relative w-full aspect-[400/500] bg-white rounded-[12px] md:rounded-[30px] p-2 md:p-[10px]">
                
// // // // //                 {/* Inner Wrapper for scale effect (prevents corner breaking) */}
// // // // //                 <div className="w-full h-full rounded-[8px] md:rounded-[20px] overflow-hidden relative">
// // // // //                   <img
// // // // //                     src={product.image}
// // // // //                     alt={product.title}
// // // // //                     className="w-full h-full object-cover transition-transform duration-500 ease-out md:group-hover:scale-110"
// // // // //                   />
                  
// // // // //                   {/* Dark overlay for extra contrast if desired (optional) */}
// // // // //                   <div className="absolute inset-0 bg-black/5 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
// // // // //                 </div>

// // // // //                 {/* SALE Badge positioned relative to the white card, not the scaling image */}
// // // // //                 {product.sale && (
// // // // //                   <div className="absolute top-[20px] left-[20px] md:top-[30px] md:left-[30px] bg-[var(--color-primary)] text-white px-3 py-1 md:px-5 md:py-2 rounded-[50px] z-10 shadow-sm flex justify-center items-center">
// // // // //                     <span className="font-['Montserrat'] font-bold text-[10px] md:text-[16px] tracking-wide leading-none">
// // // // //                       SALE
// // // // //                     </span>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>

// // // // //               {/* Product Info */}
// // // // //               <div className="flex flex-col gap-[8px]">
// // // // //                 <h3 className="font-heading text-[16px] md:text-[20px] uppercase text-white truncate">
// // // // //                   {product.title}
// // // // //                 </h3>
                
// // // // //                 <div className="flex items-center gap-[12px]">
// // // // //                   <span className="font-['Montserrat'] font-light text-[12px] md:text-[16px] line-through text-[#A3A3A3]">
// // // // //                     {product.oldPrice}
// // // // //                   </span>
// // // // //                   <span className="font-['Montserrat'] font-semibold text-[16px] md:text-[20px] text-white">
// // // // //                     {product.newPrice}
// // // // //                   </span>
// // // // //                 </div>
// // // // //               </div>

// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* --- BOTTOM NAVIGATION --- */}
// // // // //         <div className="flex items-center justify-between mt-[10px] md:mt-[20px] w-full">
          
// // // // //           {/* Pagination Dots (Bottom Left) */}
// // // // //           <div className="flex gap-[12px] items-center">
// // // // //             <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-white cursor-pointer hover:scale-110 transition-transform"></div>
// // // // //             <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#494949] cursor-pointer hover:bg-gray-400 transition-colors"></div>
// // // // //             <div className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#494949] cursor-pointer hover:bg-gray-400 transition-colors"></div>
// // // // //           </div>

// // // // //           {/* Left/Right Arrows (Bottom Right) */}
// // // // //           <div className="flex gap-[16px]">
// // // // //             <button className="w-10 h-10 md:w-[56px] md:h-[56px] rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer group">
// // // // //                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
// // // // //                 <line x1="19" y1="12" x2="5" y2="12"></line>
// // // // //                 <polyline points="12 19 5 12 12 5"></polyline>
// // // // //               </svg>
// // // // //             </button>
// // // // //             <button className="w-10 h-10 md:w-[56px] md:h-[56px] rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer group">
// // // // //                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
// // // // //                 <line x1="5" y1="12" x2="19" y2="12"></line>
// // // // //                 <polyline points="12 5 19 12 12 19"></polyline>
// // // // //               </svg>
// // // // //             </button>
// // // // //           </div>

// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default NewArrivalsProducts;


// // // // import React, { useState } from 'react';

// // // // const products = [
// // // //   {
// // // //     id: 1,
// // // //     name: 'Celestial Mischief Duo',
// // // //     originalPrice: '$19.99 USD',
// // // //     salePrice: '$14.99 USD',
// // // //     isSale: true,
// // // //     image: 'https://placehold.co/400x500/111/fff?text=Tattoo+1',
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: 'Botanical Phoenix',
// // // //     originalPrice: '$19.99 USD',
// // // //     salePrice: '$14.99 USD',
// // // //     isSale: true,
// // // //     image: 'https://placehold.co/400x500/111/fff?text=Tattoo+2',
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     name: 'Midnight Serenade',
// // // //     originalPrice: null,
// // // //     salePrice: '$18.99 USD',
// // // //     isSale: false,
// // // //     image: 'https://placehold.co/400x500/111/fff?text=Tattoo+3',
// // // //   }
// // // // ];

// // // // export default function NewArrivalsProducts() {
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const totalPages = 4;

// // // //   return (
// // // //     <div className="min-h-screen bg-black w-full flex justify-center py-24 font-['Montserrat'] text-white">
// // // //       {/* Main Container - strictly bound to 1312px as per Figma specs */}
// // // //       <div className="w-full max-w-[1312px] flex flex-col gap-12 px-8 xl:px-0">
        
// // // //         {/* Header Section: Title + Sort/Filter */}
// // // //         <div className="flex justify-between items-end">
// // // //           <h1 className="text-5xl font-bold font-['Almarena'] uppercase tracking-wide">
// // // //             New Arrivals
// // // //           </h1>
          
// // // //           <div className="flex items-center gap-6">
// // // //             <button className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-gray-300 transition-colors">
// // // //               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //                 <line x1="4" y1="21" x2="4" y2="14"></line>
// // // //                 <line x1="4" y1="10" x2="4" y2="3"></line>
// // // //                 <line x1="12" y1="21" x2="12" y2="12"></line>
// // // //                 <line x1="12" y1="8" x2="12" y2="3"></line>
// // // //                 <line x1="20" y1="21" x2="20" y2="16"></line>
// // // //                 <line x1="20" y1="12" x2="20" y2="3"></line>
// // // //                 <line x1="1" y1="14" x2="7" y2="14"></line>
// // // //                 <line x1="9" y1="8" x2="15" y2="8"></line>
// // // //                 <line x1="17" y1="16" x2="23" y2="16"></line>
// // // //               </svg>
// // // //               Filter
// // // //             </button>
// // // //             <button className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-gray-300 transition-colors">
// // // //               Sort By
// // // //               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //                 <polyline points="6 9 12 15 18 9"></polyline>
// // // //               </svg>
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Product Grid - 3 Columns with 56px (gap-14) gap */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
// // // //           {products.map((product) => (
// // // //             <div key={product.id} className="group flex flex-col gap-5 cursor-pointer">
              
// // // //               {/* Image Container with the 10px white padding and border-radius */}
// // // //               <div className="relative w-full h-[500px] bg-white p-[10px] rounded-[30px] overflow-hidden">
// // // //                 {product.isSale && (
// // // //                   <div className="absolute top-6 left-6 z-10 bg-black text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
// // // //                     Sale
// // // //                   </div>
// // // //                 )}
// // // //                 <div className="w-full h-full rounded-[20px] overflow-hidden">
// // // //                   <img 
// // // //                     src={product.image} 
// // // //                     alt={product.name}
// // // //                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
// // // //                   />
// // // //                 </div>
// // // //               </div>

// // // //               {/* Product Info */}
// // // //               <div className="flex flex-col gap-1">
// // // //                 {product.isSale && (
// // // //                   <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
// // // //                     Sale
// // // //                   </span>
// // // //                 )}
// // // //                 <h3 className="text-xl font-bold font-['Almarena'] uppercase mt-1">
// // // //                   {product.name}
// // // //                 </h3>
// // // //                 <div className="flex items-center gap-3 mt-1">
// // // //                   {product.originalPrice && (
// // // //                     <span className="text-base font-light line-through text-gray-400">
// // // //                       {product.originalPrice}
// // // //                     </span>
// // // //                   )}
// // // //                   <span className="text-xl font-semibold">
// // // //                     {product.salePrice}
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Pagination Section */}
// // // //         <div className="flex justify-between items-center mt-8 border-t border-white/20 pt-8">
// // // //           {/* Left: Dots */}
// // // //           <div className="flex gap-3">
// // // //             {Array.from({ length: totalPages }).map((_, index) => (
// // // //               <button 
// // // //                 key={index}
// // // //                 onClick={() => setCurrentPage(index + 1)}
// // // //                 className={`h-2.5 rounded-full transition-all duration-300 ${
// // // //                   currentPage === index + 1 ? 'w-8 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/60'
// // // //                 }`}
// // // //                 aria-label={`Go to page ${index + 1}`}
// // // //               />
// // // //             ))}
// // // //           </div>

// // // //           {/* Right: Arrows */}
// // // //           <div className="flex gap-4">
// // // //             <button 
// // // //               onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
// // // //               disabled={currentPage === 1}
// // // //               className="w-12 h-12 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-white"
// // // //             >
// // // //               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //                 <polyline points="15 18 9 12 15 6"></polyline>
// // // //               </svg>
// // // //             </button>
// // // //             <button 
// // // //               onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
// // // //               disabled={currentPage === totalPages}
// // // //               className="w-12 h-12 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-white"
// // // //             >
// // // //               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // // //                 <polyline points="9 18 15 12 9 6"></polyline>
// // // //               </svg>
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useState } from 'react';
// // // import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

// // // const products = [
// // //   { id: 1, title: 'Lotus Infinity Trail', oldPrice: '$19,99 USD', newPrice: '$14,99 USD', image: 'https://placehold.co/400x500', sale: true },
// // //   { id: 2, title: 'Jesus Christ Religious Art', oldPrice: '$34,99 USD', newPrice: '$24,99 USD', image: 'https://placehold.co/400x500', sale: true },
// // //   { id: 3, title: 'Colored King of the Jungle (colored)', oldPrice: '$22,99 USD', newPrice: '$17,99 USD', image: 'https://placehold.co/400x500', sale: true },
// // //   { id: 4, title: 'Japanese Foo Dog (Color)', oldPrice: '$34,99 USD', newPrice: '$29,99 USD', image: 'https://placehold.co/400x500', sale: true },
// // //   { id: 5, title: 'Floral Skull with Hat Colored', oldPrice: '$29,99 USD', newPrice: '$24,99 USD', image: 'https://placehold.co/400x500', sale: true },
// // //   { id: 6, title: 'Flock of Birds', oldPrice: '$19,99 USD', newPrice: '$14,99 USD', image: 'https://placehold.co/400x500', sale: true },
// // //   { id: 7, title: 'Dapper Kat', oldPrice: '$19,99 USD', newPrice: '$14,99 USD', image: 'https://placehold.co/400x500', sale: true },
// // //   { id: 8, title: 'Danger Dagger', oldPrice: '$19,99 USD', newPrice: '$14,99 USD', image: 'https://placehold.co/400x500', sale: true },
// // //   { id: 9, title: 'Compass & Time', oldPrice: '$19,99 USD', newPrice: '$14,99 USD', image: 'https://placehold.co/400x500', sale: true },
// // // ];

// // // export default function NewArrivalsProducts() {
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const totalPages = 4; // Mocked total pages

// // //   return (
// // //     <section className="w-full min-h-screen bg-black text-white py-16 px-4 md:px-12 font-sans relative overflow-hidden">
// // //       <div className="max-w-[1312px] mx-auto flex flex-col gap-12">
        
// // //         {/* Header Section */}
// // //         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
// // //           <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
// // //             New Arrivals
// // //           </h2>
// // //           <div className="flex items-center gap-4">
// // //             <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-700 hover:bg-zinc-800 transition-colors uppercase text-sm font-semibold tracking-wider">
// // //               <span>Sort</span>
// // //             </button>
// // //             <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-700 hover:bg-zinc-800 transition-colors uppercase text-sm font-semibold tracking-wider">
// // //               <SlidersHorizontal size={16} />
// // //               <span>Filter</span>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Product Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-16">
// // //           {products.map((product) => (
// // //             <div key={product.id} className="group flex flex-col gap-5 w-full max-w-[400px] mx-auto cursor-pointer">
              
// // //               {/* Image Wrapper */}
// // //               <div className="relative w-full aspect-[4/5] bg-white rounded-[30px] overflow-hidden border border-zinc-200 p-2.5">
// // //                 <img 
// // //                   src={product.image} 
// // //                   alt={product.title} 
// // //                   className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 ease-in-out group-hover:scale-110"
// // //                 />
                
// // //                 {/* Sale Badge */}
// // //                 {product.sale && (
// // //                   <div className="absolute top-6 left-6 bg-[#FE8204] text-white px-5 py-2 rounded-full font-bold text-sm tracking-widest z-10 shadow-lg">
// // //                     SALE
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               {/* Product Info */}
// // //               <div className="flex flex-col gap-2">
// // //                 <h3 className="text-xl font-bold uppercase tracking-wide truncate">
// // //                   {product.title}
// // //                 </h3>
// // //                 <div className="flex items-center gap-3">
// // //                   <span className="text-zinc-400 line-through text-base font-light">
// // //                     {product.oldPrice}
// // //                   </span>
// // //                   <span className="text-white text-xl font-semibold">
// // //                     {product.newPrice}
// // //                   </span>
// // //                 </div>
// // //               </div>
              
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Pagination Section */}
// // //         <div className="flex items-center justify-between w-full pt-8 mt-4 border-t border-zinc-800">
          
// // //           {/* Left: Dots */}
// // //           <div className="flex items-center gap-3">
// // //             {[...Array(totalPages)].map((_, index) => (
// // //               <button
// // //                 key={index}
// // //                 onClick={() => setCurrentPage(index + 1)}
// // //                 className={`transition-all duration-300 rounded-full ${
// // //                   currentPage === index + 1
// // //                     ? 'w-8 h-2.5 bg-white'
// // //                     : 'w-2.5 h-2.5 bg-zinc-600 hover:bg-zinc-400'
// // //                 }`}
// // //                 aria-label={`Go to page ${index + 1}`}
// // //               />
// // //             ))}
// // //           </div>

// // //           {/* Right: Navigation Icons */}
// // //           <div className="flex items-center gap-4">
// // //             <button 
// // //               onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
// // //               disabled={currentPage === 1}
// // //               className="p-3 rounded-full border border-zinc-700 hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
// // //             >
// // //               <ChevronLeft size={20} />
// // //             </button>
// // //             <button 
// // //               onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
// // //               disabled={currentPage === totalPages}
// // //               className="p-3 rounded-full border border-zinc-700 hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
// // //             >
// // //               <ChevronRight size={20} />
// // //             </button>
// // //           </div>
          
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }


// // import React, { useState, useMemo } from 'react';
// // import { ChevronLeft, ChevronRight, SlidersHorizontal, ChevronDown } from 'lucide-react';

// // const productsData = [
// //   { id: 1, title: 'Lotus Infinity Trail', oldPrice: 19.99, newPrice: 14.99, image: 'https://placehold.co/400x500', sale: true, category: 'minimal' },
// //   { id: 2, title: 'Jesus Christ Religious Art', oldPrice: 34.99, newPrice: 24.99, image: 'https://placehold.co/400x500', sale: true, category: 'religious' },
// //   { id: 3, title: 'Colored King of the Jungle (colored)', oldPrice: 22.99, newPrice: 17.99, image: 'https://placehold.co/400x500', sale: true, category: 'animal' },
// //   { id: 4, title: 'Japanese Foo Dog (Color)', oldPrice: 34.99, newPrice: 29.99, image: 'https://placehold.co/400x500', sale: true, category: 'animal' },
// //   { id: 5, title: 'Floral Skull with Hat Colored', oldPrice: 29.99, newPrice: 24.99, image: 'https://placehold.co/400x500', sale: true, category: 'skull' },
// //   { id: 6, title: 'Flock of Birds', oldPrice: 19.99, newPrice: 14.99, image: 'https://placehold.co/400x500', sale: true, category: 'minimal' },
// //   { id: 7, title: 'Dapper Kat', oldPrice: 19.99, newPrice: 14.99, image: 'https://placehold.co/400x500', sale: true, category: 'animal' },
// //   { id: 8, title: 'Danger Dagger', oldPrice: 19.99, newPrice: 14.99, image: 'https://placehold.co/400x500', sale: true, category: 'object' },
// //   { id: 9, title: 'Compass & Time', oldPrice: 19.99, newPrice: 14.99, image: 'https://placehold.co/400x500', sale: true, category: 'object' },
// // ];

// // export default function NewArrivalsProducts() {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [sortOrder, setSortOrder] = useState('default'); 
// //   const [filter, setFilter] = useState('all');

// //   // --- Filter & Sort Logic ---
// //   const filteredProducts = useMemo(() => {
// //     let result = [...productsData];
// //     if (filter !== 'all') {
// //       result = result.filter(p => p.category === filter);
// //     }
// //     if (sortOrder === 'low-to-high') {
// //       result.sort((a, b) => a.newPrice - b.newPrice);
// //     } else if (sortOrder === 'high-to-low') {
// //       result.sort((a, b) => b.newPrice - a.newPrice);
// //     }
// //     return result;
// //   }, [filter, sortOrder]);

// //   return (
// //     <section className="w-full min-h-screen bg-black text-white py-12 px-6 md:px-16 overflow-hidden">
// //       <div className="max-w-[1312px] mx-auto">
        
// //         {/* Header Section */}
// //         <div className="flex flex-col gap-6 mb-12">
// //           {/* Main Title - Mobile: 36px, Desktop: 64px  */}
// //           <h2 className="text-[36px] md:text-[64px] font-[700] uppercase font-['Almarena'] leading-tight">
// //             New Arrivals
// //           </h2>
          
// //           <div className="flex items-center justify-between w-full border-b border-zinc-800 pb-6">
// //              {/* Filter - 16px Montserrat [cite: 2, 82] */}
// //              <div className="flex items-center gap-2 cursor-pointer group">
// //               <SlidersHorizontal size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
// //               <select 
// //                 onChange={(e) => setFilter(e.target.value)}
// //                 className="bg-transparent border-none outline-none text-[16px] font-[400] font-['Montserrat'] uppercase cursor-pointer"
// //               >
// //                 <option value="all" className="bg-black text-white">Filter</option>
// //                 <option value="animal" className="bg-black text-white">Animals</option>
// //                 <option value="object" className="bg-black text-white">Objects</option>
// //               </select>
// //             </div>

// //             {/* Sort - 16px Montserrat [cite: 2] */}
// //             <div className="flex items-center gap-2 cursor-pointer group">
// //               <select 
// //                 onChange={(e) => setSortOrder(e.target.value)}
// //                 className="bg-transparent border-none outline-none text-[16px] font-[400] font-['Montserrat'] uppercase cursor-pointer text-right"
// //               >
// //                 <option value="default" className="bg-black text-white">Sort By</option>
// //                 <option value="low-to-high" className="bg-black text-white">Price: Low to High</option>
// //                 <option value="high-to-low" className="bg-black text-white">Price: High to Low</option>
// //               </select>
// //               <ChevronDown size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Product Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
// //           {filteredProducts.map((product) => (
// //             <div key={product.id} className="group flex flex-col gap-4 w-full">
              
// //               {/* Image Container */}
// //               <div className="relative w-full aspect-[4/5] bg-white rounded-[24px] overflow-hidden p-2">
// //                 <img 
// //                   src={product.image} 
// //                   alt={product.title} 
// //                   className="w-full h-full object-cover rounded-[18px] transition-transform duration-700 group-hover:scale-105"
// //                 />
                
// //                 {/* Sale Badge - 12px Mobile / 16px Desktop [cite: 3, 42] */}
// //                 {product.sale && (
// //                   <div className="absolute top-4 left-4 bg-[#FE8204] text-white px-4 py-1.5 rounded-full font-[700] text-[12px] md:text-[16px] font-['Montserrat'] tracking-widest uppercase">
// //                     SALE
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Product Info */}
// //               <div className="flex flex-col gap-1 px-1">
// //                 {/* Title - 16px Mobile / 20px Desktop [cite: 4, 43] */}
// //                 <h3 className="text-[16px] md:text-[20px] font-[700] uppercase font-['Almarena'] leading-snug">
// //                   {product.title}
// //                 </h3>
                
// //                 <div className="flex items-center gap-3">
// //                   {/* Old Price - 12px Mobile / 16px Desktop [cite: 6, 44] */}
// //                   <span className="text-zinc-400 line-through text-[12px] md:text-[16px] font-[300] font-['Montserrat']">
// //                     ${product.oldPrice.toFixed(2)} USD
// //                   </span>
// //                   {/* New Price - 16px Mobile / 20px Desktop [cite: 5, 45] */}
// //                   <span className="text-white text-[16px] md:text-[20px] font-[600] font-['Montserrat']">
// //                     ${product.newPrice.toFixed(2)} USD
// //                   </span>
// //                 </div>
// //               </div>
              
// //             </div>
// //           ))}
// //         </div>

// //         {/* Pagination Section */}
// //         <div className="flex items-center justify-between w-full pt-10 mt-16 border-t border-zinc-900">
// //           {/* Pagination Dots */}
// //           <div className="flex items-center gap-2.5">
// //             {[1, 2, 3, 4].map((dot) => (
// //               <button
// //                 key={dot}
// //                 className={`transition-all duration-300 rounded-full ${
// //                   dot === 1 ? 'w-10 h-2 bg-white' : 'w-2 h-2 bg-zinc-700'
// //                 }`}
// //               />
// //             ))}
// //           </div>

// //           {/* Nav Arrows */}
// //           <div className="flex items-center gap-3">
// //             <button className="p-3 rounded-full border border-zinc-800 hover:bg-zinc-900 transition-colors">
// //               <ChevronLeft size={22} />
// //             </button>
// //             <button className="p-3 rounded-full border border-zinc-800 hover:bg-zinc-900 transition-colors">
// //               <ChevronRight size={22} />
// //             </button>
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }


// // import React, { useState, useMemo } from 'react';
// // import { ChevronLeft, ChevronRight, SlidersHorizontal, ChevronDown } from 'lucide-react';

// // // Generating 20 products for testing pagination
// // const productsData = Array.from({ length: 20 }, (_, i) => ({
// //   id: i + 1,
// //   title: i === 0 ? 'Lotus Infinity Trail' : i === 1 ? 'Jesus Christ Religious Art' : `Product Design ${i + 1}`,
// //   oldPrice: 19.99 + (i * 2),
// //   newPrice: 14.99 + (i * 2),
// //   image: `/assets/images/card${(i % 10) + 1}.png`, // Cycles through card1.png to card10.png
// //   sale: i % 3 === 0,
// //   category: i % 2 === 0 ? 'animal' : 'object'
// // }));

// // export default function NewArrivalsProducts() {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [sortOrder, setSortOrder] = useState('default');
// //   const [filter, setFilter] = useState('all');
// //   const itemsPerPage = 15;

// //   // --- Filter & Sort Logic ---
// //   const filteredAndSorted = useMemo(() => {
// //     let result = [...productsData];
// //     if (filter !== 'all') {
// //       result = result.filter(p => p.category === filter);
// //     }
// //     if (sortOrder === 'low-to-high') {
// //       result.sort((a, b) => a.newPrice - b.newPrice);
// //     } else if (sortOrder === 'high-to-low') {
// //       result.sort((a, b) => b.newPrice - a.newPrice);
// //     }
// //     return result;
// //   }, [filter, sortOrder]);

// //   // --- Pagination Logic ---
// //   const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage);
// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentProducts = filteredAndSorted.slice(indexOfFirstItem, indexOfLastItem);

// //   const handlePageChange = (page) => {
// //     setCurrentPage(page);
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   const orangeColor = "#FE8204";

// //   return (
// //     <section className="w-full min-h-screen bg-black text-white py-12 px-6 md:px-16 overflow-hidden">
// //       <div className="max-w-[1312px] mx-auto">
        
// //         {/* Header Section */}
// //         <div className="flex flex-col gap-6 mb-12">
// //           <h2 className="text-[36px] md:text-[64px] font-[700] uppercase font-['Almarena'] leading-tight">
// //             New Arrivals
// //           </h2>
          
// //           <div className="flex items-center justify-between w-full border-b border-zinc-800 pb-6">
// //              {/* Filter Section */}
// //              <div 
// //                className="flex items-center gap-2 cursor-pointer transition-colors"
// //                style={{ color: filter !== 'all' ? orangeColor : 'white' }}
// //              >
// //               <SlidersHorizontal size={18} />
// //               <select 
// //                 value={filter}
// //                 onChange={(e) => { setFilter(e.target.value); setCurrentPage(1); }}
// //                 className="bg-transparent border-none outline-none text-[16px] font-[400] font-['Montserrat'] uppercase cursor-pointer"
// //                 style={{ color: filter !== 'all' ? orangeColor : 'white' }}
// //               >
// //                 <option value="all" className="bg-black text-white">Filter</option>
// //                 <option value="animal" className="bg-black text-white">Animals</option>
// //                 <option value="object" className="bg-black text-white">Objects</option>
// //               </select>
// //             </div>

// //             {/* Sort Section */}
// //             <div 
// //               className="flex items-center gap-2 cursor-pointer transition-colors"
// //               style={{ color: sortOrder !== 'default' ? orangeColor : 'white' }}
// //             >
// //               <select 
// //                 value={sortOrder}
// //                 onChange={(e) => { setSortOrder(e.target.value); setCurrentPage(1); }}
// //                 className="bg-transparent border-none outline-none text-[16px] font-[400] font-['Montserrat'] uppercase cursor-pointer text-right"
// //                 style={{ color: sortOrder !== 'default' ? orangeColor : 'white' }}
// //               >
// //                 <option value="default" className="bg-black text-white">Sort By</option>
// //                 <option value="low-to-high" className="bg-black text-white">Price: Low to High</option>
// //                 <option value="high-to-low" className="bg-black text-white">Price: High to Low</option>
// //               </select>
// //               <ChevronDown size={18} />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Product Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
// //           {currentProducts.map((product) => (
// //             <div key={product.id} className="group flex flex-col gap-4 w-full cursor-pointer">
              
// //               <div className="relative w-full aspect-[4/5] bg-white rounded-[24px] overflow-hidden p-2 border border-zinc-900">
// //                 <img 
// //                   src={product.image} 
// //                   alt={product.title} 
// //                   className="w-full h-full object-cover rounded-[18px] transition-transform duration-700 group-hover:scale-105"
// //                 />
                
// //                 {product.sale && (
// //                   <div className="absolute top-4 left-4 bg-[#FE8204] text-white px-4 py-1.5 rounded-full font-[700] text-[12px] md:text-[16px] font-['Montserrat'] tracking-widest uppercase">
// //                     SALE
// //                   </div>
// //                 )}
// //               </div>

// //               <div className="flex flex-col gap-1 px-1">
// //                 <h3 className="text-[16px] md:text-[20px] font-[700] uppercase font-['Almarena'] leading-snug truncate">
// //                   {product.title}
// //                 </h3>
                
// //                 <div className="flex items-center gap-3 font-['Montserrat']">
// //                   <span className="text-zinc-400 line-through text-[12px] md:text-[16px] font-[300]">
// //                     ${product.oldPrice.toFixed(2)} USD
// //                   </span>
// //                   <span className="text-white text-[16px] md:text-[20px] font-[600]">
// //                     ${product.newPrice.toFixed(2)} USD
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Pagination Section */}
// //         <div className="flex items-center justify-between w-full pt-10 mt-16 border-t border-zinc-900">
// //           {/* Pagination Dots */}
// //           <div className="flex items-center gap-3">
// //             {Array.from({ length: totalPages }).map((_, index) => (
// //               <button
// //                 key={index}
// //                 onClick={() => handlePageChange(index + 1)}
// //                 className="transition-all duration-300 rounded-full"
// //                 style={{
// //                   width: currentPage === index + 1 ? '40px' : '10px',
// //                   height: '10px',
// //                   backgroundColor: currentPage === index + 1 ? orangeColor : '#3f3f46'
// //                 }}
// //                 aria-label={`Page ${index + 1}`}
// //               />
// //             ))}
// //           </div>

// //           {/* Nav Arrows */}
// //           <div className="flex items-center gap-3">
// //             <button 
// //               onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
// //               disabled={currentPage === 1}
// //               className="p-3 rounded-full border border-zinc-800 hover:bg-zinc-900 disabled:opacity-30 transition-colors"
// //             >
// //               <ChevronLeft size={22} />
// //             </button>
// //             <button 
// //               onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
// //               disabled={currentPage === totalPages}
// //               className="p-3 rounded-full border border-zinc-800 hover:bg-zinc-900 disabled:opacity-30 transition-colors"
// //             >
// //               <ChevronRight size={22} />
// //             </button>
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// import React, { useState, useMemo } from 'react';
// import { ChevronLeft, ChevronRight, SlidersHorizontal, ChevronDown } from 'lucide-react';

// // Generating 20 products for testing pagination
// const productsData = Array.from({ length: 20 }, (_, i) => ({
//   id: i + 1,
//   title: i === 0 ? 'Lotus Infinity Trail' : i === 1 ? 'Jesus Christ Religious Art' : `Product Design ${i + 1}`,
//   oldPrice: 19.99 + (i * 2),
//   newPrice: 14.99 + (i * 2),
//   image: `/assets/images/Card${(i % 10) + 1}.png`,
//   sale: i % 3 === 0,
//   category: i % 2 === 0 ? 'animal' : 'object'
// }));

// export default function NewArrivalsProducts() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortOrder, setSortOrder] = useState('default');
//   const [filter, setFilter] = useState('all');
  
//   // Set to 15 so it fills exactly 5 rows of 3 columns
//   const itemsPerPage = 15; 

//   // --- Filter & Sort Logic ---
//   const filteredAndSorted = useMemo(() => {
//     let result = [...productsData];
//     if (filter !== 'all') {
//       result = result.filter(p => p.category === filter);
//     }
//     if (sortOrder === 'low-to-high') {
//       result.sort((a, b) => a.newPrice - b.newPrice);
//     } else if (sortOrder === 'high-to-low') {
//       result.sort((a, b) => b.newPrice - a.newPrice);
//     }
//     return result;
//   }, [filter, sortOrder]);

//   // --- Pagination Logic ---
//   const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = filteredAndSorted.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const orangeColor = "#FE8204";

//   return (
//     <section className="w-full min-h-screen bg-black text-white py-12 px-6 md:px-12 overflow-hidden">
//       {/* Constraining max-width to 1300px prevents the 3 cards from becoming too wide */}
//       <div className="max-w-[1300px] mx-auto">
        
//         {/* Header Section */}
//         <div className="flex flex-col gap-6 mb-10">
//           <h2 className="text-[32px] md:text-[56px] font-[700] uppercase font-['Almarena'] leading-tight">
//             New Arrivals
//           </h2>
          
//           <div className="flex flex-wrap items-center justify-between w-full border-b border-zinc-800 pb-4 gap-4">
//              {/* Filter Section */}
//              <div 
//                className="flex items-center gap-2 cursor-pointer transition-colors relative"
//                style={{ color: filter !== 'all' ? orangeColor : 'white' }}
//              >
//               <SlidersHorizontal size={18} />
//               <select 
//                 value={filter}
//                 onChange={(e) => { setFilter(e.target.value); setCurrentPage(1); }}
//                 className="appearance-none bg-transparent border-none outline-none text-[14px] md:text-[16px] font-[400] font-['Montserrat'] uppercase cursor-pointer pr-4"
//                 style={{ color: filter !== 'all' ? orangeColor : 'white' }}
//               >
//                 <option value="all" className="bg-black text-white">Filter</option>
//                 <option value="animal" className="bg-black text-white">Animals</option>
//                 <option value="object" className="bg-black text-white">Objects</option>
//               </select>
//             </div>

//             {/* Sort Section */}
//             <div 
//               className="flex items-center gap-2 cursor-pointer transition-colors relative"
//               style={{ color: sortOrder !== 'default' ? orangeColor : 'white' }}
//             >
//               <select 
//                 value={sortOrder}
//                 onChange={(e) => { setSortOrder(e.target.value); setCurrentPage(1); }}
//                 className="appearance-none bg-transparent border-none outline-none text-[14px] md:text-[16px] font-[400] font-['Montserrat'] uppercase cursor-pointer pr-2 text-right z-10"
//                 style={{ color: sortOrder !== 'default' ? orangeColor : 'white' }}
//               >
//                 <option value="default" className="bg-black text-white">Sort By</option>
//                 <option value="low-to-high" className="bg-black text-white">Price: Low to High</option>
//                 <option value="high-to-low" className="bg-black text-white">Price: High to Low</option>
//               </select>
//               <ChevronDown size={18} className="z-0" />
//             </div>
//           </div>
//         </div>

//         {/* Product Grid - Exactly 3 columns on large screens */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10">
//           {currentProducts.map((product) => (
//             <div key={product.id} className="group flex flex-col gap-3 w-full cursor-pointer">
              
//               <div className="relative w-full aspect-[4/5] bg-white rounded-[20px] overflow-hidden p-1.5 border border-zinc-900">
//                 <img 
//                   src={product.image} 
//                   alt={product.title} 
//                   className="w-full h-full object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-105"
//                 />
                
//                 {product.sale && (
//                   <div className="absolute top-4 left-4 bg-[#FE8204] text-white px-3 py-1 rounded-full font-[700] text-[10px] md:text-[12px] font-['Montserrat'] tracking-widest uppercase shadow-md">
//                     SALE
//                   </div>
//                 )}
//               </div>

//               <div className="flex flex-col gap-1 px-1">
//                 <h3 className="text-[15px] md:text-[18px] font-[700] uppercase font-['Almarena'] leading-snug truncate">
//                   {product.title}
//                 </h3>
                
//                 <div className="flex items-center gap-2 font-['Montserrat']">
//                   <span className="text-zinc-500 line-through text-[12px] md:text-[14px] font-[400]">
//                     ${product.oldPrice.toFixed(2)} USD
//                   </span>
//                   <span className="text-white text-[15px] md:text-[18px] font-[600]">
//                     ${product.newPrice.toFixed(2)} USD
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Section */}
//         {totalPages > 1 && (
//           <div className="flex items-center justify-between w-full pt-8 mt-12 border-t border-zinc-900">
//             {/* Pagination Dots */}
//             <div className="flex items-center gap-2.5">
//               {Array.from({ length: totalPages }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handlePageChange(index + 1)}
//                   className="transition-all duration-300 rounded-full"
//                   style={{
//                     width: '10px',
//                     height: '10px',
//                     backgroundColor: currentPage === index + 1 ? orangeColor : '#3f3f46',
//                     transform: currentPage === index + 1 ? 'scale(1.2)' : 'scale(1)'
//                   }}
//                   aria-label={`Page ${index + 1}`}
//                 />
//               ))}
//             </div>

//             {/* Nav Arrows */}
//             <div className="flex items-center gap-2">
//               <button 
//                 onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="p-2.5 rounded-full border border-zinc-800 hover:bg-zinc-900 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button 
//                 onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="p-2.5 rounded-full border border-zinc-800 hover:bg-zinc-900 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }


import React, { useState, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight, SlidersHorizontal, ChevronDown } from 'lucide-react';

// Generating 20 products for testing pagination
const productsData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: i === 0 ? 'Lotus Infinity Trail' : i === 1 ? 'Jesus Christ Religious Art' : `Product Design ${i + 1}`,
  oldPrice: 19.99 + (i * 2),
  newPrice: 14.99 + (i * 2),
  image: `/assets/images/Card${(i % 10) + 1}.png`,
  sale: i % 3 === 0,
  category: i % 2 === 0 ? 'animal' : 'object'
}));

export default function NewArrivalsProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('default');
  const [filter, setFilter] = useState('all');
  
  // Ref to target the top of the component for scrolling
  const sectionRef = useRef(null);
  
  // Set to 15 so it fills exactly 5 rows of 3 columns
  const itemsPerPage = 15; 

  // --- Filter & Sort Logic ---
  const filteredAndSorted = useMemo(() => {
    let result = [...productsData];
    if (filter !== 'all') {
      result = result.filter(p => p.category === filter);
    }
    if (sortOrder === 'low-to-high') {
      result.sort((a, b) => a.newPrice - b.newPrice);
    } else if (sortOrder === 'high-to-low') {
      result.sort((a, b) => b.newPrice - a.newPrice);
    }
    return result;
  }, [filter, sortOrder]);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredAndSorted.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     // Smooth scroll specifically to this component instead of the top of the window
//     if (sectionRef.current) {
//       sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

const handlePageChange = (page) => {
  setCurrentPage(page);

  // A small timeout ensures the DOM updates before calculating the scroll position
  setTimeout(() => {
    if (sectionRef.current) {
      // Set an offset (in pixels) to create breathing room above the title.
      // Increase this number if you have a fixed/sticky navbar!
      const topOffset = 40; 
      
      const elementPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 100); // 100ms is usually perfect for React to catch up
};

  const orangeColor = "#FE8204";

  return (
    <section 
      ref={sectionRef} 
      className="w-full min-h-screen bg-black text-white py-12 px-6 md:px-12 overflow-hidden"
    >
      {/* Constraining max-width to 1300px prevents the 3 cards from becoming too wide */}
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6 mb-10">
          <h2 className="text-[32px] md:text-[56px] font-[700] uppercase font-['Almarena'] leading-tight">
            New Arrivals
          </h2>
          
          <div className="flex flex-wrap items-center justify-between w-full border-b border-zinc-800 pb-4 gap-4">
             {/* Filter Section */}
             <div 
               className="flex items-center gap-2 cursor-pointer transition-colors relative"
               style={{ color: filter !== 'all' ? orangeColor : 'white' }}
             >
              <SlidersHorizontal size={18} />
              <select 
                value={filter}
                onChange={(e) => { setFilter(e.target.value); setCurrentPage(1); }}
                className="appearance-none bg-transparent border-none outline-none text-[14px] md:text-[16px] font-[400] font-['Montserrat'] uppercase cursor-pointer pr-4"
                style={{ color: filter !== 'all' ? orangeColor : 'white' }}
              >
                <option value="all" className="bg-black text-white">Filter</option>
                <option value="animal" className="bg-black text-white">Animals</option>
                <option value="object" className="bg-black text-white">Objects</option>
              </select>
            </div>

            {/* Sort Section */}
            <div 
              className="flex items-center gap-2 cursor-pointer transition-colors relative"
              style={{ color: sortOrder !== 'default' ? orangeColor : 'white' }}
            >
              <select 
                value={sortOrder}
                onChange={(e) => { setSortOrder(e.target.value); setCurrentPage(1); }}
                className="appearance-none bg-transparent border-none outline-none text-[14px] md:text-[16px] font-[400] font-['Montserrat'] uppercase cursor-pointer pr-2 text-right z-10"
                style={{ color: sortOrder !== 'default' ? orangeColor : 'white' }}
              >
                <option value="default" className="bg-black text-white">Sort By</option>
                <option value="low-to-high" className="bg-black text-white">Price: Low to High</option>
                <option value="high-to-low" className="bg-black text-white">Price: High to Low</option>
              </select>
              <ChevronDown size={18} className="z-0" />
            </div>
          </div>
        </div>

        {/* Product Grid - Exactly 3 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10">
          {currentProducts.map((product) => (
            <div key={product.id} className="group flex flex-col gap-3 w-full cursor-pointer">
              
              <div className="relative w-full aspect-[4/5] bg-white rounded-[20px] overflow-hidden p-1.5 border border-zinc-900">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  // Increased scale-105 to scale-110 for a more pronounced hover effect
                  className="w-full h-full object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-110"
                />
                
                {product.sale && (
                  <div className="absolute top-4 left-4 bg-[#FE8204] text-white px-3 py-1 rounded-full font-[700] text-[10px] md:text-[12px] font-['Montserrat'] tracking-widest uppercase shadow-md">
                    SALE
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1 px-1">
                <h3 className="text-[15px] md:text-[18px] font-[700] uppercase font-['Almarena'] leading-snug truncate">
                  {product.title}
                </h3>
                
                <div className="flex items-center gap-2 font-['Montserrat']">
                  <span className="text-zinc-500 line-through text-[12px] md:text-[14px] font-[400]">
                    ${product.oldPrice.toFixed(2)} USD
                  </span>
                  <span className="text-white text-[15px] md:text-[18px] font-[600]">
                    ${product.newPrice.toFixed(2)} USD
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between w-full pt-8 mt-12 border-t border-zinc-900">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2.5">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: currentPage === index + 1 ? orangeColor : '#3f3f46',
                    transform: currentPage === index + 1 ? 'scale(1.2)' : 'scale(1)'
                  }}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>

            {/* Nav Arrows */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2.5 rounded-full border border-zinc-800 hover:bg-zinc-900 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded-full border border-zinc-800 hover:bg-zinc-900 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}