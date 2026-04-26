import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const newsletter = {
  name: "Human in the Loop",
  description:
    "A monthly newsletter exploring how organisations can use AI without surrendering human authority. Decision accountability, governance frameworks, and the future of intelligent systems.",
  subscribers: "1,662",
  frequency: "Monthly",
  url: "https://www.linkedin.com/newsletters/human-in-the-loop-7425167651922165761/",
};

const editions = [
  {
    num: "02",
    title: "The Dashboard Dilemma",
    subtitle: "When Visibility Replaces Accountability",
    date: "April 2026",
    reactions: 12,
    comments: 9,
    description:
      "Having a dashboard full of AI metrics doesn't mean anyone is accountable for what those metrics reveal. This edition examines how organisations mistake visibility for governance — and what real accountability actually requires.",
    url: "https://www.linkedin.com/pulse/dashboard-dilemma-syed-tufail-ahmed-rsuuf",
    tags: ["AI Governance", "Accountability", "Decision Systems"],
    latest: true,
  },
  {
    num: "01",
    title: "Why AI Risk Begins With Decisions, Not Data",
    subtitle: "",
    date: "February 2026",
    reactions: 32,
    comments: 12,
    description:
      "Most AI risk frameworks focus on data quality, model accuracy, and bias. But the real risk surfaces earlier — at the moment a decision is made about what the AI is authorised to decide. This edition reframes AI risk as a governance problem, not a data problem.",
    url: "https://www.linkedin.com/pulse/why-ai-risk-begins-decisions-data-syed-tufail-ahmed-jl1yf",
    tags: ["AI Risk", "Decision Governance", "Human-in-the-Loop"],
    latest: false,
  },
];

const papers = [
  {
    title: "A Decision-Centric Human-in-the-Loop Governance Architecture for Operationalizing IEEE 7000-2021",
    venue: "IEEE · Independent Research",
    status: "Draft",
    statusType: "draft",
    year: "2026",
    abstract:
      "Proposes a decision-centric Human-in-the-Loop governance architecture that complements IEEE 7000-2021 by binding ethical accountability to explicit human decision authority at defined control points. Introduces the concepts of decision displacement and authority leakage — where responsibility remains formally human while practical control migrates to automated pipelines.",
    keywords: ["Human-in-the-Loop", "AI Governance", "IEEE 7000-2021", "Decision Authority", "Ethical System Design"],
  },
  {
    title: "Localizing Data Before Scaling Your Product: Strategic, Economic, and Technological Implications of Saudi Arabia's SADAIA Framework",
    venue: "Independent Research · Riyadh, Saudi Arabia",
    status: "Completed",
    statusType: "complete",
    year: "2025",
    abstract:
      "A comprehensive analysis of the strategic, economic, and technological implications of data localization in Saudi Arabia, situating SADAIA's approach within global trends. Incorporates policy analysis, comparative benchmarking with GDPR, India's DPDP Act, and UAE data laws, alongside sector-specific case studies in fintech, healthtech, and e-commerce.",
    keywords: ["SADAIA", "Data Localization", "PDPL", "Vision 2030", "AI Ethics", "Saudi Arabia"],
  },
  {
    title: "Digital Biomarkers and Artificial Intelligence: Toward Personalized Metabolic Therapeutics",
    venue: "IISc · AI in Digital Health & Medical Imaging — Cohort 7",
    status: "Completed",
    statusType: "complete",
    year: "2022",
    abstract:
      "Proposes an AI framework integrating multimodal digital biomarkers — including continuous glucose monitors, smartwatch metrics, body composition, food intake logs, and sleep quality — to model and optimise individual metabolic states. Applies deep learning, reinforcement learning, and explainable AI (XAI) to predict glycemic responses and generate adaptive recommendations for potential diabetes reversal.",
    keywords: ["Digital Biomarkers", "AI Healthcare", "Diabetes", "Reinforcement Learning", "Explainable AI"],
  },
];

const articles = [
  {
    title: "Human-in-the-Loop Is Not a Checkbox",
    date: "February 5, 2026",
    description:
      "Treating human-in-the-loop as a compliance tick-box misses the point entirely. This article examines why genuine human oversight requires intentional system design — not a signature field at the end of an automated pipeline.",
    url: "https://www.linkedin.com/pulse/human-in-the-loop-checkbox-syed-tufail-ahmed-yqbpf",
    tags: ["Decision Risks", "Governance Blind Spots", "Human Oversight"],
  },
];

