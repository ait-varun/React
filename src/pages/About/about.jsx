import { useState, useMemo, useRef } from "react";
import TodoList from "../../components/common/todoList";

export default function About() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState({
    Todo: [],
    Progress: [],
    Completed: [],
  });
  const [task, setTask] = useState("Todo");

  const taskOptions = useMemo(() => {
    return Object.keys(tasks).map((key) => ({
      value: key,
      label: key,
    }));
  }, [tasks]);

  const handleAddTask = () => {
    const newTask = {
      id: self.crypto.randomUUID(),
      task: inputRef.current.value,
      status: task,
    };
    setTasks((prev) => ({
      ...prev,
      [task]: [...prev[task], newTask],
    }));
    inputRef.current.value = "";
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => ({
      ...prev,
      [task]: prev[task].filter((task) => task.id !== id),
    }));
  };

  const handleEditTask = (task) => {
    console.log(task);
    inputRef.current.focus();
    inputRef.current.value = task.task;
  };

  return (
    <div>
      <h1>About</h1>
      <div className="flex flex-row gap-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a task"
          className="border-2 border-black rounded-lg px-2"
        />
        <select
          className="border-2 border-black rounded-lg px-2"
          name="task"
          id="task"
          defaultValue={task}
          onChange={(e) => {
            setTask(e.target.value);
            inputRef.current.value = "";
          }}>
          {taskOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <TodoList
        tasks={tasks[task]}
        status={task}
        deleteTask={handleDeleteTask}
        editTask={handleEditTask}
      />
    </div>
  );
}
