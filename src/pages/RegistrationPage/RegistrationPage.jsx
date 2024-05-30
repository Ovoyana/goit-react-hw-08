import { useDispatch } from "react-redux";
import AuthForm from "../../components/AuthForm/AuthForm.jsx";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations.js";
import { useNavigate } from "react-router-dom";

export default function RegistrationPage ()  {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  function handleSubmit(values, action) {
    console.log(values);
    dispatch(register(values));
    navigate("/contacts");
    action.resetForm();
  }

  const scheme = Yup.object().shape({
    name: Yup.string()
      .min(4, "Too short name, write more 4 symbols")
      .required("Required field - name"),
    email: Yup.string()
      .email("Invalid email!")
      .required("Required field - email"),
    password: Yup.string()
      .min(8, "Too short password, write more 8 symbols")
      .required("Required field - password"),
  });
  const title = "Register";
  return (
    <AuthForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      scheme={scheme}
      type="register"
      title={title}
    />
  );
};

