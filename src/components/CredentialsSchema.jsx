import { Helmet } from "react-helmet-async";

export default function CredentialsSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Syed Tufail Ahmed",
          "url": "https://www.syedtufailahmed.com",
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
            },
            {
              "@type": "EducationalOccupationalCredential",
              "name": "Top 10 Thought Leader – AI Ethics",
              "credentialCategory": "Industry Recognition",
              "recognizedBy": {
                "@type": "Organization",
                "name": "Thinkers360",
                "url": "https://www.thinkers360.com"
              }
            },
            {
              "@type": "EducationalOccupationalCredential",
              "name": "Top 25 Thought Leader – AI Governance",
              "credentialCategory": "Industry Recognition",
              "recognizedBy": {
                "@type": "Organization",
                "name": "Thinkers360",
                "url": "https://www.thinkers360.com"
              }
            }
            {
  "@type": "EducationalOccupationalCredential",
  "name": "Top 200 Creators – Saudi Arabia (AI Research & Innovation)",
  "credentialCategory": "Independent Influence Ranking",
  "recognizedBy": {
    "@type": "Organization",
    "name": "Favikon",
    "url": "https://www.favikon.com"
  }
}

          ]
        })}
      </script>
    </Helmet>
  );
}
