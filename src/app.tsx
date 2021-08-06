import * as React from "react";
import * as ReactDOM from "react-dom";
import { browser } from "webextension-polyfill-ts";
import { Execute } from "./views/execute";
import "./app.scss";

export const App: React.FC = () => 
  <div className="app">
    <Execute />
  </div>

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
    ReactDOM.render(<App />, document.getElementById("root"));
});
