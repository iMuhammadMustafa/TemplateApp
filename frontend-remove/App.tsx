import React from "react";
import logo from "./logo.svg";
//import { Counter } from "@/features/counter/Counter";
import "./App.css";
//import { Counter } from "@features/counter/Counter";
//import { Counter } from "features/counter/Counter";
//import { store } from "./app/store";
//import { Counter } from "@features/counter/Counter";
//import { store } from "@/store";
//import { Counter } from "./features/counter/Counter";
//import { store } from "app/store";
//import { Counter } from "features/counter/Counter";
//import { store } from "@/store";
//import { Counter } from "./features/counter/Counter";
//import { Counter } from "./features/counter/Counter";
//import { store } from "./app/store";
//import { Counter } from "@counter/Counter";
//import { Counter } from "@counter/Counter";
//import { Counter } from "$features/counter/Counter";
//import { Counter } from "features/counter/Counter";

function App() {
  //const x = store;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>
          <span>, </span>
          <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </a>
          <span>, </span>
          <a className="App-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a className="App-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

function AppAgain() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
