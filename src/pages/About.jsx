import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PersonSchema from "../components/PersonSchema";

const career = [
  {
    role: "Senior Program Manager",
    org: "Ministry of Culture, Saudi Arabia",
    period: "Sep 2023 – Present",
    location: "Riyadh, KSA",
    summary:
      "Leading AI-enabled digital transformation initiatives within one of Saudi Arabia's most significant cultural institutions. I oversee governance-aware programs spanning AI/ML, immersive platforms, and digital preservation — ensuring intelligent systems operate with accountability, regulatory alignment, and institutional trust.",
  },
  {
    role: "Head, Project Management Centre of Excellence",
    org: "SOL Gulf",
    period: "Oct 2023 – Present",
    location: "Riyadh, KSA",
    summary:
      "Established and lead a PMCoE supporting complex, multi-year public-sector digital transformation programs. I built the delivery framework from the ground up — standardising governance, reporting, and risk mechanisms across active programs, improving delivery predictability by approximately 30%.",
  },
  {
    role: "Technology Manager",
    org: "Rozgarkart",
    period: "Feb 2021 – Sep 2023",
    location: "Bengaluru, India",
    summary:
      "Scaled an AI-powered HR-tech platform connecting blue-collar workers with employers. Developed automated workforce-matching systems and led the architecture evolution required to support platform growth.",
  },
  {
    role: "Product Release Manager",
    org: "IQVIA",
    period: "Mar 2018 – Feb 2021",
    location: "Bengaluru, India",
    summary:
      "Directed end-to-end release lifecycle management for healthcare software products, ensuring regulatory compliance across analytics and AI solutions. Built risk assessment frameworks for high-stakes clinical environments.",
  },
  {
    role: "IT Project Manager",
    org: "ITC Infotech",
    period: "Apr 2015 – Mar 2018",
    location: "Bengaluru, India",
    summary:
      "Managed digital transformation programs for global beauty brands, with a focus on e-commerce platforms. Delivered zero-downtime sales events and drove measurable improvements in customer engagement.",
  },
  {
    role: "Project Manager",
    org: "The National Commercial Bank (NCB)",
    period: "Apr 2008 – Sep 2014",
    location: "Jeddah, KSA",
    summary:
      "Delivered next-generation online trading and digital banking platforms integrating with core financial systems. Implemented risk management frameworks for large-scale banking modernisation programmes.",
  },
];

const focusAreas = [
  "AI Transformation Strategy → Execution Operating Models",
  "Human-in-the-Loop & Decision-Centric AI Systems",
  "AI Governance, Risk & Accountability Frameworks",
  "Enterprise & Public-Sector Platform Transformation",
  "Program & Portfolio Leadership at Scale",
];

