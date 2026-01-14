import { Helmet } from "react-helmet-async";

export default function BookSchema() {
  return (
<Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Human in the Loop",
  "alternateName": "Reclaiming Human Authority in an Age of Intelligent Systems",
  "isbn": "979-8902692775",
  "author": {
    "@type": "Person",
    "name": "Syed Tufail Ahmed",
    "identifier": "https://orcid.org/0009-0009-3435-4361",
    "url": "https://www.syedtufailahmed.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Notion Press"
  },
  "datePublished": "2026",
  "bookFormat": "https://schema.org/Hardcover",
  "image": "https://www.syedtufailahmed.com/book.png",
  "description": "A governance-first examination of how AI systems reshape authority, sovereignty, and accountability — and why human judgment must remain structurally embedded in high-impact decision systems.",
  "url": "https://www.syedtufailahmed.com/book"
},
)}
      </script>
    </Helmet>
  );

}