import "./TaskElement.css";

export default function TaskElement({ title, description }) {
  return (
    <div className="element center">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
