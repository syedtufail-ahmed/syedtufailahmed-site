import { Helmet } from "react-helmet-async";

const keynotes = [
  {
    num: "01",
    title: "Human in the Loop",
    duration: "Flagship · 45–60 min",
    description:
      "The defining challenge of the AI era isn't capability — it's control. This keynote makes the case for human-in-the-loop design as an enterprise imperative: how to scale AI while preserving judgment, accountability, and institutional trust.",
    audience: "C-suite, boards, government leaders, technology conferences",
    outcomes: [
      "A clear framework for where AI should and shouldn't replace human decision-making",
      "Practical governance checkpoints organisations can apply immediately",
      "A memorable mental model audiences will still use six months later",
    ],
  },
  {
    num: "02",
    title: "AI Governance as Competitive Advantage",
    duration: "30–45 min",
    description:
      "Most organisations treat AI governance as a compliance burden. The ones winning treat it as a strategic asset. This session reframes accountability frameworks as drivers of speed, trust, and differentiation — not friction.",
    audience: "Enterprise leadership, risk & compliance teams, regulators",
    outcomes: [
      "Why governance-light AI programs fail at scale",
      "How to build accountability into AI without slowing delivery",
      "Case patterns from public-sector and enterprise transformation",
    ],
  },
  {
    num: "03",
    title: "Vision 2030 & Sovereign AI",
    duration: "30–45 min",
    description:
      "Saudi Arabia is running one of the most ambitious digital transformation programs in history. This keynote explores what sovereign AI means in practice — how nations build AI capability that reflects their values, culture, and long-term strategic interests.",
    audience: "Government forums, regional technology summits, policy leaders",
    outcomes: [
      "The distinction between adopting AI and owning AI capability",
      "Lessons from large-scale public-sector platform transformation",
      "A practical lens on AI governance in high-context cultural environments",
    ],
  },
  {
    num: "04",
    title: "The Ethics of Healthcare AI",
    duration: "30–45 min",
    description:
      "When AI makes clinical recommendations, who is accountable? This session draws on real deployment experience to explore the intersection of human judgment, patient safety, and intelligent systems in high-stakes healthcare environments.",
    audience: "Healthcare leadership, clinical technology teams, medical conferences",
    outcomes: [
      "Where the human-in-the-loop principle is non-negotiable in healthcare",
      "How regulatory alignment and AI deployment can move together",
      "Frameworks for building clinician trust in AI-assisted workflows",
    ],
  },
];

const formats = [
  {
    icon: "◆",
    label: "Keynote",
    detail: "30–60 min · Main stage or plenary",
  },
  {
    icon: "◈",
    label: "Panel",
    detail: "Moderated discussion · AI governance, ethics, transformation",
  },
  {
    icon: "◉",
    label: "Workshop",
    detail: "Half-day · Executive teams · Applied frameworks",
  },
  {
    icon: "◎",
    label: "Advisory",
    detail: "Strategic counsel · Boards & government programs",
  },
];

