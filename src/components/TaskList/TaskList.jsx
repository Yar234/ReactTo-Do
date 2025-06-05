import TaskElement from "../TaskElement/TaskElement";

import styles from "./TaskList.module.css";

export default function TaskList({ tasks = [], setTasks }) {
  function handleDelete(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  // some tasks may have a completed state, but it's not used in this component
  function handleCheck(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className={`${styles.task_list} ${styles.center}`}>
      {tasks.map((task) => (
        <TaskElement
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
