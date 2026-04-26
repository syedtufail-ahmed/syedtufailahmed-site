import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BookSchema from "../components/BookSchema";

const chapters = [
  {
    num: "01",
    title: "The Illusion of Full Automation",
    summary:
      "Why greater automation doesn't mean greater accountability — and how diffused responsibility quietly erodes institutional trust.",
  },
  {
    num: "02",
    title: "What Human-in-the-Loop Really Means",
    summary:
      "A design-first definition: clear ownership, defined escalation paths, explainable behaviour, and context-aware human intervention.",
  },
  {
    num: "03",
    title: "Governance as a Design Problem",
    summary:
      "Governance cannot be retrofitted. It must be architected into AI systems from day one, alongside data models and infrastructure.",
  },
  {
    num: "04",
    title: "AI Sovereignty & National Strategy",
    summary:
      "How nations can build AI capability that reflects their values, culture, and long-term strategic interests — not just adopt technology built elsewhere.",
  },
  {
    num: "05",
    title: "Reclaiming Human Authority",
    summary:
      "The future of AI belongs not to fully autonomous systems, but to thoughtfully governed ones that scale human judgment — not replace it.",
  },
];

const quotes = [
  {
    text: "AI can process a million data points. But only a human can decide what they mean.",
  },
  {
    text: "The most dangerous AI isn't the one that fails. It's the one we stopped questioning.",
  },
  {
    text: "AI should scale human judgment, not substitute it.",
  },
];

