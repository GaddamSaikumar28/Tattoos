// // // // src/components/navigation/Footer/index.jsx
// // // import { Link } from 'react-router-dom';

// // // export default function Footer() {
// // //   return (
// // //     <footer className="bg-white border-t border-gray-200 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
// // //       <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
// // //         {/* Newsletter Section */}
// // //         <div className="md:col-span-1">
// // //           <h2 className="text-h2 text-black mb-4">Subscribe to News</h2>
// // //           <p className="text-body text-black mb-6">
// // //             Join our newsletter to stay up to date on features and releases.
// // //           </p>
// // //           <form className="flex flex-col gap-4">
// // //             <input 
// // //               type="email" 
// // //               placeholder="jane@email.com" 
// // //               className="border-b border-black py-2 focus:outline-none focus:border-brand-orange transition-colors rounded-none text-body bg-transparent"
// // //             />
// // //             <button 
// // //               type="submit" 
// // //               className="bg-black text-white text-btn py-3 px-6 hover:bg-brand-orange transition-colors w-fit"
// // //             >
// // //               Subscribe
// // //             </button>
// // //           </form>
// // //         </div>

// // //         {/* Links: Shop */}
// // //         <div className="md:ml-auto">
// // //           <h3 className="text-h3 text-brand-orange mb-6">Shop</h3>
// // //           <ul className="flex flex-col gap-4">
// // //             {['Tattoos', 'New Arrival', 'Sale'].map((link) => (
// // //               <li key={link}>
// // //                 <Link to="#" className="text-btn text-black hover:text-brand-orange transition-colors">
// // //                   {link}
// // //                 </Link>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>

// // //         {/* Links: About */}
// // //         <div className="md:ml-auto">
// // //           <h3 className="text-h3 text-brand-orange mb-6">About</h3>
// // //           <ul className="flex flex-col gap-4">
// // //             {['About us', 'How it works', 'Contact us'].map((link) => (
// // //               <li key={link}>
// // //                 <Link to="#" className="text-btn text-black hover:text-brand-orange transition-colors">
// // //                   {link}
// // //                 </Link>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>

// // //         {/* Links: Customer Care */}
// // //         <div className="md:ml-auto">
// // //           <h3 className="text-h3 text-brand-orange mb-6">Customer Care</h3>
// // //           <ul className="flex flex-col gap-4">
// // //             {['Tracking', 'Shipping', 'Help & FAQ', 'Returns'].map((link) => (
// // //               <li key={link}>
// // //                 <Link to="#" className="text-btn text-black hover:text-brand-orange transition-colors">
// // //                   {link}
// // //                 </Link>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>

// // //       </div>
// // //     </footer>
// // //   );
// // // }


// // // import React from 'react';

// // // // Reusable component for the Social/Asset icon boxes
// // // const IconBox = ({ desktopW, desktopH, mobileSize, iconName }) => (
// // //   <button 
// // //     className={`group flex items-center justify-center border border-black/10 rounded-[8px] bg-white transition-colors hover:bg-gray-50
// // //       w-[${mobileSize}px] h-[${mobileSize}px] 
// // //       md:w-[${desktopW}px] md:h-[${desktopH}px]`}
// // //   >
// // //     {/* Replace these src paths with your actual asset folder paths */}
// // //     <img 
// // //       src={`/assets/${iconName}.svg`} 
// // //       alt={`${iconName} icon`} 
// // //       className="w-[24px] h-[24px] md:w-[34px] md:h-[34px] object-contain transition-transform group-hover:scale-110" 
// // //     />
// // //   </button>
// // // );

// // // export default function Footer() {
// // //   return (
// // //     // Ensure you have added the 'Almarena' font to your global CSS or Tailwind config
// // //     <footer className="w-full bg-white font-['Almarena',_sans-serif] overflow-hidden">
// // //       {/* Container aligned with the max-width of 1440px from your wireframe */}
// // //       <div className="max-w-[1440px] mx-auto px-[28px] md:px-[30px] pt-[96px] md:pt-[100px] pb-10 flex flex-col">
        
// // //         {/* TOP SECTION: Links & Icons */}
// // //         <div className="flex flex-col md:flex-row md:justify-between gap-[16px]">
          
// // //           {/* LEFT SIDE: Navigation Columns */}
// // //           <div className="flex flex-col md:flex-row gap-[12px] md:gap-[16px]">
            
