import { Helmet } from "react-helmet-async";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syed Tufail Ahmed",
    "url": "https://www.syedtufailahmed.com",
    "image": "https://www.syedtufailahmed.com/profilephoto-round.png",
    "jobTitle": "AI Governance & Digital Transformation Leader",
    "description":
      "AI governance and digital transformation leader based in Riyadh, Saudi Arabia. 20+ years of experience across enterprise platforms, healthcare AI, and public-sector programs. Author of Human in the Loop. Ranked Top 10 AI Ethics and Top 25 AI Governance thought leader by Thinkers360.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressCountry": "SA"
    },
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Ministry of Culture, Saudi Arabia",
        "url": "https://www.moc.gov.sa"
      },
      {
        "@type": "Organization",
        "name": "SOL Gulf",
        "url": "https://www.solgulf.com"
      }
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Lee Kuan Yew School of Public Policy"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Indian Institute of Science (IISc)"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Bangalore University"
      }
    ],
    "knowsAbout": [
      "Human-in-the-Loop AI",
      "AI Governance",
      "AI Ethics",
      "Digital Transformation",
      "Public Sector Technology",
      "AI Accountability Frameworks",
      "Vision 2030",
      "Program Management",
      "Enterprise Platforms",
      "Healthcare AI"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "PMI® Certified Member",
        "credentialCategory": "Professional Certification"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Six Sigma Green Belt",
        "credentialCategory": "Professional Certification"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Top 10 Thought Leader — AI Ethics",
        "credentialCategory": "Award",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Thinkers360"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Top 25 Thought Leader — AI Governance",
        "credentialCategory": "Award",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Thinkers360"
        }
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/tufailsa/",
      "https://www.amazon.com/Human-Loop-Reclaiming-Authority-Intelligent/dp/B0GGCJFTBQ"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
