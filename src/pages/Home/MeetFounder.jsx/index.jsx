import React from 'react';

const MeetFounder = () => {
  return (
    <section className="w-full bg-white px-[16px] md:px-[64px] py-[40px] md:py-[80px]">
      {/* Container uses flex-col-reverse on mobile so the image (2nd item) appears on top.
        On desktop (md:flex-row), it switches to a standard row, putting the text box on the left.
      */}
      <div className="flex flex-col-reverse md:flex-row gap-[16px] md:gap-[24px] w-full max-w-[1440px] mx-auto">
        
        {/* Left Side (Desktop) / Bottom Side (Mobile) - Text Block */}
        <div className="flex-1 bg-[#FE8204] rounded-[24px] md:rounded-[30px] p-[32px] md:p-[64px] flex flex-col justify-center">
          <h2 className="text-black font-almarena font-bold text-[36px] md:text-[64px] uppercase leading-tight mb-[16px] md:mb-[24px]">
            Meet the founder
          </h2>
          
          <h3 className="text-black font-almarena font-bold text-[24px] md:text-[32px] mb-[16px] md:mb-[24px]">
            I am Just.
          </h3>
          
          <div className="text-black font-montserrat text-[16px] md:text-[18px] leading-[1.6] space-y-[16px]">
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
            {/* The second paragraph is shown in the desktop wireframe */}
            <p className="hidden md:block">
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
          </div>
        </div>

        {/* Right Side (Desktop) / Top Side (Mobile) - Image Block */}
        <div className="flex-1 relative min-h-[400px] md:min-h-[600px] rounded-[24px] md:rounded-[30px] overflow-hidden">
          {/* Replace src with your actual founder/brand image */}
          <img 
            src="https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=2000&auto=format&fit=crop" 
            alt="Just Tattoos Founder" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default MeetFounder;