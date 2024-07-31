import { NavLink as Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex items-center gap-6 flex-wrap bg-teal-500 p-6">
      <Link
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        Home
      </Link>
      <Link
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        About
      </Link>
      <Link
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        Contact
      </Link>
    </nav>
  );
}
