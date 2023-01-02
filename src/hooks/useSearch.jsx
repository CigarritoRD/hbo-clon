import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../data/data";

const useSearch = (query) => {
  const [resultados, setResultados] = useState([]);
  const BASE_URL = "https://api.themoviedb.org/3";
  useEffect(() => {
    if (query) {
      const getQueryResults = async () => {
        try {
          const {
            data: { results },
          } = await axios.get(
            `${BASE_URL}/search/multi?${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
          );
          console.log(results);
          setResultados(results);
        } catch (error) {
          console.log(error);
        }
      };
      getQueryResults();
    }
  }, [query]);

  return { resultados };
};

export default useSearch;
