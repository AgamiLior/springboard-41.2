import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList({colors}) {
  const colorLinks = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorList">
        <h1 className="ColorList-title">Welcome to color palett</h1>
      <div className="ColorList-intro">
        <p>Please select a color.</p>
        <ul>{colorLinks}</ul>
      </div>
      <h1>
          <Link to="/colors/new">Add new color</Link>
        </h1>
    </div>
  );
}

export default ColorList;
