import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/themes/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>;
    </ThemeProvider>
  );
}

export default App;