// // //             {/* Column 1: Shop */}
// // //             <div className="relative w-full md:w-[333px] h-[169px] md:h-[297px] border border-black/10 rounded-[30px]">
// // //               <h3 className="absolute left-[30.5px] top-[30.5px] md:top-[29.5px] text-[#FE8204] text-[20px] md:text-[24px] font-bold uppercase">
// // //                 Shop
// // //               </h3>
// // //               <ul className="absolute left-[30.5px] top-[69.5px] md:top-[192.5px] flex flex-col gap-[12px] md:gap-[16px]">
// // //                 {['Tattoos', 'New Arrival', 'Sale'].map((link, idx) => (
// // //                   <li key={idx}>
// // //                     <a href="#" className="text-black text-[16px] md:text-[20px] font-bold uppercase hover:text-[#FE8204] transition-colors">
// // //                       {link}
// // //                     </a>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>

// // //             {/* Column 2: About */}
// // //             <div className="relative w-full md:w-[333px] h-[169px] md:h-[297px] border border-black/10 rounded-[30px]">
// // //               <h3 className="absolute left-[30.5px] top-[30.5px] md:top-[29.5px] text-[#FE8204] text-[20px] md:text-[24px] font-bold uppercase">
// // //                 About
// // //               </h3>
// // //               <ul className="absolute left-[30.5px] top-[69.5px] md:top-[192.5px] flex flex-col gap-[12px] md:gap-[16px]">
// // //                 {['About us', 'How it works', 'Contact us'].map((link, idx) => (
// // //                   <li key={idx}>
// // //                     <a href="#" className="text-black text-[16px] md:text-[20px] font-bold uppercase hover:text-[#FE8204] transition-colors">
// // //                       {link}
// // //                     </a>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>

// // //             {/* Column 3: Customer Care */}
// // //             {/* Note: Mobile height is explicitly 196px here as per your Figma specs to fit 4 links */}
// // //             <div className="relative w-full md:w-[333px] h-[196px] md:h-[297px] border border-black/10 rounded-[30px]">
// // //               <h3 className="absolute left-[30.5px] top-[30.5px] md:top-[29.5px] text-[#FE8204] text-[20px] md:text-[24px] font-bold uppercase">
// // //                 Customer Care
// // //               </h3>
// // //               <ul className="absolute left-[30.5px] top-[69.5px] md:top-[157.5px] flex flex-col gap-[12px] md:gap-[16px]">
// // //                 {['Tracking', 'Shipping', 'Help & FAQ', 'Returns'].map((link, idx) => (
// // //                   <li key={idx}>
// // //                     <a href="#" className="text-black text-[16px] md:text-[20px] font-bold uppercase hover:text-[#FE8204] transition-colors">
// // //                       {link}
// // //                     </a>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>

// // //           </div>

// // //           {/* RIGHT SIDE: Icons Array */}
// // //           <div className="mt-4 md:mt-0">
// // //             {/* Desktop Layout: 2 items top row, 3 items bottom row */}
// // //             <div className="hidden md:flex flex-col gap-[15px]">
// // //               <div className="flex flex-row gap-[15px]">
// // //                 <IconBox desktopW="159" desktopH="141" mobileSize="58" iconName="icon1" />
// // //                 <IconBox desktopW="159" desktopH="141" mobileSize="58" iconName="icon2" />
// // //               </div>
// // //               <div className="flex flex-row gap-[16px]">
// // //                 <IconBox desktopW="100" desktopH="141" mobileSize="58" iconName="icon3" />
// // //                 <IconBox desktopW="100" desktopH="141" mobileSize="58" iconName="icon4" />
// // //                 <IconBox desktopW="100" desktopH="141" mobileSize="58" iconName="icon5" />
// // //               </div>
// // //             </div>

// // //             {/* Mobile Layout: 5 items in a single scrolling or wrapped row */}
// // //             <div className="flex md:hidden flex-row gap-[16px] items-center">
// // //               <IconBox desktopW="159" desktopH="141" mobileSize="58" iconName="icon1" />
// // //               <IconBox desktopW="159" desktopH="141" mobileSize="58" iconName="icon2" />
// // //               <IconBox desktopW="100" desktopH="141" mobileSize="58" iconName="icon3" />
// // //               <IconBox desktopW="100" desktopH="141" mobileSize="58" iconName="icon4" />
// // //               <IconBox desktopW="100" desktopH="141" mobileSize="58" iconName="icon5" />
// // //             </div>
// // //           </div>

// // //         </div>

