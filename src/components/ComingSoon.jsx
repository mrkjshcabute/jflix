import React, { useEffect, useState } from 'react';
import ComingSoonSkeleton from '../loading/ComingSoonSkeleton';

const TMDP_API_KEY = import.meta.env.VITE_TMDP_API_KEY;

const ComingSoon = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchComingSoon = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2`,
        {
          headers: {
            Authorization: `Bearer ${TMDP_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      const today = new Date().toISOString().split('T')[0];

      const futureMovies = data.results
        .filter(movie => movie.release_date >= today)
        .sort((a, b) => new Date(a.release_date) - new Date(b.release_date));

      setMovies(futureMovies);
      
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComingSoon();
  }, []);

  return (
    <div>
      {isLoading ? (
        <ComingSoonSkeleton count={5} />
      ) : (
        <div>
          <h2 className='my-6'>Coming Soon</h2>
          
          <div className="grid grid-cols-2 gap-5 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {movies.map((movie) => (
              <div key={movie.id} className="overflow-hidden relative">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-56 xs:h-60 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl"
                />
                <div className="absolute top-0 left-0">    
                  <p className='p-1 px-2 text-[12px] font-semibold rounded-tl-lg rounded-br-lg bg-red-500 text-white'>{new Date(movie.release_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComingSoon;
