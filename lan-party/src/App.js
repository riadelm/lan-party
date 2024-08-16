import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./homepage";
import MySpacePage from "./components/MySpacePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/friendship" element={<MySpacePage />} />
      </Routes>
    </Router>
  );
}

export default App;
