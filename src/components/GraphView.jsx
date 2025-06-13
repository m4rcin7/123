import cytoscape from "cytoscape";
import { onMount, onCleanup } from "solid-js";

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
            "background-color": "#61bffc",
            label: "data(label)",
            color: "#fff",
            "text-valign": "center",
          },
        },
        {
          selector: "edge",
          style: {
            width: 2,
            "line-color": "#ccc",
          },
        },
      ],
      layout: { name: "cose" },
    });

    onCleanup(() => cy.destroy());
  });

  return (
    <div
      ref={(el) => (container = el)}
      style="width: 100%; height: 500px;"
    ></div>
  );
}
