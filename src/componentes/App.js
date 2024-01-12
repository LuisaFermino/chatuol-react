// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaInicial from "./TelaInicial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
