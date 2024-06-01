import "../App/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations.js";
import Layout from "../Layout/Layout.jsx";
import PrivateRoute from "../../routes/PrivateRoute/PrivateRoute.jsx";
import RestrictedRoute from "../../routes/RestrictedRoute/RestrictedRoute.jsx";
import { selectIsRefreshing } from "../../redux/auth/selectors.js";
import { Vortex } from 'react-loader-spinner';

export default function App() {

  const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
  const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
  const RegisterPage = lazy(() =>
    import('../../pages/RegistrationPage/RegistrationPage.jsx')
  );
  const ContactsPage = lazy(() =>
    import('../../pages/ContactsPage/ContactsPage')
  );


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
       <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/users/signup"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo={'/'} />
            }
          />
          <Route
            path="/users/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo={'/contacts'}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                component={<ContactsPage />}
                redirectTo={'/users/login'}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
    </>
  );
}

