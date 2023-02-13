/* App.jsx is the main component for the application */
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Import pages and add a path for them */
import Home from "./views/pages/Home.jsx";
import Projections from "./views/pages/Projections.jsx";
import Scale from "./views/pages/Scale.jsx";
import VisualEncoding from "./views/pages/Visual.jsx";
import MapTypes from "./views/pages/MapTypes.jsx";
import NotFound from "./views/pages/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<NotFound />} />
        <Route exact path="/projections" element={<Projections />} />
        <Route exact path="/scale" element={<Scale />} />
        <Route exact path="/visual" element={<VisualEncoding />} />
        <Route exact path="/thematic" element={<MapTypes />} />
      </Routes>
    </BrowserRouter>
  );
}
