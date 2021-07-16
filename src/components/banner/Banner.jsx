import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
function Banner({ urlData }) {
  const [movie, setmovie] = useState([]);
  const End_Point_Imges = "https://image.tmdb.org/t/p/original/";
  const srtingLength = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  };
  useEffect(async () => {
    const { data } = await axios.get(urlData);
    const movie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];
    setmovie(movie);
  }, []);
  return (
    <div
      className="banner"
      style={{
        color: "#fff",
        backgroundImage: `url(${End_Point_Imges}${movie?.backdrop_path})`,
      }}
    >
      <div className="banner-container">
        <h1 className="banner-title">{movie?.name}</h1>
        <div className="banner-buttons">
          <button>play</button>
          <button>more info</button>
        </div>
        <p className="banner-description">
          {srtingLength(movie?.overview, 180)}
        </p>
      </div>
      <div className="mask-banner" />
      <div className="banner-fade" />
    </div>
  );
}

export default Banner;
