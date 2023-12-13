import React from "react";
import style from "./Icon_Desc.module.scss";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Twitter from "../Icons/Twitter";
import Call from "../Icons/Call";
import IconWIthTitle from "../IconWithTitle/IconWIthTitle";
import RightIcon from "../Icons/RIght_Icon";

const IconDesc = (props) => {
  return (
    <div className={style.Container}>
      <div className={style.DescOne}>
        <p className={style.Main_Title}>User Link</p>
        <IconWIthTitle Title={"Our Story"} Icon={<RightIcon />} />
        <IconWIthTitle Title={"Download Menu"} Icon={<RightIcon />} />
        <IconWIthTitle Title={"Vison And Growtth"} Icon={<RightIcon />} />
        <IconWIthTitle Title={"Franchies"} Icon={<RightIcon />} />
      </div>
      <div className={style.DescTwo}>
        <p className={style.Main_Title}>Social Media</p>
        <IconWIthTitle Title={"Facebook"} Icon={<Facebook />} />
        <IconWIthTitle Title={"Twitter"} Icon={<Twitter />} />
        <IconWIthTitle Title={"Instagram"} Icon={<Instagram />} />
        <IconWIthTitle Title={"Call"} Icon={<Call />} />
      </div>
    </div>
  );
};

export default IconDesc;
