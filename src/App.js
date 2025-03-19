import React, { useState } from "react";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} />
      <div className={`main-content ${sidebarOpen ? "sidebar-visible" : ""}`}>
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="content">
          <h1>Welcome to Dashboard</h1>
          <p>This is your main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
