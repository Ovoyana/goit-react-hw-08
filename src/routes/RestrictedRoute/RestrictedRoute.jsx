import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSlise";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute ({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return children;
  }
  return <Navigate to="/contacts" />;
};

