import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Layout.scss";

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="main-wrapper">
      <div>
        <SideBar />
      </div>
      <div className="right-content-wrapper">
        <Header />
        <div className="children-content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
