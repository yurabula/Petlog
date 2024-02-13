import React from "react";
import "./FooterReg.scss";
import logo from "../../images/logo.png";
import instagram from "../../images/instagramLogo.png";
import facebook from "../../images/facebookLogo.png";
import googleOne from "../../images/googleOneLogo.png";

const FooterReg = () => {
  return (
    <footer className="footer">
      <div className="logosContainer">
        <img src={logo} className="logo"></img>
        <img src={instagram} alt="" className="socialNetworksLogo" />
        <img src={facebook} alt="" className="socialNetworksLogo" />
        <img src={googleOne} alt="" className="socialNetworksLogo" />
      </div>

      <p>&copy;All rights reserved</p>
    </footer>
  );
};

export default FooterReg;
