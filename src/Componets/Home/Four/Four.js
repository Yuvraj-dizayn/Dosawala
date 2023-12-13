import React from "react";
import style from "./Four.module.scss";
import Email from "../../Icons/Email";
import Call from "../../Icons/Call";
import FourSlide from "../../../Image/FourSilde.png";

const Four = () => {
  return (
    <div className={style.Container}>
      <div className={style.hideDiv}>
        <p className={style.DescOne}>Contact for</p>
        <p className={style.DescTwo}>Franchise Inquiry </p>
      </div>

      <div className={style.imageContainer}>
        <img src={FourSlide} alt="" className={style.image} />
        <div className={style.Desc}>
          Authentic South Indian Taste. Introducing first time ever! Unlimited
          South Indian Meal
        </div>
      </div>

      <div className={style.DescContainer}>
        <div className={style.showDiv}>
          <p className={style.DescOne}>Contact for</p>
          <p className={style.DescTwo}>Franchise Inquiry </p>
        </div>
        <p className={style.mainDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat null
        </p>
        <div className={style.Email}>
          <Email />
          <p className={style.Desc}>info@dosawalaindia.com</p>
        </div>
        <div className={style.Call}>
          <Call />
          <p className={style.Desc}>9974937667</p>
        </div>
      </div>
    </div>
  );
};

export default Four;
