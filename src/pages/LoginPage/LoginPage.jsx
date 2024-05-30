import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations.js";
import AuthForm from "../../components/AuthForm/AuthForm.jsx";
import { useNavigate } from "react-router-dom";



export default function LoginPage  ()  {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  function handleSubmit(values, action) {
    console.log(values);
    dispatch(login(values));
    navigate("/contacts");
    action.resetForm();
  }

  const scheme = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email!")
      .required("Required field - email"),
    password: Yup.string()
      .min(8, "Too short password, write more 8 symbols")
      .required("Required field - password"),
  });
  return (
    <AuthForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      scheme={scheme}
      type="login"
      title="Login"
    />
  );
};

