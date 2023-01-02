import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../data/data";

const useSingleMovie = (id, tipo) => {
  const [details, setDetails] = useState("");
  useEffect(() => {
    const getSingleMovie = async (id) => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/${tipo}/${id}?${API_KEY}&language=en-US`
        );
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleMovie(id);
  }, [id, tipo]);
  return { details };
};

export default useSingleMovie;
