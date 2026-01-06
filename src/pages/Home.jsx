import { Helmet } from "react-helmet-async";
import Button from "../components/Button";
import PersonSchema from "../components/PersonSchema";

export default function Home() {
  return (
    <>
      <PersonSchema />

      <Helmet>
        <title>Syed Tufail Ahmed | AI & Digital Transformation Leader</title>
        <meta
          name="description"
          content="Syed Tufail Ahmed is an AI and digital transformation leader focused on human-centered AI, governance, and large-scale public digital systems."
        />
        <link rel="canonical" href="https://www.syedtufailahmed.com/" />
      </Helmet>

      {/* HERO — full bleed */}
      <section className="hero">
        <div className="hero-inner">
          <h1>
            Syed<br />Tufail Ahmed
          </h1>

          <p className="hero-role">
            AI & Digital Transformation Leader<br />
            Human-Centered AI · Digital Governance · Public Systems
          </p>

          <blockquote>
            AI should scale human judgment — not replace it.
          </blockquote>

          <div className="hero-actions">
            <Button href="/about">About My Work</Button>
            <a
              className="secondary-link"
              href="/writing/human-in-the-loop-ai-governance"
            >
              Read: Human-in-the-Loop AI & Governance →
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section intro">
        <p className="lead">
          I work at the intersection of <strong>AI, digital transformation, and
          governance</strong>, ensuring intelligent systems remain accountable to{" "}
          <strong>human judgment, institutional values, and public trust</strong>.
        </p>
      </section>

      {/* FOCUS */}
      <section className="section focus">
        <h2>What I focus on</h2>
        <ul className="focus-list">
          <li>Human-Centered & Human-in-the-Loop AI systems</li>
          <li>AI governance, accountability, and decision oversight</li>
          <li>Public-sector and large-scale digital platforms</li>
          <li>Leadership at the intersection of policy, technology, and culture</li>
        </ul>
      </section>

      {/* FEATURED WRITING */}
      <section className="section writing">
        <h2>Featured writing</h2>

        <article className="featured-article">
          <a href="/writing/human-in-the-loop-ai-governance">
            Human-in-the-Loop AI as a Governance Imperative →
          </a>
          <p>
            Why human judgment, accountability, and institutional responsibility
            must remain central as AI systems scale.
          </p>
        </article>
      </section>
    </>
  );
}
