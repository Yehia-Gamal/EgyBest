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
            <div className="aside">
              <article className="main-article social-box text-center">
                <h2 className="main-title">تابع ايجي بيست</h2>
                <div className="social">
                  <a className="face-link" href="https://www.facebook.com/Iegy.best/" target="_blank" rel="nofollow">Iegy.best.Page<i className="fab fa-facebook-f"></i></a>
                  <a className="twitter-link" href="https://twitter.com/IegybestB" target="_blank" rel="nofollow">  @EgyBest_Officia<i className="fab fa-twitter"></i></a><a className="instagram-link" href="https://www.instagram.com/iegybest/" target="_blank" rel="nofollow">EgyBest egybest.co<i className="fab fa-instagram"></i></a><a className="pinterest-link" href="https://www.pinterest.com/EgyBest_Officia/" target="_blank" rel="nofollow">EgyBest_Officia<i className="fab fa-pinterest-p"></i></a></div></article><ul id="menu-%d8%a7%d9%84%d9%82%d8%a7%d8%a6%d9%85%d8%a9-%d9%81%d9%88%d8%aa%d8%b1" className="main-menu flex-center list-unstyled">
                <li id="menu-item-343839" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-343839">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-2023/">افلام 2023</a></li>
                <li id="menu-item-343840" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-343840">
                  <a href="/egybest/%d9%85%d8%b3%d9%84%d8%b3%d9%84%d8%a7%d8%aa-2023/">مسلسلات 2023</a></li>
                <li id="menu-item-262846" className="color ff1000 menu-item menu-item-type-custom menu-item-object-custom menu-item-262846">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-2022/">افلام 2022</a></li>
                <li id="menu-item-85100" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-85100">
                  <a href="/egybest/movies-%d8%a7%d9%81%d9%84%d8%a7%d9%85-2021-7/">افلام 2021</a></li>
                <li id="menu-item-124397" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-124397">
                  <a href="/egybest/movie-%d8%a7%d9%81%d9%84%d8%a7%d9%85-2020-online-3/">افلام 2020</a></li>
                <li id="menu-item-101397" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-101397">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-2019-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86-1/">افلام 2019</a></li>
                <li id="menu-item-85098" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-85098">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-2018-1/">افلام 2018</a></li>
                <li id="menu-item-88293" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-88293">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-2017-1/">افلام 2017</a></li>
                <li id="menu-item-66420" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-66420">
                  <a href="https://iiegybest.top/category/%d8%a7%d9%81%d9%84%d8%a7%d9%85-movies-filme/3-aflam-arabic-%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%b9%d8%b1%d8%a8%d9%8a%d8%a9-%d8%a7%d9%8a%d8%ac%d9%8a-%d8%a8%d8%b3%d8%aa/">افلام عربي</a></li>
                <li id="menu-item-66415" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-66415">
                  <a href="https://iiegybest.top/category/%d8%a7%d9%81%d9%84%d8%a7%d9%85-movies-filme/foreign-hd-%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%a7%d8%ac%d9%86%d8%a8%d9%89-2/">افلام اجنبي</a></li>
                <li id="menu-item-66396" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66396">
                  <a href="/egybest/action-%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%a7%d9%83%d8%b4%d9%86-4/">افلام اكشن</a></li>
                <li id="menu-item-66419" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-66419">
                  <a href="https://iiegybest.top/category/%d8%a7%d9%81%d9%84%d8%a7%d9%85-movies-filme/turki-%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%aa%d8%b1%d9%83%d9%8a-1/">افلام تركى</a></li>
                <li id="menu-item-66393" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66393">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%b1%d8%b9%d8%a8-horror-4/">افلام رعب</a></li>
                <li id="menu-item-66423" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-66423">
                  <a href="https://iiegybest.top/category/%d8%a7%d9%81%d9%84%d8%a7%d9%85-movies-filme/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d9%83%d8%a7%d8%b1%d8%aa%d9%88%d9%86-3/">افلام كارتون</a></li>
                <li id="menu-item-66395" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66395">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%ae%d9%8a%d8%a7%d9%84-%d8%b9%d9%84%d9%85%d9%89-1/">افلام خيال علمى</a></li>
                <li id="menu-item-66407" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66407">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d9%85%d8%ba%d8%a7%d9%85%d8%b1%d8%a7%d8%aa-4/">افلام مغامرات</a></li>
                <li id="menu-item-66408" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66408">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%af%d8%b1%d8%a7%d9%85%d8%a7-1/">افلام دراما</a></li>
                <li id="menu-item-66397" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66397">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d9%81%d8%a7%d9%86%d8%aa%d8%a7%d8%b2%d9%8a%d8%a7-1/">افلام فانتازيا</a></li>
                <li id="menu-item-66399" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66399">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d9%83%d9%88%d9%85%d9%8a%d8%af%d9%89-1/">افلام كوميدى</a></li>
                <li id="menu-item-66400" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66400">
                  <a href="/egybest/1-romantic-%D8%A7%D9%81%D9%84%D8%A7%D9%85-%D8%B1%D9%88%D9%85%D8%A7%D9%86%D8%B3%D9%8A%D8%A9/">افلام رومانسية</a></li>
                <li id="menu-item-66401" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66401">
                  <a href="/egybest/%D8%A7%D9%81%D9%84%D8%A7%D9%85-%D8%A7%D8%AB%D8%A7%D8%B1%D8%A9-1/">افلام اثارة</a></li>
                <li id="menu-item-66406" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66406">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%ac%d8%b1%d9%8a%d9%85%d8%a9-1/">افلام جريمة</a></li>
                <li id="menu-item-66402" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66402">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%ba%d9%85%d9%88%d8%b6-2/">افلام غموض</a></li>
                <li id="menu-item-66414" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66414">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%aa%d8%b4%d9%88%d9%8a%d9%82-1/">افلام تشويق</a></li>
                <li id="menu-item-66403" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66403">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d9%85%d9%88%d8%b3%d9%8a%d9%82%d9%8a%d8%a9-1/">افلام موسيقية</a></li>
                <li id="menu-item-66404" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66404">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%b1%d9%8a%d8%a7%d8%b6%d9%8a%d8%a9-1/">افلام رياضية</a></li>
                <li id="menu-item-66405" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66405">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%b3%d8%a8%d8%a7%d9%82-1/">افلام سباق</a></li>
                <li id="menu-item-66409" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66409">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%ad%d8%b1%d9%88%d8%a8-war-1/">افلام حروب</a></li>
                <li id="menu-item-66411" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66411">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%aa%d8%a7%d8%b1%d9%8a%d8%ae%d9%8a%d8%a9-1/">افلام تاريخية</a></li>
                <li id="menu-item-66418" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-66418">
                  <a href="https://iiegybest.top/category/%d8%a7%d9%81%d9%84%d8%a7%d9%85-movies-filme/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%a7%d8%b3%d9%8a%d9%88%d9%8a%d8%a9-4/">افلام اسيوية</a></li>
                <li id="menu-item-66410" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66410">
                  <a href="/egybest/%D8%A7%D9%81%D9%84%D8%A7%D9%85-%D8%B3%D9%8A%D8%B1%D8%A9-%D8%B0%D8%A7%D8%AA%D9%8A%D8%A9/">افلام سيرة ذاتية</a></li>
                <li id="menu-item-66412" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66412">
                  <a href="/egybest/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d9%88%d8%ab%d8%a7%d8%a6%d9%82%d9%8a%d8%a9-1/">افلام وثائقية</a></li>
                <li id="menu-item-66413" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-66413">
                  <a href="/egybest/%D8%A7%D9%81%D9%84%D8%A7%D9%85-%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9/">افلام غربية</a></li>
                <li id="menu-item-116708" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-116708">
                  <a href="/" aria-current="page">ايجي بست الجديد</a></li>
                <li id="menu-item-66421" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-66421">
                  <a href="https://iiegybest.top/category/%d8%a7%d9%81%d9%84%d8%a7%d9%85-movies-filme/1-%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d9%87%d9%86%d8%af%d9%8a%d8%a9-indian/">افلام هندية</a></li>
                <li id="menu-item-66422" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-66422">
                  <a href="https://iiegybest.top/category/%d9%85%d8%b3%d9%84%d8%b3%d9%84%d8%a7%d8%aa/%d8%a8%d8%b1%d8%a7%d9%85%d8%ac-%d8%aa%d9%84%d9%81%d8%b2%d9%8a%d9%88%d9%86%d9%8a%d8%a9/">برامج تلفزيونية</a></li>
                <li id="menu-item-280793" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-280793">
                  <a href="https://iegybest.film/category/%d9%85%d8%b3%d9%84%d8%b3%d9%84%d8%a7%d8%aa/%d9%85%d8%b3%d9%84%d8%b3%d9%84%d8%a7%d8%aa-%d8%b1%d9%85%d8%b6%d8%a7%d9%86-2022/">مسلسلات رمضان</a></li>
                <li id="menu-item-116709" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-116709">
                  <a href="/" aria-current="page">ايجي بست البديل</a></li>
                <li id="menu-item-151857" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-151857">
                  <a href="/" aria-current="page">egybest</a></li>
                <li id="menu-item-280794" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-280794">
                  <a href="https://iegybest.film/category/%d9%85%d8%b3%d9%84%d8%b3%d9%84%d8%a7%d8%aa/%d9%85%d8%b3%d9%84%d8%b3%d9%84%d8%a7%d8%aa-%d8%b1%d9%85%d8%b6%d8%a7%d9%86-2022/">رمضان 2022</a></li>
                <li id="menu-item-151858" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-151858">
                  <a href="https://iegybest.film/">موقع ايجي بست</a></li>
                <li id="menu-item-169043" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-169043">
                  <a href="https://iegybest.film/netflix/">موقع نتفليكس</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div >
  );
};
export default Movies;