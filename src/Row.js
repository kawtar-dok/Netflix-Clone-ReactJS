import "./row.css";
import React, { useEffect, useState } from "react";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow = false }) {

  const row = {
    color: "white",
    ml: "20px",
  };
  const row__posters = {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    padding: "20px",
  };
  const row__poster = {
    maxHeight: "100px",
    objectfit: "contain",
    mr : "10px",
    width: "100px",
    transition: "transform 450ms",
  };
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div classname="row" style={row}>
      <h2>{title}</h2>

      <div classname="row__posters" style={row__posters}>
        {movies.map(
            (movie) => 

           (( isLargeRow && movie.poster_path) || 
            (!isLargeRow && movie.backdrop_path)) && ( 
          <img
            classname={`row__poster  ${isLargeRow && "row__posterlarge"}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            style={row__poster}
          />
        )
        )}
      </div>
    </div>
  );
}

export default Row;
