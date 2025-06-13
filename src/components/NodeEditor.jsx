import { createSignal } from "solid-js";

export default function NodeEditor(props) {
  const [text, setText] = createSignal("");

  const addNode = () => {
    if (!text().trim()) return;
    props.onAdd({ id: crypto.randomUUID(), label: text() });
    setText("");
  };

  return (
    <div>
      <h2>Dodaj notatkę</h2>
      <input
        type="text"
        value={text()}
        onInput={(e) => setText(e.target.value)}
        placeholder="Twoja myśl..."
      />
      <button onClick={addNode}>Dodaj</button>
    </div>
  );
}
