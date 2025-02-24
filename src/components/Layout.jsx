import { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import SEO from "../components/SEO";

const Layout = ({ children, currentRoute, pageTitle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = useRef(null);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);

    if (sidebarRef.current && contentRef.current && iconRef.current) {
      if (!isSidebarOpen) {
        sidebarRef.current.classList.add("show-sidebar");
        contentRef.current.classList.add("hide-content");
        iconRef.current.classList.add("bi-x");
        iconRef.current.classList.remove("bi-list");
      } else {
        sidebarRef.current.classList.remove("show-sidebar");
        contentRef.current.classList.remove("hide-content");
        iconRef.current.classList.remove("bi-x");
        iconRef.current.classList.add("bi-list");
      }
    }
  };

  return (
    <>
      <SEO title={pageTitle ? pageTitle : "ARGOSTA"} />
      <div className="background-image">
        <img src="/assets/images/bg-dark.png" alt="Background" />
      </div>

      <div className="main-container">
        <div id="sidebar-container" ref={sidebarRef}>
          <Sidebar currentRoute={currentRoute} />
        </div>

        <div id="content-container" ref={contentRef}>
          <div
            id="sidebar-toggle"
            className="menu-button"
            onClick={toggleSidebar}
          >
            <i id="sidebar-toggle-icon" className="bi bi-list" ref={iconRef} />
          </div>
          <div id="content-area">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
