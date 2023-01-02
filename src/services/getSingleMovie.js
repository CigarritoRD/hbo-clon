import axios from "axios";
import { API_KEY } from "../data/data";

const getSingleMovie = async (query) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export default getSingleMovie;
