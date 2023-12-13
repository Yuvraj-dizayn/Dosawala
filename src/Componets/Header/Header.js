import React, { useState } from "react";
import style from "./Header.module.scss";
import DosawalalIcon from "../Icons/DosawalaIcon";
import ListIcon from "../Icons/Listicon";
import CrossIcon from "../Icons/Crossicon";

const Header = () => {
  const [open, setOpen] = useState(true);
  const click = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={style.Header}>
        <a href="/" className={style.Icon}>
          <DosawalalIcon />
        </a>

        <div className={style.Desc}>
          <p className={style.One}>
            <a href="/about">About us </a>
          </p>
          <p className={style.Two}>
            <a href="#Franchise">Franchise</a>
          </p>
          <p className={style.Three}>
            <a href="#Menu">Menu</a>
          </p>
          <p className={style.Four}>
            <a href="#Contact">Contact</a>
          </p>
        </div>

        <div className={style.ListIcon} onClick={click}>
          {open ? <ListIcon /> : <CrossIcon />}
        </div>

        {!open && (
          <div className={style.Hide_Div}>
            <div className={style.main}>
              <p className={style.One}>
                <a href="/about"> About US</a>
              </p>
              <p className={style.Two}>
                <a href="/Franchise">Franchise</a>
              </p>
              <p className={style.Three}>
                <a href="#Menu">Menu</a>
              </p>
              <p className={style.Four}>Contact</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
