import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import CacheRoute from "cache-route";
import Overview from "./pages/Overview";
import AppList from "./pages/AppList";
import AppDetail from "./pages/AppDetail";
import "./style.css";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Overview} />
      <CacheRoute path="/app-list" component={AppList} />
      <Route path="/app-detail" component={AppDetail} />
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
