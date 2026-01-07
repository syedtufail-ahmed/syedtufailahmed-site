import { Helmet } from "react-helmet-async";

export default function BookSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          "name": "Human in the Loop",
          "subtitle": "Reclaiming Human Authority in an Age of Intelligent Systems",
          "author": {
            "@type": "Person",
            "name": "Syed Tufail Ahmed",
            "url": "https://www.syedtufailahmed.com"
          },
          "image": "https://www.syedtufailahmed.com/book.png",
          "description":
            "A governance-first examination of how AI systems reshape authority, sovereignty, and accountability, and why human judgment must remain structurally embedded in high-impact decision systems.",
          "bookFormat": "https://schema.org/Hardcover",
          "inLanguage": "en",
          "datePublished": "2026",
          "publisher": {
            "@type": "Organization",
            "name": "Forthcoming"
          }
        })}
      </script>
    </Helmet>
  );
}
