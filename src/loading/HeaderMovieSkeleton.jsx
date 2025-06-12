import React from 'react'

const HeaderMovieSkeleton = () => {
  return (
    <div className="top-4 left-0 right-0 pl-6 pr-10 animate-pulse">
        <div className="flex justify-between">
            <div className='hidden md:block w-16 h-10 rounded-full'></div>
            <div className='hidden md:block w-58 h-10 rounded-full'></div>
        </div>
    </div>
  )
}

export default HeaderMovieSkeleton
