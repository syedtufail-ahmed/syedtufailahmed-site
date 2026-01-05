import { Link } from "react-router-dom";

export default function Writing() {
  return (
    <main className="container">
      <h1>Writing</h1>

      <article>
        <h2>
          <Link to="/who-is-syed-tufail-ahmed">
            Who Is Syed Tufail Ahmed?
          </Link>
        </h2>
        <p>
          An essay on human-centered AI, authority, and leadership.
        </p>
      </article>
    </main>
  );
}
