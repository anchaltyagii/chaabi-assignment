import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { icon } from "../../Assets/index";
import { SideBarData } from "./SideBarData";
import "./SideBar.scss";
import SideMenu from "./SideMenu";

const SideBar = () => {
  const { chabhi_icon } = icon;

  return (
    <>
      <div className="sidebar-wrapper">
        <div className="sidebar-logo-wrapper">
          <img
            src={chabhi_icon}
            alt="chabhi_sidebar_icon"
            width="100%"
            height="100%"
          />
        </div>
        <div className="sidebar-content">
          {SideBarData.map((item, index) => {
            return <SideMenu item={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
