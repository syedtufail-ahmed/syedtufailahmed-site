import { Helmet } from "react-helmet-async";

export default function ArticleSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Human-in-the-Loop AI as a Governance Imperative",
          "description":
            "Why Human-in-the-Loop AI is essential for responsible AI governance, accountability, and human authority in intelligent systems.",
          "author": {
            "@type": "Person",
            "name": "Syed Tufail Ahmed",
            "url": "https://www.syedtufailahmed.com/about"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Syed Tufail Ahmed",
            "url": "https://www.syedtufailahmed.com"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id":
              "https://www.syedtufailahmed.com/writing/human-in-the-loop-ai-governance"
          }
        })}
      </script>
    </Helmet>
  );
}
