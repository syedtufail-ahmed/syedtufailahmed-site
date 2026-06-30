import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CredentialsSchema from "../components/CredentialsSchema";

const thinkers360 = [
  {
    rank: "Top 10",
    category: "AI Ethics",
    body: "Thinkers360",
    color: "#f59e0b",
    badgeUrl: "https://www.thinkers360.com/tl/assets/images/badges/top10/Top%2010%20-%20AI%20Ethics.png",
    linkUrl: "https://www.thinkers360.com/tl/badge/31895/7496",
    alt: "Top 10 Thought Leader in AI Ethics – Thinkers360",
  },
  {
    rank: "Top 25",
    category: "AI Governance",
    body: "Thinkers360",
    color: "#38bdf8",
    badgeUrl: "https://www.thinkers360.com/tl/assets/images/badges/top25/Top%2025%20-%20AI%20Governance.png",
    linkUrl: "https://www.thinkers360.com/tl/badge/31895/7497",
    alt: "Top 25 Thought Leader in AI Governance – Thinkers360",
  },
  {
    rank: "Top 10",
    category: "AI Safety",
    body: "Thinkers360",
    color: "#34d399",
    badgeUrl: "https://www.thinkers360.com/tl/assets/images/badges/top10/Top%2010%20-%20AI%20Safety.png",
    linkUrl: "https://www.thinkers360.com/tl/badge/31895/8509",
    alt: "Top 10 Thought Leader in AI Safety – Thinkers360",
  },
  {
    rank: "Top 100",
    category: "Agentic AI",
    body: "Thinkers360",
    color: "#a78bfa",
    badgeUrl: "https://www.thinkers360.com/tl/assets/images/badges/top100/Top%20100%20-%20Agentic%20AI.png",
    linkUrl: "https://www.thinkers360.com/tl/badge/31895/8508",
    alt: "Top 100 Thought Leader in Agentic AI – Thinkers360",
  },
];
const thinkers360Certs = [
  {
    title: "Certified Expert · AI Governance",
    issued: "25 June 2026",
    expires: "25 June 2027",
    color: "#38bdf8",
  },
  {
    title: "Certified Expert · AI",
    issued: "21 June 2026",
    expires: "21 June 2027",
    color: "#f59e0b",
  },
];
const favikon = [
  { rank: "#1", label: "AI Governance & Policy · Saudi Arabia", highlight: true },
  { rank: "#1", label: "AI Safety & Tech Ethics · Saudi Arabia", highlight: true },
  { rank: "#10", label: "AI Safety & Tech Ethics · Worldwide", highlight: true },
  { rank: "#51", label: "AI Governance & Policy · Worldwide", highlight: false },
  { rank: "#2", label: "AI & ML Researchers · LinkedIn · Saudi Arabia", highlight: false },
  { rank: "#9", label: "Tech & Software · LinkedIn · Saudi Arabia", highlight: false },
  { rank: "#11", label: "AI Safety & Tech Ethics · LinkedIn · Worldwide", highlight: false },
  { rank: "#144", label: "LinkedIn Overall · Saudi Arabia", highlight: false },
  { rank: "85.1", label: "Favikon Score · Top 200 Creators · Saudi Arabia", highlight: false },
];

const pillars = [
  {
    num: "01",
    name: "The Philosopher",
    desc: "Engineering precision fused with philosophical depth — asking the questions machines cannot.",
  },
  {
    num: "02",
    name: "The Guardian",
    desc: "Custodian of cognitive authority, human agency, and ethical AI governance at scale.",
  },
  {
    num: "03",
    name: "The Bridge-Builder",
    desc: "Connecting policymakers, technologists, and communities across Vision 2030's landscape.",
  },
];

const manifesto = [
  { text: "The most dangerous lie in AI is that ", bold: "efficiency justifies abdication." },
  { text: "Every system that removes a human from the loop ", bold: "removes a conscience from the outcome." },
  { text: "Governance is not a brake on innovation — it is ", bold: "the architecture of trustworthy progress." },
  { text: "Saudi Arabia is not catching up to the AI era. ", bold: "It is shaping what that era means." },
  { text: "My work exists at the intersection of ", bold: "what machines can do and what humans must decide." },
];

