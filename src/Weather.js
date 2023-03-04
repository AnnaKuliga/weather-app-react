import React from "react";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="WeatherBody">
      <header>
        <div className="TimeZone">
          <h2> Time Zones</h2>
          <ul className="navigation grid grid-four-columns">
            <li className="navigation-item">London</li>
            <li className="navigation-item">New York</li>
            <li className="navigation-item">Sydney</li>
            <li className="navigation-item">Tokyo</li>
          </ul>
        </div>
      </header>
      <main>
        <SearchEngine />
        <Forecast />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
