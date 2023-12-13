import React from "react";
import style from "./SecondSlideComp.module.scss";
import Arrow from "../../Icons/Arrow";

const SecondSlideComp = (props) => {
  return (
    <div
      className={style.Container}
      style={{
        paddingTop: props.top === true ? "383px" : "0px",
        backgroundImage:
          props.top === true
            ? "linear-gradient(180deg, #E4F0FA 0%, rgba(228, 240, 250, 0.00) 100%)"
            : "#fcfbef",
      }}
    >
      <div className={style.leftContainer}>
        <img src={props.image} alt="" className={style.image} />
      </div>

      <div className={style.rightContainer}>
        {props.type && <h3 className={style.TitleOne}>Vision and Growth</h3>}
        <h3 className={style.Title}>{props.Title}</h3>
        <p className={style.DescOne}>{props.Desc1}</p>
        <p className={style.DescTwo}>{props.Desc2} </p>
        <div className={style.arrowContainer}>
          <p className={style.vector}>Know more</p>
          <Arrow />
          <Arrow />
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default SecondSlideComp;
