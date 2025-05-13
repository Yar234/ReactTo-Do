import TaskElement from "../TaskElement/TaskElement";

import "./TaskList.css";

export default function TaskList({ tasks = [] }) {
  return (
    <div className="task-list center">
      {tasks.map((task, index) => (
        <TaskElement
          key={index}
          title={task.title}
          description={task.description}
        />
      ))}
    </div>
  );
}
