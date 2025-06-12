import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "flowbite-react";
import { FaPlay } from "react-icons/fa";

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

const CarouselMovie = ({ movie }) => {
  const navigate = useNavigate();

  const handleOverview = () => {
    navigate('/overview', { state: { movie } });
  };

  const {
    title,
    backdrop_path,
    release_date,
    overview,
    genre_ids = [],
  } = movie;

  const genres = genre_ids.map(id => genreMap[id]).filter(Boolean);

  return (
    <div className="relative w-screen sm:h-100 xl:h-150 2xl:h-screen">
      <img 
        src={backdrop_path ? 
          `https://image.tmdb.org/t/p/original/${backdrop_path}` : 'no-movie.png'} 
        alt={title}
        onClick={handleOverview}
        className="object-cover w-screen sm:h-100 xl:h-150 2xl:h-screen"
      />

      <div className="absolute bottom-0 left-0 bg-gradient-to-t w-full from-black/80 to-transparent p-4 text-white space-y-3 pl-10 md:pl-10 lg:pl-10">
        <div className="flex flex-wrap gap-2">
          {genres.map((genre, idx) => (
            <Button key={idx} size="xs" color="gray" pill className='hidden md:block'>
              {genre}
            </Button>
          ))}
        </div>

        <h2 className="text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mt-4">
          {title}
        </h2>

        <p className="text-sm md:text-base opacity-80 hidden md:block">
          {release_date ? release_date.split('-')[0] : 'N/A'}
        </p>

        <p className="hidden md:block text-sm md:text-base xl:text-lg md:w-[80%] lg:w-[70%] xl:w-[60%] opacity-90">
          {overview}
        </p>

        <div className='hidden md:block'>
          <Button
            color="light"
            pill
            className="font-bold sm:text-base mt-4 mb-6 cursor-pointer hover:scale-105 transition-transform hover:bg-white"
            onClick={handleOverview}
          >
            <FaPlay className="mr-2 h-4 w-4" />
            Watch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarouselMovie;
