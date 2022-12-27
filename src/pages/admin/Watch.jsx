import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroAdmin from "../../components/admin/HeroAdmin";
import SliderMovies from "../../components/admin/SliderMovies";

const Watch = () => {
  const { id } = useParams();
  const [details, setDetails] = useState("");
  useEffect(() => {
    const getSingleMovie = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=f71b456052aff7baa010ea9469450e7b&language=en-US`
        );
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleMovie();
  }, [id]);
  return (
    <div className='bg-black'>
      {details?.backdrop_path && (
        <>
          <HeroAdmin movie={details} />
          <SliderMovies
            url={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=f71b456052aff7baa010ea9469450e7b&language=en-US&page=1`}
            width={`280px`}
            title={"Peliculas Similares"}
          />
        </>
      )}
    </div>
  );
};

export default Watch;
