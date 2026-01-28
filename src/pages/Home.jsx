import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import PersonSchema from "../components/PersonSchema";
import BookSchema from "../components/BookSchema";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Syed Tufail Ahmed | AI & Digital Transformation Leader</title>

        <meta
          name="description"
          content="Syed Tufail Ahmed is an AI governance and public sector digital transformation leader based in Saudi Arabia."
        />
 </Helmet>
        {/* Open Graph (LinkedIn uses this) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Syed Tufail Ahmed | AI & Digital Transformation Leader" />
        <meta property="og:description" content="AI Governance · Public Sector Digital Transformation · Human-in-the-Loop" />
        <meta  property="og:image" content="https://www.syedtufailahmed.com/og/home.png" />
        <meta property="og:url" content="https://www.syedtufailahmed.com/" />
       <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Syed Tufail Ahmed Professional Banner" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://www.syedtufailahmed.com/" />
  <meta name="twitter:title" content="Syed Tufail Ahmed | AI & Digital Transformation Leader" />
  <meta name="twitter:description" content="AI Governance · Public Sector Digital Transformation · Human-in-the-Loop" />
  <meta name="twitter:image" content="https://www.syedtufailahmed.com/og/home.png" />
  
  <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.syedtufailahmed.com/" />
     

      <PersonSchema />
      <BookSchema />

      <Hero />
    </>
  );
}
