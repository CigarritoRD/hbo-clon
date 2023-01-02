import { useEffect, useState } from "react";
import { getMovies } from "../services/getMovies";

const useMovies = (url, poster = false) => {
  const [loading, setLoading] = useState(true);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const movies = async (Url) => {
      setLoading(true);
      try {
        const data = await getMovies(Url);
        setPeliculas(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movies(url);
  }, [url, poster]);

  return {
    loading,
    peliculas,
  };
};

export default useMovies;
