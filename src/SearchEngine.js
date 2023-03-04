import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./SearchEngine.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`It is currently in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for the city"
              className="form-control"
              id="search-text-input"
              autocomplete="off"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary " />
          </div>
        </div>
      </form>
    </div>
  );
}
