import React from "react";
import Footer from "./Footer";

export default function Weather() {
  return (
    <div className="WeatherBody">
      <header>
        <h1> Weather App</h1>
      </header>
      <main>
        <h2> Weather forecast</h2>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
