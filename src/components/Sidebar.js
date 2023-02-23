import React from 'react';
import "./Sidebar.css"
import anime from "./images/anime.png"

const Sidebar = () => {
  return (
    <div className="pull-right col-lg-2 col-md-2 col-sm-12">
      <div className="pages-box">
        <ul className="list-pages list-unstyled m-0">
          <li>
            <a href="https://iiegybest.top">
              <i className="fa fa-home">
              </i><span>ايجي بيست</span>
            </a>
          </li>
          <li>
            <a href="https://iiegybest.top/trending">
              <i className="fa fa-eye"></i>
              <span>الاكثر مشاهدة</span>
            </a>
          </li>
          <li>
            <a href="https://iiegybest.top/movies">
              <i className="fa fa-film"></i>
              <span>الافلام</span>
            </a>
          </li>
          <li>
            <a href="https://iiegybest.top/tv">
              <i className="fa fa-tv"></i>
              <span>المسلسلات</span>
            </a>
          </li>
          <li>
            <a href="/category/مسلسلات/مسلسلات-انيميشن/">
              <img src={anime} className="emoji" alt='انمي' />
              <span>  مسلسلات انمي  </span>
            </a>
          </li>
          <li>
            <a href="/category/افلام-movies-filme/افلام-كارتون-3/">
              <img src={anime} className="emoji" alt='انمي' />
              <span>  افلام انمي  </span>
            </a>
          </li>
          <li>
            <a href="/category/مسلسلات/مصارعة-حرة/">
              <span className='emoji'>💪</span>
              <span> المصارعة الحرة </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
