import React from 'react'

const TrendingMoviesSkeleton = ({ count }) => {
  return (
    <section className='trending mb-24'>
      <div className='mb-20 bg-gray-300 w-56 h-10 rounded'></div>

      <ul>
        {Array.from({ length: count }).map((_, index) => (
          <li className='hover:scale-105 transition-transform cursor-pointer animate-pulse w-[300px]'>
            <div className='bg-gray-300 w-32 h-40 ml-6'></div>
            <div className='bg-gray-200 w-120 h-56 xs:h-60 sm:h-64 md:h-72 lg:h-80 rounded-xl object-cover -ml-3.5'></div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TrendingMoviesSkeleton
