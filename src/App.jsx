import { Routes } from "@solidjs/router";
import RoutesList from "./routes";

export default function App() {
  return (
    <main style="padding: 1rem;">
      <h1>🧠 Mind Garden</h1>
      <Routes>
        <RoutesList />
      </Routes>
    </main>
  );
}
