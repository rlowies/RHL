import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-items">
        <Link to="/home" className="nav-item">
          Home
        </Link>
        <Link to="/projects" className="nav-item">
          Projects
        </Link>
        <Link to="/blog" className="nav-item">
          Blog
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
