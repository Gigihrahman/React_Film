import "./App.css";
import { useEffect, useState } from "react";
import { getMovieList, seacrhMovie, cobaApi } from "./api.js";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);
  const ambil = () => {
    console.log(cobaApi());
  };
  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-tittle">{movie.title}</div>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="Movie-date"> {movie.release_date}</div>
          <div className="Movie-rate"> {movie.vote_average}</div>
        </div>
      );
    });
  };

  // const search = async (q) => {
  //   if (q.lenth > 3) {
  //     const query = await seacrhMovie(q);
  //     setPopularMovies(query.reults);
  //     console.log({ query: query });
  //   }
  // };
  const search = async (q) => {
    if (q.length > 3) {
      const query = await seacrhMovie(q);
      setPopularMovies(query.results);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>movie wow</h1>
        <input
          placeholder="cari film anda ..."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
