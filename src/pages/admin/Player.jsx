import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState({});
  useEffect(() => {
    const getVideos = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f71b456052aff7baa010ea9469450e7b&language=en-US`
        );
        setPelicula(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getVideos();
  }, [id]);
  return (
    pelicula.length && (
      <iframe
        className='z-[-20] w-full h-screen'
        controls={0}
        src={`https://www.youtube.com/embed/${pelicula[0]?.key}?autoplay=1&mute=0&loop=1&playsinline=1&defaultmuted=0&controls=1&playlist=${pelicula[0]?.key}`}
        title='trailer'
        allow=' autoplay; clipboard-write;  gyroscope; picture-in-picture: playsinline; defaultmuted;
  ;'
      ></iframe>
    )
  );
};

export default Player;
