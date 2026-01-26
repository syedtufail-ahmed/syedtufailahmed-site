import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
    </navbar>

      <Outlet />

      <footer className="site-footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Syed Tufail Ahmed ·
            <a href="mailto:syed@syedtufailahmed.com">
              {" "}syed@syedtufailahmed.com
            </a>
            
          </p>
          <p className="linkedin-follow">
  Connect on &nbsp;
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
