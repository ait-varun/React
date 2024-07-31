import PropTypes from "prop-types";

export default function TodoList() {
  return <></>;
}

TodoList.propTypes = {
  taskOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
