import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaInicial from "./TelaInicial";
import TelaChat from "./TelaChat.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/TelaChat" element={<TelaChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
