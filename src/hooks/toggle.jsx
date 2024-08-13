import { useState } from "react";

export default function UseToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggleFn = () => {
    setState((prev) => !prev);
  };

  return [state, toggleFn];
}
