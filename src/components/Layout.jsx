import Sidebar from "../components/Sidebar";
import SEO from "../components/SEO";

const Layout = ({ children, currentRoute }) => {
  return (
    <>
      <SEO title={"ARGOSTA"} />
      <div className="background-image">
        <img src="/assets/images/bg-dark.png" alt="Background" />
      </div>

      <div className="main-container">
        <Sidebar currentRoute={currentRoute} />
        <div id="content-container">{children}</div>
      </div>
    </>
  );
};

export default Layout;
