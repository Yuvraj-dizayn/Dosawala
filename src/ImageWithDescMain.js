import React from "react";
import ImageWithDesc from "./ImageWithDesc";
import Owner from "./Image/Owner.png";
import Second from "./Second";
import LastComp from "./LastComp";
import Email_Icon from "./Image/Email_Icon.png";
import Call_Icon from "./Image/Call_Icon.jpg";
import Map from "./Componets/Map/Map";
import Map_Image from "../src/Image/Map_Image.jpeg";
import Footer from "./Componets/Footer/Footer";
// import DowalaIcon from "./Componets/Icons/DosawalaIcon";
import finalLogo from "./Image/Final.png";
import Cock from "./Image/Cock.png";
import Last from "./Image/Last.png";
import Vector from "./Image/Vector.png";
import mainImage from "./Image/mainImage.png";
import SecondImage from "./Image/2.png";

const ImageWithDescMain = () => {
  return (
    <div id="AboutUS">
      <ImageWithDesc
        type
        Margin_Top
        image={mainImage}
        // style={{ backgroundColor: "#a6ce39" }}
        Title={"About Dosawala"}
        Desc1={
          " Dosawa is the best South Indian restaurant brand that has more than a decade of experience in serving authentic and contemporary delicacies  of South Indian cuisine "
        }
        Desc2={
          "We are established to breathe a new life into the traditional south Indian cuisine and present it to the world in a new light.At Dosawala street, we endeavour to cater a unique menu to food conscious customers by modernising traditional south Indianrecipes into healthier & tastier dishes."
        }
        Desc3={
          " Dosawala unique in its concept has varying franchise based on site availability and expertise in feasibility analytics in the food & beverage industry."
        }
        Desc4={
          "We have designed our menu very cautiously that ensures the authentic taste of the South. Some of the most popular food itemson our menu are Idli, Dosa, Special Chula Dosa Vada, Uthappam,Upma, Rice, and rice."
        }
      />
      <ImageWithDesc
        image={SecondImage}
        Title={"Our Story"}
        Desc1={
          "In a world that is increasingly coming closer, we seek to promote the harmony of Indian culture, cuisine and experience. Celebrating southern dining in all its glory, we use the finest ingredients, often flown in from different parts of South India, to create mouth-watering delicacies for a truly authentic and unforgettable dining experience."
        }
        Desc2={
          "providing the world with a different traditional experience and considering our youth going to Morden era we have created the cuisine and menu to serving authentic and contemporary delicacies South Indian food with our decade of experience."
        }
      />
      <ImageWithDesc
        image={Vector}
        Title={"Growth and Opportunity"}
        type
        Desc1={
          "Dosawala strives to provide its customers, the healthiest and wholesome meal at a very affordable price and to generate profits for the benefit of the franchise in a short duration of time."
        }
        Desc2={
          " Dosawala dedicates to ensure the success of our franchisee associates by focussing and providing exclusive support and service in a committed environment To spread the product across the globe through our chain of retail outlets."
        }
        Desc3={
          " Our brand chain special tastemakers and ingredients will spread a standard flavour of taste all over the country"
        }
        Desc4={
          "We offer you the right opportunity a franchise with The dosawala team will create the immediate advantage of working with a well-established brand."
        }
        Desc5={
          "If you have the spirit of an entrepreneur, the zeal for growth, commitment to building a successful business and the ability to accept new challenges, we offer you the right opportunity."
        }
      />{" "}
      <Second />{" "}
      <ImageWithDesc
        type
        image={Cock}
        Title={"Grow with us"}
        styles={{
          marginTop: "7.97%",
        }}
        Desc1={
          "Dosawala offers some of the best franchise support in the industry. We provide access to a wide range of experts across the country. Strong parent group. Extensive franchise support. The management is experienced. "
        }
        Desc2={
          "An enthusiastic, service-oriented company having high sensitivity towards food service standards and strong casual dining concept acumen Competent group with phenomenal ability to operate a network of the restaurant on Pan Indian scale Strong operational expertise of operating restaurant in the industries Strategic tie-ups with vendors and supplier promising national procurement network Fabulous back -end team with exceptional work experience in F&B category Excellent real estate acquisition ability through strategic tie-ups high profile real estate developers of the county Attractive margins High ROI"
        }
      />{" "}
      <LastComp Email_Image={Email_Icon} Call_Image={Call_Icon} image={Last} />{" "}
      <Map image={Map_Image} />
      <Footer />
    </div>
  );
};

export default ImageWithDescMain;
