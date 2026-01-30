import React from 'react';

/**
 * StarRating Component
 * Renders a 5-star rating system based on a float value (0.0 - 5.0)
 */
const StarRating = ({ rating = 5.0 }) => {
  // Create an array of 5 elements to map over
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    // Determine if star is full, half, or empty
    const isFull = rating >= starValue;
    const isHalf = rating >= starValue - 0.5 && rating < starValue;

    return (
      <svg
        key={index}
        className={`w-4 h-4 ${
          isFull || isHalf ? "text-yellow-400 fill-yellow-400 drop-shadow-sm" : "text-gray-300 fill-gray-300"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="0" // Filled style as per image
      >
        <path
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.545.044.77.77.349 1.126l-4.25 3.638a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.25-3.638c-.421-.356-.196-1.082.349-1.126l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" 
        />
      </svg>
    );
  });

  return <div className="flex gap-0.5">{stars}</div>;
};

/**
 * AvatarGroup Component
 * Renders the overlapping stack of user images
 */
const AvatarGroup = ({ images }) => {
  return (
    <div className="flex items-center -space-x-3 isolate">
      {images.slice(0, 5).map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Client ${index + 1}`}
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover bg-gray-100 z-0 hover:z-10 transition-all duration-200"
          style={{ zIndex: index }} // Ensures correct stacking order (left to right)
        />
      ))}
    </div>
  );
};

/**
 * SocialProof Component (Main)
 * @param {string[]} avatarUrls - Array of image URLs
 * @param {number} rating - Float rating from 0.0 to 5.0
 * @param {string|number} clientCount - The number of happy clients
 */
const SocialProof = ({ 
  avatarUrls = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64"
  ], 
  rating = 5.0, 
  clientCount = "25+" 
}) => {
  return (
    <div 
      className="flex items-center justify-center w-full h-10 mx-auto"
      style={{ gap: '12px' }} // Explicit gap from requirements
    >
      {/* Left Side: Avatars */}
      <AvatarGroup images={avatarUrls} />

      {/* Right Side: Rating & Text */}
      <div className="flex flex-col justify-center h-full">
        <div className="flex items-center mb-0.5">
            <StarRating rating={rating} />
        </div>
        <p className="text-sm font-semibold text-gray-900 leading-none whitespace-nowrap">
          {clientCount}+ happy clients
        </p>
      </div>
    </div>
  );
};

export default SocialProof;