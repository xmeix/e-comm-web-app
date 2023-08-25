import "./InputGroup.css";
const InputGroup = ({ input, onChange }) => {
  return (
    <div className="input-group flex-column">
      <label htmlFor={input.label}>{input.label}</label>
      <input
        name={input.label}
        type={input.inputType}
        placeholder={input.content}
        onChange={onChange}
        required
      />
      {input.inputType === "password" && (
        <div
          className="forget-pass"
          onClick={() => console.log("change password")}
        >
          forgot your password?
        </div>
      )}
    </div>
  );
};

export default InputGroup;