const onSite = [
  {
    title: "Human-in-the-Loop AI: Reclaiming Human Authority",
    description:
      "Why the future of AI depends not on automation alone, but on preserving human judgment, accountability, and institutional control at scale.",
    date: "2025",
    to: "/writing/human-in-the-loop",
    tags: ["Human-in-the-Loop", "AI Ethics", "Governance"],
  },
];

const statusColors = {
  draft: { color: "#f59e0b", bg: "rgba(245, 158, 11, 0.08)", border: "rgba(245, 158, 11, 0.2)" },
  complete: { color: "#38bdf8", bg: "rgba(56, 189, 248, 0.08)", border: "rgba(56, 189, 248, 0.18)" },
  published: { color: "#34d399", bg: "rgba(52, 211, 153, 0.08)", border: "rgba(52, 211, 153, 0.2)" },
};

export default function Writing() {
  return (
    <>
      <Helmet>
        <title>Writing & Research | Syed Tufail Ahmed — AI Governance</title>
        <meta
          name="description"
          content="Newsletter, research papers, and essays by Syed Tufail Ahmed on AI governance, human-in-the-loop systems, data localization, and healthcare AI. Including IEEE research and the Human in the Loop newsletter."
        />
        <link rel="canonical" href="https://www.syedtufailahmed.com/writing" />
        <meta
          name="keywords"
          content="Syed Tufail Ahmed research papers, Human in the Loop newsletter, AI governance research, IEEE 7000-2021, SADAIA data localization, healthcare AI research, human-centered AI writing"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Writing & Research | Syed Tufail Ahmed" />
        <meta property="og:description" content="Newsletter, research papers, and essays on AI governance, human-in-the-loop systems, and responsible AI." />
        <meta property="og:url" content="https://www.syedtufailahmed.com/writing" />
        <meta property="og:image" content="https://www.syedtufailahmed.com/og/home.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Writing & Research | Syed Tufail Ahmed" />
        <meta name="twitter:description" content="Newsletter, research papers, and essays on AI governance and human-centered AI." />
        <meta name="twitter:image" content="https://www.syedtufailahmed.com/og/home.png" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="writing-hero">
        <div className="writing-hero-inner">
          <p className="section-eyebrow">Writing & Research</p>
          <h1 className="writing-hero-title">
            Ideas worth thinking about.<br />Questions worth publishing.
          </h1>
          <p className="writing-hero-sub">
            A monthly newsletter, peer-reviewed research papers, and essays on AI governance,
            decision accountability, and what it means to stay human in an age of intelligent systems.
          </p>
          <div className="writing-hero-stats">
            <div className="writing-stat">
              <span className="writing-stat-num">1,662</span>
              <span className="writing-stat-label">newsletter subscribers</span>
            </div>
            <div className="writing-stat-div" />
            <div className="writing-stat">
              <span className="writing-stat-num">3</span>
              <span className="writing-stat-label">research papers</span>
            </div>
            <div className="writing-stat-div" />
            <div className="writing-stat">
              <span className="writing-stat-num">2</span>
              <span className="writing-stat-label">newsletter editions</span>
            </div>
            <div className="writing-stat-div" />
            <div className="writing-stat">
              <span className="writing-stat-num">1</span>
              <span className="writing-stat-label">LinkedIn article</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER BLOCK ── */}
      <section className="writing-newsletter">
        <div className="writing-newsletter-inner">
          <div className="newsletter-header">
            <div className="newsletter-badge">Newsletter</div>
            <div className="newsletter-stats">
              <span className="newsletter-stat">
                <span className="newsletter-stat-num">{newsletter.subscribers}</span>
                <span className="newsletter-stat-label">subscribers</span>
              </span>
              <span className="newsletter-stat-divider">·</span>
              <span className="newsletter-stat">
                <span className="newsletter-stat-label">{newsletter.frequency}</span>
              </span>
            </div>
          </div>

          <div className="newsletter-body">
            <div className="newsletter-info">
              <h2 className="newsletter-name">{newsletter.name}</h2>
              <p className="newsletter-desc">{newsletter.description}</p>
              <a
                href={newsletter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary newsletter-subscribe"
              >
                Subscribe on LinkedIn →
              </a>
            </div>
            <div className="newsletter-cover">
              <img
                src="/book.png"
                alt="Human in the Loop newsletter"
                width="120"
                height="154"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER EDITIONS ── */}
      <section className="writing-editions">
        <div className="writing-editions-inner">
          <p className="section-eyebrow">Newsletter Editions</p>
          <h2 className="writing-section-heading">Latest issues</h2>
          <div className="editions-grid">
            {editions.map((e) => (
              <a
                key={e.num}
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`edition-card ${e.latest ? "edition-card--featured" : ""}`}
              >
                <div className="edition-card-top">
                  <div className="edition-meta-row">
                    <span className="edition-num">Issue {e.num}</span>
                    <span className="edition-date">{e.date}</span>
                  </div>
                  {e.latest && <span className="edition-latest-badge">Latest</span>}
                </div>
                <h3 className="edition-title">{e.title}</h3>
                {e.subtitle && <p className="edition-subtitle">{e.subtitle}</p>}
                <p className="edition-desc">{e.description}</p>
                <div className="edition-footer">
                  <div className="edition-tags">
                    {e.tags.map((t) => (
                      <span key={t} className="edition-tag">{t}</span>
                    ))}
                  </div>
                  <div className="edition-engagement">
                    <span>{e.reactions} reactions</span>
                    <span>·</span>
                    <span>{e.comments} comments</span>
                  </div>
                </div>
                <span className="edition-read-link">Read on LinkedIn →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDALONE ARTICLES ── */}
      <section className="writing-articles">
        <div className="writing-articles-inner">
          <p className="section-eyebrow">Articles</p>
          <h2 className="writing-section-heading">Standalone LinkedIn articles</h2>

          <div className="articles-list">
            {articles.map((a) => (
              <a
                key={a.title}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="article-card"
              >
                <div className="article-card-inner">
                  <div className="article-card-body">
                    <p className="article-date">{a.date}</p>
                    <h3 className="article-title">{a.title}</h3>
                    <p className="article-desc">{a.description}</p>
                    <div className="edition-tags" style={{ marginTop: "1rem" }}>
                      {a.tags.map((t) => (
                        <span key={t} className="edition-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <span className="article-read-link">Read on LinkedIn →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH PAPERS ── */}
      <section className="writing-research">
        <div className="writing-research-inner">
          <p className="section-eyebrow">Research</p>
          <h2 className="writing-section-heading">Academic & independent papers</h2>

          <div className="papers-list">
            {papers.map((p, i) => {
              const s = statusColors[p.statusType];
              return (
                <article key={i} className="paper-card">
                  <div className="paper-card-header">
                    <div className="paper-top-row">
                      <span
                        className="paper-status"
                        style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}
                      >
                        {p.status}
                      </span>
                      <span className="paper-year">{p.year}</span>
                    </div>
                    <h3 className="paper-title">{p.title}</h3>
                    <p className="paper-venue">{p.venue}</p>
                  </div>

                  <p className="paper-abstract">{p.abstract}</p>

                  <div className="paper-keywords">
                    {p.keywords.map((k) => (
                      <span key={k} className="paper-keyword">{k}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ON-SITE ESSAYS ── */}
      <section className="writing-essays">
        <div className="writing-essays-inner">
          <p className="section-eyebrow">Essays</p>
          <h2 className="writing-section-heading">Long-form writing</h2>
          <div className="essays-list">
            {onSite.map((a) => (
              <Link key={a.title} to={a.to} className="essay-card">
                <div className="essay-card-inner">
                  <div>
                    <p className="essay-date">{a.date}</p>
                    <h3 className="essay-title">{a.title}</h3>
                    <p className="essay-desc">{a.description}</p>
                    <div className="edition-tags" style={{ marginTop: "1rem" }}>
                      {a.tags.map((t) => (
                        <span key={t} className="edition-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <span className="essay-read-link">Read essay →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE CTA ── */}
      <section className="writing-cta">
        <div className="writing-cta-inner">
          <p className="section-eyebrow">Stay in the loop</p>
          <h2 className="writing-cta-heading">
            New edition every month.<br />No noise. Just ideas that matter.
          </h2>
          <p className="writing-cta-sub">
            Join {newsletter.subscribers} subscribers reading <em>Human in the Loop</em> —
            the newsletter on AI governance, decision accountability, and staying human
            as intelligent systems scale.
          </p>
          <a
            href={newsletter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Subscribe on LinkedIn →
          </a>
          <p className="writing-cta-note">Free. Monthly. On LinkedIn.</p>
        </div>
      </section>
    </>
  );
}
