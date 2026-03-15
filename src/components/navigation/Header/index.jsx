// // src/components/navigation/Header/index.jsx
// import { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';

// const LogoSVG = ({ className }) => (
//   <img
//     src="/assets/icons/DesktopLogo.svg"
//     alt="Just Tattoos Logo"
//     className={className}
//   />
// );

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Reusable inline SVG components that inherit Tailwind's text color perfectly
//   const SearchIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//     </svg>
//   );

//   const UserIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
//     </svg>
//   );

//   const BagIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
//     </svg>
//   );

//   return (
//     <header className="w-full bg-white sticky top-0 z-50">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
//         {/* Mobile Hamburger Menu */}
//         <button 
//           className="md:hidden text-black hover:text-brand-orange transition-colors"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Logo */}
//         <Link to="/" className=" hover:text-brand-orange transition-colors">
//           <LogoSVG className="w-[80px] sm:w-[70px] md:w-[80px] lg:w-[90px] h-auto" />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8">
//         {['New Arrival', 'Collection', 'Sale', 'How it works'].map((item) => (
//             <div key={item} className="flex items-center gap-1 group cursor-pointer">
//             <NavLink 
//                 to={`/${item.toLowerCase().replace(/ /g, '-')}`}
//                 className={({ isActive }) => 
//                 `text-btn transition-colors duration-200 ${isActive ? 'text-brand-orange' : 'text-black group-hover:text-brand-orange'}`
//                 }
//             >
//                 {item}
//             </NavLink>
//             {/* Add Arrow only to specific items */}
//             {(item === 'New Arrival' || item === 'Collection' || item === 'How it works') && (
//                 <svg 
//                 className="w-4 h-4 text-black group-hover:text-brand-orange transition-colors duration-200" 
//                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
//                 >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                 </svg>
//             )}
//             </div>
//         ))}
//         </nav>

//         {/* Utility Icons (Search, Account, Cart) */}
//         <div className="flex items-center gap-5">
//           <button className="text-black hover:text-brand-orange transition-colors duration-200">
//             <SearchIcon />
//           </button>
          
//           <Link to="/account" className="hidden md:block text-black hover:text-brand-orange transition-colors duration-200">
//             <UserIcon />
//           </Link>

//           <button className="text-black hover:text-brand-orange transition-colors duration-200 relative">
//             <BagIcon />
//             {/* Notification Badge Example */}
//             <span className="absolute -top-1 -right-2 bg-brand-orange text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full font-montserrat">
//               2
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Simple Mobile Menu Drawer (Can replace with Framer Motion drawer later) */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-4">
//           {['New Arrival', 'Collection', 'Sale', 'How it works'].map((item) => (
//             <Link 
//               key={item} 
//               to={`/${item.toLowerCase().replace(/ /g, '-')}`}
//               className="text-btn text-black hover:text-brand-orange"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }



// src/components/navigation/Header/index.jsx
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

// Data structures for the dropdowns to keep JSX clean
const COLLECTION_DATA = {
  "BODY PART": [
    "Ankle & Wrist", "Back, Torso & Chest Pieces", "Foot", "Hand", "Leg & Arm pieces", "Sleeve", "Spine"
  ],
  "STYLES": [
    "Animal", "Celestial art", "Colored Art", "Couple art", "Fantasy", "Floral", "Insects", "Japanese art", "Nature", "Spiritual", "Symbols and quotes", "Tribal art"
  ],
  "SIZES": [
    "Small", "Medium", "Large"
  ]
};

const HOW_IT_WORKS_DATA = [
  "Help Center", "About us", "How it works", "Help & FAQ"
];

