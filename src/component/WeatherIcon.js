import React, { useState } from "react";
import "./weatherIcon.css";
// import weatherImg from "../weather/sunny.png";

export default function TodayWeather({ temp, location, image }) {
  return (
    <div className="weather">
      <h1>{location}</h1>
      <img src={image} alt="weather" className="weather__mainImg" />
      <div className="temp">
        <p id="big">{temp}&deg;C</p>
      </div>
    </div>
  );
}
