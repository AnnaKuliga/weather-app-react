import React from "react";

export default function Forecast() {
  return (
    <div className="forecast">
      <h1>Oslo</h1>
      <div className="currentDate">
        {" "}
        <span className="day">Saturday</span>{" "}
        <span className="time">10:27</span>
      </div>
      <div className="container">
        <div className="weather row">
          <ul className="weatherSummary col-sm-6">
            <li>
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
                alt="Clear sky"
              />
            </li>
          </ul>
          <ul className="extraDescription col-sm-6">
            <li>
              Temperature: <span className="currentTemp">10°C</span>{" "}
            </li>
            <li>Humidity: 50%</li>
            <li>Wind: 9km/h</li>
            <li>description: Clear sky</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
