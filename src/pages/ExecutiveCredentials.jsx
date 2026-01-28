import CredentialsSchema from "../components/CredentialsSchema";

export default function ExecutiveCredentials() {
  return (
    <>
      <CredentialsSchema />
     
    <main className="section">
      <div className="container">

        <h1>Executive Credentials & Independent Recognition</h1>

        <p>
          This page documents independent, third-party recognition of
          Syed Tufail Ahmed’s work in AI Ethics, AI Governance,
          and responsible digital transformation.
        </p>

<section className="credentials-badges">
  <div className="badges-grid">

    {/* Badge 1 */}
    <div className="badge-card">
      <a
        href="https://www.thinkers360.com/tl/badge/31895/7496"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.thinkers360.com/tl/assets/images/badges/top10/Top%2010%20-%20AI%20Ethics.png"
          alt="Top 10 Thought Leader in AI Ethics – Thinkers360"
        />
      </a>
      <h3>Top 10 Thought Leader</h3>
      <p>AI Ethics · Thinkers360</p>
    </div>

    {/* Badge 2 */}
    <div className="badge-card">
      <a
        href="https://www.thinkers360.com/tl/badge/31895/7497"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.thinkers360.com/tl/assets/images/badges/top25/Top%2025%20-%20AI%20Governance.png"
          alt="Top 25 Thought Leader in AI Governance – Thinkers360"
        />
      </a>
      <h3>Top 25 Thought Leader</h3>
      <p>AI Governance · Thinkers360</p>
    </div>

  </div>
</section>

<section className="credential-card influence-card">
  <img
    src="/favikon-tufail-ahmed.webp"
    alt="Favikon Top 200 Creators Saudi Arabia – Tufail Ahmed"
    width="420"
    height="520"
    loading="lazy"
    decoding="async"
  />

  <h3>Favikon Influence Ranking</h3>

  <p className="credential-meta">
    Ranked <strong>#4</strong> in Saudi Arabia · AI Research & Innovation
  </p>

  <p className="credential-description">
    Independent creator influence ranking based on content quality, engagement,
    domain authority, and network impact across LinkedIn and professional platforms.
  </p>

  <a
    href="https://www.favikon.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="credential-link"
  >
    View Ranking Methodology
  </a>
</section>

        <section>
          <h2>What This Recognition Represents</h2>

          <p>
            These recognitions reflect leadership in responsible AI design,
            human-in-the-loop governance, and institutional accountability.
            They do not represent influencer activity or promotional rankings.
          </p>
        </section>
<section className="credentials-memberships">
  <h2 className="credentials-section-title">
    Professional Memberships & Certifications
  </h2>

  <div className="membership-card">
<div className="membership-image-wrapper">
  <img
    src="/pmi-certified-member.jpg"
    alt="PMI Certified Member Certificate"
    className="membership-image-thumb"
  />

  <a
    href="/pmi-certified-member.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="view-certificate-btn"
  >
    View Full Certificate
  </a>
</div>

    <div className="membership-content">
      <h3>PMI® Certified Member</h3>
      <p className="membership-org">
        Project Management Institute (PMI)
      </p>

      <p className="membership-description">
        Recognized member of the world’s leading professional association
        for project, program, and portfolio management, committed to PMI’s
        Code of Ethics and Professional Conduct.
      </p>
      <p className="verification-note">
  Certificate issued by Project Management Institute (PMI).  
  Membership details verifiable upon request.
</p>
    </div>
  </div>
</section>

      </div>
    </main>
  </>
      );
}
