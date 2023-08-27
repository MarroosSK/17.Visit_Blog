import { useContext, useState, useRef, useEffect, ChangeEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/searchContext";
import { TiThMenuOutline } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";
import "./Header.css";
import MiniSidebar from "./MiniSidebar";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  //search
  const { searchWord, setSearchWord } = useContext(SearchContext);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
    if (searchWord.length !== 0) {
      navigate("/blogs");
    }
  };
  //mini navbar
  const [miniMenu, setMiniMenu] = useState(false);
  const handleMenuToggle = () => {
    setMiniMenu(!miniMenu);
  };

  //new class in header
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current?.classList.add("header__shrink");
    } else {
      headerRef.current?.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <h2>W H Y B?</h2>
          </div>
          {/* mini menu */}
          <div className="miniMenu" onClick={handleMenuToggle}>
            {miniMenu ? <FaWindowClose /> : <TiThMenuOutline />}
          </div>
          <ul className="header__right">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create"
                style={{ color: "#00A36C", fontWeight: "bold" }}
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Create
              </NavLink>
            </li>
          </ul>
          <div className="header__right-search">
            <input
              type="text"
              placeholder="Search blog..."
              value={searchWord}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      {/* mini menu */}
      {miniMenu ? <MiniSidebar setMiniMenu={setMiniMenu} /> : ""}
    </header>
  );
};

export default Header;
