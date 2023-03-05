import React from "react";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
import FiveDays from "./FiveDays";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <div className="WeatherBody mt-3">
        <header>
          <div className="TimeZone">
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
          <FiveDays />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
