import React from 'react'

const SearchMovieSkeleton = ({ count }) => {
  return (
    <div className='overflow-hidden hide-scrollbar'>
      <main>
            <div className='wrapper animate-pulse'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='rounded w-28 h-12 bg-gray-200 my-8 sm:my-20 xs:h-12 md:h-16'></div>

                    <div className='flex items-center justify-start rounded-xl max-w-3xl w-full h-16 bg-gray-200 mt-12 xs:h-12 md:h-16 lg:mt-12'>
                        <div className='bg-gray-300 w-8 h-8 rounded-lg ml-7 mr-6'></div>
                        <div className='bg-gray-300 w-28 h-5 rounded'></div>
                    </div>
                </div>
                
                <section className='all-movies mt-12 sm:mt-24 mb-24'>
                    <div className='mb-10 bg-gray-300 w-36 h-9 rounded'></div>
                    
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
                </section>
            </div>
        </main>
    </div>
  )
}

export default SearchMovieSkeleton
