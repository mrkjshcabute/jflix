import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../appwrite';
import { useNavigate } from 'react-router-dom';
import TrendingMoviesSkeleton from '../loading/TrendingMoviesSkeleton';

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      console.error(`Error fetching trending movies: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <section>
      {isLoading ? (
        <TrendingMoviesSkeleton count={10} />
      ) : (
        <section className='trending mb-24'>
          <h2 className='mb-20'>Trending Movies</h2>
        
          <ul>
            {trendingMovies.map((movie, index) => (
              <li key={movie.$id} className='hover:scale-105 transition-transform cursor-pointer'>
                <p>{index + 1}</p>
                <img src={movie.poster_url} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default TrendingMovies;
