import React from "react";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="WeatherBody">
      <header>
        <div className="TimeZone">
          <h1> Time Zones</h1>
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
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
