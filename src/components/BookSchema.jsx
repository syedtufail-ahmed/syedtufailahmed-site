import { Helmet } from "react-helmet-async";

export default function BookSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Human in the Loop",
    "alternateName": "Human in the Loop: Reclaiming Human Authority in an Age of Intelligent Systems",
    "isbn": "979-8902692775",
    "author": {
      "@type": "Person",
      "name": "Syed Tufail Ahmed",
      "url": "https://www.syedtufailahmed.com",
      "sameAs": "https://www.linkedin.com/in/tufailsa/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Notion Press",
      "url": "https://notionpress.com"
    },
    "datePublished": "2024",
    "inLanguage": "en",
    "bookFormat": "https://schema.org/EBook",
    "image": "https://www.syedtufailahmed.com/book.png",
    "url": "https://www.syedtufailahmed.com/book",
    "sameAs": "https://www.amazon.com/Human-Loop-Reclaiming-Authority-Intelligent/dp/B0GGCJFTBQ",
    "description": "A blueprint for leaders, organisations, and nations who believe AI should amplify human potential rather than replace it. Examines how to scale AI capability while preserving human judgment, accountability, and institutional trust.",
    "about": [
      { "@type": "Thing", "name": "Artificial Intelligence Governance" },
      { "@type": "Thing", "name": "Human-in-the-Loop AI" },
      { "@type": "Thing", "name": "AI Ethics" },
      { "@type": "Thing", "name": "Digital Transformation" },
      { "@type": "Thing", "name": "Responsible AI" }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Executive leaders, government policy makers, technology leaders, board members"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.amazon.com/Human-Loop-Reclaiming-Authority-Intelligent/dp/B0GGCJFTBQ",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Amazon"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
