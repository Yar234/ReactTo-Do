import { useState } from "react";

import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

import { nanoid } from "nanoid";

import styles from "./TaskForm.module.css";

export default function TaskForm({ setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleCreate() {
    if (!title.trim() || !description.trim()) return;
    setTasks((prev) => [{ id: nanoid(), title, description }, ...prev]);
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <div className={`${styles.wrap} ${styles.center}`}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
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
          <FormButton
            className={styles.button}
            text="CREATE"
            onClick={handleCreate}
          />
        </form>
      </div>
    </>
  );
}
