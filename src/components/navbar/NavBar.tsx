import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../constants/routes";

const NavBar = () => {
  const { pathname: currentRoute } = useLocation();
  return (
    <div className="nav-container">
      <div className="nav-items">
        {routes.map(({ route, name }) => (
          <Link to={route} className={`nav-item ${currentRoute === route ? "nav-item-active" : ""}`}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
