import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  function handleLogout() {
    dispatch(logOut());
  }
  return (
    <div className={css.box}>
      <p className={css.header_text}>Welcome, {user.name} </p>
      <button className={css.btn} type="submit" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
