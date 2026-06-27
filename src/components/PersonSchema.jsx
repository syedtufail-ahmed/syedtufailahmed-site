import { Helmet } from "react-helmet-async";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syed Tufail Ahmed",
    "url": "https://www.syedtufailahmed.com",
    "image": "https://www.syedtufailahmed.com/profilephoto-round.png",
    "jobTitle": "AI Governance Leader | Author | Head, Project Management Centre of Excellence",
    "description": "AI governance and digital transformation leader based in Riyadh, Saudi Arabia. Author of Human in the Loop: Reclaiming Human Authority in an Age of Intelligent Systems. Ranked #1 in AI Governance & Policy and #1 in AI Safety & Tech Ethics in Saudi Arabia by Favikon (June 2026). Thinkers360 Top 10 AI Ethics, Top 25 AI Governance, and Certified Expert in AI Governance and AI. Global Ambassador for RAGN and GCRAI representing Saudi Arabia. Research under peer review at npj Digital Medicine (Nature Portfolio) and AI & Society (Springer). 10,300+ LinkedIn followers. 1,884 newsletter subscribers.",
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
      }
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Lee Kuan Yew School of Public Policy, National University of Singapore"
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
      "Clinical AI Governance",
      "Healthcare AI Accountability",
      "Governance by Design",
      "AI Accountability Architecture",
      "Digital Transformation",
      "Public Sector Technology",
      "AI for Scientific Discovery",
      "Healthcare Digital Public Infrastructure",
      "Vision 2030",
      "Program Management",
      "PDPL Saudi Arabia",
      "SDAIA AI Ethics",
      "Responsible AI"
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
        "name": "Thinkers360 Certified Expert — AI Governance",
        "credentialCategory": "Expert Certification",
        "dateIssued": "2026-06-25",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Thinkers360",
          "url": "https://www.thinkers360.com"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Thinkers360 Certified Expert — AI",
        "credentialCategory": "Expert Certification",
        "dateIssued": "2026-06-21",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Thinkers360",
          "url": "https://www.thinkers360.com"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Top 10 Thought Leader — AI Ethics",
        "credentialCategory": "Award",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Thinkers360",
          "url": "https://www.thinkers360.com"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Top 25 Thought Leader — AI Governance",
        "credentialCategory": "Award",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Thinkers360",
          "url": "https://www.thinkers360.com"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "#1 AI Governance & Policy Creator — Saudi Arabia",
        "credentialCategory": "Award",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Favikon",
          "url": "https://www.favikon.com"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "#1 AI Safety & Tech Ethics Creator — Saudi Arabia",
        "credentialCategory": "Award",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Favikon",
          "url": "https://www.favikon.com"
        }
      }
    ],
    "award": [
      "Top 10 Thought Leader in AI Ethics — Thinkers360",
      "Top 25 Thought Leader in AI Governance — Thinkers360",
      "Thinkers360 Certified Expert in AI Governance (2026)",
      "Thinkers360 Certified Expert in AI (2026)",
      "#1 AI Governance & Policy — Saudi Arabia (Favikon, June 2026)",
      "#1 AI Safety & Tech Ethics — Saudi Arabia (Favikon, June 2026)",
      "#11 AI Safety & Tech Ethics — LinkedIn Worldwide (Favikon, June 2026)",
      "Human in the Loop listed among 25 Best Agentic AI Books — Thinkers360 Experts (2026)"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/tufailsa/",
      "https://orcid.org/0009-0009-3435-4361",
      "https://www.thinkers360.com/tl/badge/31895/7496",
      "https://www.thinkers360.com/tl/badge/31895/7497",
      "https://www.amazon.com/Human-Loop-Reclaiming-Authority-Intelligent/dp/B0GGCJFTBQ",
      "https://medium.com/@syedtufailahmed"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
