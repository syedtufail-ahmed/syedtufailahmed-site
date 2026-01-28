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

        {/* Open Graph (LinkedIn uses this) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Syed Tufail Ahmed | AI & Digital Transformation Leader" />
        <meta name="description"
          property="og:description"
          content="AI Governance · Public Sector Digital Transformation · Human-in-the-Loop"
        />
        <meta name="Syed Tufail Ahmed"
          property="og:image"
          content="https://www.syedtufailahmed.com/og/home.png"
        />
        <meta property="og:url" content="https://www.syedtufailahmed.com/" />

        <link rel="canonical" href="https://www.syedtufailahmed.com/" />
      </Helmet>

      <PersonSchema />
      <BookSchema />

      <Hero />
    </>
  );
}
