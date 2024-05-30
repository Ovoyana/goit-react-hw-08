import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from "../../redux/contacts/operations";
import css from './ContactForm.module.css';





const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;
const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Not enough characters!")
      .max(50, "Too many characters")
      .required("Is required!!!"),
      number: Yup.string()
      .matches(phoneRegExp, "Invalid phone number")
      .required("Is required!!!"),
  });
  const initialValues = {
    name: "",
    number: "",
  };

  export default function ContactForm () {
    const dispatch = useDispatch();
    const nameId = useId();
    const numberId = useId();

    const handleSubmit = (values, action) => {
        dispatch(addContact(values));
      action.resetForm();
    };
      
  
  return (
    <Formik
    initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form  className={css.form}>
        <div className={css.field}>
          <label className={css.text} htmlFor={nameId}>Name</label>
          <Field className={css.input} type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.field}>
          <label className={css.text} htmlFor={numberId}>Number</label>
          <Field className={css.input} type="text" name="number" id={numberId} />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
