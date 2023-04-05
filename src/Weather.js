import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      currentIcon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      iconDescription: response.data.weather.description,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "5201594abea9f3e38b70e65b11a80c24";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <p className="time-date">
          <FormattedDate date={weather.date} />
        </p>
        <div className="search-engine">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Search for a new city..."
              onChange={handleCityChange}
            />
          </form>
        </div>
        <WeatherData data={weather} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
