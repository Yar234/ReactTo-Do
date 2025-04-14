import { useState } from "react";

import Header from "./components/Header/Header";
import TaskElement from "./components/TaskElement/TaskElement";
import TaskForm from "./components/TaskForm/TaskForm";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <h1>Hello</h1>
      </main>
      <TaskForm />
      <TaskElement title="Title" description="Description" />
    </>
  );
}

export default App;
