import axios from "axios";

export const getMovies = async (url, page = 1) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=f71b456052aff7baa010ea9469450e7b&language=en-US&page=${page}`
  );
  return data;
};
