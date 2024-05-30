import "../App/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import { refreshUser } from "../../redux/auth/operations.js";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import ContactsPage from "../../pages/ContactsPage/ContactsPage.jsx";
import Layout from "../Layout/Layout.jsx";
import PrivateRoute from "../../routes/PrivateRoute/PrivateRoute.jsx";
import RestrictedRoute from "../../routes/RestrictedRoute/RestrictedRoute.jsx";
import { selectIsRefreshing } from "../../redux/auth/authSlise.js";
import { Vortex } from 'react-loader-spinner';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>
       <Vortex
  visible={true}
  height="150"
  width="150"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />
    </div>
  ) : (
    <>
      <Routes>
        <Route to="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

