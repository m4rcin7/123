import { useParams, Link } from "@solidjs/router";

export default function Note() {
  const params = useParams();

  return (
    <div style="padding: 1rem;">
      <Link href="/">← Powrót</Link>
      <h2>Notatka ID: {params.id}</h2>
    </div>
  );
}
