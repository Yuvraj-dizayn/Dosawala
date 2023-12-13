import React, { useState } from "react";
import style from "./Menu.module.scss";
import MenuImage from "../../../Image/MenuImage.png";
import MenuTitlePrice from "./MenuTitlePrice/MenuTitlePrice";

const Menu = (props) => {
  const [titleprice, setTitlePrice] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const chageTitlePrice = (index) => {
    setTitlePrice(index);
    setActiveIndex(index);
  };
  const MenuPrice = [
    [
      { "uludu vadai": 99 },
      { "onion ulundu vadai": 199 },
      { "rassam ulundu vadai": 119 },
      { "upma ": 89 },
    ],
    [
      { "saada dosa": 99 },
      { "mysuru saada dosa": 139 },
      { "nilgiri saada dosa": 139 },
      { "palak saada dosa": 139 },
      { "onlion saada dosa": 149 },
      { "schezwan saada dosa": 149 },
      { "paper saada dosa": 149 },
      { "kuera mura saada dosa": 149 },
    ],
    [
      { "masala dosa": 139 },
      { "mysuru saada dosa": 149 },
      { "nilgiri saada dosa": 139 },
      { "palak saada dosa": 139 },
      { "onlion saada dosa": 149 },
      { "schezwan saada dosa": 149 },
      { "paper saada dosa": 149 },
      { "kuera mura saada dosa": 149 },
    ],
    [
      { "rawa saada": 129 },
      { "rawa mysuru dosa": 139 },
      { "rawa nilgiri dosa": 139 },
      { "rawa achari dosa": 139 },
      { "rawa onion dosa": 149 },
      { "rawa schezwan dosa": 149 },
      { "rawa udupi dosa": 149 },
    ],
    [
      { "spirg dosa": 199 },
      { "corn dosa": 199 },
      { "tiraga dosa": 209 },
      { "specail d/s dosa": 209 },
      { "family dosa ( 4 ft long) ": 600 },
    ],
  ];

  const Tilte = ["Vadai&upma", "Classic", "Premium", "Supreme", "Signature"];

  return (
    <div className={style.Container} id="Menu">
      <div className={style.TitleContainer}>
        <p className={style.TitleOne}>Find About</p>
        <p className={style.TitleTwo}>Our Menu</p>
      </div>

      <div className={style.Header}>
        {Tilte.map((item, index) => {
          return (
            <p
              className={activeIndex === index ? style.active : style.One}
              key={index}
              onClick={() => chageTitlePrice(index)}
            >
              {item}
            </p>
          );
        })}
      </div>

      <div className={style.secondContainer}>
        <div className={style.DescContainer}>
          {MenuPrice[titleprice].map((item, index) => {
            const key = Object.keys(item)[0];
            const value = Object.values(item)[0];
            return (
              <MenuTitlePrice Title={key} Price={value} key={`hello${index}`} />
            );
          })}
        </div>

        <div className={style.imageContainer}>
          <img src={MenuImage} alt="" className={style.image} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
