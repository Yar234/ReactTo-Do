export default function FormButton({ content, onClick, className }) {
  return (
    <button onClick={onClick} type="button" className={className}>
      {content}
    </button>
  );
}
