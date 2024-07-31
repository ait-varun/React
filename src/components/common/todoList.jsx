import PropTypes from "prop-types";

export default function TodoList({ tasks, status, deleteTask, editTask }) {
  // console.log(tasks);
  return (
    <>
      <div>
        <h1 className="text-xl border-b-2 border-gray-200 pb-2">
          {status} List
        </h1>
        <ul>
          {tasks.length ? (
            <>
              {tasks.map((task) => (
                <li key={task.id}>
                  {task.task}
                  <button
                    className="ml-2 border-2 border-green-600 rounded-full px-2 py-1"
                    onClick={() => editTask(task)}>
                    Edit
                  </button>
                  <button
                    className="ml-2 border-2 border-red-600 rounded-full px-2 py-1"
                    onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </>
          ) : (
            <>
              <span className="text-red-600">No {status} tasks</span>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
    })
  ),
  status: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};
