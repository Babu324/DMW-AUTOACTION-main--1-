import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const PartSearchBar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token); // Log token to check if it's retrieved correctly

    if (!token) {
      setError("Please log in to search for parts.");
      return;
    }

    setLoading(true);
    setError("");
    
    console.log("Searching with:", { make, model, year }); // Log search parameters

    try {
      const response = await axios.get("http://localhost:3001/api/parts/search", {
        params: {
          make,
          model,
          year,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/results", { state: { results: response.data, make, model, year } });
    } catch (error) {
      console.error("Error fetching parts:", error);
      setError(error.response?.data?.message || "Could not fetch parts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="dropdown-container">
        <h3>
          Don't Get Hassle <br />
          Search Your Part Here
        </h3>
        <select value={make} onChange={handleChange(setMake)} className="dropdown">
          <option value="">Select Make</option>
          <option value="TATA">TATA</option>
          <option value="HONDA">HONDA</option>
          <option value="SUZUKI">SUZUKI</option>
          <option value="TOYOTA">TOYOTA</option>
          <option value="MAHINDRA">MAHINDRA</option>
        </select>
        <select value={model} onChange={handleChange(setModel)} className="dropdown">
          <option value="">Select Model</option>
          <option value="SAFARI">SAFARI</option>
          <option value="SWIFT">SWIFT</option>
          <option value="MOBILIO">MOBILIO</option>
          <option value="INNOVA">INNOVA</option>
          <option value="BOLERO">BOLERO</option>
        </select>
        <select value={year} onChange={handleChange(setYear)} className="dropdown">
          <option value="">Select Year</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
        </select>
        <button
          className="search-button"
          onClick={handleSearch}
          disabled={loading || !make || !model || !year}
        >
          {loading ? "Searching..." : "Help To Search My Part"}
        </button>
      </div>
      <div className="search-results">
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div className="Search-footer">
        <span>100% Genuine Used Parts</span>
        <div className="rating">
          <img src="/Glogo.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default PartSearchBar;
