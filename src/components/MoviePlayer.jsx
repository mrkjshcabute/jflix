import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const API_KEY = '6aab4fe56b3de72b537cfab071de90be';

const MoviePlayer = () => {
  const { id } = useParams();
  const [videoKey, setVideoKey] = useState('');

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

      if (trailer) {
        setVideoKey(trailer.key);
      }
    };

    fetchVideo();
  }, [id]);

  return (
    <div className="video-player">
      {videoKey ? (
        <iframe
          width="100%"
          height="600"
          src={`https://www.youtube.com/embed/${videoKey}`}
          title="Movie Trailer"
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default MoviePlayer;
