import Tilt from "react-tilt";
import React, { useCallback } from "react";
import {  useNavigate } from "react-router-dom";
import "./directory-item.styles.scss";


const DirectoryItem = ({ category }) => {
  const { imageUrl, title, size, linkUrl } = category;

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(`shop/${linkUrl}`); 
   
  return (
    <Tilt
      options={{ scale: 1, perspective: 1000, max: 30 }}
      className={`${size} tilt`}
      style={{}}
      
    >
      <div onClick={onNavigateHandler} className={`${size} directory-item-container`}>
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

export default DirectoryItem;
