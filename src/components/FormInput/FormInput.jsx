import styles from "./FormInput.module.css";

export default function FormInput({ placeholder, value, onChange }) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
