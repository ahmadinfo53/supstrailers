import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExploreFilters from "./pages/ExploreFilters";
import ContentPage from "./pages/ContentPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:filter" exact element={<ExploreFilters />} />
        <Route path="/:filter/:nestedfilter" exact element={<ContentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
