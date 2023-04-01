import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  let weatherData = {
    city: "Coolangatta",
    temperature: "17",
    humidity: "40",
    wind: "30",
    feelsLike: "14",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
  };
  return (
    <div className="Weather">
      <button className="btn btn-light location-button">
        Search for your current location...
      </button>
      <p className="time-date">Current time and date</p>
      <Search />
      <h1>{weatherData.city}</h1>
      <div className="weather-variables">
        <div className="row">
          <div className="col">
            Humidity: <span>{weatherData.humidity}</span>%
          </div>
          <div className="col">
            Wind:<span>{weatherData.wind}</span>mph
          </div>
          <div className="col">
            Feels like:<span> {weatherData.feelsLike}</span>°C
          </div>
        </div>
      </div>
      <div>
        <h2>
          <img src={weatherData.imgUrl} alt=".." className="current-icon" />
          <span>{weatherData.temperature}</span>{" "}
          <span className="unit current-temp">°C</span>
        </h2>
      </div>
      <p className="upcoming-days">The next 5 days...</p>
      <div className="next-five-days"></div>
      <p className="warnings">Current weather warnings: None</p>
    </div>
  );
}