const certifications = [
  { name: "PMI® Certified Member", org: "Project Management Institute", type: "Professional Membership" },
  { name: "Six Sigma Green Belt", org: "Quality Management", type: "Professional Certification" },
  { name: "PMI Essentials: Seven AI Project Patterns", org: "Project Management Institute", type: "AI Certification" },
  { name: "Postgraduate Certificate · AI & Digital Imaging", org: "Indian Institute of Science (IISc)", type: "Academic Credential" },
  { name: "Executive Education — AI & Public Policy", org: "Lee Kuan Yew School of Public Policy, NUS", type: "In Progress · March – August 2026" },
];

const research = [
  {
    title: "Responsible AI in Healthcare: From Ethical Intent to Clinical-Grade Decision Governance",
    venue: "npj Digital Medicine · Nature Portfolio",
    status: "Under Review",
    year: "2026",
    id: "0efabad3-a3a5-40e0-840f-7e541b1c6e59",
  },
  {
    title: "Governance by Design: Why AI Accountability Must Be Architected, Not Audited",
    venue: "AI & Society · Springer",
    status: "Under Review",
    year: "2026",
    id: "ef5c457b-94be-4428-b3b5-ca924e100015",
  },
];

const bookRecognition = [
  {
    label: "25 Best Agentic AI Books",
    body: "Thinkers360 Experts",
    url: "https://www.thinkers360.com/25-best-agentic-ai-books-written-by-thinkers360-experts/",
    year: "2026",
  },
];

const affiliations = [
  "Saudi Ministry of Culture",
  "SDAIA",
  "Diriyah Art Futures",
  "Thinkers360",
  "RAGN · Global Ambassador",
  "GCRAI · Global Ambassador",
  "Vision 2030 Programs",
];

