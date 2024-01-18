import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import TelaInicial from "./TelaInicial.js";
import TelaChat from "./TelaChat.js";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <TelaInicial
          nomeUsuario={nomeUsuario}
          setNomeUsuario={setNomeUsuario}
        />
      ),
    },
    {
      path: "/TelaChat",
      element: <TelaChat nomeUsuario={nomeUsuario} />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
