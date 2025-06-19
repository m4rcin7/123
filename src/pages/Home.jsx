import { createSignal } from "solid-js";
import NoteEditor from "../components/NoteEditor";
import GraphView from "../components/GraphView";

import styles from "./Home.module.css";

export default function Home() {
  const [nodes, setNodes] = createSignal([]);
  const [edges, setEdges] = createSignal([]);

  return (
    <div style="display: flex; gap: 2rem; padding: 1rem;">
      <h1>Graph Editor</h1>
      <NoteEditor onAdd={(n) => setNodes([...nodes(), n])} />
      <div style="flex: 1">
        <GraphView nodes={nodes()} edges={edges()} />
        <ul>
          {nodes().map((n) => (
            <li key={n.id}>
              <a href={`/note/${n.id}`}>{n.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
