// A component that return a Movie
import React from "react";
const Movie = (movie) => {
  return (
    <div>
      <h5>Title</h5>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
    </div>
  );
};
export default Movie;