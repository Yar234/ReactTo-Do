import TaskElement from "../TaskElement/TaskElement";

import styles from "./TaskList.module.css";

export default function TaskList({ tasks = [], setTasks }) {
  function handleDelete(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function handleComplete(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  const activeTasks = tasks.filter((task) => !task.isDone);
  const completedTasks = tasks.filter((task) => task.isDone);

  return (
    <div className={`${styles.tasks_wrapper} ${styles.center}`}>
      <div className={styles.active_tasks}>
        <h2 className={styles.title}>Active Tasks:</h2>
        {activeTasks.map((task) => (
          <TaskElement
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            isDone={task.isDone}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <div className={styles.completed_tasks}>
        <h2 className={styles.title}>Completed Tasks:</h2>
        {completedTasks.map((task) => (
          <TaskElement
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            isDone={task.isDone}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
