import { Link, NavLink } from 'react-router-dom';
import logo from "./images/logo.png"

const Header = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light position-fixed w-100">
        <div className="container">
          <Link className="navbar-brand" to={"/"}><img src={logo} alt="EgyBest-logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="search" to={"/add"}><span>Search for a movie</span> <i className="fa-solid fa-magnifying-glass"></i></Link>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to={"/"}>Movies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to={"/watchlist"}>Watch List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to={"/watched"}>Watched</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>


    </>
  );
}

export default Header;
