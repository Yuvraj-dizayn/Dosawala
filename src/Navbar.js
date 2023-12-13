import React from "react";
import Client_icon from "./Image/Client_Icon.png";
import DashBoard_Icon from "./Image/DashBoard_Icon.png";
import Folder_Icon from "./Image/Folder_Icon.png";
import Timer_Icon from "./Image/Timer_Icon.jpg";
import Invoices_Icon from "./Image/Invoices_Icon.jpg";
import Contract_Icon from "./Image/Contract_Icon.png";
import "./Navbar.css";
import IconsWithTitle from "./IconsWithTitle";
import Service from "./Image/Service_Icon.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1 className="Navbar_Main_Title">Workvio</h1>
      <IconsWithTitle image={DashBoard_Icon} Title={"DashBoard"} />
      <IconsWithTitle image={Client_icon} Title={"Clients"} />
      <IconsWithTitle image={Folder_Icon} Title={"Projects"} />
      <IconsWithTitle image={Timer_Icon} Title={"Timer Sheets"} />
      <h1 className="Navbar_Second_Title">tools</h1>
      <IconsWithTitle image={Invoices_Icon} Title={"Invoices"} />
      <IconsWithTitle image={Contract_Icon} Title={"Contract"} />
      <IconsWithTitle image={Service} Title={"Services"} />
    </div>
  );
};

export default Navbar;
