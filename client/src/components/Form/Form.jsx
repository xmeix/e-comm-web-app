import { useState } from "react";
import InputGroup from "../InputGroup";
import "./Form.css";
import GoogleIcon from "@mui/icons-material/Google";
const Form = ({ onTypeChanged, elements, buttons, otherButtons }) => {
  const [type, setType] = useState("login");

  const handleChange = (t) => {
    setType(t);
    onTypeChanged(t);
  };

  return (
    <form className="flex-column justify-center login-form form">
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
        <InputGroup key={i} input={e} />
      ))}
      {buttons?.map((b, i) => (
        <button
          key={i}
          className="form-btn"
          style={{
            backgroundColor: b.bgcolor,
            color: b.color,
            width: b.width,
            alignSelf: "flex-end",
          }}
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
    </form>
  );
};

export default Form;
