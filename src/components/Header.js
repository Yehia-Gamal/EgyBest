import { Link, NavLink } from 'react-router-dom';
import logo from "./images/logo.png"

import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Add.css"
import ResultCard from './ResultCard';

const Header = () => {

  const formSubmit = (e) => {
    e.preventDefault()
  }

  const [searchValue, setSearchValue] = useState("")
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=f9251b2d`).then((response) => {
      if (response.data.Search) {
        setMovies(response.data.Search)
      }
    }).catch((error) => console.log(error))
  }, [searchValue])


  return (
    <>
      <nav className="navbar navbar-expand-lg w-100">
        <div className="container">
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to={"/"}>Movies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to={"/watchlist"}>Watch List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to={"/watched"}>Watched</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link fw-bold btn btn-outline-success" style={{ lineHeight: 1 }} to={"/add"}>Add</NavLink>
              </li> */}
            </ul>
            <form onSubmit={formSubmit} className="d-flex w-50" role="search">
              <input className="form-control me-2" type="search" placeholder="Search for a movie" aria-label="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </form>

            {
              movies.length > 0 && <ul className='results'>
                {movies.map((movie) => (<li key={movie.imdbID}>
                  {<ResultCard movie={movie} />}
                </li>))}
              </ul>
            }

          </div>
          <Link className="navbar-brand" to={"/"}><img src={logo} alt="EgyBest-logo" /></Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
