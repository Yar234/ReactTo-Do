import "./FormButton.css";

export default function FormButton({ text, onClick }) {

  return (
    <button onClick={onClick} className="button" type="button">
      {text}
    </button>
  );
}
