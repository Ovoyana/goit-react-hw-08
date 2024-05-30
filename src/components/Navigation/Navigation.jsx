import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/authSlise.js";
import AuthNav from "../AuthNav/AuthNav.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.nav_link, isActive && css.active);
  };

export default function Navigation ()  {
   const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {!isLoggedIn ? (
        <AuthNav buildLinkClass={buildLinkClass} />
      ) : (
        <UserMenu buildLinkClass={buildLinkClass} />
      )}
    </header>
  );
};

