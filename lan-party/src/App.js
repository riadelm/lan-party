import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./homepage";
import MySpacePage from "./components/MySpacePage";
import FanficPage from "./components/FanficPage";
import DeathPage from "./components/DeathPage";
import SuicidePage from "./components/SuicidePage";
import GorePage from "./components/GorePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/friendship" element={<MySpacePage />} />
        <Route path="/love" element={<FanficPage />} />
        <Route path="/death" element={<DeathPage />} />
        <Route path="/suicide" element={<SuicidePage />} />
        <Route path="/gore" element={<GorePage />} />
        <Route path="/sex" element={<FanficPage />} />
        <Route path="/identity" element={<FanficPage />} />
      </Routes>
    </Router>
  );
}

export default App;
