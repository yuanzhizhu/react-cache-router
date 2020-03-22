import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect } from "react-router-dom";
import CacheRoute from "./lib/cache-route";
import AppList from "./pages/AppList";
import AppDetail from "./pages/AppDetail";
import "./style.css";

function App() {
  return (
    <div id="app">
      <HashRouter>
        <Route path="/" exact render={() => <Redirect to="/app-list" />} />
        <CacheRoute path="/app-list" component={AppList} />
        <Route path="/app-detail" component={AppDetail} />
      </HashRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
