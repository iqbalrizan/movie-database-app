import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMoviesList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    return movie.data.results;
    
  };

export const searchMovie = async (q) => {
    const handleSearch = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return handleSearch.data
}