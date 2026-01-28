import { Helmet } from "react-helmet-async";

export default function CredentialsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syed Tufail Ahmed",
    "url": "https://www.syedtufailahmed.com",
    "sameAs": [
      "https://www.linkedin.com/in/tufailsa/",
      "https://orcid.org/0009-0009-3435-4361"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "PMI® Certified Member",
        "credentialCategory": "Professional Membership",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Project Management Institute",
          "url": "https://www.pmi.org"
        }
      }
    ],
    "award": [
      "Top 10 Thought Leader in AI Ethics – Thinkers360",
      "Top 25 Thought Leader in AI Governance – Thinkers360",
      "Top 200 Creators – Saudi Arabia (Favikon)"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
