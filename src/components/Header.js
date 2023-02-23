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

            {
              movies.length > 0 && <ul className='results'>
                {movies.map((movie) => (<li key={movie.imdbID}>
                  {<ResultCard movie={movie} />}
                </li>))}
              </ul>
            }

          </div>
        </div>
      </nav>


    </>
  );
}

export default Header;