// // //         {/* BOTTOM SECTION: Massive Orange Logo */}
// // //         <div className="w-full mt-[60px] md:mt-[100px] flex justify-center items-end">
// // //           {/* Replace this div/text with your massive exported SVG logo like this: 
// // //             <img src="/assets/huge-footer-logo.svg" className="w-full object-contain" alt="Logo" />
// // //           */}
// // //           <h1 className="text-[#FE8204] text-[15vw] md:text-[14rem] leading-none font-bold uppercase w-full text-center tracking-tighter">
// // //             Just Tattoos
// // //           </h1>
// // //         </div>

// // //       </div>
// // //     </footer>
// // //   );
// // // }
// // import React from 'react';

// // // Reusable Social Icon Component
// // const SocialIcon = ({ iconPath, alt }) => (
// //   <a 
// //     href="#" 
// //     className="flex items-center justify-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
// //   >
// //     {/* Replace with actual SVG paths or Icon components */}
// //     <img src={iconPath} alt={alt} className="w-6 h-6 md:w-8 md:h-8" />
// //   </a>
// // );

// // const Footer = () => {
// //   const footerData = [
// //     {
// //       title: "SHOP",
// //       links: ["TATTOOS", "NEW ARRIVAL", "SALE"],
// //     },
// //     {
// //       title: "ABOUT",
// //       links: ["ABOUT US", "HOW IT WORKS", "CONTACT US"],
// //     },
// //     {
// //       title: "CUSTOMER CARE",
// //       links: ["TRACKING", "SHIPPING", "HELP & FAQ", "RETURNS"],
// //     },
// //   ];

// //   return (
// //     <footer className="w-full bg-white pt-10 pb-6 px-4 md:px-10 font-sans">
// //       <div className="max-w-[1440px] mx-auto">
        
// //         {/* 1. NAVIGATION CARDS SECTION */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
// //           {footerData.map((section, index) => (
// //             <div 
// //               key={index} 
// //               className="border border-gray-100 rounded-[40px] p-8 md:p-10 bg-white min-h-[250px] md:min-h-[300px] flex flex-col justify-between"
// //             >
// //               <h3 className="text-[#FE8204] text-xl md:text-2xl font-bold tracking-tight">
// //                 {section.title}
// //               </h3>
// //               <ul className="space-y-3 mt-6">
// //                 {section.links.map((link) => (
// //                   <li key={link}>
// //                     <a 
// //                       href="#" 
// //                       className="text-black text-lg md:text-xl font-bold hover:text-[#FE8204] transition-colors"
// //                     >
// //                       {link}
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>

// //         {/* 2. SOCIAL ICONS SECTION */}
// //         <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
// //           <SocialIcon iconPath="/icons/instagram.svg" alt="Instagram" />
// //           <SocialIcon iconPath="/icons/tiktok.svg" alt="TikTok" />
// //           <SocialIcon iconPath="/icons/x.svg" alt="X" />
// //           <SocialIcon iconPath="/icons/facebook.svg" alt="Facebook" />
// //           <SocialIcon iconPath="/icons/youtube.svg" alt="YouTube" />
// //         </div>

// //         {/* 3. LARGE BRAND LOGO SECTION */}
// //         <div className="flex flex-col items-center">
// //           <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
// //             <span className="text-[#FE8204] text-[60px] sm:text-[100px] md:text-[150px] lg:text-[180px] font-black leading-none uppercase tracking-tighter">
// //               Just
// //             </span>
// //             {/* The Heart Icon */}
// //             <svg 
// //               className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] fill-[#FE8204]" 
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
// //             </svg>
// //             <span className="text-[#FE8204] text-[60px] sm:text-[100px] md:text-[150px] lg:text-[180px] font-black leading-none uppercase tracking-tighter">
// //               Tattoos
// //             </span>
// //           </div>
// //         </div>

// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// import React from 'react';

// // Reusable Icon Box Component
// const SocialIcon = ({ className, iconName }) => (
//   <button className={`flex items-center justify-center border border-black/10 rounded-[20px] bg-white hover:bg-gray-50 transition-colors ${className}`}>
//     <img 
//       src={`/assets/${iconName}.svg`} 
//       alt={iconName} 
//       className="w-1/3 h-1/3 object-contain" 
//     />
//   </button>
// );

// const Footer = () => {
//   return (
//     <footer className="w-full bg-white font-['Almarena',_sans-serif] pt-12 pb-6 px-6 md:px-10">
//       <div className="max-w-[1440px] mx-auto">
        
//         {/* TOP SECTION: Cards + Social Icons */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
          
