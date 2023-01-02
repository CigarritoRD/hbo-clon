import { useRef } from "react";
import { useParams } from "react-router-dom";
import HeroAdmin from "../../components/admin/HeroAdmin";
import SliderMovies from "../../components/admin/SliderMovies";
import { API_KEY } from "../../data/data";
import useSingleMovie from "../../hooks/useSingleMovie";

const Watch = () => {
  const { id, tipo } = useParams();
  const { details } = useSingleMovie(id, tipo);

  const divRef = useRef();

  const scrollTop = () => {
    console.log(
      divRef.current.children[1].scrollIntoView({
        behavior: "smooth",
      })
    );
  };

  return (
    <div ref={divRef} onLoad={scrollTop} className='bg-black'>
      {details?.backdrop_path && (
        <>
          <HeroAdmin movie={details} />
          <SliderMovies
            url={`https://api.themoviedb.org/3/${tipo}/${id}/similar?${API_KEY}&language=en-US&page=1`}
            width={`280px`}
            title={"Similares"}
            tipo={tipo}
          />

          <SliderMovies
            url={`https://api.themoviedb.org/3/${tipo}/${id}/recommendations?${API_KEY}&language=en-US&page=1`}
            width={`280px`}
            title={"Recomendas"}
            tipo={tipo}
          />
        </>
      )}
      <div>
        <h2>details</h2>
      </div>
    </div>
  );
};

export default Watch;
