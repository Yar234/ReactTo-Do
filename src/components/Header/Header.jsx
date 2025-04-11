import "./Header.css";

export default function Header() {
  const time = new Date();
  return (
    <header className="header">
      <h1 className="title">To Do</h1>
    </header>
  );
}
