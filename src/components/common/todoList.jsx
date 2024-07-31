import PropTypes from "prop-types";

export default function TodoList({ tasks, status }) {
  // console.log(tasks);
  return (
    <>
      <div>
        <h1>{status} List</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task.task}</li>
          ))}
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