import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { store } from "./store";
import { Provider } from "react-redux";
//import { PokemonApp } from "./PokemonApp";
import { TodoApp } from "./TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PokemonApp/> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
