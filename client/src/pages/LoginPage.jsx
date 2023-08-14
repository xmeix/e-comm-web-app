import React, { useState } from "react";
import "./LoginPage.css";
import bg from "../assets/bg.jpg";
import InputGroup from "../components/InputGroup";
import Form from "../components/Form/Form";

const LoginPage = () => {
  const [type, setType] = useState("login");

  const handleTypeChange = (data) => {
    setType(data);
  };

  const buttons =
    type === "login"
      ? [
          {
            name: "login",
            bgcolor: "var(--blue)",
            color: "var(--white)",
            width: "100px",
          },
        ]
      : [
          {
            name: "register",
            bgcolor: "var(--blue)",
            color: "var(--white)",
            width: "100px",
          },
        ];
  const elements =
    type === "login"
      ? [
          { label: "E-mail", inputType: "text" },
          { label: "Password", inputType: "password" },
        ]
      : [
          { label: "Name", inputType: "text" },
          { label: "Phone Number", inputType: "tel" },
          { label: "Street", inputType: "text" },
          { label: "City", inputType: "text" },
          { label: "ZIP Code", inputType: "number" },
          { label: "E-mail", inputType: "email" },
          { label: "Password", inputType: "password" },
        ];

  return (
    <div className="login-page">
      <div className="bg-img"></div>
      <Form
        onTypeChanged={handleTypeChange}
        elements={elements}
        buttons={buttons}
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
