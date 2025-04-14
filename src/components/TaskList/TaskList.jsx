import TaskElement from "../TaskElement/TaskElement";

export default function TaskList({ tasks = [] }) {

    return (
        <>
            {tasks.map((task, index) => (
                <TaskElement
                    key={index}
                    title={task.title}
                    description={task.description}
                />
            ))}
        </>
    );
}