import React, { useState } from "react";
import "./weatherIcon.css";
// import weatherImg from "../weather/sunny.png";

export default function TodayWeather({ temp, location, imageSrc, status }) {
  return (
    <div className="weather">
      <h1 className="weather_item">{location}</h1>
      <div className="weather_img">
        <img src={imageSrc} alt="Weather Icon" />

        <span>{status}</span>
      </div>
      <div className="temp">
        <p id="big">{temp}&deg;C</p>
      </div>
    </div>
  );
}
