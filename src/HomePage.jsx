import React, { useState } from "react";
import UserContext from "./context";
import Banner from "./components/banner/Banner";
import Row from "./components/row/Row";
import requests from "./requests";
import Modal from "./components/row/Modal";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";

function HomePage(props) {
  const [movie, setMovie] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const handleMovie = (movie) => {
    setMovie(movie);
    hideScroll();
    console.log(movie);
    setOpenModal(true);
  };
  const handleModal = () => {
    const styleEl = document.getElementById("scroll");
    document.head.removeChild(styleEl);
    setOpenModal(false);
  };
  const hideScroll = () => {
    const style = document.createElement("style");
    style.id = "scroll";
    style.innerHTML = `body::-webkit-scrollbar{display:none}`;
    document.head.appendChild(style);
  };

  return (
    <UserContext.Provider value={{ handleMovie }}>
      <Banner
        urlData={requests.fetchNetflixOriginals}
        title="NETFLIX ORIGINES"
      />
      <Row urlData={requests.fetchTrending} title="TRENDING NOW" isLargeRow />
      <Row urlData={requests.fetchTopRated} title="TOP RATED" />
      <Row urlData={requests.fetchActionMovies} title="ACTION MOVIES" />
      <Row urlData={requests.fetchHorrorMovies} title="HORROR MOVIES" />
      <Row urlData={requests.fetchRomanceMovies} title="ROMANCE MOVIES" />
      <Row urlData={requests.fetchComedyMovies} title="DOCUMENTARIES" />
      <Row urlData={requests.fetchDocumentariesMovies} title="" />
      {openModal ? <Modal movie={movie} handleModal={handleModal} /> : null}
    </UserContext.Provider>
  );
}
export default HomePage;
