import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
      <div>
        <IoSearch className=' w-6 h-6 text-[#bbdefb] ml-4' />
        <input
            type='text'
            placeholder='Search movies'
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value)}}
        ></input>
      </div>
    </div>
  )
}

export default Search
