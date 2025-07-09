import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <nav>
        <Link to="where-in-the-world">Where in the world?</Link>
      </nav>
    </section>
  );
}
