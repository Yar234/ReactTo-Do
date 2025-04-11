export default function ListElement(props) {
  console.log(props);
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </>
  );
}
