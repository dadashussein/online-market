import React from "react";
import css from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { HiLocationMarker, HiUser } from "react-icons/hi";
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={logo} alt="logo" />
          <span>amazon</span>
        </div>

        <div className={css.detail}>
          <span className={css.title}>Contact US</span>
          <span className={css.info}> Azadliq Ave</span>
        </div>

        <div className={css.detail}>
          <span className={css.title}>Account</span>
          <span className={css.info}>Sign In</span>
        </div>

        <div className={css.detail}>
          <span className={css.title}>Help</span>
          <span className={css.info}>Help Center</span>
        </div>

        <div className={css.detail}>
          <span className={css.title}>Social</span>
          <span className={css.info}>Help Center</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
