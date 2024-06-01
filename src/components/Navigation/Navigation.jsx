import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.nav_link, isActive && css.active);
  };

export default function Navigation ()  {
   const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
  <NavLink className={buildLinkClass} to="/contacts">
   Contacts
  </NavLink>
)}
    
    </nav>
  );
}

