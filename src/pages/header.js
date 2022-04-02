import React from "react";
import "./header.styl";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        {/* Logo */}
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineFirst">Hello Guest</span>
          <span className="header__optionLineSecond">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineFirst">Returns</span>
          <span className="header__optionLineSecond">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineFirst">Hello Guest</span>
          <span className="header__optionLineSecond">Sign In</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineSecond header__basketCount">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
