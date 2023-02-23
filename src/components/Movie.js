// A component that return a Movie
import React from "react";
import "./MovieCard.css"
import MovieControls from './MovieControls';

const Movie = ({ movie, type }) => {
  return (
    <div className='movie-card w-100 position-relative border-0 d-block'>
      <div className="overlay"></div>
      {movie.poster_path ? (<img className='w-100 h-100' src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt={movie.Title} />) : (<div className='filter-poster'></div>)}
      <MovieControls movie={movie} type={type} />
    </div>
  );
};
export default Movie;