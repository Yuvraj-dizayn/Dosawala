import React from "react";
import style from "./Map.module.scss";

const Map = (props) => {
  return (
    <div className={style.Main_Container}>
      <img src={props.image} alt="" className={style.Image} />
    </div>
  );
};

export default Map;
