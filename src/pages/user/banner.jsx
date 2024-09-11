import React from 'react';
import Navbar from './nav';

export default function Banner() {
  return (
    <div className="relative h-80">
  {/* Black overlay with rgba */}
  <div className='absolute inset-0 bg-black bg-opacity-50 z-10'>
    {/* Navbar */}
    <div className="absolute top-0 left-0 w-full mt-2 z-20">
      <Navbar />
    </div>
  </div>

  {/* Banner Image */}
  <img
    src="src/assets/jon-search-employment-recuritment-resume.jpg"
    alt="Banner"
    className="w-full h-full object-cover"
  />
</div>
  );
}
