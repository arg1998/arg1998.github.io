import Link from "next/link";
import { SvgIconCanadaFalg } from "../components/SvgIcons"

const Sidebar = ({ currentRoute }) => {
  const pages = [
    { path: "/", label: "Home", icon: "bi-house" },
    { path: "/about", label: "About Me", icon: "bi-person" },
    { path: "/projects", label: "Projects", icon: "bi-braces" },
    { path: "/blog", label: "Blog", icon: "bi-pencil" },
    { path: "/resume", label: "Resume", icon: "bi-file-earmark-person" },
    { path: "/contact", label: "Contact Me", icon: "bi-envelope" },
  ];

  const profileData = {
    logo: "/assets/images/my-profile-img.jpg",
    siteName: "ARGOSTA",
    siteDescription: "Software Engineer",
    siteDegree: "M.Sc. Computer Science",
  };

  const socialLinks = {
    twitter: "https://twitter.com/argostapala",
    linkedin: "https://linkedin.com/in/arg1998",
    github: "https://github.com/arg1998",
    youtube: "https://youtube.com/@argostapala",
  };

  return (
    <div className="sidebar">
      <div className="personal-info-container">
        {profileData.logo && (
          <div className="profile-img">
            <img
              src={profileData.logo}
              alt={profileData.siteName}
              className="img-fluid rounded-circle"
            />
          </div>
        )}
        <div className="personal-info">
          <h1 className="sitename">{profileData.siteName}<SvgIconCanadaFalg className="flag-mobile" styles={{display:'none'}} /></h1> 
          <h3 className="SiteDescription">{profileData.siteDescription}</h3>
          <p className="degree">{profileData.siteDegree}</p>
          <SvgIconCanadaFalg className="flag" />
        </div>

      </div>

      {/* Navigation Menu */}
      <nav id="navmenu" className="navmenu">
        <ul>
          {pages.map((item) => (
            <li
              key={item.path}
              className={item.path == `/${currentRoute?.split("/")[1]}` ? "active-menu" : null}
            >
              <Link href={item.path}>
                <i className={`navicon ${item.icon}`}></i>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="social-links text-center">
        {socialLinks.twitter && (
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="bi bi-twitter-x"></i>
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        )}
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i className="bi bi-github"></i>
          </a>
        )}
        {socialLinks.youtube && (
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <i className="bi bi-youtube"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
