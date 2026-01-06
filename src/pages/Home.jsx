import Button from "../components/Button";
import Callout from "../components/Callout";
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
          content="Syed Tufail Ahmed is an AI and digital transformation leader based in Saudi Arabia, author of Human in the Loop, focused on human-centered AI and governance."
        />
        <link rel="canonical" href="https://www.syedtufailahmed.com/" />
      </Helmet>

      <main className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">AI & Digital Transformation</p>

          <h1 className="hero-title">Syed Tufail Ahmed</h1>

          <p className="hero-subtitle">
            AI & Digital Transformation Leader · Author of{" "}
            <em>Human in the Loop</em>
          </p>

          <Callout>
            AI should scale human judgment — not replace it.
          </Callout>

          <p className="hero-description">
            I design and lead human-centered AI systems across governance,
            technology, and large-scale digital platforms.
          </p>

          <div className="hero-actions">
            <Button href="/about">About My Work →</Button>

            <a
              className="hero-link"
              href="/writing/human-in-the-loop-ai-governance"
            >
              Read: Human-in-the-Loop AI & Governance →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

