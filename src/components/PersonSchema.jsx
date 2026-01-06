import { Helmet } from "react-helmet-async";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.syedtufailahmed.com/#person",

    "name": "Syed Tufail Ahmed",
    "url": "https://www.syedtufailahmed.com",

    "image": "https://www.syedtufailahmed.com/profile.jpg",

    "jobTitle": "AI & Digital Transformation Leader",

    "description":
      "AI and digital transformation leader based in Riyadh, Saudi Arabia, focused on human-centered AI, digital governance, and large-scale public-sector digital systems.",

    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressCountry": "SA"
    },

    "sameAs": [
      "https://www.linkedin.com/in/tufailsa/",
      "https://www.syedtufailahmed.com"
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
