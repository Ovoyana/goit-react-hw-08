import { NavLink } from 'react-router-dom';
import css from "./AuthNav.module.css";

export default function AuthNav({ buildLinkClass }) {
  return (
    <div className={css.link_wrapper}>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
}