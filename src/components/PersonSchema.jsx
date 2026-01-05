import { Helmet } from "react-helmet-async";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syed Tufail Ahmed",
    "url": "https://www.syedtufailahmed.com/",
    "jobTitle": "AI & Digital Transformation Leader",
    "worksFor": {
      "@type": "Organization",
      "name": "Ministry of Culture, Saudi Arabia"
    },
    "sameAs": [
      "https://www.linkedin.com/in/tufailsa",
      "https://www.instagram.com/syedtufail4u",
      "https://www.instagram.com/tufail1977"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Digital Transformation",
      "Human-in-the-Loop Systems",
      "AI Governance"
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
