import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";
import { Tags } from "./components/Tags";

function App() {
  const [tag, setTag] = React.useState("realme");
  return (
    <>
      <Navbar title="NewsMonkey" />
      <News tag={tag} />
      <Tags />
    </>
  );
}

export default App;
