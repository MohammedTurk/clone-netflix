import React from "react";
import "./loadingScreen.css";
export default function loadingScreen(props) {
  return (
    <div class="container">
      <div class="logo">
        <h1 id="logoarc"> NETFLIX </h1>
      </div>
      <div class="loading">
        <div id="box" class="box"></div>
        <div id="box" class="box"></div>
        <div id="box" class="box"></div>
        <div id="box" class="box"></div>
        <div id="box" class="box"></div>
      </div>
    </div>
  );
}
