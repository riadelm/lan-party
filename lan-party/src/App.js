import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./homepage";
import MySpacePage from "./components/MySpacePage";
import FanficPage from "./components/FanficPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/friendship" element={<MySpacePage />} />
        <Route path="/love" element={<FanficPage />} />
      </Routes>
    </Router>
  );
}

export default App;
