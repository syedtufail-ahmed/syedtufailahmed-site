export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* Left: Profile image */}
        <div className="hero-image">
          <img
            src="/tufail-ahmed-portrait.webp"
            alt="Syed Tufail Ahmed – AI Governance and Public Sector Digital Transformation Leader"
            width="360"
            height="360"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Right: Text content */}
        <div className="hero-content">
          <h1>Syed Tufail Ahmed</h1>

          <p className="hero-title">
            AI Governance · Public Sector Digital Transformation
          </p>

          <p className="hero-subtitle">
            Human-in-the-Loop · Responsible AI · Institutional Accountability
          </p>
        </div>

      </div>
    </section>
  );
}
