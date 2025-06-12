import { useState, useEffect } from 'react';
import Search from './components/search';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import TrendingMovies from './components/TrendingMovies';
import { useDebounce } from 'react-use';
import { updateSearchCount } from './appwrite';
import ComingSoon from './components/ComingSoon';
import CarouselMovie from './components/CarouselMovie';
import { Carousel } from "flowbite-react";
import HeaderMovie from './components/HeaderMovie';
import MovieCardSkeleton from './loading/MovieCardSkeleton';
import CarouselMovieSkeleton from './loading/CarouselMovieSkeleton';
import HeaderMovieSkeleton from './loading/HeaderMovieSkeleton';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6aab4fe56b3de72b537cfab071de90be';

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();

      if (data.response === 'False') {
        setErrorMessage(data.error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className='overflow-hidden hide-scrollbar'>
      <div className="sm:h-100 xl:h-150 2xl:h-screen relative">

        {isLoading ? (
          <CarouselMovieSkeleton />
        ) : (
          <Carousel 
            indicators={false} 
            theme={{
              root: {
                leftControl: "hidden",   
                rightControl: "hidden", 
              }
            }} 
            className='hide-carousel-scrollbar'>
              {movieList.slice(0, 5).map((movie) => (
                <CarouselMovie key={movie.id} movie={movie}/>
              ))}
          </Carousel>
        )}
        
        <div className='absolute top-4 left-0 right-2'>
          {isLoading ? (
            <HeaderMovieSkeleton />
          ) : (
            <HeaderMovie />
          )}
          
        </div>
      </div>

      <main>
        <div className='wrapper'>
          <ComingSoon />
          <TrendingMovies />

          {isLoading ? (
            <MovieCardSkeleton count={20}/>
          ) : errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
            <section className='all-movies mb-24'>
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
  );
};

export default App;
