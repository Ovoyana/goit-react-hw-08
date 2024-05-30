import { Field, Form, Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import css from "./AuthForm.module.css";

export default function AuthForm  ({ initialValues, onSubmit, scheme, type, title })  {
  return (
    <div className={css.formik}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={scheme}
      >
        <Form className={css.form}>
          {type === "register" && (
            <label className={css.word}>
              Name
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage
                className={css.error_message}
                component="div"
                name="name"
              />
            </label>
          )}
          <label className={css.word}>
            Email
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage
              className={css.error_message}
              component="div"
              name="email"
            />
          </label>
          <label className={css.word}>
            Password
            <Field
              className={css.input}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={css.error_message}
              component="div"
              name="password"
            />
          </label>
          <button className={css.btn} type="submit">
            {title}
          </button>
          {type === "register" ? (
            <div className={css.text_wrapper}>
              <p className={css.form_text}> Have you got an account?</p>
              <Link className={css.link} to="/login">
                Login
              </Link>
            </div>
          ) : (
            <div className={css.text_wrapper}>
              <p className={css.form_text}>You haven't got an account</p>
              <Link className={css.link} to="/register">
                Register
              </Link>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};