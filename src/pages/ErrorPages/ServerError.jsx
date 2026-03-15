// src/pages/ErrorPages/ServerError.jsx
import { Link } from 'react-router-dom';

export default function ServerError() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-white">
      <h1 className="text-hero text-black mb-4">
        5<span className="text-brand-orange">0</span>0
      </h1>
      
      <h2 className="text-h2 text-black mb-4">
        System Error
      </h2>
      
      <p className="text-lead text-gray-dark max-w-md mx-auto mb-8">
        We're experiencing some technical difficulties on our end. Please try again in a few moments.
      </p>
      
      <button 
        onClick={() => window.location.reload()}
        className="bg-black text-white text-btn py-4 px-8 hover:bg-brand-orange transition-colors duration-300"
      >
        Refresh Page
      </button>
    </div>
  );
}