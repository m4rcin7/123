import { useParams } from "@solidjs/router";

export default function Note() {
  const params = useParams();

  return (
    <div style="padding: 1rem;">
      <a href="/">← BACK</a>
      <h2>NOTE ID: {params.id}</h2>
    </div>
  );
}
