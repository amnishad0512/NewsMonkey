import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar title="NewsMonkey" />
      <Routes>
        <Route path="/" element={<News q="general" />}/>
   
      </Routes>
    </>
  );
}

export default App;
