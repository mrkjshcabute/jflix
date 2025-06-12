import React from 'react'

const OverviewSkeleton = ({ count }) => {
  return (
    <div className='animate-pulse overflow-hidden'>
      <div className="relative w-screen overflow-hidden sm:h-100 xl:h-150 2xl:h-screen">
        <div className="w-full overflow-hidden h-52 sm:h-400 xl:h-600 2xl:h-screen bg-gray-200 "></div>

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

    <div className="block sm:hidden mt-10 px-10">
        <div className='w-12 h-4 bg-gray-200 rounded'></div>
        <div className='w-80 h-2 bg-gray-200 rounded mt-2'></div>
        <div className='w-80 h-2 bg-gray-200 rounded mt-2'></div>
        <div className='w-80 h-2 bg-gray-200 rounded mt-2'></div>
        <div className='w-80 h-2 bg-gray-200 rounded mt-2'></div>
        <div className='w-80 h-2 bg-gray-200 rounded mt-2'></div>

        <div className="flex justify-between mt-5 gap-5">
            <div>
            <div className='w-40 h-2 bg-gray-200 rounded mt-2'></div>
            <div className='w-40 h-2 bg-gray-200 rounded mt-2'></div>
            <div className='w-40 h-2 bg-gray-200 rounded mt-2'></div>
            <div className='w-40 h-2 bg-gray-200 rounded mt-2'></div>
            <div className='w-40 h-2 bg-gray-200 rounded mt-2'></div>
            <div className='w-40 h-2 bg-gray-200 rounded mt-2'></div>
            </div>
            <div>
            <div className='w-40 h-2 bg-gray-200 rounded mt-2'></div>
            <div className='w-40 h-2 bg-gray-200 rounded mt-2'></div>
            <div className='w-40 h-2 bg-gray-200 rounded mt-2'></div>
            <div className='w-40 h-2 bg-gray-200 rounded mt-2'></div>
            <div className='w-40 h-2 bg-gray-200 rounded mt-2'></div>
            <div className='w-40 h-2 bg-gray-200 rounded mt-2'></div>
            </div>
        </div>
    </div>

    <div className='wrapper '>
        <div className='mb-6 bg-gray-300 w-68 h-10 rounded'></div>
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
                        
                        <div>    
                            <div className='w-8 h-8 rounded-full bg-gray-300' ></div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default OverviewSkeleton
