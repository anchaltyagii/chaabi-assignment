import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mainheader-container">
        {/* <div className="semi-circle"></div> */}
        <div className="mobile-display-none">
          <h3>Hello, Puneet Dhiman </h3>
          <h6>Following is your organization’s performance summary</h6>
        </div>
      </div>
    </>
  );
};

export default Header;
