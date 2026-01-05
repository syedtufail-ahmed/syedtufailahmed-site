import { Helmet } from "react-helmet-async";
import PersonSchema from "../components/PersonSchema";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Syed Tufail Ahmed | AI & Digital Transformation Leader</title>
        <meta
          name="description"
          content="About Syed Tufail Ahmed, an AI and digital transformation leader based in Saudi Arabia, author of Human in the Loop, focused on human-centered AI, governance, and large-scale digital platforms."
        />
        <link
          rel="canonical"
          href="https://www.syedtufailahmed.com/about"
        />
      </Helmet>

      {/* Reuse Person schema for authority */}
      <PersonSchema />

      <main className="container">
        <h1>About</h1>

        <p className="subtitle">
          AI & Digital Transformation Leader · Author of <em>Human in the Loop</em>
        </p>

        <section className="section">
          <p>
            I am <strong>Syed Tufail Ahmed</strong>, an AI and digital transformation
            leader based in <strong>Saudi Arabia</strong>, working at the intersection
            of technology, governance, and human-centered system design.
          </p>

          <p>
            With over two decades of experience across engineering, digital platforms,
            and large-scale transformation programs, my work focuses on a critical
            question: how do we ensure intelligent systems remain accountable to
            human judgment, values, and authority?
          </p>
        </section>

        <section className="section">
          <h2>Professional Journey</h2>

          <p>
            My career began in hands-on engineering and software development, which
            shaped my respect for system reliability, architectural discipline,
            and real-world constraints.
          </p>

          <p>
            Over time, this evolved into leading complex digital transformation
            initiatives across enterprise and public-sector environments, where
            technology must operate within governance, culture, and institutional
            responsibility.
          </p>
        </section>

        <section className="section">
          <h2>Human-Centered AI</h2>

          <p>
            Artificial intelligence is no longer experimental. It increasingly
            influences decisions that affect people, trust, and outcomes.
          </p>

          <p>
            My work is grounded in the principle of <strong>Human-in-the-Loop AI</strong>:
            systems designed to augment human decision-making rather than replace it.
          </p>

          <ul>
            <li>Clear accountability for automated decisions</li>
            <li>Human oversight embedded into system design</li>
            <li>Transparency and explainability</li>
            <li>Respect for social and institutional context</li>
          </ul>
        </section>

        <section className="section">
          <h2>Author: Human in the Loop</h2>

          <p>
            I am the author of <em>Human in the Loop: Reclaiming Human Authority in an Age
            of Intelligent Systems</em>, a book written for leaders navigating the
            real-world implications of AI adoption.
          </p>

          <p>
            The book explores how organizations and governments can design AI systems
            that scale responsibly, without losing clarity of ownership and control.
          </p>
        </section>

        <section className="section">
          <h2>Education & Credentials</h2>

          <ul>
            <li>Bachelor of Engineering in Electronics — Bangalore University</li>
            <li>Postgraduate Executive Education in AI — Indian Institute of Science (IISc), Bangalore</li>
            <li>Project Management Professional (PMP)</li>
            <li>Certified Professional in AI Project Management (CPMAI)</li>
          </ul>
        </section>

        <section className="section">
          <h2>Contact</h2>

          <p>
            For speaking, advisory, or collaboration inquiries:
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:syed@syedtufailahmed.com">
              syed@syedtufailahmed.com
            </a>
            <br />
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/tufailsa"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/tufailsa
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
