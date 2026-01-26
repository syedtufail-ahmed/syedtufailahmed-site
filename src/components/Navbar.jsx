import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="brand">Syed Tufail Ahmed</Link>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/writing">Writing</Link>
     <Link to="/executive-credentials">Credentials</Link>
             </div>
    </nav>
  );
}
