import React from "react";
// import style from "./SecondSlide.module.scss";
import SecondSlide1 from "../../../Image/SecondSlide1.png";

import SecondSlideComp from "../SecondSlideComp/SecondSlideComp";

const SecondSlide = () => {
  return (
    <div>
      <SecondSlideComp
        image={SecondSlide1}
        Desc1={
          " Dosawala is the best South Indian restaurant brand that has more than a decade of experience in serving authentic and contemporary delicacies of South Indian cuisine. We are established to breathe a new life into the traditional"
        }
        Desc2={
          "South Indian cuisine and present it to the world in a new light. At   Dosawala street, we endeavour to cater a unique menu to food conscious   customers by modernising traditional south"
        }
        Title={"Our Story"}
        top={true}
        link
      />
    </div>
  );
};

export default SecondSlide;
