import React, { useMemo, useRef } from 'react';
import SharedHeroBanner from '../Shared/SharedHeroBanner';
import SharedProductGrid from '../Shared/index.jsx';
import FreeGiftComponent from '../Home/FreeGiftComponent.jsx';
import Testimonials from '../Home/Testimonials.jsx';
import FAQSection from '../Home/FAQSection.jsx';
import Newsletter from '../Home/NewsLetter.jsx';
import PopularComponent from '../NewArrivals/PopularComponent.jsx';
const productsData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: i === 0 ? 'Floral Slithering Snake' : i === 1 ? 'Colored Quadruple Skulls' : `Product Design ${i + 1}`,
  oldPrice: 19.99 + (i * 2),
  newPrice: 14.99 + (i * 2),
  image: `/assets/images/Card${(i % 10) + 1}.png`, // Pass Image as string URL
  // Pass whatever text you want in the badge here, or leave null for no badge
  badge: i % 3 === 0 ? 'SALE' : i % 5 === 0 ? 'NEW' : null, 
  category: i % 2 === 0 ? 'animal' : 'object'
}));


export default function NewArrivalsPage() {
  const handleExploreClick = () => {
    console.log("Navigating to all products...");
    // Add your navigation logic here (e.g., router.push('/products'))
  };

  return (
    <div className="w-full min-h-screen bg-white">
        <SharedHeroBanner 
        title="Sale Collection" 
        image="/assets/images/SaleBanner.png"
        // image="/assets/images/SaleHeroBanner.png"
        // textColor="#E11D48" // You can even pass a custom hex color for different sections!
      />

     <SharedProductGrid 
        title="Sale Collection"
        products={productsData}
        itemsPerPage={6} 
        showPagination={false} 
        showExploreAll={true} 
        exploreAllText="Explore All Now"
        onExploreAll={handleExploreClick}
      />

      <FreeGiftComponent />
      <Testimonials />
      <PopularComponent />
      <FAQSection />
      <Newsletter />
    </div>
  );
}