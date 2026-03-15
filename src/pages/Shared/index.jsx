import React, { useState, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight, SlidersHorizontal, ChevronDown, ArrowRight } from 'lucide-react';

export default function SharedProductGrid({
  title = "New Arrivals",
  products = [],
  itemsPerPage = 15,
  showPagination = true,
  showExploreAll = true,
  exploreAllText = "Explore All Now",
  onExploreAll = () => {},
  themeColor = "#FE8204"
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('default');
  const [filter, setFilter] = useState('all');
  
  const sectionRef = useRef(null);


  const filteredAndSorted = useMemo(() => {
    let result = [...products];
    if (filter !== 'all') {
      result = result.filter(p => p.category === filter);
    }
    if (sortOrder === 'low-to-high') {
      result.sort((a, b) => a.newPrice - b.newPrice);
    } else if (sortOrder === 'high-to-low') {
      result.sort((a, b) => b.newPrice - a.newPrice);
    }
    return result;
  }, [filter, sortOrder, products]);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredAndSorted.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);

    setTimeout(() => {
      if (sectionRef.current) {
        const topOffset = 40; 
        const elementPosition = sectionRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - topOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); 
  };

  return (
    <section 
      ref={sectionRef} 
      className="w-full min-h-screen bg-black text-white py-12 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6 mb-10">
          <h2 className="text-[32px] md:text-[56px] font-[700] uppercase font-['Almarena'] leading-tight">
            {title}
          </h2>
          
          <div className="flex flex-wrap items-center justify-between w-full border-b border-zinc-800 pb-4 gap-4">
             {/* Filter Section */}
             <div 
               className="flex items-center gap-2 cursor-pointer transition-colors relative"
               style={{ color: filter !== 'all' ? themeColor : 'white' }}
             >
              <SlidersHorizontal size={18} />
              <select 
                value={filter}
                onChange={(e) => { setFilter(e.target.value); setCurrentPage(1); }}
                className="appearance-none bg-transparent border-none outline-none text-[14px] md:text-[16px] font-[400] font-['Montserrat'] uppercase cursor-pointer pr-4"
                style={{ color: filter !== 'all' ? themeColor : 'white' }}
              >
                <option value="all" className="bg-black text-white">Filter</option>
                <option value="animal" className="bg-black text-white">Animals</option>
                <option value="object" className="bg-black text-white">Objects</option>
              </select>
            </div>

            {/* Sort Section */}
            <div 
              className="flex items-center gap-2 cursor-pointer transition-colors relative"
              style={{ color: sortOrder !== 'default' ? themeColor : 'white' }}
            >
              <select 
                value={sortOrder}
                onChange={(e) => { setSortOrder(e.target.value); setCurrentPage(1); }}
                className="appearance-none bg-transparent border-none outline-none text-[14px] md:text-[16px] font-[400] font-['Montserrat'] uppercase cursor-pointer pr-2 text-right z-10"
                style={{ color: sortOrder !== 'default' ? themeColor : 'white' }}
              >
                <option value="default" className="bg-black text-white">Sort By</option>
                <option value="low-to-high" className="bg-black text-white">Price: Low to High</option>
                <option value="high-to-low" className="bg-black text-white">Price: High to Low</option>
              </select>
              <ChevronDown size={18} className="z-0" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10">
          {currentProducts.map((product) => (
            <div key={product.id} className="group flex flex-col gap-3 w-full cursor-pointer">
              
              <div className="relative w-full aspect-[4/5] bg-white rounded-[20px] overflow-hidden p-1.5 border border-zinc-900">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dynamically rendering the badge (SALE, NEW, etc.) */}
                {product.badge && (
                  <div 
                    className="absolute top-4 left-4 text-white px-3 py-1 rounded-full font-[700] text-[10px] md:text-[12px] font-['Montserrat'] tracking-widest uppercase shadow-md"
                    style={{ backgroundColor: themeColor }}
                  >
                    {product.badge}
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
        {showPagination && totalPages > 1 && (
          <div className="flex items-center justify-between w-full pt-8 mt-12 border-t border-zinc-900">
            <div className="flex items-center gap-2.5">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: currentPage === index + 1 ? themeColor : '#3f3f46',
                    transform: currentPage === index + 1 ? 'scale(1.2)' : 'scale(1)'
                  }}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>

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

        {/* Explore All Button Section */}
        {showExploreAll && (
          <div className="flex justify-center w-full mt-12">
            <button 
              onClick={onExploreAll}
              className="group flex items-center justify-center gap-3 px-8 py-3 rounded-full border border-white text-white transition-all duration-300 hover:bg-[#FE8204] hover:border-[#FE8204] hover:text-white"
            >
              <span className="text-[14px] font-[600] tracking-wider uppercase font-['Montserrat']">
                {exploreAllText}
              </span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}