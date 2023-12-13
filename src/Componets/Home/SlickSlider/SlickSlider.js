import React from "react";
import style from "./SlickSlider.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../../Icons/RightArrow";
import LeftArrow from "../../Icons/LeftArrow";
const SlickSlider = () => {
  const settings = {
    // dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    // arrows: true,

    autoplaySpeed: 1500,
    nextArrow: <LeftArrow />,
    prevArrow: <RightArrow />,
  };

  return (
    <div className={style.Container}>
      <div className={style.Title}>
        <p className={style.oneTitle}>what</p>
        <p className={style.twoTitle}>our constomer says</p>
      </div>

      <div className={style.sliderContainer}>
        <Slider {...settings} style={{ width: "100%" }}>
          <div className={style.One}>
            <p className={style.Desc}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              null”
            </p>
            <p className={style.Title}>Mr. sachin Rathor </p>
          </div>
          <div className={style.One}>
            <p className={style.Desc}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              null”
            </p>
            <p className={style.Title}>Raj Modi </p>
          </div>
          <div className={style.One}>
            <p className={style.Desc}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              null”
            </p>
            <p className={style.Title}>kicha krishna</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SlickSlider;
