import React from "react";
import FirstSlide from "../FirstSlide/FirstSlide";
import SecondSlide from "../SecondSlide/SecondSlide.";
import ThirdSlide from "../ThirdSlide/ThirdSlide";
import Menu from "../Menu/Menu";
import SecondSlideComp from "../SecondSlideComp/SecondSlideComp";
import Four from "../Four/Four";
import SlickSlider from "../SlickSlider/SlickSlider";
import Map from "../../Map/Map";
import SecondSlide2 from "../../../Image/SecondSlide2.png";
import Map_Image from "../../../Image/Map_Image.jpeg";
const HomeComp = () => {
  return (
    <div>
      <FirstSlide />
      <SecondSlide /> <ThirdSlide />
      <Menu />
      <SecondSlideComp
        style={{ backgroundColor: "#fcfbef" }}
        type
        image={SecondSlide2}
        Title={"A Winning Franchise Team"}
        Desc1={
          "Dosawala strives to provide its customers, the healthiest and wholesome meal at a very affordable prices and to generate prots for the benet of the franchise in a short duration of time. Dosawala dedicate to ensure the success of our franchisee associates by focussing and providing exclusive support and service on committed environment"
        }
        Desc2={
          "To spread the product across the globe through our chain of retail outlets. Our brand chain special taste makers and ingredients will spread a standard avor of taste all over the country"
        }
      />{" "}
      <Four />
      <SlickSlider />
      <Map image={Map_Image} />
    </div>
  );
};

export default HomeComp;
