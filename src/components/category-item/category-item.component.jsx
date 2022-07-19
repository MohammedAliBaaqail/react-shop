import Tilt from "react-tilt";
import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, size, linkUrl } = category;

  const navigate = useNavigate();
  const handleOnClick = () => { navigate(`${linkUrl}`); } 
   
  return (
    <Tilt
      options={{ scale: 1, perspective: 1000, max: 30 }}
      className={`${size} tilt`}
      style={{}}
      
    >
      <div onClick={handleOnClick} className={`${size} category-container`}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>

        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </Tilt>
  );
};

export default CategoryItem;
