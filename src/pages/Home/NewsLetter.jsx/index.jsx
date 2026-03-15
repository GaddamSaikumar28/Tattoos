import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your API call or subscription logic here
    console.log('Subscribing email:', email);
  };

  return (
    <section className="w-full bg-[#E8E8E8] px-6 py-16 flex flex-col gap-4 md:p-16 md:gap-6 box-border">
      
      <div className="flex flex-col gap-4 md:gap-6">
        <h2 className="m-0 text-black font-['Almarena'] text-[36px] font-bold uppercase leading-[1.2] md:text-[64px]">
          Subscribe to News
        </h2>
        <p className="m-0 text-black font-['Montserrat'] text-[16px] font-medium max-w-[456px] leading-[1.4] md:text-[24px]">
          Join our newsletter to stay up to date on features and releases.
        </p>
      </div>
      
      <form 
        className="flex flex-col gap-[10px] w-full md:flex-row md:items-end" 
        onSubmit={handleSubmit}
      >
        <input 
          type="email" 
          className="w-full h-[60px] px-5 bg-white rounded-[30px] border border-[#DBDDE0] shadow-[inset_0_2px_2px_#DBDDE0] font-['Montserrat'] text-[16px] font-normal text-black outline-none placeholder:text-black md:w-[430px]" 
          placeholder="jane@email.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <button 
          type="submit" 
          className="w-full h-[60px] px-6 bg-black rounded-[30px] text-white font-['Almarena'] text-[20px] font-bold uppercase flex justify-center items-center transition-colors duration-200 hover:bg-[#333333] md:w-auto"
        >
          Subscribe
        </button>
      </form>
      
    </section>
  );
};

export default Newsletter;