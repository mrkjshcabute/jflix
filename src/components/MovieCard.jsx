import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "flowbite-react";
import { FaPlayCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/overview', { state: { movie } });
  };

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

  const {
    title,
    vote_average,
    poster_path,
    genre_ids = [],
  } = movie;

  const genre = genreMap[genre_ids[0]] || "Unknown";

  return (
    <div className='movie-card rounded-xl cursor-pointer hover:scale-105 transition-transform relative' onClick={handleClick}>
      <img 
        src={poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : 'no-movie.png'} 
        className='rounded-xl'
      />

      <div className="absolute top-0 left-0 pl-3 pt-2 ">    
        <div className='rating'>
          <FaStar color='yellow' />
          <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 left-0">   
        <div className='flex justify-between items-center bg-gradient-to-t w-full from-black/80 to-transparent rounded-bl-xl rounded-br-xl px-2'>
           <div>
            <Button size="xs" color="gray" pill className=''>
              {genre}
            </Button>
            <p title={title} className='p-1 px-2 text-[12px] font-semibold  text-white truncate w-[100px]'>
              {title}
            </p>
          </div>
          
          <div className="">    
            <FaPlayCircle color='white' className='w-6 h-6' aria-label='Play Icon'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
