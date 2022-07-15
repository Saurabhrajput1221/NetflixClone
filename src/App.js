import React from "react";
import "./App.css";
import Nav from "./Nav";
import Banner from './Banner';
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetFlixOriginals}
        isLargeRow={true}
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTreding} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
