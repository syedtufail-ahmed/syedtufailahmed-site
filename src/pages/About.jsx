import { Helmet } from "react-helmet-async";
import Callout from "../components/Callout";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Syed Tufail Ahmed | Human-Centered AI & Digital Transformation</title>
        <meta
          name="description"
          content="Learn about Syed Tufail Ahmed — an AI and digital transformation leader focused on human-centered AI, governance-aware systems, and large-scale public-sector platforms."
        />
        <link
          rel="canonical"
          href="https://www.syedtufailahmed.com/about"
        />
      </Helmet>

      <main className="page">
        <section className="page-hero">
          <p className="page-eyebrow">About</p>
          <h1>Syed Tufail Ahmed</h1>
          <p className="page-subtitle">
            AI & Digital Transformation Leader · Human-Centered AI Advocate
          </p>
        </section>

        <section className="content">
          <Callout>
            My work focuses on ensuring intelligent systems remain accountable
            to human judgment, values, and authority.
          </Callout>

          <p>
            I am an AI and digital transformation leader based in Saudi Arabia,
            working at the intersection of technology, governance, and
            human-centered system design.
          </p>

          <p>
            With over two decades of experience across engineering, enterprise
            platforms, and large-scale transformation programs, my career has
            evolved from hands-on software development to leading complex,
            governance-aware digital initiatives across public and enterprise
            environments.
          </p>

          <h2>Professional Focus</h2>

          <p>
            Today, my work spans AI-enabled digital transformation, platform
            modernization, and the design of systems that must operate within
            regulatory, cultural, and institutional constraints.
          </p>

          <ul>
            <li>Human-Centered & Human-in-the-Loop AI systems</li>
            <li>AI governance and accountability frameworks</li>
            <li>Public-sector and large-scale digital platforms</li>
            <li>Leadership at the intersection of policy and technology</li>
          </ul>

          <h2>Human-Centered AI Philosophy</h2>

          <p>
            While artificial intelligence continues to accelerate in capability,
            its most important challenge is not technical — it is human.
          </p>

          <p>
            I advocate for <strong>Human-in-the-Loop AI</strong>: systems designed
            to augment human decision-making, not replace it. This principle
            shapes my writing, leadership approach, and system architecture
            decisions.
          </p>

          <p>
            This philosophy is explored in depth in my writing, including{" "}
            <a href="/writing/human-in-the-loop-ai-governance">
              Human-in-the-Loop AI & Governance
            </a>.
          </p>
        </section>
      </main>
    </>
  );
}
