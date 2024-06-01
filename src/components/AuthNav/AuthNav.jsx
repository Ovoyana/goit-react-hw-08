import { NavLink } from 'react-router-dom';
import css from "./AuthNav.module.css";


export default function AuthNav() {
  return (
    <div className={css.link_wrapper}>
      <NavLink className={css.link} to="/users/signup">
        Register
      </NavLink>
      <NavLink className={css.link} to="/users/login">
        Log In
      </NavLink>
    </div>
  );
}