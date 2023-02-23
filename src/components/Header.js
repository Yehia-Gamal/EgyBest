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
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <Link className="navbar-brand" to={"/"}><img src={logo} alt="EgyBest-logo" /></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form onSubmit={formSubmit} className="d-flex w-50" role="search">
              <input className="form-control me-2" type="search" placeholder="Search for a movie" aria-label="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </form>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
