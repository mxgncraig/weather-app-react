import React from "react";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <p className="upcoming-days">The next 5 days...</p>
      <div className="next-five-days"></div>
      <p className="warnings">Current weather warnings: None</p>
    </div>
  );
}
