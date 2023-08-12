import "./LoginPage.css";
import bg from "./../assets/bg.svg";
import InputGroup from "../components/InputGroup";
import Form from "../components/Form/Form";
const LoginPage = () => {
  return (
    <div className="login-page flex-row justify-center align-center">
      <img src={bg} alt="" className="bg-img" />
      <Form
        elements={["e-mail", "password"]}
        buttons={[{ name: "login", color: "var(--pink)", width: "100px" }]}
        otherButtons={["sign in with google"]}
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
