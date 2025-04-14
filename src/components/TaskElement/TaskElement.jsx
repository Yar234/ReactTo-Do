import "./TaskElement.css"

export default function ListElement({ title, description }) {
  return (
    <div className="element">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