const LogoSVG = ({ className }) => (
  <img
    src="/assets/icons/DesktopLogo.svg"
    alt="Just Tattoos Logo"
    className={className}
  />
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileExpand = (menu) => {
    setMobileExpanded(mobileExpanded === menu ? null : menu);
  };

  // Close dropdowns when clicking outside or navigating
  // In a real app, you might want a proper click-outside hook here.

  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const BagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );

  return (
    <header className="w-full bg-white sticky top-0 z-50 relative font-['Almarena']">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between bg-white relative z-20">
        
        {/* Mobile Hamburger Menu */}
        <button 
          className="md:hidden text-black hover:text-[#FE8204] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" className="hover:text-[#FE8204] transition-colors" onClick={() => setActiveDropdown(null)}>
          <LogoSVG className="w-[80px] sm:w-[70px] md:w-[80px] lg:w-[90px] h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/new-arrival" className={({ isActive }) => `text-[16px] font-bold uppercase transition-colors duration-200 ${isActive ? 'text-[#FE8204]' : 'text-black hover:text-[#FE8204]'}`}>
            NEW ARRIVAL
          </NavLink>

          {/* COLLECTION - Dropdown Trigger */}
          <button 
            onClick={() => toggleDropdown('collection')}
            className={`flex items-center gap-1 text-[16px] font-bold uppercase transition-colors duration-200 ${activeDropdown === 'collection' || location.pathname.includes('/collection') ? 'text-[#FE8204]' : 'text-black hover:text-[#FE8204]'}`}
          >
            COLLECTION
            <svg className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'collection' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <NavLink to="/sale" className={({ isActive }) => `text-[16px] font-bold uppercase transition-colors duration-200 ${isActive ? 'text-[#FE8204]' : 'text-black hover:text-[#FE8204]'}`}>
            SALE
          </NavLink>

          {/* HOW IT WORKS - Dropdown Trigger */}
          <button 
            onClick={() => toggleDropdown('how-it-works')}
            className={`flex items-center gap-1 text-[16px] font-bold uppercase transition-colors duration-200 ${activeDropdown === 'how-it-works' || location.pathname.includes('/how-it-works') ? 'text-[#FE8204]' : 'text-black hover:text-[#FE8204]'}`}
          >
            HOW IT WORKS
            <svg className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'how-it-works' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </nav>

        {/* Utility Icons */}
        <div className="flex items-center gap-5">
          <button className="text-black hover:text-[#FE8204] transition-colors duration-200">
            <SearchIcon />
          </button>
          
          <Link to="/account" className="hidden md:block text-black hover:text-[#FE8204] transition-colors duration-200">
            <UserIcon />
          </Link>

          <button className="text-black hover:text-[#FE8204] transition-colors duration-200 relative">
            <BagIcon />
            <span className="absolute -top-1 -right-2 bg-[#FE8204] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full font-montserrat">
              2
            </span>
          </button>
        </div>
      </div>

      {/* DESKTOP MEGA MENUS */}
      {/* Collection Mega Menu */}
      {activeDropdown === 'collection' && (
        <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] bg-white border border-black rounded-b-[32px] rounded-t-[16px] shadow-xl py-10 px-12 z-10 animate-fade-in-down">
          <div className="flex items-start gap-[96px] justify-start">
            {Object.entries(COLLECTION_DATA).map(([category, items]) => (
              <div key={category} className="flex flex-col gap-4">
                <h3 className="text-[#FE8204] text-[24px] font-bold uppercase">{category}</h3>
                <ul className="flex flex-col gap-4">
                  {items.map((item) => (
                    <li key={item}>
                      <Link 
                        to={`/collection/${item.toLowerCase().replace(/ & /g, '-').replace(/, /g, '-').replace(/ /g, '-')}`}
                        className="text-black text-[20px] font-bold uppercase hover:text-[#FE8204] transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* How it Works Mega Menu */}
      {activeDropdown === 'how-it-works' && (
        <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-[90%] max-w-[1175px] bg-white border border-black rounded-b-[32px] rounded-t-[16px] shadow-xl py-8 px-16 z-10 animate-fade-in-down">
          <div className="flex justify-between items-center w-full">
            {HOW_IT_WORKS_DATA.map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="text-black text-[20px] font-bold uppercase hover:text-[#FE8204] transition-colors"
                onClick={() => setActiveDropdown(null)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-200 px-4 py-6 flex flex-col gap-6 h-screen overflow-y-auto z-40">
          <Link to="/new-arrival" className="text-black text-[20px] font-bold uppercase" onClick={() => setIsMobileMenuOpen(false)}>NEW ARRIVAL</Link>
          
          {/* Mobile Collection Accordion */}
          <div className="flex flex-col gap-4">
            <button 
              className="flex justify-between items-center text-[20px] font-bold uppercase text-black"
              onClick={() => toggleMobileExpand('collection')}
            >
              COLLECTION
              <svg className={`w-5 h-5 transition-transform duration-300 ${mobileExpanded === 'collection' ? 'rotate-180 text-[#FE8204]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {mobileExpanded === 'collection' && (
              <div className="flex flex-col gap-6 pl-4 border-l-2 border-[#FE8204] ml-2">
                 {Object.entries(COLLECTION_DATA).map(([category, items]) => (
                    <div key={category} className="flex flex-col gap-3">
                      <h4 className="text-[#FE8204] text-[18px] font-bold uppercase">{category}</h4>
                      {items.map(item => (
                        <Link 
                          key={item} 
                          to={`/collection/${item.toLowerCase().replace(/ & /g, '-').replace(/, /g, '-').replace(/ /g, '-')}`}
                          className="text-gray-700 text-[16px] font-bold uppercase hover:text-[#FE8204]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                 ))}
              </div>
            )}
          </div>

          <Link to="/sale" className="text-black text-[20px] font-bold uppercase" onClick={() => setIsMobileMenuOpen(false)}>SALE</Link>

          {/* Mobile How It Works Accordion */}
          <div className="flex flex-col gap-4">
            <button 
              className="flex justify-between items-center text-[20px] font-bold uppercase text-black"
              onClick={() => toggleMobileExpand('how-it-works')}
            >
              HOW IT WORKS
              <svg className={`w-5 h-5 transition-transform duration-300 ${mobileExpanded === 'how-it-works' ? 'rotate-180 text-[#FE8204]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {mobileExpanded === 'how-it-works' && (
              <div className="flex flex-col gap-4 pl-4 border-l-2 border-[#FE8204] ml-2">
                 {HOW_IT_WORKS_DATA.map(item => (
                    <Link 
                      key={item} 
                      to={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      className="text-gray-700 text-[16px] font-bold uppercase hover:text-[#FE8204]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                 ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}