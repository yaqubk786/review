import React from "react";
import "../App.css";

const SideBar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-content">
        <h2>HTML Tutorial</h2>
        <ul>
          {[
            "HTML HOME",
            "HTML Introduction",
            "HTML Editors",
            "HTML Basic",
            "HTML Elements",
            "HTML Attributes",
            "HTML Headings",
            "HTML Paragraphs",
            "HTML Styles",
            "HTML Formatting",
            "HTML Quotations",
            "HTML Comments",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
