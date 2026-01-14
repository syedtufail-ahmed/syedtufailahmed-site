import BookSchema from "../components/BookSchema";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Book() {
  return (
    <>
    <Helmet>
        <title>Book | Syed Tufail Ahmed</title>
        <meta
          name="description"
          content="Book by Syed Tufail Ahmed on human-centered AI, digital transformation, governance, and leadership."
        />
        <link
          rel="canonical"
          href="https://www.syedtufailahmed.com/Book"
        />
      </Helmet>
      <BookSchema />

      <h1>
        Human in the Loop: Reclaiming Human Authority in an Age of Intelligent Systems
      </h1>

      <p>
        Human in the Loop is a governance-first examination of how AI systems
        reshape authority, accountability, and decision ownership in high-impact environments.
      </p>

      <p><strong>ISBN:</strong> 979-8902692775</p>
      <p><strong>Author:</strong> Syed Tufail Ahmed</p>
      <p><strong>Publisher:</strong> Notion Press</p>
    </>
  );
}
