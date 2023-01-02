import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../../services/getAllMovies";
import AdminNavbar from "./AdminNavbar";

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
      <AdminNavbar />
      <div className=' z-10 min-h-[600px] max-h-[800px] w-full relative'>
        <div className=' h-full w-full absolute bg-gradient-to-t from-black/80 via-black/40 z-20 flex flex-col justify-end items-baseline'>
          <div className=' p-4 md:pl-12 pb-20 h-[400px] w-full flex flex-col items-baseline justify-end'>
            <h4 className='text-white text-3xl font-bold'>{pelicula.title}</h4>
            <p className='text-slate-300 py-5 max-w-[600px]'>
              {pelicula?.overview?.slice(0, 100).concat("...")}
            </p>
            <div className='flex gap-4 items-center'>
              <Link className='' to={`/player/${pelicula.id}`}>
                <motion.button
                  initial={{ padding: "8px 28px" }}
                  transition={{ duration: 0.2 }}
                  whileHover={{
                    padding: "12px 12px",
                    borderRadius: "100%",
                    scale: 1.1,
                    background: "transparent",
                    color: "white",
                  }}
                  className='border-2 flex items-center justify-center rounded-lg bg-slate-300 font-medium text-lg'
                >
                  Play
                </motion.button>
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
