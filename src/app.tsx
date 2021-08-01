import * as React from "react";
import * as ReactDOM from "react-dom";
import { browser } from "webextension-polyfill-ts";
import "./app.scss";

export const App: React.FC = () => 
  <div className="app">
    <h1>Hello World!</h1>
  </div>

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
    ReactDOM.render(<App />, document.getElementById("root"));
});
