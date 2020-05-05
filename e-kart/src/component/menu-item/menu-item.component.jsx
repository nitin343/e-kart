import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({ title, imageurl, size }) => (
  <div className={`menu-item  ${size}`}>
   <div className='background-image' 
    style={{
    backgroundImage: `url(${imageurl})`,
  }} />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <p className="subtitle">Shop Now</p>
    </div>
  </div>
);

export default MenuItem;
