import { useRef } from "react";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import useMovies from "../hooks/useMovies";
import SingleSlide from "./admin/SingleSlide";

const PeliculasSlider = ({ url, poster = true, width = "210px", height = "auto", title, tipo }) => {
  const carruselRef = useRef();

  const { loading, peliculas } = useMovies(url, poster);

  const handleCarrusel = (e) => {
    const { value } = e.target;
    value === "next"
      ? (carruselRef.current.scrollLeft += 500)
      : (carruselRef.current.scrollLeft -= 500);
  };

  return (
    <div className='md:px-8 relative h-fit py-8 mx-auto'>
      <div
        ref={carruselRef}
        className={`flex md:gap-4 gap-2 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide w-full p-2 `}
      >
        {!loading &&
          peliculas.map((pelicula) => (
            <SingleSlide
              pelicula={pelicula}
              poster={poster}
              width={width}
              height={height}
              tipo={tipo}
            />
          ))}
        <button
          onClick={handleCarrusel}
          value={"prev"}
          className=' h-full absolute top-[50%] translate-y-[-50%] left-0  text-white'
        >
          <MdArrowBackIosNew size={30} className=' pointer-events-none' />
        </button>
        <button
          onClick={handleCarrusel}
          value={"next"}
          className='h-full absolute top-[50%] translate-y-[-50%] right-0  text-white'
        >
          <MdArrowForwardIos size={30} className=' pointer-events-none' />
        </button>
      </div>
    </div>
  );
};

export default PeliculasSlider;
