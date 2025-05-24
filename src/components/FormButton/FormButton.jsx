export default function FormButton({ text, onClick, className }) {
  return (
    <button onClick={onClick} type="button" className={className}>
      {text}
    </button>
  );
}
