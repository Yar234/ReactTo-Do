import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

import "./TaskForm.css";

export default function Input() {
  return (
    <div className="wrap">
      <form className="form">
        <FormInput />
        <FormButton />
      </form>
    </div>
  );
}
