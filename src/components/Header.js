import React from "react";
import "../App.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import TopBar from "./TopBar";
const Header = ({ toggleSidebar, sidebarOpen }) => {
  return (
    // <div className="header">
    //   <button className="menu-btn" onClick={toggleSidebar}>
    //     ☰
    //   </button>
    // </div>
    <header className="header">
      <button className="toggle-btn" onClick={toggleSidebar}>
        {sidebarOpen ? (
          <>
            <FaArrowLeft /> Hide
          </>
        ) : (
          <>
            {" "}
            <FaArrowRight /> Show{" "}
          </>
        )}
        {/* <FaArrowRight />
        Show  */}
      </button>
      <TopBar />
    </header>
  );
};

export default Header;
