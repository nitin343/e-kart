import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";


const MenuItem = ({ title, imageUrl, size, history,linkUrl,match }) => (
  
  <div className={`menu-item  ${size}`}>
  <div className='background-image' 
  style={{
    backgroundImage: `url(${imageUrl})`,
  }} />
  <div className="content" onClick={() => history.push(`${match.url}${linkUrl}`)}>
  <h1 className="title">{title.toUpperCase()}</h1>
  <p className="subtitle">Shop Now</p>
  </div>
  </div>
  

);

export default withRouter(MenuItem);
