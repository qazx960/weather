import React, { Fragment } from "react";
import "./main.css";
import { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./weatherdata.css";
import "./weatherIcon.css";

const Buttons = ({ city, fetchWeatherData }) => {
  const handleButtonClick = () => {
    fetchWeatherData(city);
  };

  return (
    <div>
      <h2 className="btn" onClick={handleButtonClick}>
        {city}
      </h2>
    </div>
  );
};
export default function WeatherData() {
  // const [location, setLocation] = useState("");
  // const [result, setResult] = useState({});
  const [weather, setWeather] = useState([]);
  const [weatherState, setWeatherState] = useState(false);
  const [city, setCity] = useState("paris");
  const [apiError, setApiError] = useState(false);

  const API_KEY = "c35f61a8744d2ba33d2db9d7c7f143a7";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
        setWeatherState(true);
      })

      .catch((err) => {
        console.log(err);
        return null;
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch weather data for the new city
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
        setWeatherState(true);
        setApiError(false); // Reset the error state
      })
      .catch((err) => {
        console.log(err);
        setApiError(() => alert(""));
        return null;
      });
  };

  const fetchWeatherData = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
        setWeatherState(true);
        setApiError(false); // Reset the error state
      })
      .catch((err) => {
        console.log(err);
        setApiError(true);
        return null;
      });
  };
  return (
    <>
      {weatherState && (
        <div className="weather__container">
          <div className="weather__buttons">
            <Buttons
              className="weather__btn"
              city="Busan"
              fetchWeatherData={fetchWeatherData}
            />
            <Buttons
              className="weather__btn"
              city="Seoul"
              fetchWeatherData={fetchWeatherData}
            />
            <Buttons
              className="weather__btn"
              city="Paris"
              fetchWeatherData={fetchWeatherData}
            />
            <Buttons
              className="weather__btn"
              city="Tokyo"
              fetchWeatherData={fetchWeatherData}
            />
            <Buttons
              className="weather__btn"
              city="London"
              fetchWeatherData={fetchWeatherData}
            />
            <Buttons
              className="weather__btn"
              city="Berlin"
              fetchWeatherData={fetchWeatherData}
            />
          </div>

          <WeatherIcon
            location={weather.name}
            status={weather.weather[0].description}
            temp={weather.main.temp.toFixed(0)}
            imageSrc={""}
          />

          <div className="boxes">
            <div className="itembox">{weather.main.humidity}% Humidity</div>
            <div className="itembox">{weather.weather[0].main}</div>
            <div className="itembox">
              High {weather.main.temp_max.toFixed(0)}&deg;C
            </div>
            <div className="itembox">
              Low {weather.main.temp_min.toFixed(0)}&deg;C
            </div>
            {/* <div className="itembox"></div> */}
            {/* <div className="itembox"></div> */}
          </div>
          <div id="container__input">
            <form onSubmit={handleSubmit}>
              <input type="search" onChange={(e) => setCity(e.target.value)} />
              <input type="submit" />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
