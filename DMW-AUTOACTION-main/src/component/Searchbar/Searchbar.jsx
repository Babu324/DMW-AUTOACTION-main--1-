import React, { useState } from "react";
import "./Search.css";

const PartSearchBar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const handleSearch = () => {
    console.log(
      `Searching for: Make - ${make}, Model - ${model}, Year - ${year}`
    );
  };

  return (
    <div className="search-bar-container">
      <div className="dropdown-container">
        <h3>
          Don't Get Hassel
          <br />
          Search Your Part Here
        </h3>

        <select
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className="dropdown"
        >
          <option value="" disabled>
            Select Make
          </option>
          <option value="TATA">TATA</option>
          <option value="HONDA">HONDA</option>
          <option value="SUZUKI">SUZUKI</option>
          <option value="TOYOTA">TOYOTA</option>
          <option value="MAHINDRA">MAHINDRA</option>
        </select>

        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="dropdown"
        >
          <option value="" disabled>
            Select Model
          </option>
          <option value="SAFARI">SAFARI</option>
          <option value="SWIFT">SWIFT</option>
          <option value="MOBILIO">MOBILIO</option>
          <option value="INNOVA">INNOVA</option>
          <option value="BOLERO">BOLERO</option>
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="dropdown"
        >
          <option value="" disabled>
            Select Year
          </option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
        </select>

        <button className="search-button" onClick={handleSearch}>
          Help To Search My Part
        </button>
      </div>

      <div className="Search-footer">
        <span>100% Genuine Used Parts</span>
        <div className="rating">
          <img src="/Glogo.png" />
        </div>
      </div>
    </div>
  );
};

export default PartSearchBar;
