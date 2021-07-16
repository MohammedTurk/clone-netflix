import React, { useState, useContext, useRef } from "react";
import UserContext from "../../context";
import "./Row.css";

function Movie({ movie, isLargeRow }) {
  const End_Point_Imges = "https://image.tmdb.org/t/p/original/";
  const TheContext = useContext(UserContext);
  const theRef = useRef();
  return (
    <div className="movie " onClick={() => TheContext.handleMovie(movie)}>
      <img
        key={movie.id}
        ref={theRef}
        src={
          isLargeRow
            ? `${End_Point_Imges}${movie?.poster_path}`
            : `${End_Point_Imges}${movie?.backdrop_path}  `
        }
        alt={movie?.name || movie?.title}
      />
    </div>
  );
}

export default Movie;
