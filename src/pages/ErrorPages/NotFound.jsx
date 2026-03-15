// src/pages/ErrorPages/NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-white">
      {/* 404 Header */}
      <h1 className="text-hero text-black mb-4">
        4<span className="text-brand-orange">0</span>4
      </h1>
      
      <h2 className="text-h2 text-black mb-4">
        Page Not Found
      </h2>
      
      <p className="text-lead text-gray-dark max-w-md mx-auto mb-8">
        The tattoo or page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
      </p>
      
      {/* Call to Action Button */}
      <Link 
        to="/" 
        className="bg-black text-white text-btn py-4 px-8 hover:bg-brand-orange transition-colors duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
}