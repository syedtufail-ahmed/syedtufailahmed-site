import { Helmet } from "react-helmet-async";

export default function PersonSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Syed Tufail Ahmed",
          "url": "https://www.syedtufailahmed.com",
          "image": "https://www.syedtufailahmed.com/profile.jpg",
          "jobTitle": "AI & Digital Transformation Leader",
          "description":
            "AI and digital transformation leader focused on human-centered AI, governance, and large-scale public digital systems.",
          "sameAs": [
            "https://www.linkedin.com/in/tufailsa/",
            "https://www.syedtufailahmed.com"
          ],
          "knowsAbout": [
            "Human-in-the-Loop AI",
            "AI Governance",
            "Digital Transformation",
            "Public Sector Technology",
            "AI Accountability"
          ]
        })}
      </script>
    </Helmet>
  );
}
