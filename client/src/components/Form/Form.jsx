import InputGroup from "../InputGroup";
import "./Form.css";
const Form = ({ elements, buttons, otherButtons }) => {
  return (
    <form className="flex-column justify-center login-form form">
      <div className="form-logo">BledBay</div>
      <div className="form-title">Login</div>
      {elements?.map((e) => (
        <InputGroup label={e} />
      ))}
      {buttons?.map((b) => (
        <button
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
      {otherButtons && <p className="hr"> or sign in with</p>}
      {otherButtons?.map((b) => (
        <button className="form-btn">{b}</button>
      ))}
    </form>
  );
};

export default Form;
