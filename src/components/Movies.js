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

      <div className="pull-right extend col-md-12 col-sm-12">
        <div className="container">
          <div className="pull-right sticky col-md-12 col-sm-12">
            <div className="pages-box">
              <ul className="list-pages list-unstyled">
                <li>
                  <a href="https://iiegybest.top"><i className="fa fa-home"></i><span>ايجي بيست</span></a></li>
                <li>
                  <a href="https://iiegybest.top/trending"><i className="fa fa-eye"></i><span>الاكثر مشاهدة</span></a></li>
                <li>
                  <a href="https://iiegybest.top/movies"><i className="fa fa-film"></i><span>الافلام</span></a></li>
                <li><a href="https://iiegybest.top/tv"><i className="fa fa-tv-retro"></i><span>المسلسلات</span></a></li>
                <li><a href="/category/مسلسلات/مسلسلات-انيميشن/"><img src="/wp-content/uploads/2022/06/anime.png" height="22" width="22" className="vam" /><span>  مسلسلات انمي  </span></a></li>
                <li><a href="/category/افلام-movies-filme/افلام-كارتون-3/"><img src="/wp-content/uploads/2022/06/anime.png" height="22" width="22" className="vam" /><span>  افلام انمي  </span></a></li>
                <li><a href="/category/مسلسلات/مصارعة-حرة/"><span className="i"><img draggable="false" role="img" className="emoji" alt="💪" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f4aa.svg" /></span><span> المصارعة الحرة </span></a></li>
              </ul>
            </div>
          </div>
          <div className="main-content">
            <h1 className="title-heading text-center p-3">مرحباً بكم في موقع ايجي بست Egybest  الاصلي</h1>
            <article className="main-article">
              {popular.map(movie => {
                return <Movie key={movie.id} movie={movie} />;
              })}
            </article>
          </div>

          <div className="pull-left sticky col-md-12 col-sm-12">

          </div>

        </div>
      </div>

    </div >
  );
};
export default Movies;