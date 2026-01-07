import { Helmet } from "react-helmet-async";
import Button from "../components/Button";
import PersonSchema from "../components/PersonSchema";

export default function Home() {
  return (
    <>
      <PersonSchema />
      <BookSchema />
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Human in the Loop",
      "alternativeHeadline": "Reclaiming Human Authority in an Age of Intelligent Systems",
      "author": {
        "@type": "Person",
        "name": "Syed Tufail Ahmed",
        "url": "https://www.syedtufailahmed.com"
      },
      "about": [
        "Human-in-the-Loop AI",
        "AI governance",
        "Human judgment in AI systems",
        "Accountability in intelligent systems"
      ],
      "bookEdition": "Manuscript completed",
      "description":
        "A governance-first examination of how AI systems reshape authority, sovereignty, and accountability — and why human judgment must remain structurally embedded in high-impact decision systems.",
      "inLanguage": "en",
      "isAccessibleForFree": true,
      "url": "https://www.syedtufailahmed.com"
    })}
  </script>
</Helmet>

     <Helmet>
  <title>Syed Tufail Ahmed | AI & Digital Transformation Leader</title>

 <meta
  name="description"
  content="Syed Tufail Ahmed is an AI and digital transformation leader based in Saudi Arabia, focused on human-centered AI, digital governance, and large-scale public systems."
/>


  <link rel="canonical" href="https://www.syedtufailahmed.com/" />
</Helmet>


      {/* HERO — 2 COLUMN EXECUTIVE */}
      <section className="hero">
        <div className="hero-grid">
          
          {/* LEFT COLUMN */}
          <div className="hero-left">
            <h1 className="hero-name">
              Syed<br />Tufail Ahmed
            </h1>

            <p className="hero-role">
              AI & Digital Transformation Leader<br />
              Human-Centered AI · Digital Governance · Public Systems
            </p>

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

          {/* RIGHT COLUMN */}
       <div className="hero-right">
  <div className="hero-photo-wrap">
    <img
      src="/profile.jpg"
      alt="Syed Tufail Ahmed – AI & Digital Transformation Leader"
      className="hero-photo"
    />
    <blockquote className="hero-quote">
      AI should scale human judgment — <br />
      <span>not replace it.</span>
    </blockquote>
  </div>
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
{/* BOOK PREVIEW */}
<section className="section book-preview">
  <div className="book-grid">

    {/* LEFT: Book Cover */}
    <div className="book-cover">
      <img
        src="/book.png"
        alt="Human in the Loop — Reclaiming Human Authority in an Age of Intelligent Systems"
      />
    </div>

    {/* RIGHT: Book Content */}
    <div className="book-content">
      <p className="book-eyebrow">FORTHCOMING BOOK ON AI GOVERNANCE</p>

      <h2 className="book-title">
        Human in the Loop
      </h2>

      <p className="book-subtitle">
        Reclaiming Human Authority in an Age of Intelligent Systems
      </p>

      <p className="book-description">
        A governance-first examination of how AI systems reshape authority,
        sovereignty, and accountability — and why human judgment must remain
        structurally embedded in high-impact decision systems.
      </p>

      <p className="book-status">
        Manuscript completed · Publishing details forthcoming
      </p>

      <a
        href="/writing/human-in-the-loop-ai-governance"
        className="secondary-link"
      >
        Read the core ideas →
      </a>
    </div>

  </div>
</section>
<section className="section author-context">
  <p>
    <strong>Syed Tufail Ahmed</strong> is an AI & digital transformation leader
    working at the intersection of technology, governance, and public systems.
    His work focuses on ensuring intelligent systems remain accountable to
    human judgment, institutional values, and public trust.
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
