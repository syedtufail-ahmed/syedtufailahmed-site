import Button from "/components/Button";
import Callout from "/components/Callout";

export default function Home() {
  return (
    <main className="container">
      <h1>Syed Tufail Ahmed</h1>
      <p className="subtitle">
        AI & Digital Transformation Leader · Author of <em>Human in the Loop</em>
      </p>

      <Callout>
        AI should scale human judgment — not replace it.
      </Callout>

      <p>
        I design and lead human-centered AI systems across governance,
        technology, and large-scale digital platforms.
      </p>

      <Button href="/about">About My Work →</Button>
    </main>
  );
}
