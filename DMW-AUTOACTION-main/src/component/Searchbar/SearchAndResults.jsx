import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar"; // Adjust the path if needed
import Footer from "../Footer/Footer"; // Adjust the path if needed
import './SearchAndResults.css';

const SearchAndResultsPage = () => {
  const location = useLocation();
  const { results, make, model, year } = location.state || { results: [], make: "", model: "", year: "" };

  const [selectedPart, setSelectedPart] = useState("");

  const partsList = [
    { value: "", label: "Type part name e.g belt, light" },
    { value: "17", label: "Brake Disc" },
    { value: "18", label: "Brake Drum" },
    { value: "19", label: "Abs Controller" },
    { value: "20", label: "Abs Hydraulic Unit" },
    { value: "21", label: "Abs Sensor" },
    { value: "22", label: "Master Cylinder" },
    { value: "23", label: "Vacuum Pump" },
    { value: "24", label: "Wheel Cylinder" },
    { value: "25", label: "Brake Servos" },
    { value: "26", label: "Hoses and Pipes" },
    { value: "27", label: "Brake Callipers" },
    { value: "28", label: "Air Cleaner Assy" },
    { value: "29", label: "Air Hoses" },
    { value: "30", label: "Complete Engine" },
    { value: "31", label: "Bare Engine" },
    { value: "32", label: "Cylinder" },
  ];

  const handlePartChange = (event) => {
    setSelectedPart(event.target.value);
  };

  const handleAddPart = () => {
    if (selectedPart) {
      // Handle the addition of the selected part here
      alert(`Added part: ${selectedPart}`);
      // You might want to also update the results or state accordingly
    } else {
      alert("Please select a part to add.");
    }
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar */}
      <div className="results-container">
        {/* Search Parts Section */}
        <div className="col enquiry-section first-section first-step-part">
          <div>
            <div className="enquiry-title">
              <h5><span className="title-tag">Search parts</span></h5>
            </div>
            <div className="part-section">
              <div className="row">
                <div className="form-group col-md-10" id="part-list-section">
                  <select
                    id="parts-list"
                    className="form-control"
                    value={selectedPart}
                    onChange={handlePartChange}
                  >
                    {partsList.map(part => (
                      <option key={part.value} value={part.value}>
                        {part.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-2">
                  <button type="button" className="btn btn-add-part" onClick={handleAddPart}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="col enquiry-section second-section">
          <div className="enquiry-title">
            <h5><span className="title-tag">Selected Vehicle Details</span></h5>
          </div>
          <div className="enquiry-inner-details">
            <div className="row">
              <div className="col-md-12 selc-brand">
                SELECTED BRAND: {make}
              </div>
            </div>

            {/* New part details section with logo and model/year */}
            <div className="part-details-section row">
              <div className="vehicle-logo col-md-3 text-center">
                <img src="https://www.selectusedparts.com/assets/images/2019/08/20190511_101154.gif" alt="Vehicle Logo" className="vehicle-img" />
              </div>
              <div className="vehicle-details col-md-9 text-center">
                <div className="row">
                  <div className="model-section col-md-6">
                    <h5 className="label" style={{ color: 'red' }}>MODEL</h5>
                    <h5 className="vehicle-inner"><strong>{model}</strong></h5>
                  </div>
                  <div className="year-section col-md-6">
                    <h5 className="label" style={{ color: 'red' }}>YEAR</h5>
                    <h5 className="vehicle-inner"><strong>{year}</strong></h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="part-enq-sec">
              <div className="row">
                <div className="col-md-12">
                  <div className="part-details enquiry-title">
                    <h5><span className="title-tag">Selected Parts</span></h5>
                  </div>
                  <div id="part-preview" className="part-preview enquiry-title">
                    {results.length > 0 ? (
                      <ul>
                        {results.map((part) => (
                          <li key={part._id}>
                            {part.partName} ({part.condition}) - ₹{part.price}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No parts found for the selected criteria.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 form-group">
                <h5 className="enquiry-title"><span className="title-tag">Any additional info (optional):</span></h5>
                <textarea name="additional_info" rows="1" className="form-control remove-border" placeholder="Type here..."></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Include the Footer */}
    </div>
  );
};

export default SearchAndResultsPage;
