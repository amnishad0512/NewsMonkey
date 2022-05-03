import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";
import { Tags } from "./components/Tags";

function App() {
  const [tag, setTag] = React.useState("nokia");
  function changeTag(tag) {
    setTag(tag);
    // console.log(tag);
  }
  return (
    <>
      <Navbar title="NewsMonkey" />
      <News tag={tag} changeTag={changeTag} />
      <Tags changeTag={changeTag} />
    </>
  );
}

export default App;
