import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <nav className="nav container">
          <Link to="/" className="brand">
            Syed Tufail Ahmed
          </Link>

          <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/writing">Writing</Link>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Syed Tufail Ahmed ·
            <a href="mailto:syed@syedtufailahmed.com">
              {" "}syed@syedtufailahmed.com
            </a>
            
          </p>
          <p class="linkedin-follow">
  Connect on
  <a
    href="https://www.linkedin.com/in/tufailsa/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</p>
        </div>
      </footer>
    </>
  );
}