//           {/* Column 1: Shop */}
//           <div className="border border-black/10 rounded-[30px] p-8 flex flex-col justify-between min-h-[300px]">
//             <h3 className="text-[#FE8204] text-2xl font-bold uppercase">Shop</h3>
//             <ul className="space-y-3">
//               {['Tattoos', 'New Arrival', 'Sale'].map(item => (
//                 <li key={item}><a href="#" className="font-bold uppercase hover:text-[#FE8204]">{item}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 2: About */}
//           <div className="border border-black/10 rounded-[30px] p-8 flex flex-col justify-between min-h-[300px]">
//             <h3 className="text-[#FE8204] text-2xl font-bold uppercase">About</h3>
//             <ul className="space-y-3">
//               {['About us', 'How it works', 'Contact us'].map(item => (
//                 <li key={item}><a href="#" className="font-bold uppercase hover:text-[#FE8204]">{item}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Customer Care */}
//           <div className="border border-black/10 rounded-[30px] p-8 flex flex-col justify-between min-h-[300px]">
//             <h3 className="text-[#FE8204] text-2xl font-bold uppercase leading-tight">Customer Care</h3>
//             <ul className="space-y-3">
//               {['Tracking', 'Shipping', 'Help & FAQ', 'Returns'].map(item => (
//                 <li key={item}><a href="#" className="font-bold uppercase hover:text-[#FE8204]">{item}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Social Icons (Asymmetrical Grid) */}
//           <div className="flex flex-col gap-4">
//             {/* Top Row: 2 Large Icons */}
//             <div className="grid grid-cols-2 gap-4 h-1/2">
//               <SocialIcon className="w-full h-full" iconName="instagram" />
//               <SocialIcon className="w-full h-full" iconName="tiktok" />
//             </div>
//             {/* Bottom Row: 3 Smaller Icons */}
//             <div className="grid grid-cols-3 gap-4 h-1/2">
//               <SocialIcon className="w-full h-full" iconName="x" />
//               <SocialIcon className="w-full h-full" iconName="facebook" />
//               <SocialIcon className="w-full h-full" iconName="youtube" />
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM SECTION: Massive Brand Logo */}
//         {/* <div className="mt-12 w-full">
//           <div className="flex items-center justify-center gap-4 md:gap-8 select-none">
//             <span className="text-[#FE8204] text-[12vw] md:text-[220px] font-bold leading-none uppercase tracking-tighter">
//               Just
//             </span>
           
//             <div className="w-[10vw] h-[10vw] md:w-[180px] md:h-[180px]">
//                 <svg viewBox="0 0 148 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//                     <path d="M74 128L63.275 118.21C25.16 83.66 0 60.83 0 33.16C0 10.61 17.76 0 40.7 0C53.65 0 66.045 6.03 74 15.53C81.955 6.03 94.35 0 107.3 0C130.24 0 148 10.61 148 33.16C148 60.83 122.84 83.66 84.725 118.21L74 128Z" fill="#FE8204"/>
               
//                     <path d="M74 100L66 92C38 67 20 50 20 33C20 21 28 15 40 15C50 15 59 21 64 29L74 42L84 29C89 21 98 15 108 15C120 15 128 21 128 33C128 50 110 67 82 92L74 100Z" fill="white"/>
//                 </svg>
//             </div>
//             <span className="text-[#FE8204] text-[12vw] md:text-[220px] font-bold leading-none uppercase tracking-tighter">
//               Tattoos
//             </span>
//           </div>
//         </div> */}
//         {/* BOTTOM SECTION: Brand Logo (Scaled Down) */}
// <div className="mt-16 w-full py-8">
//   <div className="flex items-center justify-center gap-3 md:gap-6 select-none">
//     {/* "Just" - Reduced from 220px to 80px-120px range */}
//     <span className="text-[#FE8204] text-[45px] sm:text-[70px] md:text-[100px] lg:text-[120px] font-bold leading-none uppercase tracking-tighter">
//       Just
//     </span>

