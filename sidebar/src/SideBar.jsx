import { useState } from "react";
import { SideBarData } from "./SideBarData";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sidebar-container ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-heading">
        <button className="toggle-btn" onClick={handleToggle}>
          <div className={`arrow ${isOpen ? "left" : "right"}`}></div>
        </button>
        <div className="logo">
          <h2>My-App</h2>
        </div>
      </div>

      <nav className="nav-menu">
        <ul>
          {SideBarData.map((item, index) => (
            <li key={index}>
              <a href={item.path}>
                {item.icon} {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
