import React, { useState, useRef, useEffect } from 'react';

const faqData = [
  {
    question: "How do Just Tattoos work ?",
    answer: "Unlike standard temporary tattoos that sit on top of the skin, Just Tattoos use a skin-reactive ink that absorbs into the upper layer of your skin. This creates a natural, tattoo-like appearance without needles, pain, or long-term commitment.<br/><br/>Application is quick and simple. Once applied, the ink reacts with your skin and gradually darkens over the next 24 to 36 hours, revealing a realistic finish that looks like real ink."
  },
  {
    question: "How long does a Just Tattoo last?",
    answer: "Our designs can last up to 10 days, depending on placement, skin type, and your daily routine. The pigment fades naturally as your skin regenerates."
  },
  {
    question: "What color will my tattoo be?",
    answer: "When first applied, the ink appears as a light blue tint — totally normal. Over the next few hours, it deepens into a rich, natural tone that resembles a real tattoo. It’s all part of the Just Tattoos experience."
  },
  {
    question: "Can I remove the tattoo earlier?",
    answer: "Yes. If you’d like to remove it sooner, gently exfoliate the area with warm saltwater or a body scrub. You may need to repeat the process, but always treat your skin with care."
  },
  {
    question: "What tattoo sizes do you offer?",
    answer: "We offer a range of canvas sizes to suit different designs: 1x1\", 2x2\", 3x3\", 4x4\", 5x2\", 7x2\", 6x3\", 6.5x6.5\", and 5.5x9\". Keep in mind that the usable design area is approximately 0.25\" smaller than the canvas size."
  },
  {
    question: "Are Just Tattoos safe?",
    answer: "Yes. Our skin-reactive ink formula is developed to meet cosmetic safety standards and has been dermatologically tested. If you have sensitive skin or experience any discomfort after application, we recommend discontinuing use and consulting a healthcare professional."
  },
  {
    question: "Where do you ship to?",
    answer: "We currently ship all over United States at the moment."
  },
  {
    question: "Do Just Tattoos products expire?",
    answer: "Our tattoo patches have a shelf life of 9 months when stored in a cool, dry place. Freehand Tattoo Markers last up to 30 months unopened, and should be used within 3 months after opening. Always store markers horizontally, at room temperature, and away from direct sunlight."
  },
  {
    question: "How is Just Tattoos different from Henna or Jagua?",
    answer: "Just Tattoos is not henna or jagua. Our tattoos use a proprietary ink formula derived from Genipa plant extract, designed to deliver longer-lasting, water-resistant results with a realistic finish — all without the mess or staining associated with traditional plant-based dyes."
  },
  {
    question: "Can I cancel or return my order?",
    answer: "Orders can be canceled as long as they haven’t been processed or shipped. If you’d like to request a return, please provide your order number and reason for the return. Our team will do their best to assist you."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col border-t border-black w-full">
      <button 
        onClick={onClick}
        className="py-[20px] flex justify-between items-center w-full text-left gap-[24px] focus:outline-none"
      >
        <span className="flex-1 text-black font-almarena font-bold text-[16px] md:text-[18px]">
          {question}
        </span>
        <div className="w-[32px] h-[32px] flex items-center justify-center shrink-0">
          {/* Orange Chevron SVG */}
          <svg 
            width="18" 
            height="11" 
            viewBox="0 0 18 11" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          >
            <path d="M2 2L9 9L16 2" stroke="#FE8204" strokeWidth="3" strokeLinecap="square"/>
          </svg>
        </div>
      </button>
      
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: `${height}px` }}
      >
        <div 
          ref={contentRef}
          className="pb-[24px] text-black font-montserrat font-normal text-[14px] md:text-[16px] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set to 0 to have the first one open by default like the wireframe

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white relative pt-[64px] md:pt-[100px] pb-[80px] md:pb-[120px] px-[12px] md:px-[64px] overflow-hidden">
      
      <div className="flex flex-col mb-[40px] md:mb-[65px]">
        <h2 className="text-black font-almarena font-bold text-[36px] md:text-[64px] uppercase leading-tight mb-[16px]">
          Frequently Asked Questions
        </h2>
        <p className="text-black font-montserrat font-medium text-[16px] md:text-[24px] max-w-[800px]">
          Find answers to common questions about our products and services
        </p>
      </div>

      {/* Accordion List Container */}
      <div className="w-full md:w-[768px] flex flex-col">
        {faqData.map((faq, index) => (
          <FAQItem 
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
      
    </section>
  );
};

export default FAQSection;