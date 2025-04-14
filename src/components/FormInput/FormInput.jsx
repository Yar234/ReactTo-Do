import "./FormInput.css";

export default function FormInput({ placeholder, value, onChange }) {
  return (
    <input
      className="input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id="input"
    />
  );
}