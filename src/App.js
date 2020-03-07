import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import CacheRoute from "./lib/cache-route";
import PageA from "./pages/a";
import PageB from "./pages/b";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact render={() => <Redirect to="/a" />} />
      <CacheRoute path="/a" component={PageA} />
      <Route path="/b" component={PageB} />
    </HashRouter>
  );
}

export default App;