export default function About() {
  return (
    <>
      <PersonSchema />

      <Helmet>
        <title>About Syed Tufail Ahmed | AI Governance Leader · Author · Riyadh, KSA</title>
        <meta
          name="description"
          content="Syed Tufail Ahmed is an AI governance and digital transformation leader based in Riyadh, Saudi Arabia. 20+ years of experience across enterprise platforms, public-sector programs, and human-centered AI. Author of Human in the Loop."
        />
        <link rel="canonical" href="https://www.syedtufailahmed.com/about" />
        <meta
          name="keywords"
          content="Syed Tufail Ahmed, AI governance leader Saudi Arabia, digital transformation Riyadh, human-in-the-loop AI, AI ethics KSA, Vision 2030 AI, keynote speaker AI, Ministry of Culture Saudi Arabia"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content="About Syed Tufail Ahmed | AI Governance Leader · Riyadh, KSA" />
        <meta
          property="og:description"
          content="AI governance and digital transformation leader. 20+ years spanning enterprise platforms, healthcare AI, and public-sector programs. Author of Human in the Loop."
        />
        <meta property="og:url" content="https://www.syedtufailahmed.com/about" />
        <meta property="og:image" content="https://www.syedtufailahmed.com/og/home.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Syed Tufail Ahmed — AI Governance Leader and Author" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Syed Tufail Ahmed | AI Governance Leader · Riyadh, KSA" />
        <meta
          name="twitter:description"
          content="AI governance and digital transformation leader. Author of Human in the Loop. Based in Riyadh, Saudi Arabia."
        />
        <meta name="twitter:image" content="https://www.syedtufailahmed.com/og/home.png" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-text">
            <p className="section-eyebrow">About</p>
            <h1 className="about-title">
              The Philosopher.<br />
              The Guardian.<br />
              The Bridge-Builder.
            </h1>
            <p className="about-lead">
              I stand at a rare intersection: the technical precision of 20+ years
              building enterprise AI, and the philosophical conviction that technology
              must answer to human values — not the other way around.
            </p>
          </div>
          <div className="about-hero-photo">
            <img
              src="/profilephoto-round.png"
              alt="Syed Tufail Ahmed — AI Governance Leader and Author"
              width="260"
              height="260"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ── WHO I AM ── */}
      <section className="about-section">
        <div className="about-section-inner">
          <p className="section-eyebrow">Who I Am</p>
          <h2 className="about-h2">
            I help organisations and nations harness AI without losing what makes them human.
          </h2>

          <p className="about-body">
            I am an AI governance and digital transformation leader based in{" "}
            <strong>Riyadh, Saudi Arabia</strong>. My work sits at the intersection
            of AI strategy, accountable system design, and large-scale public-sector
            transformation — with a specific focus on how organisations move from AI
            experimentation into production-scale deployment that is genuinely trustworthy.
          </p>

          <p className="about-body">
            I currently serve as{" "}
            <strong>Senior Program Manager at the Ministry of Culture, Saudi Arabia</strong>
            {" "}and{" "}
            <strong>Head of the Project Management Centre of Excellence at SOL Gulf</strong>
            {" "}— leading complex, multi-year digital programs directly within the Vision 2030 ecosystem.
          </p>

          <p className="about-body">
            I am the author of{" "}
            <Link to="/book">
              <em>Human in the Loop: Reclaiming Human Authority in an Age of Intelligent Systems</em>
            </Link>
            {" "}— a blueprint for leaders who believe that AI should scale human judgment, not replace it.
          </p>

          <blockquote className="about-quote">
            "The most dangerous AI isn't the one that fails. It's the one we stopped questioning."
          </blockquote>
        </div>
      </section>

      {/* ── FOCUS AREAS ── */}
      <section className="about-focus">
        <div className="about-focus-inner">
          <p className="section-eyebrow">What I Work On</p>
          <ul className="focus-list">
            {focusAreas.map((f) => (
              <li key={f} className="focus-item">
                <span className="focus-arrow">→</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CAREER TIMELINE ── */}
      <section className="about-section about-section--alt">
        <div className="about-section-inner">
          <p className="section-eyebrow">Career</p>
          <h2 className="about-h2">20+ years. Two continents. One throughline.</h2>

          <p className="about-body">
            My career began in software engineering and has evolved — deliberately —
            into AI-enabled transformation leadership. I have delivered programs across
            banking, healthcare, e-commerce, and national digital platforms, always
            moving toward more complex, higher-stakes environments where governance and
            human judgment are essential.
          </p>

          <div className="career-timeline">
            {career.map((c, i) => (
              <div key={i} className="career-item">
                <div className="career-dot" />
                <div className="career-content">
                  <div className="career-header">
                    <div className="career-header-left">
                      <p className="career-role">{c.role}</p>
                      <p className="career-org">{c.org}</p>
                    </div>
                    <div className="career-header-right">
                      <p className="career-period">{c.period}</p>
                      <p className="career-location">{c.location}</p>
                    </div>
                  </div>
                  <p className="career-summary">{c.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="about-section">
        <div className="about-section-inner">
          <p className="section-eyebrow">Philosophy</p>
          <h2 className="about-h2">Human-Centered AI is not a constraint. It is the design.</h2>

          <p className="about-body">
            As AI accelerates in capability, its most important challenge is not
            technical — it is human. Every system I lead or advise on is built
            around a single principle:{" "}
            <strong>intelligent systems should augment human decision-making, not replace it.</strong>
          </p>

          <p className="about-body">
            This is not caution for its own sake. Organisations that embed human
            judgment into AI workflows — building accountability checkpoints,
            escalation paths, and governance structures into the system design
            itself — consistently outperform those that automate blindly. The
            human-in-the-loop is a competitive advantage, not a bottleneck.
          </p>

          <p className="about-body">
            This conviction shapes everything: how I design programs, how I advise
            leadership teams, how I speak at conferences, and what I wrote about in{" "}
            <Link to="/book"><em>Human in the Loop</em></Link>.
          </p>

          <Link to="/writing/human-in-the-loop-ai-governance" className="section-link">
            Read my essay on Human-in-the-Loop AI & Governance →
          </Link>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="about-section about-section--alt">
        <div className="about-section-inner">
          <p className="section-eyebrow">Education & Certifications</p>
          <h2 className="about-h2">Grounded in both practice and principle.</h2>

          <div className="edu-grid">
            <div className="edu-card">
              <p className="edu-degree">Public Policy with AI</p>
              <p className="edu-school">Lee Kuan Yew School of Public Policy</p>
              <p className="edu-year">2026</p>
            </div>
            <div className="edu-card">
              <p className="edu-degree">Postgraduate Certificate · AI & Digital Imaging</p>
              <p className="edu-school">Indian Institute of Science (IISc)</p>
              <p className="edu-year">2021 – 2022</p>
            </div>
            <div className="edu-card">
              <p className="edu-degree">Bachelor of Engineering · Information Technology</p>
              <p className="edu-school">Bangalore University</p>
              <p className="edu-year">Foundation</p>
            </div>
          </div>

          <div className="cert-row">
            <span className="cert-badge">PMI® Certified Member</span>
            <span className="cert-badge">Six Sigma Green Belt</span>
            <span className="cert-badge">PMI Essentials: Seven AI Project Patterns</span>
            <span className="cert-badge">Top 10 · AI Ethics · Thinkers360</span>
            <span className="cert-badge">Top 25 · AI Governance · Thinkers360</span>
          </div>
        </div>
      </section>

      {/* ── DISAMBIGUATION ── */}
      <section className="about-section">
        <div className="about-section-inner">
          <p className="about-disclaimer">
            This website represents Syed Tufail Ahmed based in Riyadh, Saudi Arabia —
            focused on AI governance, digital transformation, and large-scale public-sector
            platforms. It is not associated with other individuals with the same name in
            unrelated roles or organisations.
          </p>
        </div>
      </section>
    </>
  );
}
