import React, { useState } from "react";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} />
      <div className={`main-content ${sidebarOpen ? "sidebar-visible" : ""}`}>
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen}/>
        <div className="content">
          <Body/>
        </div>
      </div>
    </div>
  );
};

export default App;
