import React from "react";
import "./CategoryBar.css";

const categories = [
  { title: "Purchasing", positions: 202 },
  { title: "Sales & Marketing", positions: 245 },
  { title: "Health Care", positions: 514 },
  { title: "IT Contractor", positions: 120 },
  { title: "Construction", positions: 410 },
];

function Categories() {
  return (
    <div className="categories">
      {categories.map((cat, index) => (
        <div key={index} className="category-card">
          <div className="icon">💼</div>
          <h3>{cat.title}</h3>
          <p>{cat.positions} Open Positions</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;



