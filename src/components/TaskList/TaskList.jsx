import TaskElement from "../TaskElement/TaskElement";

import styles from "./TaskList.module.css";

export default function TaskList({ tasks = [], setTasks }) {
  function handleDelete(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
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
