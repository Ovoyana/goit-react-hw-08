import { Formik, Form, Field } from 'formik';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import toast from 'react-hot-toast';


export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => toast.success('Success!'))
      .catch(() => toast.error('Invalid data. Please check!'));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" placeholder="Enter your email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" placeholder="Enter your password" />
        </label>
        <button className={css.btn} type="submit">
            Login
          </button>
      </Form>
    </Formik>
  );
}