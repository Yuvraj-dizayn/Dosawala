import React from "react";
import style from "./IconWIthTitle.module.scss";

const IconWIthTitle = (props) => {
  return (
    <div className={style.Title}>
      {props.Icon}
      <p className={style.desc}>{props.Title}</p>
    </div>
  );
};

export default IconWIthTitle;
