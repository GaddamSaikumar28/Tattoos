import React from 'react';
import { motion } from 'framer-motion';

const FreeGiftComponent = () => {
  return (
    <section className="bg-black w-full overflow-hidden px-4 py-16 md:px-16 md:py-24 relative">
      <div className="max-w-[1312px] mx-auto">
        
        {/* Text Header Section */}
        <div className="mb-12">
          <h2 className="text-[36px] md:text-[64px] font-almarena font-bold text-white uppercase leading-tight">
            Free gift with your order 
          </h2>
          <p className="text-[16px] md:text-[24px] font-montserrat font-medium text-white mt-6 max-w-[1018px] leading-snug">
            Who doesn’t love a surprise? Spend $30 USD or more and we’ll toss in a mystery ink on us. Realistic tattoo look, water-resistant, and designed to last up to 10 days. At Just Tattoos, we make it easy to switch up your style, no commitment required.
          </p>
          <p className="text-[16px] md:text-[24px] font-montserrat font-medium text-[#FE8204] mt-4">
            Available in the U.S. only. While supplies last 
          </p>
        </div>

        {/* Animated Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:h-[500px]">
          
          {/* Left Image Card (Slides in from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-[800px] h-[500px] rounded-[30px] overflow-hidden relative shrink-0 bg-black"
          >
            {/* Replace src with your actual image asset path */}
            <img 
              src="/assets/images/Component4.png" 
              alt="Free Gift Box with Just Tattoos" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right White Card (Slides in from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:flex-grow bg-white rounded-[30px] h-[500px] flex flex-col justify-end p-6 md:p-8 relative"
          >
            <h3 className="text-[20px] md:text-[24px] font-almarena font-bold text-black uppercase mb-2">
              A Little Something Extra 
            </h3>
            <p className="text-[14px] md:text-[16px] font-montserrat font-normal text-black mb-8 max-w-[320px]">
              High-quality ink, on the house.  Reach $30 and we’ll drop a mystery design into your order.  New style, zero cost 
            </p>

            {/* Shop Collections Button */}
            {/* <button className="bg-black text-white rounded-full h-[50px] w-[249px] pl-5 pr-1 flex items-center justify-between group transition-all hover:bg-gray-800 border border-black outline outline-1 outline-offset-[-1px] outline-black [cite: 14, 15]">
              <span className="font-almarena font-bold uppercase text-[18px] tracking-wide pt-1">
                Shop collections 
              </span>
              <div className="bg-white text-black w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0 [cite: 17]">
               
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 1.5L13.5 6.5M13.5 6.5L8.5 11.5M13.5 6.5H1.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button> */}
            <button className="bg-black text-white rounded-full h-[50px] w-[249px] pl-5 pr-1 flex items-center justify-between group transition-all hover:bg-gray-800 border border-black outline outline-1 outline-offset-[-1px] outline-black [cite: 14, 15]">
                <span className="font-almarena font-bold uppercase text-[18px] tracking-wide pt-1 whitespace-nowrap">
                    Shop collections 
                </span>
                <div className="bg-white text-black w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0 [cite: 17]">
                    {/* Arrow Icon */}
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 1.5L13.5 6.5M13.5 6.5L8.5 11.5M13.5 6.5H1.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FreeGiftComponent;