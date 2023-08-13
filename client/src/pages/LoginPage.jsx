import React from "react";
import "./LoginPage.css";
import bg from "../assets/bg.jpg";
import InputGroup from "../components/InputGroup";
import Form from "../components/Form/Form";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="bg-img"></div>
      <Form
        elements={["e-mail", "password"]}
        buttons={[
          {
            name: "login",
            bgcolor: "var(--pink)",
            color: "var(--white)",
            width: "100px",
          },
        ]}
        otherButtons={["google"]}
      />
      <div className="login-statements">
        <p className="head-st">Time to Shop!</p>
        <p className="sec-st">
          Enter your credentials to enjoy a hassle-free shopping experience.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
