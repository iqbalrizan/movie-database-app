import Navbar from "./Navbar";
import "./App.css"
import { getMoviesList, searchMovie } from "./Api";
import { useEffect, useState } from "react";




function App() {
  const [populerMovies, setPopulerMovies] = useState([]);

  useEffect(() => {
    getMoviesList().then((result) => {
      setPopulerMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return populerMovies.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          
            
              
              <img className="image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
<div className="desc-wrapper">
              
              <div className="tittle">{movie.title}</div>
              <div className="date">Release Date :  <span>{movie.release_date}</span></div>
          <div className="rate">Rate :  <span>{movie.vote_average}</span></div>
          <div className="overview">{movie.overview}</div>
          </div>
         
          
        </div>
      );
    });
  };

  const handleSearch = async (q) => {
    if(q.length > 3){
      const query = await searchMovie(q)
      setPopulerMovies(query.results)
    }
  };
  console.log({ popularMovies: populerMovies });
 
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <input type="text" placeholder="search"  className="movie-search"
        onChange={({target}) =>handleSearch(target.value)}
        />
     <div className="movie-container">
      <PopularMovieList />
     </div>
     </div>
    </div>
  );
}

export default App;
