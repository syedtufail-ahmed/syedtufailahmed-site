import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Writing() {
  return (
    <>
      <Helmet>
        <title>Writing | Syed Tufail Ahmed</title>
        <meta
          name="description"
          content="Essays and writing by Syed Tufail Ahmed on human-centered AI, digital transformation, governance, and leadership."
        />
        <link
          rel="canonical"
          href="https://www.syedtufailahmed.com/writing"
        />
      </Helmet>

      <main className="container">
        <h1>Writing</h1>

        <p className="subtitle">
          Essays on human-centered AI, governance, and digital transformation.
        </p>

        <section className="writing-list">
          <article className="writing-item">
            <h2>
              <Link to="/writing/human-in-the-loop">
                Human-in-the-Loop AI: Reclaiming Human Authority
              </Link>
            </h2>

            <p>
              Why the future of AI depends not on automation alone, but on
              preserving human judgment, accountability, and control.
            </p>

            <Link className="read-more" to="/writing/human-in-the-loop">
              Read essay →
            </Link>
          </article>
        </section>
      </main>
    </>
  );
}
