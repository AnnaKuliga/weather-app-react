import React from "react";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";

export default function Weather() {
  return (
    <div className="WeatherBody">
      <header>
        <h1> Weather Forecast</h1>
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
