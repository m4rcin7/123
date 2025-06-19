import cytoscape from "cytoscape";
import { onMount, onCleanup } from "solid-js";
import styles from "./GraphView.module.css";

export default function GraphView(props) {
  let container;

  onMount(() => {
    const cy = cytoscape({
      container,
      elements: [
        ...props.nodes.map((n) => ({ data: { id: n.id, label: n.label } })),
        ...props.edges.map((e) => ({ data: e })),
      ],
      style: [
        {
          selector: "node",
          style: {
            "background-color": "#4e91fc",
            "border-color": "#fff",
            "border-width": 2,
            "border-opacity": 1,
            label: "data(label)",
            "font-size": 14,
            color: "#ffffff",
            "text-valign": "center",
            "text-halign": "center",
            "text-outline-width": 2,
            "text-outline-color": "#4e91fc",
            "overlay-padding": "6px",
            "z-index": 10,
            "transition-property": "background-color, border-width",
            "transition-duration": "0.2s",
          },
        },
        {
          selector: "node:hover",
          style: {
            "background-color": "#2b6cb0",
            "border-width": 4,
            cursor: "pointer",
          },
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
          },
        },
      ],
      layout: { name: "cose" },
    });

    onCleanup(() => cy.destroy());
  });

  return (
    <div ref={(el) => (container = el)} class={styles.graphContainer}></div>
  );
}