//     {/* Refined Geometric Heart - Scaled to match new text height */}
//     <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[90px] md:h-[90px] flex items-center justify-center">
//       <svg 
//         viewBox="0 0 100 100" 
//         fill="none" 
//         xmlns="http://www.w3.org/2000/svg" 
//         className="w-full h-full"
//       >
//         <path 
//           d="M50 85L43.5 79.5C21.5 60.5 7 47.5 7 31.5C7 18.5 17.5 8 30.5 8C37.5 8 44.5 11.5 50 17C55.5 11.5 62.5 8 69.5 8C82.5 8 93 18.5 93 31.5C93 47.5 78.5 60.5 56.5 79.5L50 85Z" 
//           stroke="#FE8204" 
//           strokeWidth="12" 
//           strokeLinejoin="round"
//         />
//         {/* Inner detail to mimic the "link" style in the wireframe */}
//         <path 
//           d="M40 45L50 55L60 45" 
//           stroke="#FE8204" 
//           strokeWidth="10" 
//           strokeLinecap="round" 
//           strokeLinejoin="round"
//         />
//       </svg>
//     </div>

//     {/* "Tattoos" */}
//     <span className="text-[#FE8204] text-[45px] sm:text-[70px] md:text-[100px] lg:text-[120px] font-bold leading-none uppercase tracking-tighter">
//       Tattoos
//     </span>
//   </div>
// </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React from 'react';

// // Reusable Icon Box Component
// const SocialIcon = ({ className, iconName }) => (
//   <button className={`flex items-center justify-center border border-black/10 rounded-[12px] md:rounded-[20px] bg-white hover:bg-gray-50 transition-colors ${className}`}>
//     <img 
//       src={`/assets/images/${iconName}.svg`} 
//       alt={iconName} 
//       className="w-1/2 h-1/2 object-contain" 
//     />
//   </button>
// );

// const Footer = () => {
//   return (
//     <footer className="w-full bg-white font-['Almarena',_sans-serif] pt-12 pb-10 px-6 md:px-10">
//       <div className="max-w-[1440px] mx-auto">
        
//         {/* TOP SECTION: Cards + Social Icons */}
//         <div className="flex flex-col md:grid md:grid-cols-4 gap-4 items-stretch">
          
//           {/* Column 1: Shop */}
//           <div className="border border-black/10 rounded-[30px] p-8 flex flex-col justify-between min-h-[200px] md:min-h-[300px]">
//             <h3 className="text-[#FE8204] text-xl md:text-2xl font-bold uppercase">Shop</h3>
//             <ul className="space-y-3 mt-4 md:mt-0">
//               {['Tattoos', 'New Arrival', 'Sale'].map(item => (
//                 <li key={item}><a href="#" className="font-bold uppercase hover:text-[#FE8204] transition-colors">{item}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 2: About */}
//           <div className="border border-black/10 rounded-[30px] p-8 flex flex-col justify-between min-h-[200px] md:min-h-[300px]">
//             <h3 className="text-[#FE8204] text-xl md:text-2xl font-bold uppercase">About</h3>
//             <ul className="space-y-3 mt-4 md:mt-0">
//               {['About us', 'How it works', 'Contact us'].map(item => (
//                 <li key={item}><a href="#" className="font-bold uppercase hover:text-[#FE8204] transition-colors">{item}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Customer Care */}
//           <div className="border border-black/10 rounded-[30px] p-8 flex flex-col justify-between min-h-[220px] md:min-h-[300px]">
//             <h3 className="text-[#FE8204] text-xl md:text-2xl font-bold uppercase leading-tight">Customer Care</h3>
//             <ul className="space-y-3 mt-4 md:mt-0">
//               {['Tracking', 'Shipping', 'Help & FAQ', 'Returns'].map(item => (
//                 <li key={item}><a href="#" className="font-bold uppercase hover:text-[#FE8204] transition-colors">{item}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Social Icons */}
//           <div className="mt-4 md:mt-0">
//             {/* MOBILE VIEW: Single Horizontal Row */}
//             <div className="flex md:hidden flex-row gap-3 h-[60px]">
//               {['instagram', 'tiktok', 'x', 'facebook', 'youtube'].map((icon) => (
//                 <SocialIcon key={icon} className="flex-1" iconName={icon} />
//               ))}
//             </div>

//             {/* DESKTOP VIEW: Asymmetrical Grid (2 over 3) */}
//             <div className="hidden md:flex flex-col gap-4 h-full">
//               <div className="grid grid-cols-2 gap-4 h-1/2">
//                 <SocialIcon className="w-full h-full" iconName="instagram" />
//                 <SocialIcon className="w-full h-full" iconName="tiktok" />
//               </div>
//               <div className="grid grid-cols-3 gap-4 h-1/2">
//                 <SocialIcon className="w-full h-full" iconName="twitter" />
//                 <SocialIcon className="w-full h-full" iconName="facebook" />
//                 <SocialIcon className="w-full h-full" iconName="youtube" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM SECTION: Brand Logo (Optimized Size) */}
//         <div className="mt-16 w-full">
//           <div className="flex items-center justify-center gap-3 md:gap-6 select-none">
//             <span className="text-[#FE8204] text-[40px] sm:text-[60px] md:text-[100px] lg:text-[130px] font-bold leading-none uppercase tracking-tighter">
//               Just
//             </span>
            
