import { useState } from "react";

import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Header />
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
