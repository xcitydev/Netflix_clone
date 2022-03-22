/** @format */

import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";

function App() {
  return (
    <div className='App'>
      <h1 className='header'>HEY LETS BUILD NETFLIX CLONE</h1>
      <Banner />
      <Row
        title='Netflix Originals'
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={request.fetchTrending} />
      <Row title='Top Rated' fetchUrl={request.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={request.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={request.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={request.fetchRomanceMovies} />
      <Row title='Documentries' fetchUrl={request.fetchDocumentaries} />
      {/*header*/}
      {/*Banner*/}
      {/*Rows*/}
    </div>
  );
}

export default App;
