import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TelaInicial from "./TelaInicial.js";
import TelaChat from "./TelaChat.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TelaInicial />,
    },
    {
      path: "/TelaChat",
      element: <TelaChat />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
