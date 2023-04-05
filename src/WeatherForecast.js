import React from "react";
import WeatherData from "./WeatherData";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <p className="upcoming-days">The next 5 days...</p>
      <div className="next-five-days">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-days">Day</div>
            <div className="WeatherForecast-icons">
              <img src="" />
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperaturesLo">Lo /</span>
              <span className="WeatherForecast-temperaturesHi">Hi</span>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-days">Day</div>
            <div className="WeatherForecast-icons">
              <img src="" />
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperaturesLo">Lo /</span>
              <span className="WeatherForecast-temperaturesHi">Hi</span>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-days">Day</div>
            <div className="WeatherForecast-icons">
              <img src="" />
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperaturesLo">Lo /</span>
              <span className="WeatherForecast-temperaturesHi">Hi</span>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-days">Day</div>
            <div className="WeatherForecast-icons">
              <img src="" />
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperaturesLo">Lo /</span>
              <span className="WeatherForecast-temperaturesHi">Hi</span>
            </div>
          </div>
          <div className="col">
            <div className="WeatherForecast-days">Day</div>
            <div className="WeatherForecast-icons">
              <img src="" />
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperaturesLo">Lo /</span>
              <span className="WeatherForecast-temperaturesHi">Hi</span>
            </div>
          </div>
        </div>
      </div>
      <p className="warnings">Current weather warnings: None</p>
    </div>
  );
}
