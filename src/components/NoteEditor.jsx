import { createSignal } from "solid-js";
import styles from "./NoteEditor.module.css";

export default function NoteEditor(props) {
  const [text, setText] = createSignal("");

  const addNode = () => {
    if (!text().trim()) return;
    props.onAdd({ id: crypto.randomUUID(), label: text().trim() });
    setText("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") addNode();
  };

  return (
    <div class={styles.editorContainer}>
      <h2 class={styles.editorTitle}>Add note:</h2>
      <input
        class={styles.editorInput}
        type="text"
        value={text()}
        onInput={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Your brain..."
      />
      <button class={styles.editorButton} onClick={addNode}>
        + Add
      </button>
    </div>
  );
}
