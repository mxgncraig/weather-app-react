import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function convertFar(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCel(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <span className="currentTemperature">
        <span>{Math.round(props.celcius)}</span>{" "}
        <span className="unit current-temp">
          °C |{" "}
          <a href="/" onClick={convertFar}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="currentTemperature">
        <span>{Math.round(fahrenheit())}</span>{" "}
        <span className="unit current-temp">
          <a href="/" onClick={convertCel}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
