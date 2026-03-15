import React from 'react';

const InfoComponent = () => {
  const features = [
    {
      title: "Lasts Up to 10 Days",
      description: "Our skin-safe ink is designed to last up to 10 days, giving you plenty of time to enjoy the look without long-term commitment. Easy to apply, easy to move on when you’re ready for something new",
      icon: (
        // Placeholder for the Calendar icon (Replace with exact Figma SVG)
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 14L39 10V38H9V14Z" stroke="#FE8204" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M12 6V16M32 4V14M5 22H43" stroke="#FE8204" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Made for All\nSkin Tones",
      description: "Our formulas are carefully tested, cruelty-free, and made with vegan-friendly ingredients. Designed to look great across a wide range of skin tones while meeting strict safety standards",
      icon: (
        // Placeholder for the Group/People icon (Replace with exact Figma SVG)
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 22C27.3137 22 30 19.3137 30 16C30 12.6863 27.3137 10 24 10C20.6863 10 18 12.6863 18 16C18 19.3137 20.6863 22 24 22Z" stroke="#FE8204" strokeWidth="2"/>
          <path d="M11 38C11 31.3726 16.3726 26 23 26H25C31.6274 26 37 31.3726 37 38" stroke="#FE8204" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="18" r="4" stroke="#FE8204" strokeWidth="2"/>
          <circle cx="36" cy="18" r="4" stroke="#FE8204" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Real Tattoo Look",
      description: "Unlike traditional temporary tattoos that sit on the surface, our ink absorbs into the top layer of your skin for a more natural, realistic finish. The design gradually fades as your skin renews itself",
      icon: (
        // Placeholder for the Star/Sparkle icon (Replace with exact Figma SVG)
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 6L26.5 16.5L38 18L29.5 25.5L32 37L22 31L12 37L14.5 25.5L6 18L17.5 16.5L22 6Z" fill="#FE8204"/>
          <circle cx="38" cy="10" r="3" fill="#FE8204"/>
          <circle cx="34" cy="38" r="2" fill="#FE8204"/>
          <circle cx="10" cy="32" r="2" fill="#FE8204"/>
        </svg>
      )
    },
    {
      title: "Built for\nSelf-Expression",
      description: "Change your look, test new ideas, or make a statement whenever you feel like it. Our tattoos are made for experimenting freely and expressing yourself with confidence.",
      icon: (
        // Placeholder for the Abstract Shapes icon (Replace with exact Figma SVG)
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="24" y="20" width="16" height="16" rx="4" stroke="#FE8204" strokeWidth="2"/>
          <rect x="8" y="12" width="12" height="28" rx="6" stroke="#FE8204" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white overflow-hidden py-12 md:py-[81px] px-4 md:px-[64px] relative">
      <div className="max-w-[1313px] mx-auto flex flex-col md:flex-row justify-center items-start gap-[32px] md:gap-[108px]">
        
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col justify-start items-start gap-[10px] flex-1 w-full">
            
            {/* Icon Container */}
            <div className="w-[48px] h-[48px] relative overflow-hidden flex-shrink-0">
              {feature.icon}
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-start items-start gap-[10px] w-full">
              <h3 className="w-full text-black font-almarena font-bold uppercase text-[20px] md:text-[24px] leading-tight whitespace-pre-line">
                {feature.title}
              </h3>
              <p className="w-full text-black font-montserrat font-normal text-[14px] md:text-[16px] leading-snug">
                {feature.description}
              </p>
            </div>
            
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default InfoComponent;