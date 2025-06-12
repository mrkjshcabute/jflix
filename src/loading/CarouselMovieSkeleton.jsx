import React from 'react'

const CarouselMovieSkeleton = () => {
  return (
    <div className="relative w-screen sm:h-100 xl:h-150 2xl:h-screen animate-pulse">
        <div className="w-full h-52 sm:h-400 xl:h-600 2xl:h-screen bg-gray-200"></div>

        <div className="absolute top-4 left-0 right-0 pl-6 pr-10">
        <div className="flex justify-between">
            <div className='hidden md:block bg-gray-300 w-16 h-10 rounded-full'></div>
            <div className='hidden md:block bg-gray-300 w-58 h-10 rounded-full'></div>
        </div>
        </div>

        <div className="absolute bottom-0 left-0 bg-gradient-to-t w-full p-4 text-white space-y-3 pl-6 md:pl-8 lg:pl-6">
        <div className="flex flex-wrap gap-2">
            <div className='hidden md:block bg-gray-300 w-16 h-8 rounded-full'></div>
            <div className='hidden md:block bg-gray-300 w-16 h-8 rounded-full'></div>
            <div className='hidden md:block bg-gray-300 w-16 h-8 rounded-full'></div>
        </div>

        <div className='bg-gray-300 w-52 h-8 md:w-80 md:h-12 lg:w-120 lg:h-16 rounded mt-4'></div>

        <div className="bg-gray-300 w-12 h-6 rounded hidden md:block"></div>

        <div className="bg-gray-300 w-120 h-4 lg:w-220 lg:h-4 rounded hidden md:block"></div>
        <div className="bg-gray-300 w-120 h-4 lg:w-220 lg:h-4 rounded hidden md:block"></div>
        <div className="bg-gray-300 w-120 h-4 lg:w-220 lg:h-4 rounded hidden md:block"></div>
        

        <div className=' bg-gray-300 w-28 h-10 rounded-full mb-6 hidden md:block'></div>
        </div>
    </div>
  )
}

export default CarouselMovieSkeleton
