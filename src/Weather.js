import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Search from "./Search";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});

  function handleResponse(response) {
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      currentIcon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png`,
      iconDescription: response.data.weather.description,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <button className="btn btn-light location-button">
          Search for your current location...
        </button>
        <p className="time-date">
          <FormattedDate date={weather.date} />
        </p>
        <Search />
        <h1>{weather.city}</h1>
        <div className="weather-variables">
          <div className="row">
            <div className="col">
              Humidity: <span>{weather.humidity}</span>%
            </div>
            <div className="col">
              Wind:<span>{Math.round(weather.wind)}</span>mph
            </div>
            <div className="col">
              Feels like:<span> {Math.round(weather.feelsLike)}</span>°C
            </div>
          </div>
        </div>
        <div>
          <h2>
            <img
              src={weather.currentIcon}
              alt={weather.iconDescription}
              className="current-icon"
            />
            <span>{Math.round(weather.temperature)}</span>{" "}
            <span className="unit current-temp">°C</span>
          </h2>
        </div>
        <p className="upcoming-days">The next 5 days...</p>
        <div className="next-five-days"></div>
        <p className="warnings">Current weather warnings: None</p>
      </div>
    );
  } else {
    let apiKey = "5201594abea9f3e38b70e65b11a80c24";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
