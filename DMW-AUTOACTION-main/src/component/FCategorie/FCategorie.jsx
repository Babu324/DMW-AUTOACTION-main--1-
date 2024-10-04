import React from "react";
import "./FCategorie.css";

const FeatureCategories = () => {
  const categories = [
    { image: "/Body-Parts.png", label: "Body Parts, Exhaust, Exterior Fittings",},
    { image: "/Brakes.png", label: "Brakes" },
    { image: "/Electrics & Lightning.png", label: "Car Electrics and Car Lighting" },
    { image: "/Cooling-and-Heating.png", label: "Cooling & Heating" },
    { image: "/Air-bag-kits.png", label: "Dash board assy, Interior fittings, Air bag kits",},
    { image: "/Engine-Parts.png", label: "Engine Parts" },
    { image: "/Suspension.png", label: "Suspension & Steering" },
    { image: "/Transmission-Parts.png", label: "Transmission Parts" },
  ];

  return (
    <div className="feature-categories">
      <h2>FEATURE CATEGORIES</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.image} alt={category.label} />
            <p>{category.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCategories;
