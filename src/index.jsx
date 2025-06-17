import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { Route } from "@solidjs/router";
import Home from "./pages/Home";
import Note from "./pages/Note";

render(
  () => (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/note/:id" component={Note} />
    </Router>
  ),
  document.getElementById("root")
);
