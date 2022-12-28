import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../../services/getAllMovies";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";

const HeroAdmin = ({ movie }) => {
  console.log(movie);
  const [pelicula, setPelicula] = useState({});

  useEffect(() => {
    if (!movie) {
      const getPosters = async () => {
        const { results } = await getMovies();
        const filteredResults = results.map(
          ({ release_date, backdrop_path, title, id, overview }) => {
            return { backdrop_path, title, id, overview, release_date };
          }
        );
        const movieToShow = filteredResults[Math.floor(Math.random() * filteredResults.length)];
        setPelicula(movieToShow);
        console.log(results);
      };
      getPosters();
    } else {
      const movieToShow = movie;
      setPelicula(movieToShow);
    }
  }, [movie]);

  return (
    <>
      <nav className='z-[100] fixed h-20 w-full bg-gradient-to-b from-black/60 flex px-8 justify-between text-slate-300'>
        <div className='flex items-center gap-6 font-medium'>
          <Link className='hover:text-slate-100 transition-colors'>
            <RxHamburgerMenu size={30} />
          </Link>
          <Link to={"/peliculas"} className='hover:text-slate-100 transition-colors'>
            Peliculas
          </Link>
          <Link to={"/series"} className='hover:text-slate-100 transition-colors'>
            Series
          </Link>
        </div>
        <div className='flex items-center gap-3'>
          <Link to={"/home"}>
            <h2 className='text-3xl font-bold'>HBOMAX</h2>
          </Link>
        </div>
        <div className='flex items-center gap-3 font-medium'>
          <BiSearch size={30} />

          <div className='flex items-center gap-2'>
            <div className='h-12 w-12 overflow-hidden flex items-center rounded-full border-2 border-pink-400 shadow-md'>
              <img
                className='w-full h-full object-cover'
                src='https://img.freepik.com/vector-premium/mujer-avatar-mujer-negocios_38295-63.jpg?w=996'
                alt=''
              />
            </div>
            <p>Maycolk Hernandez</p>
          </div>
        </div>
      </nav>
      <div className=' z-10 min-h-[600px] max-h-[800px] w-full relative'>
        <div className=' h-full w-full absolute bg-gradient-to-t from-black/80 via-black/40 z-20 flex flex-col justify-end items-baseline'>
          <div className=' p-4 md:pl-12 pb-20 h-[400px] w-full flex flex-col items-baseline justify-end'>
            <h4 className='text-white text-3xl font-bold'>{pelicula.title}</h4>
            <p className='text-slate-300 py-5 max-w-[600px]'>
              {pelicula?.overview?.slice(0, 100).concat("...")}
            </p>
            <div className='flex gap-4'>
              <Link
                to={`/player/${pelicula.id}`}
                className=' py-2 px-6 rounded-lg bg-slate-300 font-medium text-lg'
              >
                Play
              </Link>
              <button className=' border py-2 px-6 rounded-lg text-slate-200  font-medium text-lg'>
                More
              </button>
            </div>
          </div>
        </div>

        {pelicula.backdrop_path && (
          <img
            className='w-full h-[600px] max-h-[800px] object-top object-cover gradient-mask-b-90 '
            src={`https://image.tmdb.org/t/p/original${pelicula?.backdrop_path}`}
            alt=''
          />
        )}
      </div>
    </>
  );
};

export default HeroAdmin;
