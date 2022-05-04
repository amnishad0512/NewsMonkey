import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";
import { Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar title="NewsMonkey" />
      <Routes>
          <Route exact path="/" element={<News key="general" q="general" />} />
          <Route
         
            exact
            path="/business"
            element={<News key="business" q="business" />}
          />
          <Route
         
            exact
            path="/entertainment"
            element={<News key="entertainment" q="entertainment" />}
          />
       
          <Route
         
            exact
            path="/health"
            element={<News key="health" q="health" />}
          />
          <Route
         
            exact
            path="/science"
            element={<News key="science" q="science" />}
          />
          <Route
         
            exact
            path="/sports"
            element={<News key="sports" q="sports" />}
          />
          <Route
         
            exact
            path="/Technology"
            element={<News key="Technology" q="Technology" />}
          />
      </Routes>
    </>
  );
}

export default App;
