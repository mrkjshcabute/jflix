import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Search from './Search'
import MovieCard from './MovieCard'
import { useDebounce } from 'react-use'
import { updateSearchCount } from '../appwrite'
import SearchMovieSkeleton from '../loading/SearchMovieSkeleton';

import logo from '../assets/jflix.png'

const API_KEY = '6aab4fe56b3de72b537cfab071de90be'

const SearchMovie = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const navigate = useNavigate();

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  const fetchMovies = async (query = '') => {
    setIsLoading(true)
    setErrorMessage('')

    try {
      const endpoint = query
        ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`
        : `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`

      const response = await fetch(endpoint)

      if (!response.ok) throw new Error('Failed to fetch movies')

      const data = await response.json()

      if (data.response === 'False') {
        setErrorMessage(data.error || 'Failed to fetch movies')
        setMovieList([])
        return
      }

      setMovieList(data.results || [])

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0])
      }

    } catch (error) {
      console.error(`Error fetching movies: ${error}`)
      setErrorMessage('Error fetching movies. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm)
  }, [debouncedSearchTerm])

  return (
    <div>
      
        <div className='overflow-hidden hide-scrollbar'>
          <main>
            <div className='wrapper'>
              <div className='flex justify-center items-center'>
                <img src={logo} className='h-60 md:h-80 w-60 md:w-80 my-8 cursor-pointer' onClick={() => navigate(-1)}/>
              </div>
    
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

              {isLoading ? (
                <div>
                  <SearchMovieSkeleton count={20} />
                </div>
              ) : errorMessage ? (
                <p className='text-red-500'>{errorMessage}</p>
              ) : (
                <section className='all-movies mt-12 sm:mt-24 mb-24'>
                  <h2>All Movies</h2>

                  <ul>
                    {movieList.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </main>
        </div>
      
    </div>
  )
}

export default SearchMovie
