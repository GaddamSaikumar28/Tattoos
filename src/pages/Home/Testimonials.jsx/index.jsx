import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const row1 = [
    {
      name: "Jordan Miller",
      text: "\"This ink looks so real! It lasted ten full days through gym sessions. Love it. 10/10.\"",
      img: "https://placehold.co/48x48"
    },
    {
      name: "Sarah Laurent",
      text: "\"Perfect for testing my sleeve idea. Super easy to apply and the color is very deep.\"",
      img: "https://placehold.co/48x48"
    },
    {
      name: "Chris Peterson",
      text: "\"Best temporary tattoo I ever tried. People thought it was permanent. Total winner.\"",
      img: "https://placehold.co/48x48"
    }
  ];

  const row2 = [
    {
      name: "Elena Rodriguez",
      text: "\"The mystery gift was a great surprise. High quality art that fades away naturally\"",
      img: "https://placehold.co/48x48"
    },
    {
      name: "Blake Thompson",
      text: "\"No needles, no pain, just style. It developed perfectly in one day. Highly suggest.\"",
      img: "https://placehold.co/48x48"
    },
    {
      name: "Maya Whitestone",
      text: "\"Finally, a tattoo with zero regret. My friends are obsessed with the matte finish.\"",
      img: "https://placehold.co/48x48"
    }
  ];

  const allTestimonials = [...row1, ...row2];

  const nextSlide = () => {
    if (currentIndex < allTestimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Reusable 5-Star component
  const FiveStars = () => (
    <div className="flex gap-[4px] overflow-hidden h-[19px]">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FE8204"/>
        </svg>
      ))}
    </div>
  );

  // Reusable Card Component
  const TestimonialCard = ({ item, isMobile = false }) => (
    <div className={`bg-white rounded-[30px] border border-black outline outline-1 outline-offset-[-1px] outline-black flex flex-col justify-start align-start gap-[20px] md:gap-[24px] ${isMobile ? 'min-w-full px-[20px] py-[32px]' : 'w-[416px] p-[32px] shrink-0'}`}>
      <div className="flex flex-col gap-[16px] md:gap-[24px]">
        <FiveStars />
        <p className="text-black font-montserrat font-normal text-[14px] md:text-[16px] leading-snug">
          {item.text}
        </p>
      </div>
      <div className="flex items-center gap-[16px] mt-auto">
        <img src={item.img} alt={item.name} className="w-[48px] h-[48px] rounded-full object-cover" />
        <div className="flex flex-col flex-1">
          <h4 className="text-black font-almarena font-bold text-[16px]">{item.name}</h4>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Required keyframes for the continuous marquee loop */}
      <style>
        {`
          @keyframes marqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            animation: marqueeLeft 35s linear infinite;
          }
          .animate-marquee-right {
            animation: marqueeRight 35s linear infinite;
          }
          /* Pause animation on hover for better readability */
          .animate-marquee-left:hover, .animate-marquee-right:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <section className="relative w-full bg-white py-[64px] md:py-[100px] overflow-hidden">
        
        {/* Header */}
        <div className="px-[12px] md:px-[64px] mb-[48px] md:mb-[72px]">
          <h2 className="text-black font-almarena font-bold text-[36px] md:text-[64px] uppercase tracking-wide">
            Our Testimonials
          </h2>
        </div>

        {/* --- DESKTOP VIEW (Marquee) --- */}
        <div className="hidden md:flex flex-col gap-[32px] w-full">
          {/* Top Row: Moves Left to Right */}
          <div className="flex w-max animate-marquee-right gap-[32px]">
            {[...row1, ...row1, ...row1].map((item, index) => (
              <TestimonialCard key={`row1-${index}`} item={item} />
            ))}
          </div>

          {/* Bottom Row: Moves Right to Left */}
          <div className="flex w-max animate-marquee-left gap-[32px]">
            {[...row2, ...row2, ...row2].map((item, index) => (
              <TestimonialCard key={`row2-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* --- MOBILE VIEW (Carousel) --- */}
        <div className="flex md:hidden flex-col w-full px-[12px]">
          {/* Carousel Track */}
          <div className="overflow-hidden w-full rounded-[30px]">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-[16px]"
              style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))` }}
            >
              {allTestimonials.map((item, index) => (
                <TestimonialCard key={`mobile-${index}`} item={item} isMobile={true} />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-[32px] w-full">
            
            {/* Dots */}
            <div className="flex gap-[8px]">
              {allTestimonials.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-[8px] h-[8px] rounded-full transition-all ${currentIndex === index ? 'bg-[#FE8204] border-none' : 'bg-white border border-black opacity-80'}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-[16px]">
              {/* Prev Button */}
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-[48px] h-[48px] rounded-full bg-white border border-black outline outline-1 outline-offset-[-1px] outline-black flex items-center justify-center transition-all ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {/* Next Button */}
              <button 
                onClick={nextSlide}
                disabled={currentIndex === allTestimonials.length - 1}
                className={`w-[48px] h-[48px] rounded-full bg-white border border-black outline outline-1 outline-offset-[-1px] outline-black flex items-center justify-center transition-all ${currentIndex === allTestimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
          </div>
        </div>

      </section>
    </>
  );
};

export default Testimonials;