import React from "react";
import style from "./MenuTitlePrice.module.scss";

const MenuTitlePrice = (props) => {
  return (
    <div className={style.One}>
      <p className={style.oneDesc}>{props.Title} </p>
      <p className={style.extra}></p>
      <p className={style.price}>{props.Price}</p>
    </div>
  );
};

export default MenuTitlePrice;
