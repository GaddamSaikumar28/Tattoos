
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