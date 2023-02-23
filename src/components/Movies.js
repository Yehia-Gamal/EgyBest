import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./Movies.css"


const Movies = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=945403d4a0c8dcc2ff5c1c29fc561d9e&language=en-US&page=1";
  useEffect(() => {
    fetchPopular();
  }, []);

  const [popular, setPopular] = useState([]);

  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };



  return (
    <div className="Movies" id="Movies">

      <div className="pull-right">
        <div className="container">
          
          <div className="main-content">
            <h1 className="title-heading text-center p-3">مرحباً بكم في موقع ايجي بست Egybest  الاصلي</h1>
            <article className="main-article">
              {popular.map(movie => {
                return <Movie key={movie.id} movie={movie} />;
              })}
            </article>
          </div>

        </div>
      </div>

    </div >
  );
};
export default Movies;