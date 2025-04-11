import "./FormButton.css";

export default function FormButton() {
  function handleClick() {
    console.log("Picun");
  }

  return (
    <button onClick={handleClick} className="button">
      CREATE
    </button>
  );
}
