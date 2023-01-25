import React from "react";
import css from "./header.module.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="logo" />
        <span>amazon</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>Eng</li>
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="searching" />
        <CgShoppingBag className={css.card} />
      </div>
    </div>
  );
};

export default Header;
