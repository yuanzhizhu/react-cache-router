import React from "react";
import { HashRouter, Route } from "react-router-dom";
import CacheRoute from './lib/CacheRoute';
import PageA from "./pages/a";
import PageB from "./pages/b";

function App() {
  return (
    <HashRouter>
      <CacheRoute path="/a" component={PageA} />
      <Route path="/b" component={PageB} />
    </HashRouter>
  );
}

export default App;
