/** @format */

import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ....." : str;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
      <div className='banner__contents'>
        {/*title */}
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/*buttons */}
        <div>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        {/*description */}
        <h1 className='banner__description'>
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
      <div className='banner__fadedbottom'></div>
    </header>
  );
}

export default Banner;
