import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PeliculasGratisSlider = ({ url, poster = true, width = "210px", height = "auto", title }) => {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const carruselRef = useRef();

  useEffect(() => {
    const getPlayingMovies = async (urlApi) => {
      try {
        setLoading(true);
        const { data } = await axios.get(urlApi);
        setPeliculas(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getPlayingMovies(url);
  }, [url, poster]);

  const handleCarrusel = (e) => {
    const { value } = e.target;
    value === "next"
      ? (carruselRef.current.scrollLeft += 300)
      : (carruselRef.current.scrollLeft -= 300);
  };

  return (
    <div className='px-8 relative py-8 mx-auto'>
      <div
        ref={carruselRef}
        className={`flex gap-4 overflow-x-scroll whitespace-nowrap  scroll-smooth scrollbar-hide  w-full p-2 `}
      >
        {!loading &&
          peliculas.map((pelicula) => {
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
          })}
        <button
          onClick={handleCarrusel}
          value={"prev"}
          className='h-full p-2 text-4xl  absolute top-[50%] translate-y-[-50%] left-0  text-white'
        >
          {"<"}
        </button>
        <button
          onClick={handleCarrusel}
          value={"next"}
          className='h-full p-2   text-4xl absolute top-[50%] translate-y-[-50%] right-0  text-white'
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default PeliculasGratisSlider;