export default function Book() {
  return (
    <>
      <BookSchema />

      <Helmet>
        {/* ── Primary ── */}
        <title>Human in the Loop — Book by Syed Tufail Ahmed | AI Governance</title>
        <meta
          name="description"
          content="Human in the Loop: Reclaiming Human Authority in an Age of Intelligent Systems — by Syed Tufail Ahmed. A blueprint for leaders building trustworthy, accountable AI. Published by Notion Press. Available on Amazon."
        />
        <link rel="canonical" href="https://www.syedtufailahmed.com/book" />
        <meta
          name="keywords"
          content="Human in the Loop book, Syed Tufail Ahmed book, AI governance book, human-centered AI, AI accountability, responsible AI leadership, Notion Press AI book"
        />
        <meta name="robots" content="index, follow" />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="book" />
        <meta property="og:title" content="Human in the Loop — Book by Syed Tufail Ahmed" />
        <meta
          property="og:description"
          content="A blueprint for leaders who believe AI should scale human judgment, not replace it. Available on Amazon."
        />
        <meta property="og:url" content="https://www.syedtufailahmed.com/book" />
        <meta property="og:image" content="https://www.syedtufailahmed.com/book.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:image:alt" content="Human in the Loop — book by Syed Tufail Ahmed" />
        <meta property="book:author" content="https://www.syedtufailahmed.com" />
        <meta property="book:isbn" content="979-8902692775" />

        {/* ── Twitter / X ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Human in the Loop — Book by Syed Tufail Ahmed" />
        <meta
          name="twitter:description"
          content="A blueprint for leaders who believe AI should scale human judgment, not replace it."
        />
        <meta name="twitter:image" content="https://www.syedtufailahmed.com/book.png" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="book-page-hero">
        <div className="book-page-hero-inner">

          <div className="book-page-cover">
            <img
              src="/book.png"
              alt="Human in the Loop — book by Syed Tufail Ahmed"
              width="280"
              height="360"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="book-page-info">
            <p className="section-eyebrow">Authored Book</p>
            <h1 className="book-page-title">Human in the Loop</h1>
            <p className="book-page-subtitle">
              Reclaiming Human Authority in an Age of Intelligent Systems
            </p>

            <div className="book-meta-row">
              <span className="book-meta-item"><span className="book-meta-label">Author</span> Syed Tufail Ahmed</span>
              <span className="book-meta-divider">·</span>
              <span className="book-meta-item"><span className="book-meta-label">Publisher</span> Notion Press</span>
              <span className="book-meta-divider">·</span>
              <span className="book-meta-item"><span className="book-meta-label">ISBN</span> 979-8902692775</span>
            </div>

            <p className="book-page-desc">
              This is not a book about slowing down AI. It is a blueprint for the
              leaders, organisations, and nations who believe that technology should
              amplify human potential — not replace it. Drawing on 20+ years of
              enterprise AI and public-sector transformation experience, it makes
              the operational and philosophical case for keeping humans meaningfully
              in control of consequential decisions.
            </p>

            <div className="book-page-actions">
              <a
                href="https://www.amazon.com/Human-Loop-Reclaiming-Authority-Intelligent/dp/B0GGCJFTBQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get it on Amazon →
              </a>
              <Link to="/writing/human-in-the-loop" className="btn btn-ghost">
                Read an excerpt →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── PULL QUOTES ── */}
      <section className="book-quotes-bar">
        <div className="book-quotes-inner">
          {quotes.map((q, i) => (
            <blockquote key={i} className="book-pull-quote">
              "{q.text}"
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── WHAT IT'S ABOUT ── */}
      <section className="book-about-section">
        <div className="book-about-inner">
          <p className="section-eyebrow">What the book argues</p>
          <h2 className="book-section-heading">
            AI that operates without human oversight isn't advanced.<br />
            It's ungoverned.
          </h2>

          <p className="book-section-body">
            As artificial intelligence embeds itself into decisions about finance,
            healthcare, security, and governance, the question of accountability
            becomes urgent. When an AI system makes a consequential decision —
            or assists in one — who is responsible for the outcome?
          </p>

          <p className="book-section-body">
            <em>Human in the Loop</em> argues that the answer cannot be "the
            algorithm." It examines how organisations can scale AI capability while
            keeping human judgment structurally embedded in the systems that matter
            most — not as a limitation, but as a design principle that makes AI
            more trustworthy, more adaptable, and ultimately more effective.
          </p>

          <p className="book-section-body">
            The book is written for leaders who are past the hype — who are already
            deploying AI and now face the harder questions: How do we govern this
            responsibly? How do we preserve accountability at scale? How do we
            build AI that our institutions, our people, and our citizens can trust?
          </p>
        </div>
      </section>

      {/* ── CHAPTER OVERVIEW ── */}
      <section className="book-chapters-section">
        <div className="book-chapters-inner">
          <p className="section-eyebrow">Inside the book</p>
          <h2 className="book-section-heading">Core arguments, chapter by chapter.</h2>

          <div className="book-chapters-list">
            {chapters.map((c) => (
              <div key={c.num} className="book-chapter-item">
                <span className="book-chapter-num">{c.num}</span>
                <div>
                  <p className="book-chapter-title">{c.title}</p>
                  <p className="book-chapter-summary">{c.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="book-audience-section">
        <div className="book-audience-inner">
          <p className="section-eyebrow">Who it's for</p>
          <h2 className="book-section-heading">Written for decision-makers, not data scientists.</h2>

          <div className="book-audience-grid">
            {[
              { label: "Executive leaders", detail: "Building AI strategy and needing a governance framework that actually works at scale" },
              { label: "Government & policy", detail: "Designing national AI programs that balance capability with sovereignty and accountability" },
              { label: "Technology leaders", detail: "Deploying AI systems and grappling with the human and institutional side of the equation" },
              { label: "Board members", detail: "Overseeing organisations where AI decisions carry regulatory, reputational, and ethical weight" },
            ].map((a) => (
              <div key={a.label} className="book-audience-card">
                <p className="book-audience-label">{a.label}</p>
                <p className="book-audience-detail">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="book-cta-section">
        <div className="book-cta-inner">
          <img
            src="/book.png"
            alt="Human in the Loop"
            className="book-cta-cover"
          />
          <h2 className="book-cta-heading">
            "AI should scale human judgment, not substitute it."
          </h2>
          <p className="book-cta-attr">— Syed Tufail Ahmed</p>
          <div className="book-cta-actions">
            <a
              href="https://www.amazon.com/Human-Loop-Reclaiming-Authority-Intelligent/dp/B0GGCJFTBQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get it on Amazon →
            </a>
            <Link to="/about" className="btn btn-ghost">
              About the Author →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
