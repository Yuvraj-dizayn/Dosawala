import React from "react";
import "./ImageWithDesc.scss";

const ImageWithDesc = (props) => {
  const { type } = props;

  return type ? (
    <div
      id="Grouth"
      className="Main_Container"
      style={{
        marginTop: props.Margin_Top ? "9.83%" : "9.80%",
        marginBottom: props.Margin_Top ? "12.22%" : "9%",
      }}
      styles={props.style}
    >
      <div className="Main_Container_left_Hide_Div">
        {props.Margin_Top && (
          <h3 className="Main_Container_Right_Title">Know us</h3>
        )}
        <h2 className="Main_Container_Right_Main_Title">{props.Title}</h2>
      </div>
      <div className="Main_Container_left">
        <img src={props.image} alt="" className="Main_Container_Image" />
      </div>

      <div className="Main_Container_Right">
        {props.Margin_Top ? (
          <h3 className="Main_Container_Right_Title">Know us</h3>
        ) : null}
        <h2 className="Main_Container_Right_Main_Title">{props.Title}</h2>
        <div className="Main_Container_Right_Desc">
          <p className="Main_Container_Right_Desc_Letter">{props.Desc1}</p>
          <p className="Main_Container_Right_Desc_Letter">{props.Desc2}</p>
          <p className="Main_Container_Right_Desc_Letter">{props.Desc3}</p>
          <p className="Main_Container_Right_Desc_Letter">{props.Desc4}</p>
          <p className="Main_Container_Right_Desc_Letter">{props.Desc5}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="Main_Container1" style={props.style} id="OurStory">
      <div className="Main_Container_Right">
        <h2 className="Main_Container_Right_Main_Title">{props.Title}</h2>

        <div className="Main_Container_Right_Desc">
          <p className="Main_Container_Right_Desc_Letter  Main">
            {props.Desc1}
          </p>
          <p className="Main_Container_Right_Desc_Letter Main">{props.Desc2}</p>
        </div>
      </div>
      <div className="Main_Container_left">
        <img src={props.image} alt="" className="Main_Container_Image" />
      </div>
      <div className="Main_Container_Right_Hide_Div">
        <h2 className="Main_Container_Right_Main_Title">{props.Title}</h2>
      </div>
    </div>
  );
};

export default ImageWithDesc;
