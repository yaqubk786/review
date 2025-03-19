import React from "react";
import "../App.css";
import LeftBox from "./LeftBox";

const SideBar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-content">
       <LeftBox/>
      </div>
    </div>
  );
};

export default SideBar;
