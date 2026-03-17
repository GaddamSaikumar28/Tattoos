
import React, { useState, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight, SlidersHorizontal, ChevronDown } from 'lucide-react';

// Generating 20 products for testing pagination
const productsData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: i === 0 ? 'Lotus Infinity Trail' : i === 1 ? 'Jesus Christ Religious Art' : `Product Design ${i + 1}`,
  oldPrice: 19.99 + (i * 2),
  newPrice: 14.99 + (i * 2),
  image: `/assets/images/Card${(i % 10) + 1}.png`,
  sale: i % 3 === 0,
  category: i % 2 === 0 ? 'animal' : 'object'
}));

export default function NewArrivalsProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('default');
  const [filter, setFilter] = useState('all');
  
  // Ref to target the top of the component for scrolling
  const sectionRef = useRef(null);
  
  // Set to 15 so it fills exactly 5 rows of 3 columns
  const itemsPerPage = 15; 

  // --- Filter & Sort Logic ---
  const filteredAndSorted = useMemo(() => {
    let result = [...productsData];
    if (filter !== 'all') {
      result = result.filter(p => p.category === filter);
    }
    if (sortOrder === 'low-to-high') {
      result.sort((a, b) => a.newPrice - b.newPrice);
    } else if (sortOrder === 'high-to-low') {
      result.sort((a, b) => b.newPrice - a.newPrice);
    }
    return result;
  }, [filter, sortOrder]);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredAndSorted.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     // Smooth scroll specifically to this component instead of the top of the window
//     if (sectionRef.current) {
//       sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

const handlePageChange = (page) => {
  setCurrentPage(page);

  // A small timeout ensures the DOM updates before calculating the scroll position
  setTimeout(() => {
    if (sectionRef.current) {
      // Set an offset (in pixels) to create breathing room above the title.
      // Increase this number if you have a fixed/sticky navbar!
      const topOffset = 40; 
      
      const elementPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 100); // 100ms is usually perfect for React to catch up
};

  const orangeColor = "#FE8204";

  return (
    <section 
      ref={sectionRef} 
      className="w-full min-h-screen bg-black text-white py-12 px-6 md:px-12 overflow-hidden"
    >
      {/* Constraining max-width to 1300px prevents the 3 cards from becoming too wide */}
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6 mb-10">
          <h2 className="text-[32px] md:text-[56px] font-[700] uppercase font-['Almarena'] leading-tight">
            New Arrivals
          </h2>
          
          <div className="flex flex-wrap items-center justify-between w-full border-b border-zinc-800 pb-4 gap-4">
             {/* Filter Section */}
             <div 
               className="flex items-center gap-2 cursor-pointer transition-colors relative"
               style={{ color: filter !== 'all' ? orangeColor : 'white' }}
             >
              <SlidersHorizontal size={18} />
              <select 
                value={filter}
                onChange={(e) => { setFilter(e.target.value); setCurrentPage(1); }}
                className="appearance-none bg-transparent border-none outline-none text-[14px] md:text-[16px] font-[400] font-['Montserrat'] uppercase cursor-pointer pr-4"
                style={{ color: filter !== 'all' ? orangeColor : 'white' }}
              >
                <option value="all" className="bg-black text-white">Filter</option>
                <option value="animal" className="bg-black text-white">Animals</option>
                <option value="object" className="bg-black text-white">Objects</option>
              </select>
            </div>

            {/* Sort Section */}
            <div 
              className="flex items-center gap-2 cursor-pointer transition-colors relative"
              style={{ color: sortOrder !== 'default' ? orangeColor : 'white' }}
            >
              <select 
                value={sortOrder}
                onChange={(e) => { setSortOrder(e.target.value); setCurrentPage(1); }}
                className="appearance-none bg-transparent border-none outline-none text-[14px] md:text-[16px] font-[400] font-['Montserrat'] uppercase cursor-pointer pr-2 text-right z-10"
                style={{ color: sortOrder !== 'default' ? orangeColor : 'white' }}
              >
                <option value="default" className="bg-black text-white">Sort By</option>
                <option value="low-to-high" className="bg-black text-white">Price: Low to High</option>
                <option value="high-to-low" className="bg-black text-white">Price: High to Low</option>
              </select>
              <ChevronDown size={18} className="z-0" />
            </div>
          </div>
        </div>

        {/* Product Grid - Exactly 3 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10">
          {currentProducts.map((product) => (
            <div key={product.id} className="group flex flex-col gap-3 w-full cursor-pointer">
              
              <div className="relative w-full aspect-[4/5] bg-white rounded-[20px] overflow-hidden p-1.5 border border-zinc-900">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  // Increased scale-105 to scale-110 for a more pronounced hover effect
                  className="w-full h-full object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-110"
                />
                
                {product.sale && (
                  <div className="absolute top-4 left-4 bg-[#FE8204] text-white px-3 py-1 rounded-full font-[700] text-[10px] md:text-[12px] font-['Montserrat'] tracking-widest uppercase shadow-md">
                    SALE
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1 px-1">
                <h3 className="text-[15px] md:text-[18px] font-[700] uppercase font-['Almarena'] leading-snug truncate">
                  {product.title}
                </h3>
                
                <div className="flex items-center gap-2 font-['Montserrat']">
                  <span className="text-zinc-500 line-through text-[12px] md:text-[14px] font-[400]">
                    ${product.oldPrice.toFixed(2)} USD
                  </span>
                  <span className="text-white text-[15px] md:text-[18px] font-[600]">
                    ${product.newPrice.toFixed(2)} USD
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between w-full pt-8 mt-12 border-t border-zinc-900">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2.5">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: currentPage === index + 1 ? orangeColor : '#3f3f46',
                    transform: currentPage === index + 1 ? 'scale(1.2)' : 'scale(1)'
                  }}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>

            {/* Nav Arrows */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2.5 rounded-full border border-zinc-800 hover:bg-zinc-900 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded-full border border-zinc-800 hover:bg-zinc-900 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}