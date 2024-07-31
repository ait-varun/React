import PropTypes from "prop-types";

export default function TodoList({ tasks, status }) {
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
              {tasks.map((task, index) => (
                <li key={index}>{task.task}</li>
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
};
