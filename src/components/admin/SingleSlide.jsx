import React from "react";
import { Link } from "react-router-dom";

const SingleSlide = ({ pelicula, width, height, poster }) => {
  return (
    <Link to={`/watch/${pelicula?.id}`}>
      <div
        style={{ width: `${width}`, height: `${height}` }}
        key={pelicula?.original_title}
        className={`relative shadow flex-shrink-0 group  `}
      >
        <div className='h-full w-full absolute group-hover:bg-black/0 bg-black/20 group-hover:border-opacity-100 border-opacity-0  border-2 duration-300 cursor-pointer border-violet-600 scale-[101%] rounded-md'></div>
        <img
          className='w-full h-full object-cover p-1'
          src={
            poster
              ? `https://image.tmdb.org/t/p/w500/${pelicula?.poster_path}`
              : `https://image.tmdb.org/t/p/w500/${
                  pelicula?.backdrop_path ?? pelicula?.poster_path
                }`
          }
          alt={pelicula?.original_title}
        />
      </div>
    </Link>
  );
};

export default SingleSlide;
