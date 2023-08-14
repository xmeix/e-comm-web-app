import "./InputGroup.css";
const InputGroup = ({ label }) => {
  return (
    <div className="input-group flex-column">
      <label htmlFor={label}>{label}</label>
      <input
        name={label}
        type={label === "password" ? label : "text"}
        placeholder={`write down your ${label}`}
      />
      {label === "password" && (
        <div
          className="forget-pass"
          onClick={() => console.log("change password")}
        >
          {" "}
          forgot your password?
        </div>
      )}
    </div>
  );
};

export default InputGroup;
