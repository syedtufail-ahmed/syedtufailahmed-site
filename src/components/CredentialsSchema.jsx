import { Helmet } from "react-helmet-async";

export default function CredentialsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syed Tufail Ahmed",
    "url": "https://www.syedtufailahmed.com",
    "jobTitle": "AI Governance Leader | Author | Head, Project Management Centre of Excellence",
    "description": "AI Governance Leader based in Riyadh, Saudi Arabia. Thinkers360 Top 10 AI Ethics, Top 25 AI Governance, Certified Expert in AI Governance and AI. Favikon #1 AI Governance & Policy and #1 AI Safety & Tech Ethics in Saudi Arabia (June 2026), #11 AI Safety & Tech Ethics worldwide. Author of Human in the Loop, listed among 25 Best Agentic AI Books by Thinkers360 Experts. Research under peer review at npj Digital Medicine (Nature Portfolio) and AI & Society (Springer). Global Ambassador, RAGN & GCRAI.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressCountry": "SA"
    },
    "sameAs": [
      "https://www.linkedin.com/in/tufailsa/",
      "https://orcid.org/0009-0009-3435-4361",
      "https://www.thinkers360.com/tl/badge/31895/7496",
      "https://www.thinkers360.com/tl/badge/31895/7497",
      "https://www.amazon.com/Human-Loop-Reclaiming-Authority-Intelligent/dp/B0GGCJFTBQ",
      "https://medium.com/@syedtufailahmed"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "PMI® Certified Member",
        "credentialCategory": "Professional Membership",
        "recognizedBy": { "@type": "Organization", "name": "Project Management Institute", "url": "https://www.pmi.org" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Six Sigma Green Belt",
        "credentialCategory": "Professional Certification"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Postgraduate Certificate in AI & Digital Imaging",
        "credentialCategory": "Academic Credential",
        "recognizedBy": { "@type": "Organization", "name": "Indian Institute of Science (IISc)" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Thinkers360 Certified Expert — AI Governance",
        "credentialCategory": "Expert Certification",
        "dateIssued": "2026-06-25",
        "recognizedBy": { "@type": "Organization", "name": "Thinkers360", "url": "https://www.thinkers360.com" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Thinkers360 Certified Expert — AI",
        "credentialCategory": "Expert Certification",
        "dateIssued": "2026-06-21",
        "recognizedBy": { "@type": "Organization", "name": "Thinkers360", "url": "https://www.thinkers360.com" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Top 10 Thought Leader — AI Ethics",
        "credentialCategory": "Award",
        "recognizedBy": { "@type": "Organization", "name": "Thinkers360", "url": "https://www.thinkers360.com" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Top 25 Thought Leader — AI Governance",
        "credentialCategory": "Award",
        "recognizedBy": { "@type": "Organization", "name": "Thinkers360", "url": "https://www.thinkers360.com" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "#1 AI Governance & Policy Creator — Saudi Arabia",
        "credentialCategory": "Award",
        "recognizedBy": { "@type": "Organization", "name": "Favikon", "url": "https://www.favikon.com" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "#1 AI Safety & Tech Ethics Creator — Saudi Arabia",
        "credentialCategory": "Award",
        "recognizedBy": { "@type": "Organization", "name": "Favikon", "url": "https://www.favikon.com" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "#11 AI Safety & Tech Ethics — LinkedIn Worldwide",
        "credentialCategory": "Award",
        "recognizedBy": { "@type": "Organization", "name": "Favikon", "url": "https://www.favikon.com" }
      }
    ],
    "award": [
      "Top 10 Thought Leader in AI Ethics — Thinkers360",
      "Top 25 Thought Leader in AI Governance — Thinkers360",
      "Thinkers360 Certified Expert in AI Governance (June 2026)",
      "Thinkers360 Certified Expert in AI (June 2026)",
      "#1 AI Governance & Policy — Saudi Arabia (Favikon, June 2026)",
      "#1 AI Safety & Tech Ethics — Saudi Arabia (Favikon, June 2026)",
      "#2 AI & ML Researchers — LinkedIn, Saudi Arabia (Favikon, June 2026)",
      "#11 AI Safety & Tech Ethics — LinkedIn Worldwide (Favikon, June 2026)",
      "Human in the Loop listed among 25 Best Agentic AI Books — Thinkers360 Experts (2026)"
    ],
    "subjectOf": [
      {
        "@type": "ScholarlyArticle",
        "name": "Responsible AI in Healthcare: From Ethical Intent to Clinical-Grade Decision Governance",
        "publisher": { "@type": "Organization", "name": "npj Digital Medicine, Nature Portfolio" },
        "dateCreated": "2026",
        "identifier": "0efabad3-a3a5-40e0-840f-7e541b1c6e59"
      },
      {
        "@type": "ScholarlyArticle",
        "name": "Governance by Design: Why AI Accountability Must Be Architected, Not Audited",
        "publisher": { "@type": "Organization", "name": "AI & Society, Springer" },
        "dateCreated": "2026",
        "identifier": "ef5c457b-94be-4428-b3b5-ca924e100015"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
