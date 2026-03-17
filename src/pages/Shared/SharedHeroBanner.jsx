import React from 'react';
import { motion } from 'framer-motion';

export default function SharedHeroBanner({
  image = "/assets/images/NewArrivalsHeroDesktop.png",
  title = "New Arrivals",
  textColor = "#FE8204",
  mobileImage = "/assets/images/NewArrivalMobile.png", // Added mobile image prop
  useMobileImage = false, // Added flag to toggle mobile image feature
}) {
  // Split the title into an array of words so each line animates separately
  const words = title.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

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
      <div className="relative w-full max-w-[1312px] mx-auto flex flex-col md:block">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-[564px] md:h-[635px] rounded-[30px] overflow-hidden bg-gray-200 relative"
        >
          {useMobileImage ? (
            <>
              {/* Visible only on mobile screens (hidden on md and up) */}
              <img 
                src={mobileImage} 
                alt={`${title} mobile`} 
                className="w-full h-full object-fit object-center md:hidden"
              />
              {/* Visible only on desktop screens (hidden on mobile, block on md and up) */}
              <img 
                src={image} 
                alt={`${title} desktop`} 
                className="w-full h-full object-cover object-center hidden md:block"
              />
            </>
          ) : (
            <>
              {/* Fallback to single image if flag is false */}
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover object-center"
              />
            </>
          )}
        </motion.div>


        {/* --- Text Container --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col mt-6 md:mt-0 md:absolute md:left-[40px] md:top-[329px] z-10"
        >
          {/* Dynamically map through the words to create the staggered animation effect */}
          {words.map((word, index) => (
            <div key={index} className="overflow-hidden pb-2 md:pb-4">
              <motion.h2 
                variants={textVariants}
                className="font-bold uppercase text-[64px] md:text-[140px] leading-[0.85] tracking-tight m-0 p-0"
                style={{ color: textColor }}
              >
                {word}
              </motion.h2>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}