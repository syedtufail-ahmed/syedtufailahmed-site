import { Helmet } from "react-helmet-async";

export default function CredentialsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syed Tufail Ahmed",
    "url": "https://www.syedtufailahmed.com",
    "jobTitle": "AI Governance & Digital Transformation Leader",
    "description": "AI Governance and Digital Transformation Leader based in Riyadh, Saudi Arabia. Thinkers360 Top 10 AI Ethics, Top 25 AI Governance. Favikon #1 AI Safety & Tech Ethics in Saudi Arabia. Author of Human in the Loop.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressCountry": "SA"
    },
    "sameAs": [
      "https://www.linkedin.com/in/tufailsa/",
      "https://www.thinkers360.com/tl/badge/31895/7496",
      "https://www.thinkers360.com/tl/badge/31895/7497",
      "https://orcid.org/0009-0009-3435-4361"
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
        "name": "#1 AI Safety & Tech Ethics Creator — Saudi Arabia",
        "credentialCategory": "Award",
        "recognizedBy": { "@type": "Organization", "name": "Favikon", "url": "https://www.favikon.com" }
      }
    ],
    "award": [
      "Top 10 Thought Leader in AI Ethics – Thinkers360",
      "Top 25 Thought Leader in AI Governance – Thinkers360",
      "#1 AI Safety & Tech Ethics – Saudi Arabia (Favikon)",
      "#2 AI Research & Innovation – Saudi Arabia (Favikon)",
      "Top 200 Creators – Saudi Arabia (Favikon)"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
