import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = React.useState(10);
let api = process.env.REACT_APP_NEWS;
console.log(api);
  return (
    <>
      <Navbar title="NewsMonkey" />
      <LoadingBar color="#f11946" progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={<News setProgress={setProgress} key="general" q="general" />}
        />
        <Route
          exact
          path="/business"
          element={
            <News setProgress={setProgress} key="business" q="business" />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              key="entertainment"
              q="entertainment"
            />
          }
        />

        <Route
          exact
          path="/health"
          element={<News setProgress={setProgress} key="health" q="health" />}
        />
        <Route
          exact
          path="/science"
          element={<News setProgress={setProgress} key="science" q="science" />}
        />
        <Route
          exact
          path="/sports"
          element={<News setProgress={setProgress} key="sports" q="sports" />}
        />
        <Route
          exact
          path="/Technology"
          element={
            <News setProgress={setProgress} key="Technology" q="Technology" />
          }
        />
      </Routes>
    </>
  );
}

export default App;
