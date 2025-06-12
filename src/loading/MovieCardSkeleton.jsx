import React from 'react'

const MovieCardSkeleton = ({ count }) => {
  return (
    <div className='animate-pulse'>
        <div className='mb-6 bg-gray-300 w-36 h-10 rounded'></div>
        
        <div className="grid grid-cols-2 gap-5 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Array.from({ length: count }).map((_, index) => (
            <div key={index} className="overflow-hidden relative">
            <div className="w-full h-56 xs:h-60 sm:h-64 md:h-72 lg:h-80 bg-gray-200 rounded-xl"></div>

            <div className="absolute top-2 left-2">
                <div className='w-16 h-8 rounded-full bg-gray-300' ></div>
            </div>

            <div className="absolute bottom-0 right-0 left-0">   
                    <div className='flex justify-between items-center rounded-bl-xl rounded-br-xl px-2 mb-2'>
                        <div className='space-y-2'>
                            <div className='w-16 h-8 rounded-full bg-gray-300' ></div>
                            <div className='w-24 h-4 rounded bg-gray-300' ></div>
                        </div>
                        
                        <div className="">    
                            <div className='w-8 h-8 rounded-full bg-gray-300' ></div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default MovieCardSkeleton
