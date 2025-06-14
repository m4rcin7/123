import { Route, Router } from "@solidjs/router";
import Home from "./pages/Home";
import Note from "./pages/Note";

export default function RoutesList() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/note/:id" component={Note} />
    </Router>
  );
}
