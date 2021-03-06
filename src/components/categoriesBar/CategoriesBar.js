import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../../redux/actions/videos.action";
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
  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") dispatch(getVideosByCategory(value));
    else {
      dispatch(getVideosByCategory(value));
    }
  };

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