//             {/* Brand Heart */}
//             <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] md:w-[90px] md:h-[90px]">
//                 <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//                     <path 
//                       d="M50 85L43.5 79.5C21.5 60.5 7 47.5 7 31.5C7 18.5 17.5 8 30.5 8C37.5 8 44.5 11.5 50 17C55.5 11.5 62.5 8 69.5 8C82.5 8 93 18.5 93 31.5C93 47.5 78.5 60.5 56.5 79.5L50 85Z" 
//                       stroke="#FE8204" 
//                       strokeWidth="10" 
//                       strokeLinejoin="round"
//                     />
//                 </svg>
//             </div>

//             <span className="text-[#FE8204] text-[40px] sm:text-[60px] md:text-[100px] lg:text-[130px] font-bold leading-none uppercase tracking-tighter">
//               Tattoos
//             </span>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React, { useState } from 'react';

// // Reusable Icon Box Component using CSS Masking for color control
// const SocialIcon = ({ className, iconName, isSelected }) => (
//   // Added "group" to trigger child element styling on hover
//   <button className={`group flex items-center justify-center border border-black/10 rounded-[12px] md:rounded-[20px] bg-white hover:bg-gray-50 transition-colors ${className}`}>
    
//     {/* Instead of <img>, we use a div with the SVG as a mask mask */}
//     <div 
//       className={`w-1/2 h-1/2 transition-colors duration-300 ${
//         isSelected ? '--color-brand-orange' : 'bg-black group-hover:--color-brand-orange'
//       }`}
//       style={{
//         WebkitMaskImage: `url(/assets/images/${iconName}.svg)`,
//         WebkitMaskSize: 'contain',
//         WebkitMaskRepeat: 'no-repeat',
//         WebkitMaskPosition: 'center',
//         maskImage: `url(/assets/images/${iconName}.svg)`,
//         maskSize: 'contain',
//         maskRepeat: 'no-repeat',
//         maskPosition: 'center',
//       }}
//     />
//   </button>
// );

// const Footer = () => {
//   // Optional: State to track selected icon if you need click-to-select functionality
//   const [selectedIcon, setSelectedIcon] = useState(null);

//   return (
//     <footer className="w-full bg-white font-['Almarena',_sans-serif] pt-12 pb-10 px-6 md:px-10">
//       <div className="max-w-[1440px] mx-auto">
        
//         {/* TOP SECTION: Cards + Social Icons */}
//         <div className="flex flex-col md:grid md:grid-cols-4 gap-4 items-stretch">
          
//           {/* Column 1: Shop */}
//           <div className="border border-black/10 rounded-[30px] p-8 flex flex-col justify-between min-h-[200px] md:min-h-[300px]">
//             <h3 className="text-[#FE8204] text-xl md:text-2xl font-bold uppercase">Shop</h3>
//             <ul className="space-y-3 mt-4 md:mt-0">
//               {['Tattoos', 'New Arrival', 'Sale'].map(item => (
//                 <li key={item}><a href="#" className="font-bold uppercase hover:text-[#FE8204] transition-colors">{item}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 2: About */}
//           <div className="border border-black/10 rounded-[30px] p-8 flex flex-col justify-between min-h-[200px] md:min-h-[300px]">
//             <h3 className="text-[#FE8204] text-xl md:text-2xl font-bold uppercase">About</h3>
//             <ul className="space-y-3 mt-4 md:mt-0">
//               {['About us', 'How it works', 'Contact us'].map(item => (
//                 <li key={item}><a href="#" className="font-bold uppercase hover:text-[#FE8204] transition-colors">{item}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Customer Care */}
//           <div className="border border-black/10 rounded-[30px] p-8 flex flex-col justify-between min-h-[220px] md:min-h-[300px]">
//             <h3 className="text-[#FE8204] text-xl md:text-2xl font-bold uppercase leading-tight">Customer Care</h3>
//             <ul className="space-y-3 mt-4 md:mt-0">
//               {['Tracking', 'Shipping', 'Help & FAQ', 'Returns'].map(item => (
//                 <li key={item}><a href="#" className="font-bold uppercase hover:text-[#FE8204] transition-colors">{item}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Social Icons */}
//           <div className="mt-4 md:mt-0">
//             {/* MOBILE VIEW: Single Horizontal Row */}
//             <div className="flex md:hidden flex-row gap-3 h-[60px]">
//               {['instagram', 'tiktok', 'x', 'facebook', 'youtube'].map((icon) => (
//                 <SocialIcon 
//                   key={icon} 
//                   className="flex-1" 
//                   iconName={icon} 
//                   isSelected={selectedIcon === icon}
//                   // onClick={() => setSelectedIcon(icon)} // Uncomment to enable click-to-select
//                 />
//               ))}
//             </div>

