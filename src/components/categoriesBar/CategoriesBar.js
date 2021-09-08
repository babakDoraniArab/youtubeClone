import React, { useState } from "react";
import "./_categoriesBar.scss";

const CategoriesBar = () => {
  const keyword = [
    "All",
    "React js",
    " Angular Js",
    "React Native",
    "use of API",
    "Redux",
    "Music",
    "Algorithm Art",
    "Guitar",
    "Bengali Songs",
    "Coding",
    "guitar",
    "Gatsby",
    "Real Madrid",
    "piano",
    "dance",
    "Node js",
    "programming",
  ];
  const [activeElement, setActiveElement] = useState("All");
  const handleClick = (value) => setActiveElement(value);

  return (
    <div className="categoriesBar">
      {keyword.map((value, index) => (
        <span
          key={index}
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active" : " "}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
