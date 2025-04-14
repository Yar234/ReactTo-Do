import { useState } from "react";

import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import TaskList from "../TaskList/TaskList";

import "./TaskForm.css";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleCreate() {
    if (!title.trim() || !description.trim()) return;
    setTasks([...tasks, { title, description }]);
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <div className="wrap">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <FormInput
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormInput
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} />
          <FormButton text="CREATE" onClick={handleCreate} />
        </form>
      </div>
      <TaskList tasks={tasks} />
    </>
  );
}
