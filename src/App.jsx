import { useState } from "react";
import "./App.css";
import { movies } from "./movies";
import Movie from "./movie";

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countWithParam, setCountWithParam] = useState(0);
  const [moviesList, setMoviesList] = useState(movies);
  console.log(moviesList);

  const increase = () => {
    setCount(count + 1);
  };

  const increaseWithParam = (x) => {
    setCountWithParam(countWithParam + x);
  };

  return (
    <>
      <h3>{count}</h3>
      <button type="button" onClick={increase} className="btn btn-primary">
        Increase By One
      </button>
      <h3>{countTwo}</h3>
      <button
        type="button"
        onClick={() => setCountTwo(countTwo + 2)}
        className="btn btn-primary"
      >
        Increase By Two
      </button>
      <h3>{countWithParam}</h3>
      <button
        type="button"
        onClick={() => increaseWithParam(3)}
        className="btn btn-primary"
      >
        Increase With Param of Three
      </button>
      <div className="movies">
        {moviesList.map((movie, index) => {
          return (
            <Movie
              key={index}
              image={movie.Images[0]}
              rated={movie.Rated}
              title={movie.Title}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
