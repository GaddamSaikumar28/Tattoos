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