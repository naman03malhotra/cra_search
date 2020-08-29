import React from "react";

import SearchBar from "./search_bar";
import "./nav_bar.scss";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="logo-container">My logo here</div>
      <SearchBar />
    </div>
  );
}

export default NavBar;
