import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Search from "./Search";
import FormattedDate from "./FormattedDate";
import WeatherData from "./WeatherData";

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
        <p className="time-date">
          <FormattedDate date={weather.date} />
        </p>
        <Search />
        <WeatherData data={weather} />
      </div>
    );
  } else {
    const apiKey = "5201594abea9f3e38b70e65b11a80c24";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
