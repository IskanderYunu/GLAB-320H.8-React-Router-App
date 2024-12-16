import { useState } from "react";
import "./App.css";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router";

function App() {
  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price" element={<Price />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
