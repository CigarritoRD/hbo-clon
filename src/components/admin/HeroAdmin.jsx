import { useEffect } from "react";
import { useState } from "react";
import { getMovies } from "../../services/getAllMovies";

const HeroAdmin = () => {
  const [pelicula, setPelicula] = useState({});

  useEffect(() => {
    const getPosters = async () => {
      const { results } = await getMovies();
      const filteredResults = results.map(({ backdrop_path, title, id, description }) => {
        return { backdrop_path, title, id, description };
      });
      const movieToShow = filteredResults[Math.floor(Math.random() * filteredResults.length)];
      setPelicula(movieToShow);
    };
    getPosters();
  }, []);

  return (
    <>
      <nav className='z-[100] fixed h-20 w-full bg-gradient-to-b from-black/60 flex px-8 justify-between text-slate-200'>
        <div className='flex items-center gap-6 font-medium'>
          <p>Menu</p>
          <p>Peliculas</p>
          <p>Series</p>
        </div>
        <div className='flex items-center gap-3'>
          <h2 className='text-3xl font-bold'>HBOMAX</h2>
        </div>
        <div className='flex items-center gap-3 font-medium'>
          <p>lupa</p> <p>Nombre De Usuario</p>
        </div>
      </nav>
      <div className=' z-10 min-h-[400px] max-h-[800px] w-full relative '>
        <div className=' h-full w-full absolute bg-gradient-to-t from-black/80 via-black/40 z-20 flex flex-col justify-end items-baseline'>
          <div className=' h-[400px] max-w-[600px] border'></div>
        </div>

        {pelicula.backdrop_path && (
          <img
            className='w-full h-full max-h-[800px] object-top object-cover gradient-mask-b-90 '
            src={`https://image.tmdb.org/t/p/original${pelicula?.backdrop_path}`}
            alt=''
          />
        )}
      </div>
    </>
  );
};

export default HeroAdmin;
