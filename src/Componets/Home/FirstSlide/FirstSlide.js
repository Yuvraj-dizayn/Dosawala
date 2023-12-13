import React from "react";
import style from "./FirstSlide.module.scss";
import HomeSlide1 from "../../../Image/HomeSlide1.png";
import HomeSlide2 from "../../../Image/HomeSilde2.png";
import HomeSilde3 from "../../../Image/HomeSilde3.png";
const FirstSlide = () => {
  return (
    <div className={style.Container}>
      <div className={style.Title}>
        <h5 className={style.MainTitle}>Welcome To Authentic</h5>
        <h5 className={style.MainTitle}>South Indian Taste</h5>
        <p className={style.SubTitle}>
          Introducing first time ever! Unlimited South Indian Meal
        </p>

        <div className={style.btnContainer}>
          <button className={style.btn}>
            <a href="#Menu">Menu</a>
          </button>
        </div>
      </div>

      <div className={style.imageContainer}>
        <img src={HomeSlide1} alt="" className={style.image} />
      </div>

      <div className={style.secondImageContainer}>
        <div className={style.secondImageOne}>
          <img src={HomeSlide2} alt="" className={style.ImageOne} />
        </div>
        <div className={style.secondImageTwo}>
          <img src={HomeSilde3} alt="" className={style.ImageTwo} />
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
