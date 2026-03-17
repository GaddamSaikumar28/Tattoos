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
    className="group relative flex items-center justify-between w-[249px] h-[50px] bg-white rounded-[30px] border border-black pl-5 pr-[5px] overflow-hidden transition-colors hover:bg-gray-100"
  >
    <span className="font-heading text-[18px] text-black uppercase tracking-wide z-10">
      {text}
    </span>
    <div className="w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-95">
      <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 1.5L13.5 6.5M13.5 6.5L8.5 11.5M13.5 6.5H1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </button>
);

export default function FeatureSection() {
  // Hooks for scroll-triggered slide animations (adjusted threshold for mobile scrolling)
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1 });
  const [img1Ref, img1Visible] = useScrollReveal({ threshold: 0.2 });
  const [card1Ref, card1Visible] = useScrollReveal({ threshold: 0.2 });
  const [card2Ref, card2Visible] = useScrollReveal({ threshold: 0.2 });
  const [img2Ref, img2Visible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-[64px] py-16 md:py-[100px] overflow-hidden bg-white">
      
      {/* Header Section */}
      <div 
        ref={headerRef}
        className={`mb-12 md:mb-[60px] transition-all duration-700 ease-out ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Same line text with whitespace-nowrap and explicit spacing */}
        <h2 className="font-heading text-[28px] sm:text-[36px] md:text-[64px] font-bold uppercase text-black mb-4 md:mb-[20px] leading-tight whitespace-nowrap flex items-center">
          Real Art. <span className="ml-3 md:ml-5">Real Fast.</span>
        </h2>
        <p className="font-montserrat text-[16px] md:text-[24px] font-medium text-black max-w-4xl leading-snug">
          Get an authentic, tattoo-quality finish that develops in 24 hours. Our skin-safe formula is built for adventure and designed to fade naturally. Your style, your terms
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-[24px]">
        
        {/* Row 1: Left Image */}
        <div 
          ref={img1Ref}
          className={`md:col-span-8 h-[500px] rounded-[30px] overflow-hidden transition-all duration-1000 ease-out ${
            img1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 md:-translate-x-16'
          }`}
        >
          <img 
            src="/assets/images/SecondComponent1.png" 
            alt="Tattoo applied on arm" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Row 1: Right Black Card */}
        <div 
          ref={card1Ref}
          className={`md:col-span-4 h-[500px] bg-black rounded-[30px] p-6 md:p-10 flex flex-col justify-end transition-all duration-1000 md:delay-100 ease-out ${
            card1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 md:translate-x-16'
          }`}
        >
          <h3 className="font-heading text-[20px] md:text-[24px] text-white font-bold uppercase mb-4">
            Built for Self-Expression
          </h3>
          <p className="font-montserrat text-[14px] md:text-[16px] text-white font-normal mb-8 leading-relaxed">
            Born from a love for tattoo culture and a fear of lifelong regret. Just Tattoos was created to let you test new ideas, change your look, and make a statement whenever the mood strikes
          </p>
          <ActionButton text="Read our story" />
        </div>

        {/* Row 2: Left Grey Card */}
        <div 
          ref={card2Ref}
          className={`md:col-span-4 h-[500px] bg-[#E8E8E8] rounded-[30px] p-6 md:p-10 flex flex-col justify-end transition-all duration-1000 ease-out ${
            card2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 md:-translate-x-16'
          }`}
        >
          <h3 className="font-heading text-[20px] md:text-[24px] text-black font-bold uppercase mb-4">
            The 24-Hour Glow Up
          </h3>
          <p className="font-montserrat text-[14px] md:text-[16px] text-black font-normal mb-8 leading-relaxed">
            Apply your design in minutes and watch the magic happen. Our ink develops over 24 hours to create a deep, realistic finish that lasts up to 10 days. No needles, no pain, just pure art
          </p>
          <ActionButton text="How it works" />
        </div>

        {/* Row 2: Right Image */}
        <div 
          ref={img2Ref}
          className={`md:col-span-8 h-[500px] rounded-[30px] overflow-hidden transition-all duration-1000 md:delay-100 ease-out ${
            img2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 md:translate-x-16'
          }`}
        >
          <img 
            src="/assets/images/SecondComponent2.png" 
            alt="Applying tattoo transfer" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}