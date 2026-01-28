import { Helmet } from "react-helmet-async";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Syed Tufail Ahmed | AI Governance & Public Sector Transformation</title>

        <meta
          name="description"
          content="AI Governance leader focused on public-sector digital transformation, human-in-the-loop systems, and institutional accountability."
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Syed Tufail Ahmed" />
        <meta
          property="og:description"
          content="AI Governance · Public Sector Digital Transformation · Human-in-the-Loop AI"
        />
        <meta
          property="og:image"
          content="https://www.syedtufailahmed.com/og/home.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.syedtufailahmed.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Syed Tufail Ahmed" />
        <meta
          name="twitter:description"
          content="AI Governance & Public Sector Digital Transformation"
        />
        <meta
          name="twitter:image"
          content="https://www.syedtufailahmed.com/og/home.png"
        />
      </Helmet>

      {/* Existing Home page JSX below */}
      <main>
        {/* your content */}
      </main>
    </>
  );
}
