import React from "react";
import style from "./Footer.module.scss";
import IconDesc from "../Icon_Desc/IconDesc";
import Image from "./../../Image/1.png";

const Footer = () => {
  return (
    <>
      <div className={style.Footer}>
        <div className={style.Container_One}>
          <p className={style.Title}>Address</p>
          <div className={style.subTitle}>
            <p>Head Office: Ground Floor,</p>
            <p>Savan Mall,behind Kargil </p>
            <p>Petrol Pump Ahmedabad</p>
            <p>contact@dosawalaindia.com</p>
          </div>
        </div>

        <div className={style.Container_Two}>
          <p className={style.Title}>Store contacts:</p>
          <div className={style.subTitle}>
            <p>Sola road : 82380 11324</p>
            <p> Vaishnodevi :6396772263</p>
            <p> Bhavnagar : 8145337482</p>
            <p>Mundra : 87358 82755</p>
          </div>
        </div>

        <IconDesc />
        <div className={style.Image_Container}>
          <p className={style.Title}>Instagram</p>
          <img src={Image} alt="" className={style.Image} />
        </div>
      </div>

      <hr />
      <div className={style.lastDesc}>
        <p>
          copyright &copy; 2021. designed and devloped by{" "}
          <strong>dizayn.io</strong>All Right Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