export default function ExecutiveCredentials() {
  return (
    <>
      <CredentialsSchema />

      <Helmet>
        <title>Executive Credentials | Syed Tufail Ahmed — AI Governance Recognition</title>
        <meta
          name="description"
          content="Independent recognition of Syed Tufail Ahmed's work in AI governance and ethics. Thinkers360 Top 10 AI Ethics, Top 25 AI Governance, Certified Expert AI Governance, Favikon #1 AI Governance & Policy Saudi Arabia."
        />
        <link rel="canonical" href="https://www.syedtufailahmed.com/executive-credentials" />
        <meta
          name="keywords"
          content="Syed Tufail Ahmed credentials, Thinkers360 AI governance, AI ethics thought leader Saudi Arabia, Favikon KSA ranking, PMI certified AI leader, Vision 2030 AI expert, npj Digital Medicine"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Executive Credentials | Syed Tufail Ahmed" />
        <meta property="og:description" content="Thinkers360 Top 10 AI Ethics · Top 25 AI Governance · Certified Expert · Favikon #1 AI Governance & Policy Saudi Arabia" />
        <meta property="og:url" content="https://www.syedtufailahmed.com/executive-credentials" />
        <meta property="og:image" content="https://www.syedtufailahmed.com/og/home.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Executive Credentials | Syed Tufail Ahmed" />
        <meta name="twitter:description" content="Independent recognition in AI governance, AI ethics, and responsible digital transformation." />
        <meta name="twitter:image" content="https://www.syedtufailahmed.com/og/home.png" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="creds-hero">
        <div className="creds-hero-inner">
          <p className="section-eyebrow">Executive Credentials</p>
          <h1 className="creds-title">
            Independent Recognition.<br />Verified Authority.
          </h1>
          <p className="creds-lead">
            Third-party, independently verified recognition of leadership in
            AI governance, AI ethics, and responsible digital transformation —
            not self-reported, not promotional.
          </p>
          <div className="creds-hero-stats">
            <div className="creds-stat">
              <span className="creds-stat-num">#1</span>
              <span className="creds-stat-label">AI Governance & Policy · Saudi Arabia · Favikon</span>
            </div>
            <div className="creds-stat-div" />
            <div className="creds-stat">
              <span className="creds-stat-num">#1</span>
              <span className="creds-stat-label">AI Safety & Tech Ethics · Saudi Arabia · Favikon</span>
            </div>
            <div className="creds-stat-div" />
            <div className="creds-stat">
              <span className="creds-stat-num">Top 10</span>
              <span className="creds-stat-label">AI Ethics · Thinkers360</span>
            </div>
            <div className="creds-stat-div" />
            <div className="creds-stat">
              <span className="creds-stat-num">Top 25</span>
              <span className="creds-stat-label">AI Governance · Thinkers360</span>
            </div>
            <div className="creds-stat-div" />
            <div className="creds-stat">
              <span className="creds-stat-num">10,300+</span>
              <span className="creds-stat-label">LinkedIn Followers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── THINKERS360 RANKINGS ── */}
      <section className="creds-section">
        <div className="creds-section-inner">
          <p className="section-eyebrow">Thinkers360</p>
          <h2 className="creds-h2">Global Thought Leadership Rankings</h2>
          <p className="creds-body">
            Thinkers360 independently ranks thought leaders across AI, technology,
            and business domains based on content quality, reach, and domain authority —
            not follower count or paid promotion.
          </p>
          <div className="badges-grid">
            {thinkers360.map((b) => (
              <div key={b.category} className="badge-card">
                <a href={b.linkUrl} target="_blank" rel="noopener noreferrer">
                  <img src={b.badgeUrl} alt={b.alt} loading="lazy" />
                </a>
                <div className="badge-card-info">
                  <p className="badge-rank" style={{ color: b.color }}>{b.rank}</p>
                  <p className="badge-cat">{b.category}</p>
                  <p className="badge-body">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THINKERS360 CERTIFICATIONS ── */}
      <section className="creds-section creds-section--alt">
        <div className="creds-section-inner">
          <p className="section-eyebrow">Thinkers360 · Expert Certifications</p>
          <h2 className="creds-h2">Certified Expert Recognition</h2>
          <p className="creds-body">
            Thinkers360 Expert Certifications are awarded following a rigorous,
            data-driven audit of real-world impact — including professional experience,
            academic credentials, published intellectual property, and peer-recognised awards.
            Unlike social media influence rankings, these certifications validate verified
            subject matter mastery.
          </p>
          <div className="certs-list" style={{ marginTop: "1.5rem" }}>
            {thinkers360Certs.map((c) => (
              <div key={c.title} className="cert-card">
                <div>
                  <p className="cert-name" style={{ color: c.color }}>{c.title}</p>
                  <p className="cert-org">Thinkers360 · Issued {c.issued} · Expires {c.expires}</p>
                </div>
                <span className="cert-type">Certified Expert</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAVIKON ── */}
      <section className="creds-section">
        <div className="creds-section-inner">
          <p className="section-eyebrow">Favikon · June 2026</p>
          <h2 className="creds-h2">Creator Influence Rankings · Saudi Arabia & Global</h2>
          <p className="creds-body">
            Favikon ranks professional content creators based on content quality,
            engagement rates, domain authority, and network impact — independently
            of follower counts or paid placements. Score: 85.1 · Top 200 Creators · Saudi Arabia.
          </p>
          <div className="favikon-grid">
            {favikon.map((f) => (
              <div
                key={f.label}
                className="favikon-card"
                style={f.highlight ? { borderColor: "rgba(167,139,250,0.4)", background: "rgba(167,139,250,0.06)" } : {}}
              >
                <p className="favikon-rank" style={f.highlight ? { color: "#a78bfa" } : {}}>{f.rank}</p>
                <p className="favikon-label">{f.label}</p>
              </div>
            ))}
          </div>
          <div className="favikon-image-wrap">
            <img
              src="/favikon-tufail-ahmed.webp"
              alt="Favikon influence ranking — Syed Tufail Ahmed, Saudi Arabia"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ── BOOK RECOGNITION ── */}
      <section className="creds-section creds-section--alt">
        <div className="creds-section-inner">
          <p className="section-eyebrow">Book Recognition</p>
          <h2 className="creds-h2">Human in the Loop — Independent Recognition</h2>
          <p className="creds-body">
            Independent recognition of{" "}
            <Link to="/book">
              <em>Human in the Loop: Reclaiming Human Authority in an Age of Intelligent Systems</em>
            </Link>{" "}
            by third-party expert bodies.
          </p>
          <div className="certs-list" style={{ marginTop: "1.5rem" }}>
            {bookRecognition.map((b) => (
              <div key={b.label} className="cert-card">
                <div>
                  <p className="cert-name">
                    <a href={b.url} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                      {b.label}
                    </a>
                  </p>
                  <p className="cert-org">{b.body} · {b.year}</p>
                </div>
                <span className="cert-type">Book Recognition</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH UNDER REVIEW ── */}
      <section className="creds-section">
        <div className="creds-section-inner">
          <p className="section-eyebrow">Academic Research</p>
          <h2 className="creds-h2">Papers Under Peer Review</h2>
          <p className="creds-body">
            Peer-reviewed research submitted to Nature Portfolio and Springer journals,
            representing a developing body of work in clinical AI governance and
            accountability architecture.
          </p>
          <div className="certs-list" style={{ marginTop: "1.5rem" }}>
            {research.map((r) => (
              <div key={r.id} className="cert-card">
                <div>
                  <p className="cert-name">{r.title}</p>
                  <p className="cert-org">{r.venue} · {r.year}</p>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-muted, #888)", marginTop: "0.25rem", fontFamily: "monospace" }}>
                    ID: {r.id}
                  </p>
                </div>
                <span className="cert-type" style={{ color: "#a78bfa", background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)" }}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IDENTITY PILLARS ── */}
      <section className="creds-section creds-section--alt">
        <div className="creds-section-inner">
          <p className="section-eyebrow">Identity Architecture</p>
          <h2 className="creds-h2">Three roles. One mission.</h2>
          <div className="pillars-grid">
            {pillars.map((p) => (
              <div key={p.num} className="pillar-card">
                <span className="pillar-num">{p.num}</span>
                <p className="pillar-name">{p.name}</p>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="creds-manifesto">
        <div className="creds-manifesto-inner">
          <p className="section-eyebrow">What I Stand For</p>
          <h2 className="creds-h2">The Manifesto</h2>
          <div className="manifesto-lines">
            {manifesto.map((m, i) => (
              <p key={i} className="manifesto-line">
                {m.text}<strong>{m.bold}</strong>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="creds-section creds-section--alt">
        <div className="creds-section-inner">
          <p className="section-eyebrow">Certifications & Education</p>
          <h2 className="creds-h2">Grounded in both practice and principle.</h2>
          <div className="certs-list">
            {certifications.map((c) => (
              <div key={c.name} className="cert-card">
                <div>
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-org">{c.org}</p>
                </div>
                <span className="cert-type">{c.type}</span>
              </div>
            ))}
          </div>

          <div className="pmi-cert-wrap">
            <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>PMI® Certificate</p>
            <div className="pmi-cert-card">
              <img
                src="/pmi-certified-member.jpg"
                alt="PMI Certified Member Certificate — Syed Tufail Ahmed"
                loading="lazy"
                decoding="async"
              />
              <a
                href="/pmi-certified-member.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost pmi-view-btn"
              >
                View Full Certificate →
              </a>
            </div>
          </div>
        </div>
      </section>
      

      {/* ── AFFILIATIONS ── */}
      <section className="creds-section">
        <div className="creds-section-inner">
          <p className="section-eyebrow">Affiliations</p>
          <h2 className="creds-h2">Institutional connections.</h2>
          <div className="affiliations-row">
            {affiliations.map((a) => (
              <span key={a} className="affiliation-badge">{a}</span>
            ))}
          </div>
          <p className="creds-body" style={{ marginTop: "1.5rem" }}>
            These recognitions reflect independent verification of leadership in
            responsible AI design, Human-in-the-Loop governance, and institutional
            accountability. They are not influencer rankings or paid promotions.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="creds-cta">
        <div className="creds-cta-inner">
          <h2 className="creds-cta-heading">
            "AI should scale human judgment,<br />not substitute it."
          </h2>
          <p className="creds-cta-attr">— Syed Tufail Ahmed</p>
          <div className="creds-cta-actions">
            <Link to="/speaking" className="btn btn-primary">Invite Me to Speak →</Link>
            <Link to="/about" className="btn btn-ghost">About Syed →</Link>
          </div>
        </div>
      </section>
     {/* ── DOWNLOAD DOSSIER ── */}
      <section className="creds-section" style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <p className="section-eyebrow">Executive Dossier</p>
        <h2 className="creds-h2" style={{ marginBottom: "0.5rem" }}>Download the Full Profile</h2>
        <p className="creds-body" style={{ marginBottom: "1.5rem" }}>
          A complete executive and thought leadership profile covering frameworks,
          research, implementation, and global engagement.
        </p><a
        
          href="/Tufail_Ahmed_Executive_Dossier.pdf"
          download="Tufail_Ahmed_Executive_Dossier.pdf"
          className="btn btn-primary"
        >
          ↓ Download Executive Dossier
        </a>
      </section>
    </>
  );
}
