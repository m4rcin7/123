import { useParams } from "@solidjs/router";

export default function Note() {
  const params = useParams();

  return (
    <div style="padding: 1rem;">
      <a href="/">← Powrót</a>
      <h2>Notatka ID: {params.id}</h2>
    </div>
  );
}