//             {/* DESKTOP VIEW: Asymmetrical Grid (2 over 3) */}
//             <div className="hidden md:flex flex-col gap-4 h-full">
//               <div className="grid grid-cols-2 gap-4 h-1/2">
//                 <SocialIcon className="w-full h-full" iconName="instagram" isSelected={selectedIcon === 'instagram'} />
//                 <SocialIcon className="w-full h-full" iconName="tiktok" isSelected={selectedIcon === 'tiktok'} />
//               </div>
//               <div className="grid grid-cols-3 gap-4 h-1/2">
//                 <SocialIcon className="w-full h-full" iconName="twitter" isSelected={selectedIcon === 'twitter'} />
//                 <SocialIcon className="w-full h-full" iconName="facebook" isSelected={selectedIcon === 'facebook'} />
//                 <SocialIcon className="w-full h-full" iconName="youtube" isSelected={selectedIcon === 'youtube'} />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM SECTION: Brand Logo (Optimized Size) */}
//         <div className="mt-16 w-full">
//           <div className="flex items-center justify-center gap-3 md:gap-6 select-none">
//             <span className="text-[#FE8204] text-[40px] sm:text-[60px] md:text-[100px] lg:text-[130px] font-bold leading-none uppercase tracking-tighter">
//               Just
//             </span>
            
//             {/* Brand Heart */}
//             <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] md:w-[90px] md:h-[90px]">
//                 <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//                     <path 
//                       d="M50 85L43.5 79.5C21.5 60.5 7 47.5 7 31.5C7 18.5 17.5 8 30.5 8C37.5 8 44.5 11.5 50 17C55.5 11.5 62.5 8 69.5 8C82.5 8 93 18.5 93 31.5C93 47.5 78.5 60.5 56.5 79.5L50 85Z" 
//                       stroke="#FE8204" 
//                       strokeWidth="10" 
//                       strokeLinejoin="round"
//                     />
//                 </svg>
//             </div>

//             <span className="text-[#FE8204] text-[40px] sm:text-[60px] md:text-[100px] lg:text-[130px] font-bold leading-none uppercase tracking-tighter">
//               Tattoos
//             </span>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from 'react';

// Reusable Icon Box Component using CSS Masking for color control
const SocialIcon = ({ className, iconName, isSelected }) => (
  // Added "group" to trigger child element styling on hover
  <button className={`group flex items-center justify-center border border-black/10 rounded-[12px] md:rounded-[20px] bg-white hover:bg-gray-50 transition-colors ${className}`}>
    
    {/* Notice the fixed background classes here: bg-[#FE8204] */}
    <div 
      className={`w-1/2 h-1/2 transition-colors duration-300 ${
        isSelected ? 'bg-[#FE8204]' : 'bg-black group-hover:bg-[#FE8204]'
      }`}
      style={{
        WebkitMaskImage: `url(/assets/images/${iconName}.svg)`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskImage: `url(/assets/images/${iconName}.svg)`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
      }}
    />
  </button>
);

