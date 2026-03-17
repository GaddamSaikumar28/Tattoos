import NewArrivals from "./Hero.jsx";
import NewArrivalsProducts from "./Products.jsx/index.jsx";
import FreeGiftComponent from "../Home/FreeGiftComponent.jsx/index.jsx";
import Testimonials from "../Home/Testimonials.jsx/index.jsx";
import FAQSection from "../Home/FAQSection.jsx/index.jsx";
import Newsletter from "../Home/NewsLetter.jsx/index.jsx";
import PopularComponent from "./PopularComponent.jsx/index.jsx";
import SharedProductGrid from "../Shared/index.jsx";
import SharedHeroBanner from "../Shared/SharedHeroBanner.jsx";
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
  return (
    <div className="w-full min-h-screen bg-white">
      <SharedHeroBanner 
        title="New Arrivals" 
        // image="/assets/images/SaleHeroBanner.png"
        // textColor="#E11D48" // You can even pass a custom hex color for different sections!
        useMobileImage={true}
        mobileImage = "/assets/images/NewArrivalMobile.png"

      />

      <SharedProductGrid 
        title="New Arrivals"
        products={productsData}
        itemsPerPage={15}       
        showPagination={true}  
        showExploreAll={false}  
        themeColor="#FE8204"   
      />

      <FreeGiftComponent />
      <Testimonials />
      <PopularComponent />
      <FAQSection />
      <Newsletter />
    </div>
  );
}