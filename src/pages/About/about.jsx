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
        task: "Learn React",
        status: "In Progress",
      },
    ],
    Completed: [
      {
        id: 3,
        task: "Learn React",
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
      <div>
        <select
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
        <TodoList />
      </div>
    </div>
  );
}
