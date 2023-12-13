import React from "react";
import style from "./ThirdSlideComp.module.scss";

const ThirdSlideComp = (props) => {
  return (
    <div className={style.imageContainer}>
      <img src={props.image} alt="" className={style.image} />
      <div className={style.Desc}>
        <p className={style.DescOne}>{props.Title1}</p>
        <p className={style.DescTwo}>{props.Title2}</p>
      </div>
    </div>
  );
};

export default ThirdSlideComp;
