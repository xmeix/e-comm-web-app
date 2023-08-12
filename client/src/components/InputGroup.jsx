import "./InputGroup.css";
const InputGroup = ({ label }) => {
  return (
    <div className="input-group flex-column">
      <label htmlFor="">{label}</label>
      <input type="text" placeholder={`write down your ${label}`} />
    </div>
  );
};

export default InputGroup;
