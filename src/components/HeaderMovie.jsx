import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

const HeaderMovie = () => {
    const navigate = useNavigate() 

    const handleSearch = () => {
        navigate('/searchMovie') 
    }
  return (
      <div className='bg-transparent flex justify-between items-center mx-4 sm:mx-4'>
         <p className="whitespace-nowrap text-lg sm:text-2xl font-semibold text-white ml-4 cursor-pointer" onClick={() => navigate(-1)}>JFlix</p>

        <div className="flex justify-center items-center rounded-full bg-white/50 p-2 cursor-pointer" onClick={handleSearch}>
            <button>
                <IoSearch className='w-4 h-4 sm:w-6 sm:h-6 text-white sm:ml-2 sm:mr-4 cursor-pointer' onClick={handleSearch} />
            </button>
            <input
                type='text'
                placeholder='Search movies'
                className='outline-hidden hidden sm:block'
                onClick={handleSearch}
            ></input>
        </div>
    </div>
  )
}

export default HeaderMovie
