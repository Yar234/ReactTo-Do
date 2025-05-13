import { useState } from "react";

import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

import "./TaskForm.css";

export default function TaskForm({ setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleCreate() {
    if (!title.trim() || !description.trim()) return;
    setTasks((prev) => [{ title, description }, ...prev]);
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <div className="wrap center">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <FormInput
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormInput
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <FormButton text="CREATE" onClick={handleCreate} />
        </form>
      </div>
    </>
  );
}
