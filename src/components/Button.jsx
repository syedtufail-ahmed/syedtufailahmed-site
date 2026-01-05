export default function Button({ children, href }) {
  return (
    <a href={href} className="btn">
      {children}
    </a>
  );
}
