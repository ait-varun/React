import PropTypes from "prop-types";

export default function SimpleTodoList({
  todos,
  handleDeleteTodo,
  handleCompleted,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">
        Todos
      </h1>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border-2 border-gray-300 rounded-lg p-4 flex items-center justify-between">
          <span className={todo.completed ? "line-through" : ""}>
            {todo.task}
          </span>
          <button
            onClick={() => handleCompleted(todo.id)}
            className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
            {todo.completed ? "Pending" : "Completed"}
          </button>
          <button
            onClick={() => handleDeleteTodo(todo.id)}
            className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

SimpleTodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleCompleted: PropTypes.func.isRequired,
};
