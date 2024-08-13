import UseToggle from "../../hooks/toggle";

export default function Blog() {
  const [state, toggleFn] = UseToggle(false);
  return (
    <div>
      <h1>Blog</h1>
      <button className="btn btn-primary bg-blue-600" onClick={toggleFn}>
        Click me
      </button>
      {state && <div>Hello</div>}
    </div>
  );
}
