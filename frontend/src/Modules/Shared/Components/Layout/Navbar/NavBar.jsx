import { Link, NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import SideBar, { SideBarToggler } from "./SideBar";
import routes from "src/Modules/Shared/Utils/routes";
import { NAVBAR } from "src/Modules/Shared/Utils/Consts";

export default function NavBar() {
  return (
    <>
      <NavBarContainer>
        <SideBarToggler />
        <NavBarToggler />
        <NavBarLinksContainer>
          <NavBarStartLinks />
          <NavBarEndLinks />
        </NavBarLinksContainer>
      </NavBarContainer>
      <SideBar />
    </>
  );
}

function NavBarContainer({ children }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
      <div className="container-fluid">{children}</div>
    </nav>
  );
}
function NavBarToggler() {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

function NavBarLinksContainer({ children }) {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">{children[0]}</ul>
      <div className="d-flex">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">{children[1]}</ul>
      </div>
    </div>
  );
}

function NavBarStartLinks() {
  return (
    <>
      {routes
        .filter((route) => route.dist.includes(NAVBAR) && route.align === "start")
        .sort((a, b) => {
          if (a.order > b.order) return 1; // if return < 0 => a.b  ---  return > 0 => b.a
          else return -1;
        })
        .map((route, index) => {
          return (
            <li key={index} className="nav-item">
              <NavLink className="nav-link" to={route.path}>
                {route.name}
              </NavLink>
            </li>
          );
        })}
    </>
  );
}
function NavBarEndLinks() {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link me-1" to="/">
          <span className="text-light me-1">
            <FaUserAlt />
          </span>
          Hello, user
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/Logout">
          <span className="text-light me-1">
            <FiLogOut />
          </span>
          Logout
        </Link>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/Login">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Login" className="nav-link">
          Register
        </NavLink>
      </li>
    </>
  );
}
