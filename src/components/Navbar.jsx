import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-sky-200 text-white p-4">
      <ul className="flex space-x-6">
        {/* <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/docs" className="hover:underline">
            Docs
          </Link>
        </li> */}
        <li>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/auth" className="hover:underline">
            auth
          </Link>
        </li>
      </ul>
    </nav>
  );
}
