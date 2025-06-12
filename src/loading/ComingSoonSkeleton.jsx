import React from 'react';

const ComingSoonSkeleton = ({ count }) => {
  return (
    <div className='animate-pulse'>
      <div className='my-6 bg-gray-300 w-48 h-10 rounded'></div>
      <div className="grid grid-cols-2 gap-5 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="overflow-hidden relative">
          <div className="w-full h-56 xs:h-60 sm:h-64 md:h-72 lg:h-80 object-cover bg-gray-200 rounded-xl"></div>
          <div className="absolute top-0 left-0">
            <div className="p-1 px-2 w-14 h-7 bg-gray-300 rounded-tl-lg rounded-br-lg"></div>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default ComingSoonSkeleton;
