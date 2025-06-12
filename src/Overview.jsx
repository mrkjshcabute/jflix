import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from "flowbite-react";
import { FaPlay, FaStar } from "react-icons/fa";
import { IoBackspace } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import HeaderMovie from './components/HeaderMovie';
import OverviewSkeleton from './loading/OverviewSkeleton';

const Overview = () => {
  const location = useLocation();
  const movie = location.state?.movie;
  const [details, setDetails] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [similarMovies, setSimilarMovies] = useState([]);

  const API_KEY = '6aab4fe56b3de72b537cfab071de90be';

  useEffect(() => {
    const fetchDetails = async () => {
      if (!movie) return <OverviewSkeleton count={20}/>;

      setIsLoading(true);

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&append_to_response=credits,videos`
        );
        const data = await res.json();
        setDetails(data);
      } catch (err) {
        console.error('Error fetching full movie details:', err);
      } finally {
        setIsLoading(false)
      }
    };

    fetchDetails();
  }, [movie]);

  useEffect(() => {
    const fetchSimilar = async () => {

      setIsLoading(true);
        try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=${API_KEY}`
        );
        const data = await res.json();
        setSimilarMovies(data.results || []);
        } catch (err) {
        console.error('Error fetching similar movies:', err);
        } finally {
          setIsLoading(false)
        }
    };

    fetchSimilar();
  }, [movie]);

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [movie]);

  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    27: "Horror",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    53: "Thriller",
    10752: "War",
    99: "Documentary",
  };

  if (!details) return <OverviewSkeleton count={20}/>; 

  const {
    overview,
    runtime,
    genres,
    production_countries,
    production_companies,
    credits,
    genre_ids = [],
  } = details;

  const cast = credits?.cast?.slice(0, 5).map(actor => actor.name).join(', ');
  const countries = production_countries.map(c => c.name).join(', ');
  const companies = production_companies.map(c => c.name).join(', ');
  const genreNames = genres.map(g => g.name).join(', ');
  const genre = genreMap[genre_ids[0]] || "Unknown";

  const trailer = details.videos?.results?.find(
    video => video.type === 'Trailer' && video.site === 'YouTube'
  );

  return (
    <div>
      {isLoading ? (
        <OverviewSkeleton count={20}/>
      ) : (
        <div>
          <div className="h-full bg-cover bg-center overflow-hidden">
            <div className="relative w-screen sm:h-100 xl:h-150 2xl:h-screen">
              <img
                src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : 'no-movie.png'}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70" />

              <div className="absolute inset-0 flex items-end md:items-center justify-start px-4 mb-4 md:mb-0 lg:mb-4">
                <div className="flex gap-10 items-center justify-center">
                  <div>
                    <img
                      src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : 'no-movie.png'}
                      alt={movie.title}
                      className="w-18 h-25 sm:w-30 sm:h-45 xl:w-60 xl:h-90 rounded-xl"
                    />
                  </div>

                  <div className="absolute top-4 left-0 right-6">
                    <HeaderMovie className="z-100" />
                  </div>

                  <div className="text-white w-[50%]">
                    <p className="text-xl lg:text-4xl text-left font-bold mb-2">{movie.title}</p>
                    <strong className="hidden xl:block">Overview:</strong>
                    <p className="text-sm lg:text-[16px] hidden sm:flex md:line-clamp-4">{overview}</p>

                    <div className="hidden xl:flex justify-between mt-5 gap-5">
                      <div>
                        <p><strong>Released:</strong> {movie.release_date}</p>
                        <p><strong>Genres:</strong> {genreNames}</p>
                        <p><strong>Cast:</strong> {cast || 'N/A'}</p>
                      </div>
                      <div>
                        <p><strong>Runtime:</strong> {runtime} mins</p>
                        <p><strong>Country:</strong> {countries || 'N/A'}</p>
                        <p><strong>Production:</strong> {companies || 'N/A'}</p>
                      </div>
                    </div>

                    <div className="flex mt-4">
                      <Button
                        color="light"
                        pill
                        className="font-bold sm:text-base mr-5 cursor-pointer hover:scale-105 transition-transform hover:bg-white"
                        onClick={() => setShowVideo(true)}
                      >
                        <FaPlay className="mr-2 h-4 w-4" />
                        <span className="whitespace-nowrap sm:inline">PLAY NOW</span>
                      </Button>

                      <Button
                        color="light"
                        pill
                        className="font-bold bg-transparent text-white sm:text-base mb-4 cursor-pointer hover:scale-105 transition-transform hidden sm:inline-flex"
                        onClick={() => navigate(-1)}
                      >
                        <IoMdArrowRoundBack className="mr-2 h-5 w-5 font-bold" />
                        <span className="whitespace-nowrap">GO BACK</span>
                      </Button>
                    </div>

                    {showVideo && trailer && (
                      <div className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50">
                        <div className="relative w-full h-full">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=1`}
                            title={trailer.name}
                            frameBorder="0"
                            allow="autoplay; fullscreen; encrypted-media"
                            allowFullScreen
                          />
                          <IoBackspace
                            className="h-10 w-10 absolute top-5 right-5 cursor-pointer text-white"
                            onClick={() => setShowVideo(false)}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block sm:hidden text-white mt-10 px-10">
            <strong>Overview:</strong>
            <p className="text-sm md:text-[16px]">{overview}</p>

            <div className="flex justify-between mt-5 gap-5">
              <div>
                <p><strong>Released:</strong> {movie.release_date}</p>
                <p><strong>Genres:</strong> {genreNames}</p>
                <p><strong>Cast:</strong> {cast || 'N/A'}</p>
              </div>
              <div>
                <p><strong>Runtime:</strong> {runtime} mins</p>
                <p><strong>Country:</strong> {countries || 'N/A'}</p>
                <p><strong>Production:</strong> {companies || 'N/A'}</p>
              </div>
            </div>
          </div>

          <div className="px-10 space-y-9 wrapper mb-24">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">YOU MAY ALSO LIKE</h2>

            <div className="grid grid-cols-2 gap-5 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
              {similarMovies.map((m) => (
                <div
                  key={m.id}
                  className="bg-gray-900 text-white rounded-lg hover:scale-105 transition-transform cursor-pointer relative movie-card"
                >
                  <Link to="/overview" state={{ movie: m }}>
                    <img
                      src={
                        m.poster_path
                          ? `https://image.tmdb.org/t/p/original/${m.poster_path}`
                          : 'no-movie.png'
                      }
                      alt={m.title}
                      className="w-full h-auto object-cover rounded-xl"
                    />

                    <div className="absolute top-0 left-0 pl-3 pt-2">
                      <div className="rating flex items-center gap-1">
                        <FaStar color="yellow" />
                        <p>{m.vote_average ? m.vote_average.toFixed(1) : 'N/A'}</p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 left-0">
                      <div className="flex justify-between items-center bg-gradient-to-t w-full from-black/80 to-transparent rounded-bl-xl rounded-br-xl px-2">
                        <div>
                          <Button size="xs" color="gray" pill>
                            {m.genre_ids?.length > 0 ? genreMap[m.genre_ids[0]] || 'Unknown' : 'Unknown'}
                          </Button>
                          <p
                            title={m.title}
                            className="p-1 px-2 text-[12px] font-semibold text-white truncate w-[100px] sm:w-[150px]"
                          >
                            {m.title}
                          </p>
                        </div>

                        <FaPlayCircle color="white" className="w-6 h-6" aria-label="Play Icon" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;

