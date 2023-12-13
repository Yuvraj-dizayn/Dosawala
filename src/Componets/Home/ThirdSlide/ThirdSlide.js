import React from "react";
import style from "./ThirdSlide.module.scss";
import ThirdSlide1 from "../../../Image/ThirdSlide1.png";
import ThirdSlide2 from "../../../Image/ThirdSlide2.png";
import ThirdSlide3 from "../../../Image/ThirdSlide3.png";
import ThirdSlide4 from "../../../Image/ThirdSlide4.png";
import ThirdSlideComp from "../ThirdSlideComp/ThirdSlideComp";
import ThirdSlickSlider from "../ThirdSlickSliderComp/ThirdSlickSlider";

const ThirdSlide = (props) => {
  return (
    <div className={style.Container}>
      <div className={style.Title}>
        <h4 className={style.TitleOne}>discover</h4>
        <h4 className={style.TitleTwo}>Special dish</h4>
      </div>

      <div className={style.imageContainer}>
        <div className={style.compImage}>
          <ThirdSlideComp
            image={ThirdSlide1}
            Title1={"Kara Mura"}
            Title2={"Masala dosa"}
          />
          <ThirdSlideComp
            image={ThirdSlide2}
            Title1={"Rava schezwan Dosa"}
            Title2={"supreme dosai"}
          />
          <ThirdSlideComp
            image={ThirdSlide3}
            Title1={"Cone shape"}
            Title2={"Special masala dosa"}
          />
        </div>

        <div className={style.image}>
          <img src={ThirdSlide4} alt="" className={style.logo} />
          <p className={style.Desc}>Test with Love</p>
        </div>
      </div>

      <div className={style.ThirdSlickSlider}>
        <ThirdSlickSlider />
      </div>
    </div>
  );
};

export default ThirdSlide;
