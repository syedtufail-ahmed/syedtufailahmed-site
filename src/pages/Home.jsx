import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PersonSchema from "../components/PersonSchema";
import BookSchema from "../components/BookSchema";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Syed Tufail Ahmed | AI Governance Leader, Author & Keynote Speaker</title>
        <meta
          name="description"
          content="Syed Tufail Ahmed is an AI & Digital Transformation Leader, Thinkers360 Top 25 AI Governance, and author of Human in the Loop. Keynote speaker based in Riyadh, Saudi Arabia."
        />
        <link rel="canonical" href="https://www.syedtufailahmed.com/" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Syed Tufail Ahmed | AI Governance Leader, Author & Keynote Speaker" />
        <meta property="og:description" content="AI Governance · AI Ethics · Human-in-the-Loop · Vision 2030 · Riyadh, KSA" />
        <meta property="og:image" content="https://www.syedtufailahmed.com/og/home.png" />
        <meta property="og:url" content="https://www.syedtufailahmed.com/" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Syed Tufail Ahmed — AI Governance Leader and Author" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.syedtufailahmed.com/" />
        <meta name="twitter:title" content="Syed Tufail Ahmed | AI Governance Leader, Author & Keynote Speaker" />
        <meta name="twitter:description" content="AI Governance · AI Ethics · Human-in-the-Loop · Vision 2030 · Riyadh, KSA" />
        <meta name="twitter:image" content="https://www.syedtufailahmed.com/og/home.png" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="AI governance, AI ethics, human in the loop, keynote speaker Saudi Arabia, Vision 2030 AI, digital transformation leader Riyadh, Syed Tufail Ahmed"
        />
      </Helmet>

      <PersonSchema />
      <BookSchema />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-grid">

          {/* Left: text */}
          <div className="hero-left">
            <p className="hero-eyebrow">
              AI &amp; Digital Transformation Leader · Author · Keynote Speaker · Riyadh, KSA
            </p>

            <h1 className="hero-name">
              Staying Human in an Age of Intelligent Machines.
            </h1>

            <p className="hero-subhead">
              I help organizations and nations harness AI without losing what makes them human.
            </p>

            <blockquote className="hero-quote">
              The most dangerous AI isn't the one that fails.
              <br />
              <span>It's the one we stopped questioning.</span>
            </blockquote>

            <div className="hero-actions">
              <Link to="/speaking" className="btn btn-primary">
                Invite Me to Speak →
              </Link>
              <a
                href="https://www.amazon.com/dp/B0CZYQ2JNR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Read the Book →
              </a>
            </div>
          </div>

          {/* Right: photo + quote */}
          <div className="hero-right">
            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src="/profile.jpg"
                alt="Syed Tufail Ahmed — AI Governance Leader and Author"
                width="300"
                height="300"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── CREDIBILITY BAR ────────────────────────────────────── */}
      <section className="cred-bar">
        <div className="cred-bar-inner">
          <div className="cred-item">
            <span className="cred-rank">Top 25</span>
            <span className="cred-label">AI Governance · Thinkers360</span>
          </div>
          <div className="cred-divider" />
          <div className="cred-item">
            <span className="cred-rank">Top 10</span>
            <span className="cred-label">AI Ethics · Thinkers360</span>
          </div>
          <div className="cred-divider" />
          <div className="cred-item">
            <span className="cred-rank">#2</span>
            <span className="cred-label">AI Safety &amp; Tech Ethics · KSA</span>
          </div>
          <div className="cred-divider" />
          <div className="cred-item">
            <span className="cred-rank">#5</span>
            <span className="cred-label">AI Research &amp; Innovation · KSA</span>
          </div>
          <div className="cred-divider" />
          <div className="cred-item">
            <span className="cred-rank">9,700+</span>
            <span className="cred-label">LinkedIn Followers</span>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ───────────────────────────────────────── */}
      <section className="home-section">
        <div className="home-section-inner">
          <p className="section-eyebrow">About</p>
          <h2 className="section-heading">
            The Philosopher. The Guardian.<br />The Bridge-Builder.
          </h2>
          <p className="section-body">
            I stand at a rare intersection: the technical precision of 20+ years
            building enterprise AI, and the philosophical conviction that technology
            must answer to human values — not the other way around.
          </p>
          <p className="section-body">
            Based in Riyadh, I work at the frontlines of one of the most ambitious
            transformation programs in the world — Saudi Vision 2030 — alongside
            SDAIA, the Saudi Ministry of Culture, and Diriyah Art Futures.
          </p>
          <p className="section-body">
            My question, in every boardroom and keynote:{" "}
            <em>
              Are we building AI that serves humanity — or slowly becoming servants
              of the machines we built?
            </em>
          </p>
          <Link to="/about" className="section-link">
            Learn More →
          </Link>
        </div>
      </section>

      {/* ── SPEAKING TEASER ────────────────────────────────────── */}
      <section className="home-section home-section--alt">
        <div className="home-section-inner">
          <p className="section-eyebrow">Speaking</p>
          <h2 className="section-heading">
            Keynotes That Make Leaders Think Differently.
          </h2>
          <p className="section-body">
            I don't come to your conference to tell your audience that AI is
            exciting. I come to ask the questions that don't fit in a product
            demo — and leave your audience with frameworks they'll still be
            using six months later.
          </p>

          <div className="keynote-grid">
            {[
              { num: "01", title: "Human in the Loop", meta: "Flagship · 45–60 min" },
              { num: "02", title: "AI Governance as Competitive Advantage", meta: "30–45 min" },
              { num: "03", title: "Vision 2030 & Sovereign AI", meta: "30–45 min" },
              { num: "04", title: "The Ethics of Healthcare AI", meta: "30–45 min" },
            ].map((k) => (
              <div key={k.num} className="keynote-card">
                <span className="keynote-num">{k.num}</span>
                <div>
                  <p className="keynote-title">{k.title}</p>
                  <p className="keynote-meta">{k.meta}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/speaking" className="section-link">
            Book a Keynote →
          </Link>
        </div>
      </section>

      {/* ── BOOK TEASER ────────────────────────────────────────── */}
      <section className="book-preview">
        <div className="book-grid">

          <div className="book-cover">
            <img
              src="/book.png"
              alt="Human in the Loop — book by Syed Tufail Ahmed"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="book-info">
            <p className="book-eyebrow">Authored Book</p>
            <h2 className="book-title">Human in the Loop</h2>
            <p className="book-subtitle">
              Reclaiming Human Authority in an Age of Intelligent Systems
            </p>
            <p className="book-description">
              This is not a book about slowing down AI. It's a blueprint for the
              leaders, organizations, and nations who believe that technology should
              amplify human potential — not replace it.
            </p>
            <blockquote className="book-quote">
              "AI can process a million data points. But only a human can decide
              what they mean."
            </blockquote>
            <div className="book-actions">
              <a
                href="https://www.amazon.com/dp/B0CZYQ2JNR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get the Book on Amazon →
              </a>
              <Link to="/book" className="btn btn-ghost">
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── CLOSING CTA ────────────────────────────────────────── */}
      <section className="home-cta">
        <div className="home-cta-inner">
          <p className="home-cta-quote">
            "AI should scale human judgment, not substitute it."
          </p>
          <p className="home-cta-attr">— Syed Tufail Ahmed</p>
          <div className="home-cta-actions">
            <Link to="/speaking" className="btn btn-primary">
              Invite Me to Speak →
            </Link>
            <Link to="/about" className="btn btn-ghost">
              About Syed →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
