import { Helmet } from "react-helmet-async";
import PersonSchema from "../components/PersonSchema";

export default function Home() {
  return (
    <>
      <PersonSchema />

      <Helmet>
        <title>Syed Tufail Ahmed | AI & Digital Transformation Leader</title>
        <meta
          name="description"
          content="Syed Tufail Ahmed is an AI and digital transformation leader based in Saudi Arabia, working at the intersection of human-centered AI, digital governance, and large-scale public systems."
        />
        <link rel="canonical" href="https://www.syedtufailahmed.com/" />
      </Helmet>

      <main className="editorial-container">
        {/* HERO */}
        <section className="hero">
          <h1>Syed Tufail Ahmed</h1>

          <p className="hero-role">
            AI & Digital Transformation Leader<br />
            Human-Centered AI · Digital Governance · Public Systems
          </p>

          <blockquote className="hero-quote">
            AI should scale human judgment — not replace it.
          </blockquote>
        </section>

        {/* POSITIONING */}
        <section className="positioning">
          <p>
            I work at the intersection of <strong>AI, digital transformation, and governance</strong>,
            ensuring intelligent systems remain accountable to <strong>human judgment,
            institutional values, and public trust</strong>.
          </p>
        </section>

        {/* FOCUS AREAS */}
        <section className="focus">
          <h2>What I focus on</h2>

          <ul>
            <li>Human-Centered & Human-in-the-Loop AI systems</li>
            <li>AI governance, accountability, and decision oversight</li>
            <li>Public-sector and large-scale digital platforms</li>
            <li>Leadership at the intersection of policy, technology, and culture</li>
          </ul>
        </section>

        {/* WRITING */}
        <section className="writing">
          <h2>Featured writing</h2>

          <p className="writing-title">
            <a href="/writing/human-in-the-loop-ai-governance">
              Human-in-the-Loop AI as a Governance Imperative →
            </a>
          </p>

          <p className="writing-desc">
            An exploration of why human judgment, accountability, and institutional
            responsibility must remain central as AI systems scale.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="site-footer">
          <p>
            © 2026 Syed Tufail Ahmed ·{" "}
            <a href="mailto:syed@syedtufailahmed.com">
              syed@syedtufailahmed.com
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
