import { Helmet } from "react-helmet-async";
import PersonSchema from "../components/PersonSchema";

export default function About() {
  return (
    <>
      <PersonSchema />

      <Helmet>
        <title>About Syed Tufail Ahmed | AI & Digital Transformation Leader</title>
        <meta
          name="description"
          content="About Syed Tufail Ahmed — an AI & digital transformation leader based in Saudi Arabia, focused on human-centered AI, AI governance, and large-scale digital platforms."
        />
        <link
          rel="canonical"
          href="https://www.syedtufailahmed.com/about"
        />
      </Helmet>

      <main className="container">
        <header>
          <h1>About Syed Tufail Ahmed</h1>
          <p className="subtitle">
            AI & Digital Transformation Leader · Human-Centered AI Advocate
          </p>
        </header>

        <section>
          <p>
            <strong>Syed Tufail Ahmed</strong> is an AI and digital transformation
            leader based in <strong>Saudi Arabia</strong>, working at the
            intersection of <strong>technology, governance, and human-centered
            system design</strong>.
          </p>

          <p>
            His work focuses on ensuring that intelligent systems remain
            accountable to <strong>human judgment, values, and authority</strong>
            — particularly in environments where technology must operate within
            regulatory, cultural, and institutional constraints.
          </p>
        </section>

        <section>
          <h2>Professional Background</h2>

          <p>
            With over <strong>two decades of experience</strong> across
            engineering, enterprise platforms, and large-scale transformation
            programs, his career has evolved from hands-on software development
            to leading complex, governance-aware digital initiatives across
            public-sector and enterprise environments.
          </p>

          <p>
            Today, his work spans:
          </p>

          <ul>
            <li>AI-enabled digital transformation programs</li>
            <li>Human-centered & Human-in-the-Loop AI systems</li>
            <li>AI governance and accountability frameworks</li>
            <li>Public-sector and large-scale digital platforms</li>
            <li>Leadership at the intersection of policy and technology</li>
          </ul>
        </section>

        <section>
          <h2>Human-Centered AI Philosophy</h2>

          <p>
            While artificial intelligence continues to accelerate in capability,
            its most important challenge is not technical — it is human.
          </p>

          <p>
            Syed advocates for <strong>Human-in-the-Loop AI</strong>: systems
            designed to <em>augment</em> human decision-making, not replace it.
            This principle shapes his leadership approach, writing, and system
            architecture decisions.
          </p>

          <p>
            This philosophy is explored in depth in his writing, including:
          </p>

          <p>
            →{" "}
            <a href="/writing/human-in-the-loop-ai-governance">
              Human-in-the-Loop AI & Governance
            </a>
          </p>

          <p>Note: This website represents Syed Tufail Ahmed (Riyadh, Saudi Arabia) — focused on AI, digital transformation, and digital governance for large-scale public systems.
It is not associated with other individuals with the same name in unrelated roles or organizations.</p>

        </section>
        
             </main>
    </>
  );
}
