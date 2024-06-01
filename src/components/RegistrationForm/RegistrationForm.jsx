import { Formik, Form, Field } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';


export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => toast.success('Success!'))
      .catch(() => toast.error('Invalid data. Please check!'));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.input} type="text" name="name"  placeholder="Enter your name" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email"  placeholder="Enter your email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" placeholder="Enter your password" />
        </label>
        <button className={css.btn} type="submit">
           Registration
          </button>
      </Form>
    </Formik>
  );
}