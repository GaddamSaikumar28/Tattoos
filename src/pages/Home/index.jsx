import Hero from './Hero.jsx';
import FeatureSection from './FeatureSection.jsx';
import NewArrivalsSection from './NewArrivals.jsx/index.jsx';
import FreeGiftComponent from './FreeGiftComponent.jsx/index.jsx';
import InfoComponent from './Info.jsx/Info.jsx';
import Testimonials from './Testimonials.jsx/index.jsx';
import FAQSection from './FAQSection.jsx/index.jsx';
import Newsletter from './NewsLetter.jsx/index.jsx';
export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <FeatureSection />
      <NewArrivalsSection />
      <FreeGiftComponent />
      <InfoComponent />
      <Testimonials />
      <FAQSection />
      <Newsletter />
    </div>
  );
}