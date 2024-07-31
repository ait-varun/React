import { useState, useMemo } from "react";
import TodoList from "../../components/common/todoList";

export default function About() {
  const [tasks, setTasks] = useState({
    Todo: [
      {
        id: 1,
        task: "Learn React",
        status: "Todo",
      },
    ],
    Progress: [
      {
        id: 2,
        task: "Learn Progess",
        status: "In Progress",
      },
    ],
    Completed: [
      {
        id: 3,
        task: "Learn Completed",
        status: "Completed",
      },
    ],
  });
  const [task, setTask] = useState("Todo");

  const taskOptions = useMemo(() => {
    return Object.keys(tasks).map((key) => ({
      value: key,
      label: key,
    }));
  }, [tasks]);

  return (
    <div>
      <h1>About</h1>
      <div className="flex flex-row gap-4">
        <input
          type="text"
          placeholder="Add a task"
          className="border-2 border-black rounded-lg px-2"
        />
        <select
          className="border-2 border-black rounded-lg px-2"
          name="task"
          id="task"
          defaultValue={task}
          onChange={(e) => setTask(e.target.value)}>
          {taskOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <TodoList tasks={tasks[task]} status={task} />
    </div>
  );
}
