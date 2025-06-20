import { createSignal, onMount, createEffect } from "solid-js";
import NoteEditor from "../components/NoteEditor";
import GraphView from "../components/GraphView";

export default function Home() {
  const [nodes, setNodes] = createSignal([]);
  const [edges, setEdges] = createSignal([]);

  onMount(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setNodes(JSON.parse(saved));
  });

  createEffect(() => {
    localStorage.setItem("notes", JSON.stringify(nodes()));
  });

  const addNode = (n) => setNodes([...nodes(), n]);

  return (
    <div>
      <h1>Graph Editor</h1>
      <NoteEditor onAdd={addNode} />
      <GraphView nodes={nodes()} edges={edges()} />
      <ul>
        {nodes().map((n) => (
          <li key={n.id}>
            <a href={`/note/${n.id}`}>{n.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
