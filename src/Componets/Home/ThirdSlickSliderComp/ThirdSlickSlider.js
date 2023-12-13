import React from "react";
import style from "./ThirdSlickSlider.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../../Icons/RightArrow";
import LeftArrow from "../../Icons/LeftArrow";
import ThirdSlideComp from "../ThirdSlideComp/ThirdSlideComp";
import ThirdSlide1 from "../../../Image/ThirdSlide1.png";
import ThirdSlide2 from "../../../Image/ThirdSlide2.png";
import ThirdSlide3 from "../../../Image/ThirdSlide3.png";

const ThirdSlickSlider = () => {
  // const centerPadiing = () => {
  //   const width = window.innerWidth;

  //   if (width < 900) {
  //     return "200px";
  //   } else if (width < 800) {
  //     return "180px";
  //   }
  // };
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 1,
    speed: 500,
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
      <div className={style.sliderContainer}>
        <Slider {...settings}>
          <div className={style.One}>
            <ThirdSlideComp
              image={ThirdSlide1}
              Title1={"Kara Mura"}
              Title2={"Masala dosa"}
            />
          </div>
          <div className={style.One}>
            <ThirdSlideComp
              image={ThirdSlide2}
              Title1={"Rava schezwan Dosa"}
              Title2={"supreme dosai"}
            />
          </div>
          <div className={style.One}>
            <ThirdSlideComp
              image={ThirdSlide3}
              Title1={"Cone shape"}
              Title2={"Special masala dosa"}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ThirdSlickSlider;