const Footer = () => {
  // Optional: State to track selected icon if you need click-to-select functionality
  const [selectedIcon, setSelectedIcon] = useState(null);

  return (
    <footer className="w-full bg-white font-['Almarena',_sans-serif] pt-12 pb-10 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        
        {/* TOP SECTION: Cards + Social Icons */}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-4 items-stretch">
          
          {/* Column 1: Shop */}
          <div className="border border-black/10 rounded-[30px] p-8 flex flex-col justify-between min-h-[200px] md:min-h-[300px]">
            <h3 className="text-[#FE8204] text-xl md:text-2xl font-bold uppercase">Shop</h3>
            <ul className="space-y-3 mt-4 md:mt-0">
              {['Tattoos', 'New Arrival', 'Sale'].map(item => (
                <li key={item}><a href="#" className="font-bold uppercase hover:text-[#FE8204] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 2: About */}
          <div className="border border-black/10 rounded-[30px] p-8 flex flex-col justify-between min-h-[200px] md:min-h-[300px]">
            <h3 className="text-[#FE8204] text-xl md:text-2xl font-bold uppercase">About</h3>
            <ul className="space-y-3 mt-4 md:mt-0">
              {['About us', 'How it works', 'Contact us'].map(item => (
                <li key={item}><a href="#" className="font-bold uppercase hover:text-[#FE8204] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="border border-black/10 rounded-[30px] p-8 flex flex-col justify-between min-h-[220px] md:min-h-[300px]">
            <h3 className="text-[#FE8204] text-xl md:text-2xl font-bold uppercase leading-tight">Customer Care</h3>
            <ul className="space-y-3 mt-4 md:mt-0">
              {['Tracking', 'Shipping', 'Help & FAQ', 'Returns'].map(item => (
                <li key={item}><a href="#" className="font-bold uppercase hover:text-[#FE8204] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Icons */}
          <div className="mt-4 md:mt-0">
            {/* MOBILE VIEW: Single Horizontal Row */}
            <div className="flex md:hidden flex-row gap-3 h-[60px]">
              {['instagram', 'tiktok', 'twitter', 'facebook', 'youtube'].map((icon) => (
                <SocialIcon 
                  key={icon} 
                  className="flex-1" 
                  iconName={icon} 
                  isSelected={selectedIcon === icon}
                  // onClick={() => setSelectedIcon(icon)} // Uncomment to enable click-to-select
                />
              ))}
            </div>

            {/* DESKTOP VIEW: Asymmetrical Grid (2 over 3) */}
            <div className="hidden md:flex flex-col gap-4 h-full">
              <div className="grid grid-cols-2 gap-4 h-1/2">
                <SocialIcon className="w-full h-full" iconName="instagram" isSelected={selectedIcon === 'instagram'} />
                <SocialIcon className="w-full h-full" iconName="tiktok" isSelected={selectedIcon === 'tiktok'} />
              </div>
              <div className="grid grid-cols-3 gap-4 h-1/2">
                <SocialIcon className="w-full h-full" iconName="twitter" isSelected={selectedIcon === 'twitter'} />
                <SocialIcon className="w-full h-full" iconName="facebook" isSelected={selectedIcon === 'facebook'} />
                <SocialIcon className="w-full h-full" iconName="youtube" isSelected={selectedIcon === 'youtube'} />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Brand Logo (Optimized Size) */}
        {/* <div className="mt-16 w-full">
          <div className="flex items-center justify-center gap-3 md:gap-6 select-none">
            {/* <span className="text-[#FE8204] text-[40px] sm:text-[60px] md:text-[100px] lg:text-[130px] font-bold leading-none uppercase tracking-tighter">
              Just
            </span> */}
            
            {/* Brand Heart */}
            {/* <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] md:w-[90px] md:h-[90px]">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path 
                      d="M50 85L43.5 79.5C21.5 60.5 7 47.5 7 31.5C7 18.5 17.5 8 30.5 8C37.5 8 44.5 11.5 50 17C55.5 11.5 62.5 8 69.5 8C82.5 8 93 18.5 93 31.5C93 47.5 78.5 60.5 56.5 79.5L50 85Z" 
                      stroke="#FE8204" 
                      strokeWidth="10" 
                      strokeLinejoin="round"
                    />
                </svg>
            </div> */}
            {/* <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] md:w-[90px] md:h-[90px]">
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path 
          d="M50 82L15 47L32.5 29.5L50 47L67.5 29.5L85 47L50 82Z" 
          stroke="#FE8204" 
          strokeWidth="12" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
    </svg>
</div> */}
{/* 
<div className="w-[500px] h-max sm:w-[50px] sm:h-[50px] md:w-[90px] md:h-[90px]">
  <img 
    src="/assets/icons/FooterLogo.png" 
    alt="Footer Logo" 
    className="w-full h-full object-contain" 
  />
</div> */}

  <div className="mt-16 w-full px-4">
  <div className="flex items-center justify-center select-none">

    {/* Fully Scaled Large Logo & Text */}
    <div className="w-full max-w-[800px] lg:max-w-[1200px]">
      <img 
        src="assets/icons/Fotterlogo2.svg" 
        alt="Footer Logo" 
        className="w-full h-auto object-contain" 
      />
    </div>

  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;