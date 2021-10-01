import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <img className="logo" src={logo} alt="" srcSet="" />
      <nav className="navBar">
          <a href="">Shop</a>
          <a href="">Order Review</a>
          <a href="">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
