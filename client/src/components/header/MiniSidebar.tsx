import { NavLink } from "react-router-dom";
import "./MiniSidebar.css";

const MiniSidebar = ({
  setMiniMenu,
}: {
  setMiniMenu: (value: boolean) => void;
}) => {
  return (
    <ul className="header__mini">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          onClick={() => setMiniMenu(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          onClick={() => setMiniMenu(false)}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          onClick={() => setMiniMenu(false)}
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          onClick={() => setMiniMenu(false)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          onClick={() => setMiniMenu(false)}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/create"
          style={{ color: "#00A36C", fontWeight: "bold" }}
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          onClick={() => setMiniMenu(false)}
        >
          Create
        </NavLink>
      </li>
    </ul>
  );
};

export default MiniSidebar;
