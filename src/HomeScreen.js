import React from "react";
import "./HomeScreen.css";

//Compenent
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav*/}
      <Nav />

      {/*Banner*/}
      <Banner />

      {/*Row*/}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="TOP_RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION_MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY_MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR_MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE_MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
