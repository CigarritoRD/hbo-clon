import axios from "axios";

export const getMovies = async (urlApi) => {
  try {
    const { data } = await axios.get(urlApi);
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
