import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav container">
        <Link to="/" className="brand">Syed Tufail Ahmed</Link>

        <div className="nav-links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/writing">Writing</NavLink>
          <NavLink to="/executive-credentials">Credentials</NavLink>
          <NavLink to="/book">Book</NavLink>
        </div>
      </nav>
    </header>
  );
}
