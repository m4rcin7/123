import { Route } from "@solidjs/router";
import Home from "./pages/Home";
import Note from "./pages/Note";

export default function RoutesList() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/note/:id" component={Note} />
    </>
  );
}