export default function Speaking() {
  return (
    <>
      <Helmet>
        <title>Speaking | Syed Tufail Ahmed — AI Governance Keynote Speaker</title>
        <meta
          name="description"
          content="Invite Syed Tufail Ahmed to speak at your conference or event. Keynotes on AI governance, human-in-the-loop systems, Vision 2030, and responsible AI transformation."
        />
        <link rel="canonical" href="https://www.syedtufailahmed.com/speaking" />
        <meta property="og:title" content="Speaking | Syed Tufail Ahmed" />
        <meta property="og:description" content="Keynotes on AI governance, human-in-the-loop systems, and responsible AI transformation." />
        <meta property="og:url" content="https://www.syedtufailahmed.com/speaking" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="speaking-hero">
        <div className="speaking-hero-inner">
          <p className="section-eyebrow">Speaking</p>
          <h1 className="speaking-title">
            Keynotes That Make Leaders<br />Think Differently.
          </h1>
          <p className="speaking-intro">
            I don't come to tell your audience that AI is exciting. I come to
            ask the questions that don't fit in a product demo — and leave them
            with frameworks they'll still use six months later.
          </p>
          <a href="mailto:syed@syedtufailahmed.com" className="btn btn-primary speaking-cta">
            Invite Me to Speak →
          </a>
        </div>
      </section>

      {/* ── FORMATS ── */}
      <section className="speaking-formats-bar">
        <div className="speaking-formats-inner">
          {formats.map((f) => (
            <div key={f.label} className="speaking-format-item">
              <span className="speaking-format-icon">{f.icon}</span>
              <div>
                <p className="speaking-format-label">{f.label}</p>
                <p className="speaking-format-detail">{f.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── KEYNOTES ── */}
      <section className="speaking-keynotes">
        <div className="speaking-keynotes-inner">
          <p className="section-eyebrow">Keynote Topics</p>
          <h2 className="section-heading">Four signature talks.<br />One consistent conviction.</h2>

          <div className="keynote-list">
            {keynotes.map((k) => (
              <article key={k.num} className="keynote-full-card">
                <div className="keynote-full-header">
                  <span className="keynote-full-num">{k.num}</span>
                  <div>
                    <h3 className="keynote-full-title">{k.title}</h3>
                    <p className="keynote-full-meta">{k.duration}</p>
                  </div>
                </div>

                <p className="keynote-full-desc">{k.description}</p>

                <div className="keynote-full-body">
                  <div className="keynote-audience">
                    <p className="keynote-body-label">Best for</p>
                    <p className="keynote-body-text">{k.audience}</p>
                  </div>

                  <div className="keynote-outcomes">
                    <p className="keynote-body-label">Audience takeaways</p>
                    <ul className="keynote-outcomes-list">
                      {k.outcomes.map((o, i) => (
                        <li key={i}>{o}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXT ── */}
      <section className="speaking-context">
        <div className="speaking-context-inner">
          <p className="section-eyebrow">Background</p>
          <h2 className="section-heading">Why this perspective is different.</h2>

          <div className="speaking-context-grid">
            <div className="speaking-context-card">
              <p className="speaking-context-num">20+</p>
              <p className="speaking-context-label">Years building and leading AI & enterprise platforms</p>
            </div>
            <div className="speaking-context-card">
              <p className="speaking-context-num">KSA</p>
              <p className="speaking-context-label">Based in Riyadh, working directly on Vision 2030 programs</p>
            </div>
            <div className="speaking-context-card">
              <p className="speaking-context-num">Top 10</p>
              <p className="speaking-context-label">AI Ethics thought leader · Thinkers360 global ranking</p>
            </div>
            <div className="speaking-context-card">
              <p className="speaking-context-num">Book</p>
              <p className="speaking-context-label"><em>Human in the Loop</em> — published blueprint for responsible AI</p>
            </div>
          </div>

          <p className="speaking-context-body">
            I speak from direct operational experience — not theory. My background
            spans software engineering, enterprise platform delivery, healthcare AI,
            and large-scale public-sector transformation. That combination means I can
            meet your audience wherever they are: technical teams, executive leadership,
            policy makers, or mixed rooms.
          </p>
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <section className="speaking-booking">
        <div className="speaking-booking-inner">
          <h2 className="speaking-booking-title">Ready to bring this to your event?</h2>
          <p className="speaking-booking-sub">
            I speak at conferences, corporate leadership events, government forums,
            and executive workshops — in Saudi Arabia and internationally.
          </p>
          <a
            href="mailto:syed@syedtufailahmed.com?subject=Speaking%20Inquiry"
            className="btn btn-primary"
          >
            Send a Speaking Inquiry →
          </a>
          <p className="speaking-booking-note">
            Include your event name, date, location, and audience. I respond within 48 hours.
          </p>
        </div>
      </section>
    </>
  );
}
