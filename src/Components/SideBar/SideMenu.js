import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./SideBar.scss";

const SideMenu = ({ item, key }) => {
  const location = useLocation();

  return (
    <>
      <div className="margin-right">
        <Link
          to={item.path}
          key={key}
          className={
            location.pathname === item.path
              ? "sidebar-pills active-nav"
              : "sidebar-pills"
          }
        >
          <div className="icon-wrapper">
            <img
              src={
                location.pathname === item.path
                  ? `${item.active_icon}`
                  : `${item.icon}`
              }
              alt="icon"
              title="icon"
              height="100%"
              width="100%"
            />
          </div>
          <div className="heading-wrapper">{item.title}</div>
        </Link>
      </div>
    </>
  );
};

export default SideMenu;
