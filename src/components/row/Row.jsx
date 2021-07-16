import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.css";
import Movie from "./Movie";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Zoom } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
function Row({ urlData, title, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get(urlData);
    setMovies(data.results);
  }, []);
  // export default function App() {

  return (
    <div className="row">
      <h3 className="row-title">{title}</h3>
      {isLargeRow ? (
        <div className="row-content large-poster">
          <Swiper
            slidesPerView={7}
            spaceBetween={3}
            slidesPerGroup={3}
            loop={false}
            loopFillGroupWithBlank={true}
            navigation={true}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              // when window width is >= 500px

              500: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
              // when window width is >= 800px
              800: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
              992: {
                slidesPerView: 7,
                spaceBetween: 0,
              },
            }}
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Movie movie={movie} key={movie.id} isLargeRow={isLargeRow} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="row-content small-poster">
          <Swiper
            slidesPerView={5}
            spaceBetween={3}
            slidesPerGroup={3}
            loop={false}
            loopFillGroupWithBlank={true}
            navigation={true}
            // Responsive breakpoints
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              // when window width is >= 500px
              500: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              // when window width is >= 800px
              800: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
            }}
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Movie movie={movie} key={movie.id} isLargeRow={isLargeRow} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
export default Row;
// breakpoints={{
//   640: {
//     width: 640,
//     slidesPerView: 5,
//   },
// }}
