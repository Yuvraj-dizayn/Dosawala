import React from "react";
import style from "./IconWIthTitle.module.scss";
const IconWIthTitle = (props) => {
  return props.NextPage ? (
    <a href={props.Link} className={style.Title}>
      {props.Icon}
      <p className={style.desc}>{props.Title}</p>
    </a>
  ) : (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={props.Link} target="_blank" className={style.Title}>
      {props.Icon}
      <p className={style.desc}>{props.Title}</p>
    </a>
  );
};

export default IconWIthTitle;
