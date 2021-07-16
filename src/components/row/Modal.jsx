import React from "react";
import "./movieModal.css";
import { GrClose } from "react-icons/gr";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

function Modal({ movie, handleModal }) {
  const End_Point_Imges = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="movie-modal">
      {/* <div className="movie-interface" onClick={handleModal}></div> */}
      <div className="movie-data" onClick={handleModal}>
        <div className="movie-poster" onClick={(e) => e.stopPropagation()}>
          <div className="movie-img">
            <img src={`${End_Point_Imges}${movie.backdrop_path}`} alt="" />
            <div className="img-fade"></div>
            <div className="close-btn">
              <GrClose />
            </div>
            <div className="tools-movie">
              <button id="play-movie">
                <BiPlay />
                Play
              </button>
              <span className="add-btn">
                <AiOutlinePlus color="#fff" />
                <div className="title-btn">Add to My List</div>
              </span>
              <span className="like-btn">
                <AiOutlineLike color="#fff" />
                <div className="title-btn">I Like This</div>
              </span>
              <span className="dlike-btn">
                <AiOutlineDislike color="#fff" />
                <div className="title-btn">Not For Me</div>
              </span>
            </div>
          </div>
          <div className="movie-des">
            <div className="des1">
              <div className="head-des">
                <span className="match">98% match </span>
                <span className="date-movie">2020</span>
                <span className="age">+13</span>
                <span className="time-movie">2h 30m </span>
                <span className="quality">HD</span>
              </div>
              <div className="body-des">{movie.overview}</div>
            </div>
            <div className="des2">
              <div className="name">
                <span className="head"> Name:</span>
                {movie.title}
              </div>
              <div className="cast-team">
                <span className="head">Cast:</span>
                Lorem,ipsum,dolor,sit,amet, consectetur
              </div>
              <div className="genres">
                <span className="head">Genres:</span>
                Lorem,ipsum,dolor,sit,amet
              </div>
              <div className="the-movie">
                <span className="head">This movie is:</span>
                Lorem,ipsum,dolor
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
