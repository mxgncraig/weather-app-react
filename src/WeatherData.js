import React from "react";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.data.city}</h1>
      <div className="weather-variables">
        <div className="row">
          <div className="col">
            Humidity: <span>{props.data.humidity}</span>%
          </div>
          <div className="col">
            Wind:<span>{Math.round(props.data.wind)}</span>mph
          </div>
          <div className="col">
            Feels like:<span> {Math.round(props.data.feelsLike)}</span>°C
          </div>
        </div>
      </div>
      <div>
        <h2>
          <img
            src={props.data.currentIcon}
            alt={props.data.iconDescription}
            className="current-icon"
          />
          <span>{Math.round(props.data.temperature)}</span>{" "}
          <span className="unit current-temp">°C</span>
        </h2>
      </div>
      <p className="upcoming-days">The next 5 days...</p>
      <div className="next-five-days"></div>
      <p className="warnings">Current weather warnings: None</p>
    </div>
  );
}
