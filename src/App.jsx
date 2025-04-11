import { useState } from "react";

import Header from "./components/Header/Header";
import ListElement from "./components/ListElement/ListElement";
import Input from "./components/TaskForm/TaskForm";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <h1>Hello</h1>
      </main>
      <Input />
      <ListElement title="Title" description="Description" />
    </>
  );
}

export default App;
