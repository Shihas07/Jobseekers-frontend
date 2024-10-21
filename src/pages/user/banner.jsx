import React from 'react';
import Navbar from './nav';
import photo from "../../assets/photo-group-people-working-out-business-plan-office_812426-66937.jpg";
import SerchBar from '../../components/admin/user/serchBar';

export default function Banner({onChange}) {
  return (
    <div className="relative h-80">
      {/* Black overlay with rgba */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col items-center justify-center">
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>
        
        {/* Search Bar */}
        {location.pathname === "/" && (  // Only show on home page
          <div className="mt-16 z-20">
            <SerchBar onChange={onChange} />
          </div>
        )}
      </div>

      {/* Banner Image */}
      <img
        src={photo}
        alt="People working on a business plan in an office"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
