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
        <IconWIthTitle
          Title={"Our Story"}
          Icon={<RightIcon />}
          Link={"/about#OurStory"}
          NextPage
        />
        <IconWIthTitle
          Title={"Download Menu"}
          Icon={<RightIcon />}
          Link={"#Menu"}
          NextPage
        />
        <IconWIthTitle
          Title={"Vison And Growth"}
          Icon={<RightIcon />}
          Link={"/about#Grouth"}
          NextPage
        />
        <IconWIthTitle
          Title={"Franchies"}
          Icon={<RightIcon />}
          Link={"#Franchise"}
          NextPage
        />
      </div>
      <div className={style.DescTwo}>
        <p className={style.Main_Title}>Social Media</p>
        <IconWIthTitle
          Title={"Facebook"}
          Icon={<Facebook />}
          Link={"https://www.facebook.com/dosawalaindia/"}
        />
        <IconWIthTitle
          Title={"Twitter"}
          Icon={<Twitter />}
          Link={
            "https://twitter.com/i/flow/login?redirect_after_login=%2FDosawala1"
          }
        />
        <IconWIthTitle
          Title={"Instagram"}
          Icon={<Instagram />}
          Link={"https://www.instagram.com/dosawala_official/"}
        />
        <IconWIthTitle Title={"Call"} Icon={<Call />} />
      </div>
    </div>
  );
};

export default IconDesc;
