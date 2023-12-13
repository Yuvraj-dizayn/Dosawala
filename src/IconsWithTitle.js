import React from "react";
import "./IconWithTitle.css";

const IconsWithTitle = (props) => {
  return (
    <div className="Navbar_Dashboard">
      <img src={props.image} alt="" className="Navbar_DashBoard_Icon" />
      <h3 className="Navbar_DashBoard_Font">{props.Title}</h3>
    </div>
  );
};

export default IconsWithTitle;
