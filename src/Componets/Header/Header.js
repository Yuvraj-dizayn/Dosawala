import React, { useState } from "react";
import style from "./Header.module.scss";
import DosawalalIcon from "../Icons/DosawalaIcon";
import ListIcon from "../Icons/Listicon";
import CrossIcon from "../Icons/Crossicon";
import ImageWithDescMain from "../../ImageWithDescMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(true);
  const click = () => {
    setOpen(!open);
  };
  return (
    <div className={style.Header}>
      <div className={style.Icon}>
        <DosawalalIcon />
      </div>
      <div className={style.Desc}>
        <p className={style.One}>About US</p>
        <p className={style.Two}>Franchise</p>
        <p className={style.Three}>Menu</p>
        <p className={style.Four}>Contact</p>
        <Router>
          <Routes>
            <Route element={<ImageWithDescMain />} exact path="/about" />
          </Routes>
        </Router>
      </div>
      <div className={style.ListIcon} onClick={click}>
        {open ? <ListIcon /> : <CrossIcon />}
      </div>
      {!open && (
        <div className={style.Hide_Div}>
          <div className={style.main}>
            <p className={style.One}>About US</p>
            <p className={style.Two}>Franchise</p>
            <p className={style.Three}>Menu</p>
            <p className={style.Four}>Contact</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
