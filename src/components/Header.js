import React from "react";
import "../App.css";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="header">
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <h1>Responsive Sidebar</h1>
    </div>
  );
};

export default Header;
