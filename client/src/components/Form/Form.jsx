import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputGroup from "../InputGroup";
import "./Form.css";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "./../../store/apiCalls/auth.js";
import useToast from "../../hooks/useToast";
import { resetError, setError } from "../../store/slices/authSlice";

const Form = ({ onTypeChanged, elements, buttons, otherButtons }) => {
  const [type, setType] = useState("login");
  const [formData, setFormData] = useState({});
  const { Toast, showErrorToast, showSuccessToast } = useToast();
  const { isLoggedIn, loading, error, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const handleChange = (t) => {
    setType(t);
    onTypeChanged(t);
    setFormData({});
    dispatch(resetError());
  };

  const handleInputOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.keys(formData).length === 0 ||
      formData?.email?.trim() === "" ||
      formData?.password?.trim() === ""
    ) {
      dispatch(setError("fill all fields!"));
      return;
    }

    if (type !== "login") {
      if (formData?.name?.trim() === "") {
        dispatch(setError("fill all fields!"));

        return;
      }
    }

    console.log("submitting...");
    if (type === "login") {
      dispatch(login(formData));
    } else
      dispatch(register(formData)).then((err) => {
        console.log(err);
        if (err.type === "auth/register/fulfilled") {
          setType("login");
          onTypeChanged("login");
        }
      });
    dispatch(resetError());
  };

  useEffect(() => {
    showErrorToast(error);
  }, [error]);

  return (
    <form
      autoComplete="off"
      className="flex-column justify-center login-form form"
    >
      <div className="form-logo">BledBay</div>
      <div className="form-title">
        {type === "login" ? "Login" : "Register"}
      </div>
      {type === "login" ? (
        <div className="no-account" onClick={() => handleChange("register")}>
          you don't have an account? <span>register here</span>.
        </div>
      ) : (
        <div className="no-account" onClick={() => handleChange("login")}>
          you already have an account? <span>log in here</span>.
        </div>
      )}
      {elements?.map((e, i) => (
        <InputGroup key={i} input={e} onChange={handleInputOnChange} />
      ))}
      {buttons?.map((b, i) => (
        <button
          disabled={loading}
          key={i}
          className="form-btn"
          style={{
            backgroundColor: b.bgcolor,
            color: b.color,
            width: b.width,
            alignSelf: "flex-end",
          }}
          onClick={handleSubmit}
        >
          {b.name}
        </button>
      ))}{" "}
      {otherButtons && (
        <p className="hr">
          {" "}
          or {type === "login" ? "sign in " : "sign up "} with
        </p>
      )}
      {otherButtons?.map((b, i) => (
        <button
          key={i}
          className="form-btn"
          style={{
            backgroundColor: "var(--white)",
          }}
        >
          {b === "google" && <GoogleIcon className="btn-icon" />}
          {b}
        </button>
      ))}
      <Toast />
    </form>
  );
};

export default Form;
