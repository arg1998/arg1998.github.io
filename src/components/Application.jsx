import { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Application = ({ children, currentRoute, pageTitle, pagePreviewData = {} }) => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (!isSidebarOpen) {
      sidebarRef?.current.classList.remove("show-sidebar");
      contentRef?.current.classList.remove("hide-content");
      iconRef?.current.classList.remove("bi-x");
      iconRef?.current.classList.add("bi-list");
      document.body.style.overflow = "auto";
      document.body.style.overflowY = "scroll"; 
    } else {
      sidebarRef?.current.classList.add("show-sidebar");
      contentRef?.current.classList.add("hide-content");
      iconRef?.current.classList.add("bi-x");
      iconRef?.current.classList.remove("bi-list");
      document.body.style.overflow = "hidden";
      document.body.style.overflowY = "hidden"; 
    }
  }, [isSidebarOpen])


  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);

  }

  let menuButtonShakeAnimation = ""
  if (currentRoute == "/" || currentRoute == "/home") {
    menuButtonShakeAnimation = "shake-once"
  }

  return (
    <>
      <Header title={pageTitle ? pageTitle : "ARGOSTA"} pagePreviewData={pagePreviewData} />
      {/* <div className="background-image">
        <img src="/assets/images/bg-dark.png" alt="Background" />
      </div> */}

      <div className="main-container" style={{ overflow: "hidden" }}>
        <div id="sidebar-container" ref={sidebarRef}>
          <Sidebar currentRoute={currentRoute} />
        </div>

        <div id="content-container" ref={contentRef}>
          <div
            id="sidebar-toggle"
            className={`menu-button  ${menuButtonShakeAnimation}`}
            onClick={toggleSidebar}
          >
            <i id="sidebar-toggle-icon" className="bi bi-list" ref={iconRef} />
          </div>
          <div id="content-area" >{children}</div>
        </div>
      </div>
    </>
  );
};

export default Application;
